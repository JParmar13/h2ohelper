using System.Data.Entity;

namespace h2ohelper.Models
{
    public class OurDbContext : DbContext
    {
        public DbSet<UserAccount> userAccount { get; set; }


    }
}