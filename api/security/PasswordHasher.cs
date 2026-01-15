using Microsoft.AspNetCore.Identity;
using Criptography = System.Security.Cryptography;
using System.Text;
using System.Collections;
// Pesquisar usando:
//https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-10.0&tabs=visual-studio

namespace api.Security;

public class PasswordHasher {
    // Converte array de bytes em string hexadecimal
    public static string GetHash(string input) {
        using (var sha256Hash = Criptography.SHA256.Create()) {
            byte[] data = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
            var sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++) {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }
    }


    // Verfica se hash bate.
    public static bool VerifyHash(string input, string hash) {
        using (var sha256Hash = Criptography.SHA256.Create()) {
            var hashOfInput = GetHash(input);

            StringComparer comparer = StringComparer.OrdinalIgnoreCase;
            return comparer.Compare(hashOfInput, hash) == 0; // Compara e retorna true se iguais
        }
    }
}