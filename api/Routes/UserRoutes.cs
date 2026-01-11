using Microsoft.VisualBasic;
using Models;
using MySqlConnector;

namespace Routes;

public static class UsersRoutes
{


    public static void MapUsersEndpoints(this WebApplication app)
    {
        app.MapPost("/api/add_user", AddUser);
    }

    private static IResult AddUser(User user)
    {
        string connectionString =
            "Server=localhost;Port=3306;Database=mywebsite;User=root;Password=admin;";

        using var connection = new MySqlConnection(connectionString);
        connection.Open();

        var query = """
            INSERT INTO users (first_name, last_name, email, password)
            VALUES (@FirstName, @LastName, @Email, @Password);
        """;

        using var command = new MySqlCommand(query, connection);

        command.Parameters.AddWithValue("@FirstName", user.FirstName);
        command.Parameters.AddWithValue("@LastName", user.LastName);
        command.Parameters.AddWithValue("@Email", user.Email);
        command.Parameters.AddWithValue("@Password", user.Password);

        command.ExecuteNonQuery();

        return Results.Ok("Usuário inserido com sucesso!");
    }
}
