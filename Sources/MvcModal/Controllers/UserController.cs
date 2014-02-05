using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MvcModal.Models;

namespace MvcModal.Controllers
{
    public class UserController : Controller
    {
        private MvcModalDbContext databaseContext = new MvcModalDbContext();

        public ActionResult Index()
        {
            return View(this.databaseContext.Users);
        }
    }
}