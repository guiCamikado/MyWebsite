using Microsoft.AspNetCore.Identity;
using Criptography = System.Security.Cryptography;
using System.Text;
using System.Collections;
// Pesquisar usando:
//https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-10.0&tabs=visual-studio

namespace api.Security;

using System.Security.Cryptography;
using System.Text;

public static class PasswordHasher {
    private const int SaltSize = 16;       // 128 bits
    private const int KeySize = 32;        // 256 bits
    private const int Iterations = 100_000;

    // Gera hash da senha
    public static string GetHash(string password) {
        using var pbkdf2 = new Rfc2898DeriveBytes(password, SaltSize, Iterations, HashAlgorithmName.SHA256);

        var salt = pbkdf2.Salt;
        var key = pbkdf2.GetBytes(KeySize);

        return $"{Convert.ToBase64String(salt)}.{Convert.ToBase64String(key)}";
    }
    // Verifica validade da senha do usuário
    public static bool VerifyHash(string password, string storedHash) {
        var parts = storedHash.Split('.');
        if (parts.Length != 2) return false;

        var salt = Convert.FromBase64String(parts[0]);
        var storedKey = Convert.FromBase64String(parts[1]);

        using var pbkdf2 = new Rfc2898DeriveBytes(
            password,
            salt,
            Iterations,
            HashAlgorithmName.SHA256
        );

        var computedKey = pbkdf2.GetBytes(KeySize);

        return CryptographicOperations.FixedTimeEquals(
            computedKey,
            storedKey
        );
    }
}
