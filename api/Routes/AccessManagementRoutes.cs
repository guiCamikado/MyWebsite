using _Models = Models;
using _MySqlConnector = MySqlConnector;
using Data;

namespace Routes;

public static class AccessManagementRoutes {
    public static void MapAccessManagementEndpoints(this WebApplication app) {
        app.MapPost("/api/data/new_access", AddAccess);
        app.MapGet("/api/data/access_numbers", GetAccessNumbers);
    }

    private static async Task<IResult> AddAccess(_Models.AccessManagement accessManagement, DbConnectionFactory db) {
        await using var connection = db.Create();
        await connection.OpenAsync();

        var query = """
            INSERT INTO access_management (ip_address, access_time)
            VALUES (@ip_address, 1)
            ON DUPLICATE KEY UPDATE
                access_time = access_time + 1;
        """;

        await using var command =
            new _MySqlConnector.MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@ip_address", accessManagement.IpAddress);

        await command.ExecuteNonQueryAsync();

        return Results.Ok("Acesso contabilizado");
    }

    private static async Task<IResult> GetAccessNumbers(DbConnectionFactory db) {
        await using var connection = db.Create();
        await connection.OpenAsync();

        var query = """
        SELECT *
        FROM access_management
    """;

        await using var command =
            new _MySqlConnector.MySqlCommand(query, connection);

        await using var reader = await command.ExecuteReaderAsync();

        var result = new List<object>();

        while (await reader.ReadAsync()) {
            result.Add(new {
                id = reader.GetInt32("id"),
                userId = reader.GetString("ip_address"),
                accessNumber = reader.GetInt32("access_time")
            });
        }

        return Results.Ok(result);
    }

}
