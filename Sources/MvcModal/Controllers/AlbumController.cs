using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using MvcModal.Models;

namespace MvcModal.Controllers
{
    public class AlbumController : Controller
    {
        private MvcModalDbContext context = new MvcModalDbContext();

        public ActionResult Index()
        {
            return View(this.context.Albums);
        }

        public ActionResult Create()
        {
            return Json(new { });
        }
    }
}