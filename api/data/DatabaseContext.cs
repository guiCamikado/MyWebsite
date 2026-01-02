using Dapper;
using MySqlConnector;

namespace api.data
{
    public class DatabaseContext
    {
        private readonly string _connectionString;

        // Wip entender o IConfiguration
        public DatabaseContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("MariaDB")
                ?? "Server=localhost;Port=3306;Database=api_database;Uid=admin;Pwd=admin;";
        }

        public MySqlConnection CreateConnection()
            => new MySqlConnection(_connectionString);

        public async Task InitializeDatabaseAsync()
        {
            try
            {
                using var connection = CreateConnection();

                // Criar banco de dados se não existir
                await connection.ExecuteAsync(@"
                    CREATE DATABASE IF NOT EXISTS api_database;
                    USE api_database;
                ");

                // Tabela RegisteringUsers
                await connection.ExecuteAsync(@"
                    CREATE TABLE IF NOT EXISTS RegisteringUsers (
                        Id INT PRIMARY KEY AUTO_INCREMENT,
                        name VARCHAR(100),
                        email VARCHAR(100) UNIQUE,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        INDEX idx_email (email)
                    );
                ");

                // Tabela Users
                await connection.ExecuteAsync(@"
                    CREATE TABLE IF NOT EXISTS Users (
                        Id INT PRIMARY KEY AUTO_INCREMENT,
                        Name VARCHAR(100),
                        Lastname VARCHAR(100),
                        Email VARCHAR(100) UNIQUE,
                        TelNumber VARCHAR(20),
                        password VARCHAR(255),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        INDEX idx_email (Email),
                        INDEX idx_name (Name)
                    );
                ");

                // Tabela Comments
                await connection.ExecuteAsync(@"
                    CREATE TABLE IF NOT EXISTS Comments (
                        Id INT PRIMARY KEY AUTO_INCREMENT,
                        Name VARCHAR(100),
                        Comment TEXT,
                        Date VARCHAR(50),
                        EditDate VARCHAR(50),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        user_id INT NULL,
                        FOREIGN KEY (user_id) REFERENCES Users(Id) ON DELETE SET NULL,
                        INDEX idx_name (Name),
                        INDEX idx_date (Date)
                    );
                ");

                Console.WriteLine("Banco de dados inicializado com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao inicializar banco: {ex.Message}");
                throw;
            }
        }
    }
}