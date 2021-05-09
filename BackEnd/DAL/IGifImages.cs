using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd
{
    public interface IGifImages
    {
         GifImagesObj get(string search, int offset,int limit);
    }
}
