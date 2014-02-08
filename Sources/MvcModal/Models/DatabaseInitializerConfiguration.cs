using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace MvcModal.Models
{
    internal sealed class DatabaseInitializerConfiguration : CreateDatabaseIfNotExists<MvcModalDbContext>
    {
        protected override void Seed(MvcModalDbContext context)
        {
            base.Seed(context);
            SeedUsers(context);
            SeedAlbums(context);
        }

        private static void SeedUsers(MvcModalDbContext context)
        {
            context.Users.AddOrUpdate(
                i => i.Id,
                new User { Email = "petrov.nikolay@mail.com", Name = "Petrov Nikolay" });

            context.Users.AddOrUpdate(
                i => i.Id,
                new User { Email = "sidorov.vasiliy@mail.com", Name = "Sidorov Vasiliy" });
        }

        private static void SeedAlbums(MvcModalDbContext context)
        {
            context.Albums.AddOrUpdate(i => i.Id, new Album { Artist = "Zero Cult", Genre = "Chillout" });
            context.Albums.AddOrUpdate(i => i.Id, new Album { Artist = "Dolphin", Genre = "Alternative" });
        }
    }
}