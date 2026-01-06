namespace Api.Models
{
    public class RegisteringUser
    {
        public int Id { get; set; }
        public string? IpAddress { get; set; }
        public int AccessCount { get; set; }
    }
}
