using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace MvcModal
{
    public class JsonResultEx : JsonResult
    {
        public JsonSerializerSettings Settings { get; set; }

        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException("context");
            }

            var response = context.HttpContext.Response;
            response.ContentType = !string.IsNullOrEmpty(ContentType) ? this.ContentType : "application/json";
            if (this.ContentEncoding != null)
            {
                response.ContentEncoding = this.ContentEncoding;
            }

            if (this.Data == null)
            {
                return;
            }

            if (this.Settings == null)
            {
                this.Settings = new JsonSerializerSettings();
                this.Settings.Converters.Add(new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd HH:mm" });
            }

            var json = JsonConvert.SerializeObject(this.Data, this.Settings);
            response.Write(json);

        }
    }
}