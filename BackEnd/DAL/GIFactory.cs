using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd
{
    public class GIFactory
    {
        public static IGifImages GetInstance(string type = "giphy")
        {
            switch (type)
            {
                case "giphy":
                default:
                    return new giphy();

            }
        }
    }
}
