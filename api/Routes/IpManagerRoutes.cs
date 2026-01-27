using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

using _Models = Models; // Responsavel por padronização de parâmetros
using _MySqlConnector = MySqlConnector; // Responsavel pelo manuseio da linguagem query
using _Data = Data; // Responsavel pela conexão do banco de dados
using _Security = api.Security; //Responsavel por hashing

namespace Routes;

public static class IpManagerRoutes
{
    public static void MapIpManagerEndpoints(this WebApplication app)
    {
        app.MapPost("/api/ipManager/register", AddIp);
        // app.MapPost("/api/ipManager/login", ReturnJwtToken);
    }

    // Task<IResult> -> método assíncrono que, no final, devolve uma resposta HTTP.
    private static async Task<IResult> AddIp(
        _Models.IpStorage ipAddress,
        _Data.DbConnectionFactory db)
    {
        
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

    // Verifica se IP existe no db
    private static async Task<bool> IsDuplicatedIp(string ipAddress, _Data.DbConnectionFactory db)
    {
        await using var connection = db.Create();
        await connection.OpenAsync();

        const string query = """ SELECT 1 FROM connectionLog WHERE ip_address = @ip_address LIMIT 1 """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.Add("@ip_address", _MySqlConnector.MySqlDbType.VarChar).Value = ipAddress;

        return await command.ExecuteScalarAsync() != null;
    }
}
