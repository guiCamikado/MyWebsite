using Data.User;
using Dapper;
using MySqlConnector;

namespace Program;

internal class Program
{
    static void Main(string[] args)
    {
        string connectionString =
            "Server=localhost;Port=3306;Database=mywebsite;User=root;Password=admin;";

        using var connection = new MySqlConnection(connectionString);

        var user = new User
        {
            First_name = "Guilherme",
            Last_name = "Andrade Camikado",
            Email = "guilherme.camikado3@gmail.com",
            Password = "admin"
        };

        string insertQuery = @"
            INSERT INTO users (first_name, last_name, email, password)
            VALUES (@First_name, @Last_name, @Email, @Password);
        ";

        connection.Execute(insertQuery, user);

        Console.WriteLine("Usuário inserido com sucesso!");
    }
}