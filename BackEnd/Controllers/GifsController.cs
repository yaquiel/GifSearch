using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    public class GifsController : Controller
    {
        [HttpGet]
        public GifImagesObj Get(string search = "", int limit = 25, int offset = 0, string Type = "giphy")
        {
            IGifImages SelectedGifImages = GIFactory.GetInstance(Type);
            var imagesObj = SelectedGifImages.get(search, offset, limit);
            return imagesObj;
        }
    }
}
