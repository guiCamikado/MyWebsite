using Data;
using Microsoft.VisualBasic;
using Routes;

// App
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<DbConnectionFactory>();
var serverConnection = builder.Configuration.GetConnectionString("Server")!;
var dbConnection = builder.Configuration.GetConnectionString("Default")!;

DatabaseInitializer.EnsureDatabase(serverConnection);
DatabaseInitializer.EnsureTables(dbConnection);

var app = builder.Build();
app.MapUsersEndpoints();
app.MapAccessManagementEndpoints();
app.Run();
