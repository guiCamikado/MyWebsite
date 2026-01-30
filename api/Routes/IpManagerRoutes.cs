using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using api.Security;

using _Models = Models; // Responsavel por padronização de parâmetros
using _MySqlConnector = MySqlConnector; // Responsavel pelo manuseio da linguagem query
using _Data = Data; // Responsavel pela conexão do banco de dados
using _Security = api.Security;
using System.Data.Common; //Responsavel por hashing

namespace Routes;

public static class IpManagerRoutes {
    public static void MapIpManagerEndpoints(this WebApplication app) {
        app.MapPost("/api/ipManager/register", AddIp);
        app.MapGet("/api/ipManager/getIpTable", ReturnAllAddressHashedSQL);
    }

    // Task<IResult> -> método assíncrono que, no final, devolve uma resposta HTTP.
    private static async Task<IResult> AddIp(_Models.IpStorage ipAddress, _Data.DbConnectionFactory db) {

        await using var connection = db.Create();
        await connection.OpenAsync();

        var isFirst = !await IsDuplicatedIp(ipAddress.IpAddress, db);

        var query = """
            INSERT INTO connectionLog (ip_address, is_first, time)
            VALUES (@ipAddress, @isFirst, NOW());
        """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@ipAddress", ipAddress.IpAddress);
        command.Parameters.AddWithValue("@isFirst", isFirst);

        await command.ExecuteNonQueryAsync();

        return Results.Ok("Ip Enviado");
    }

    private static async Task<IResult> ReturnAllAddressHashedSQL(
    _Data.DbConnectionFactory db,
    int page = 1,
    int pageSize = 1000) {
        await using var connection = db.Create();
        await connection.OpenAsync();

        var offset = (page - 1) * pageSize;

        // Hash diretamente no SQL - muito mais rápido!
        const string query = """
            SELECT 
                id,
                SHA2(ip_address, 256) as ip_address_hash,
                is_first,
                time
            FROM connectionLog
            ORDER BY time DESC
            LIMIT @PageSize OFFSET @Offset
        """;

        await using var command = new MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@PageSize", pageSize);
        command.Parameters.AddWithValue("@Offset", offset);

        var results = new List<object>();

        await using var reader = await command.ExecuteReaderAsync();
        while (await reader.ReadAsync()) {
            results.Add(new {
                Id = reader.GetInt32("id"),
                IpAddress = reader.GetString("ip_address_hash"),
                IsFirst = reader.GetBoolean("is_first"),
                Time = reader.GetDateTime("time")
            });
        }

        return Results.Ok(results);
    }


    // Verifica se IP existe no db
    private static async Task<bool> IsDuplicatedIp(string ipAddress, _Data.DbConnectionFactory db) {
        await using var connection = db.Create();
        await connection.OpenAsync();

        const string query = """ SELECT 1 FROM connectionLog WHERE ip_address = @ip_address LIMIT 1 """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.Add("@ip_address", _MySqlConnector.MySqlDbType.VarChar).Value = ipAddress;

        return await command.ExecuteScalarAsync() != null;
    }
}
