using _Models = Models;
using _MySqlConnector = MySqlConnector;
using Data;

namespace Routes;

public static class AccessManagementRoutes
{
    public static void MapAccessManagementEndpoints(this WebApplication app)
    {
        app.MapPost("/api/add_access_management", AddAccess);
    }

    private static async Task<IResult> AddAccess(
        _Models.AccessManagement accessManagement,
        DbConnectionFactory db
    )
    {
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
}
