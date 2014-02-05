using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcModal.Models
{
    public class Databaseinitializer
    {
        public static void Initialize()
        {
            Database.SetInitializer(new DatabaseInitializerConfiguration());

            using (var context = new MvcModalDbContext())
            {
                context.Database.Initialize(force: true);
            }
        }
    }
}