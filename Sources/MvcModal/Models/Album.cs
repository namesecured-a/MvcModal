using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcModal.Models
{
    public class Album
    {
        [ScaffoldColumn(false)]
        public int Id { get; set; }

        [Required]
        [MaxLength(3)]
        public string Artist { get; set; }

        [Required]
        public string Genre { get; set; }
    }
}