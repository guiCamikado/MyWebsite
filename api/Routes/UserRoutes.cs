using _Models = Models;
using _MySqlConnector = MySqlConnector;
using _Data = Data;

namespace Routes;

public static class UsersRoutes
{
    public static void MapUsersEndpoints(this WebApplication app)
    {
        app.MapPost("/api/add_user", AddUser);
    }

    // Task<IResult> -> método assíncrono que, no final, devolve uma resposta HTTP.
    private static async Task<IResult> AddUser(_Models.User user, _Data.DbConnectionFactory db)
    {

        // WIP é necessário criar uma lógica que:
        // 1. Verifica se "email" existe no banco dee dados -> Caso exista devolver "Email já utilizado", Caso não exista então executar query a baixo

        // Cria conexão com o banco de garante que fechara de forma async quando método terminar
        if (await IsDuplicatedEmail(user.Email, db))
        {
            return Results.Conflict("Error Email já utilizado");
        }

        await using var connection = db.Create();
        await connection.OpenAsync();

        var query = """
            INSERT INTO users (first_name, last_name, email, password)
            VALUES (@FirstName, @LastName, @Email, @Password);
        """;

        await using var command =
            new _MySqlConnector.MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@FirstName", user.FirstName);
        command.Parameters.AddWithValue("@LastName", user.LastName);
        command.Parameters.AddWithValue("@Email", user.Email);
        command.Parameters.AddWithValue("@Password", user.Password);

        await command.ExecuteNonQueryAsync();

        return Results.Ok("Usuário inserido com sucesso!");
    }

    // Verifica se E-mail já existe no db e retorne true ou false
    private static async Task<bool> IsDuplicatedEmail(
        string email,
        _Data.DbConnectionFactory db)
    {
        await using var connection = db.Create();
        await connection.OpenAsync();

        const string query = """
        SELECT 1 FROM users WHERE email = @Email LIMIT 1
    """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.Add(
            "@Email",
            _MySqlConnector.MySqlDbType.VarChar
        ).Value = email;

        return await command.ExecuteScalarAsync() != null;
    }
}
