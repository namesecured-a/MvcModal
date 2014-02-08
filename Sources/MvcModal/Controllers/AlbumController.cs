using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Microsoft.Ajax.Utilities;

using MvcModal.Models;

namespace MvcModal.Controllers
{
    public class AlbumController : Controller
    {
        private MvcModalDbContext context = new MvcModalDbContext();

        public ActionResult Index()
        {
            var albums = this.context.Albums.ToList();
            return View(albums);
        }

        public ActionResult Create()
        {
            var model = new Album() { Artist = "Emtpy Artist", Genre = "Emtpy Genre" };

            return this.PartialView("_CreateDialog", model);
        }

        [HttpPost]
        public ActionResult Create(Album album)
        {
            if (!this.ModelState.IsValid)
            {
                return this.PartialView("_CreateDialog", album);
            }

            var albums = this.context.Albums.ToList();
            return this.PartialView("_List", albums);
        }
    }
}