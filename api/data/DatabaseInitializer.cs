using MySqlConnector;

namespace Data;

public static class DatabaseInitializer
{
    public static void EnsureDatabase(string connectionString)
    {
        using var connection = new MySqlConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        command.CommandText = "CREATE DATABASE IF NOT EXISTS mywebsite;";
        command.ExecuteNonQuery();
    }

    public static void EnsureTables(string connectionString)
    {
        using var connection = new MySqlConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        command.CommandText = """
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(100) NOT NULL,
                last_name VARCHAR(100) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );
        """;
        command.ExecuteNonQuery();

        command.CommandText = """
            CREATE TABLE IF NOT EXISTS connectionLog (
                id INT AUTO_INCREMENT PRIMARY KEY,
                ip_address VARCHAR(100) NOT NULL,
                is_first BOOLEAN NOT NULL DEFAULT FALSE,
                time DATETIME NOT NULL
            );
        """;
        command.ExecuteNonQuery();
    }
}