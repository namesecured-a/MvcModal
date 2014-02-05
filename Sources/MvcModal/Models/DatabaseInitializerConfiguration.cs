using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace MvcModal.Models
{
    internal sealed class DatabaseInitializerConfiguration : DropCreateDatabaseIfModelChanges<MvcModalDbContext>
    {
        protected override void Seed(MvcModalDbContext context)
        {
            base.Seed(context);

            context.Users.AddOrUpdate(
                i => i.Id,
                new User { Email = "petrov.nikolay@mail.com", Name = "Petrov Nikolay" });

            context.Users.AddOrUpdate(
                i => i.Id,
                new User { Email = "sidorov.vasiliy@mail.com", Name = "Sidorov Vasiliy" });
        }
    }
}