using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd
{
    public class GifImagesObj
    {
        public List<GifImage> images { get; set; }
        public pagination paginationData { get; set; }
        public GifImagesObj()
        {

        }
        public GifImagesObj(List<GifImage> userImages, pagination userPagination)
        {
            images = userImages;
            paginationData = userPagination;
        }
    }
    public class GifImage
    {
        public string url { get; set; }
        public string title { get; set; }

        public GifImage()
        {

        }
        public GifImage(string url, string title)
        {
            try
            {
                this.url = url;
                this.title = title;
            }
            catch (Exception e)
            {
                Console.Write(e);
            }

        }
    }
    public class pagination
    {
        public int total_count { get; set; }
        public int offset { get; set; }

        public int count { get; set; }

    }
}
