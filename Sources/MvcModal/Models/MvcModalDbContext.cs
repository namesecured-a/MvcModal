using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MvcModal.Models
{
    public class MvcModalDbContext : DbContext
    {
        private const string ConnectionStringName = "MvcModalContext";

        public MvcModalDbContext()
            : base(ConnectionStringName)
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public IDbSet<User> Users { get; set; }

        public IDbSet<Album> Albums { get; set; }

        public virtual void Commit()
        {
            this.SaveChanges();
        }
    }
}