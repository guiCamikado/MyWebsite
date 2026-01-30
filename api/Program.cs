using Data;
using Microsoft.VisualBasic;
using Routes;
using Security;

// App
var builder = WebApplication.CreateBuilder(args);

// Cors
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowFrontend", policy =>
			{
				policy
							.WithOrigins(
									"http://localhost:5173", // Vite
									"http://localhost:5174", // Vite
									"http://localhost:5273", // Vite
									"http://localhost:3000"  // React CRA (se usar)
							)
							.AllowAnyHeader()
							.AllowAnyMethod();
			});
});


//DI (Dependency Injection)
builder.Services.AddSingleton<DbConnectionFactory>();
builder.Services.AddScoped<JwtTokenService>();
// Configurações padrão
var serverConnection = builder.Configuration.GetConnectionString("Server")!;
var dbConnection = builder.Configuration.GetConnectionString("Default")!;
DatabaseInitializer.EnsureDatabase(serverConnection);
DatabaseInitializer.EnsureTables(dbConnection);

var app = builder.Build();
// Chamada de aplicação
app.UseCors("AllowFrontend");
app.MapUsersEndpoints();
app.MapAccessManagementEndpoints();
app.MapIpManagerEndpoints();
app.Run();