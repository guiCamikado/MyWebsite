namespace api.models
{
    public class RegisteringUsers
    {
        public int Id { get; set; }
        public string? name { get; set; }
        public string? email { get; set; }
    }

    public class Users
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Lastname { get; set; }
        public string? Email { get; set; }
        public string? TelNumber { get; set; }
        public string? password { get; set; }
    }

    public class Comments
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Comment { get; set; }
        public string? Date { get; set; }
        public string? EditDate { get; set; }
    }
}