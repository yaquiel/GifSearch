using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace BackEnd
{
    public class giphy : IGifImages
    {

        public GifImagesObj get(string search, int offset, int limit)
        {
            using (var webClient = new System.Net.WebClient())
            {
                string URL = string.Format("https://api.giphy.com/v1/gifs/search?api_key=9XQiB6IaYYtn0kkxhUFo7dkJ26Fhl6Qi&q={0}&limit={1}&offset={2}&rating=g&lang=en", search, limit, offset);
                var json = webClient.DownloadString(URL);
                var jsonData = (JObject)JsonConvert.DeserializeObject(json);

                var imagesData = jsonData["data"].ToList();
                var imagesList = imagesData.Where(z=>z["images"]["fixed_width_downsampled"]["webp"]!=null || z["images"]["fixed_width_downsampled"]["url"]!=null ).Select(t =>
                {
                    var imageLink=(t["images"]["fixed_width_downsampled"]["webp"]??t["images"]["fixed_width_downsampled"]["url"]);
                   return new GifImage(imageLink.ToString(), (t["title"]??"").ToString());
                }
                    );
                var paginationObj = jsonData["pagination"].ToString();
                pagination selectedpagination = JsonConvert.DeserializeObject<pagination>(paginationObj);
                return new GifImagesObj(imagesList.ToList(), selectedpagination);
            }
        }
    }

}
