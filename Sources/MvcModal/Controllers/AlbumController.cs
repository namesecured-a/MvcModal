using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Caching;
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
                return new JsonResultEx { Data = this.GetCreateDialogView(album) };
            }

            return new JsonResultEx { Data = this.GetListView() };
        }

        private object GetCreateDialogView(Album album)
        {
            var html = this.RenderViewToString("_CreateDialog", album);
            return new { success = false, html };
        }

        private object GetListView()
        {
            var albums = this.context.Albums.ToList();
            var html = this.RenderViewToString("_List", albums);
            return new { success = true, html };
        }

        private string GetRequestBody()
        {
            string result;

            using (var stream = new MemoryStream())
            {
                this.Request.InputStream.Seek(0, SeekOrigin.Begin);
                this.Request.InputStream.CopyTo(stream);
                result = Encoding.UTF8.GetString(stream.ToArray());
            }

            return result;
        }
        
        private string RenderViewToString(string viewName, object model)
        {
            this.ViewData.Model = model;
            using (var writer = new StringWriter())
            {
                var viewResult = ViewEngines.Engines.FindPartialView(this.ControllerContext, viewName);
                var viewContext = new ViewContext(this.ControllerContext, viewResult.View, this.ViewData, this.TempData, writer);
                viewResult.View.Render(viewContext, writer);
                viewResult.ViewEngine.ReleaseView(this.ControllerContext, viewResult.View);
                return writer.GetStringBuilder().ToString().Trim();
            }
        }
    }
}