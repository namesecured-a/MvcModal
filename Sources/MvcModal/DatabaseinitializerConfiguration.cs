using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

using MvcModal.Models;

namespace MvcModal
{
    public class DatabaseinitializerConfiguration : CreateDatabaseIfNotExists<MvcModalDbContext>
    {
    }
}