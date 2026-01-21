using Data;
using Microsoft.VisualBasic;
using Routes;
using Security;

// App
var builder = WebApplication.CreateBuilder(args);

//DI (Dependency Injection)
builder.Services.AddSingleton<DbConnectionFactory>();
builder.Services.AddScoped<JwtTokenService>();
// Configurações padrão
var serverConnection = builder.Configuration.GetConnectionString("Server")!;
var dbConnection = builder.Configuration.GetConnectionString("Default")!;
DatabaseInitializer.EnsureDatabase(serverConnection);
DatabaseInitializer.EnsureTables(dbConnection);

// Chama aplicação
var app = builder.Build();
app.MapUsersEndpoints();
app.MapAccessManagementEndpoints();
app.Run();