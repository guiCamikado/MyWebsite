using _MySqlConnector = MySqlConnector;
using Microsoft.Extensions.Configuration;

namespace Data;

// Retorna conexão com o banco de dados cuja configuração é encontrada em appsettings.json connectionString "Default"
public class DbConnectionFactory
{
    private readonly string _connectionString;

    public DbConnectionFactory(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("Default")
            ?? throw new InvalidOperationException("Connection string 'Default' não encontrada.");
    }

    public _MySqlConnector.MySqlConnection Create()
    {
        return new _MySqlConnector.MySqlConnection(_connectionString);
    }
}
