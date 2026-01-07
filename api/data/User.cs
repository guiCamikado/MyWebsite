namespace Data.User;

public class User
{
    // primaryKey - autoIncrement
    public int Id { get; set; }

    public string First_name { get; set; } = string.Empty;
    public string Last_name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}