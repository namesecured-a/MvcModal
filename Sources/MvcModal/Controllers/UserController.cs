using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MvcModal.Models;

namespace MvcModal.Controllers
{
    public class UserController : Controller
    {
        private readonly MvcModalDbContext databaseContext = new MvcModalDbContext();

        public ActionResult Index()
        {
            return View(this.databaseContext.Users);
        }

        public ActionResult Create(int? id)
        {
            return this.PartialView("_Create");
        }

        [HttpPost]
        public ActionResult Create(User user)
        {
            if (this.ModelState.IsValid)
            {
                this.databaseContext.Users.AddOrUpdate(u => u.Id, new User { Name = user.Name, Email = user.Email });
                this.databaseContext.Commit();
                return this.PartialView("_List", this.databaseContext.Users);    
            }

            return this.PartialView("_Create");
        }
    }
}