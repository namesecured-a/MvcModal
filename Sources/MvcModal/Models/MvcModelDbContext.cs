using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcModal.Models
{
    public class MvcModelDbContext : DbContext
    {
        private const string ConnectionStringName = "MvcModelContext";

        public MvcModelDbContext()
            : base(ConnectionStringName)
        {
        }

        public IDbSet<User> Users { get; set; }

        public virtual void Commit()
        {
            this.SaveChanges();
        }
    }
}