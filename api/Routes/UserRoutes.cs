using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

using _Models = Models; // Responsavel por padronização de parâmetros
using _MySqlConnector = MySqlConnector; // Responsavel pelo manuseio da linguagem query
using _Data = Data; // Responsavel pela conexão do banco de dados
using _Security = api.Security; //Responsavel por hashing

namespace Routes;

public static class UsersRoutes {
    public static void MapUsersEndpoints(this WebApplication app) {
        app.MapPost("/api/auth/register", AddUser);
        app.MapPost("/api/auth/login", ReturnJwtToken);
    }

    // Task<IResult> -> método assíncrono que, no final, devolve uma resposta HTTP.
    private static async Task<IResult> AddUser(_Models.User user, _Data.DbConnectionFactory db) {
        // Cria conexão com o banco de garante que fechara de forma async quando método terminar
        if (await IsDuplicatedEmail(user.Email, db)) {
            return Results.Conflict("Error Email já utilizado");
        }

        await using var connection = db.Create();
        await connection.OpenAsync();

        var query = """
            INSERT INTO users (first_name, last_name, email, password)
            VALUES (@FirstName, @LastName, @Email, @Password);
        """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@FirstName", user.FirstName);
        command.Parameters.AddWithValue("@LastName", user.LastName);
        command.Parameters.AddWithValue("@Email", user.Email);
        command.Parameters.AddWithValue("@Password", _Security.PasswordHasher.GetHash(user.Password));
        await command.ExecuteNonQueryAsync();

        return Results.Ok("Usuário inserido com sucesso!");
    }

    private static async Task<IResult> ReturnJwtToken(
        _Models.LoginRequest login,
        _Data.DbConnectionFactory db,
        IConfiguration config,
        Security.JwtTokenService jwtTokenService
        ) {
        await using var connection = db.Create();
        await connection.OpenAsync();

        const string query = """
            SELECT id, email, password
            FROM users
            WHERE email = @Email
            LIMIT 1;
        """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.AddWithValue("@Email", login.Email);

        await using var reader = await command.ExecuteReaderAsync();

        // Dados existem no banco?
        if (!await reader.ReadAsync()) {
            return Results.Unauthorized();
        }

        // Hash da senha confere?
        var passwordHash = reader.GetString("password");
        if (!_Security.PasswordHasher.VerifyHash(login.Password, passwordHash)) {
            return Results.Unauthorized();
        }

        // Geração do JWT delegada
        var jwt = jwtTokenService.GenerateToken(
            reader.GetInt32("id"),
            reader.GetString("email")
        );

        return Results.Ok(new { token = jwt });
    }


    // Verifica se E-mail já existe no db e retorne true ou false
    private static async Task<bool> IsDuplicatedEmail(string email, _Data.DbConnectionFactory db) {
        await using var connection = db.Create();
        await connection.OpenAsync();

        const string query = """ SELECT 1 FROM users WHERE email = @Email LIMIT 1 """;

        await using var command = new _MySqlConnector.MySqlCommand(query, connection);
        command.Parameters.Add("@Email", _MySqlConnector.MySqlDbType.VarChar).Value = email;

        return await command.ExecuteScalarAsync() != null;
    }
}
