import React, { useCallback, useContext, useEffect } from "react";
import { ImagesContext } from "../../shared/context/images-context";
import "./GifResult.css";
import ImageDisplay from "./ImageDisplay";
const GifResult = (props) => {
  const { images, scroll, offset,loading, setOffsetHandler } = useContext(
    ImagesContext
  );

  useEffect(() => {
    window.addEventListener("scroll", loadMore);

    window.requestAnimationFrame(function() {
      if(!scroll)
      {
        window.removeEventListener("scroll", loadMore);
      }
      if (
        !loading && scroll &&
        images &&
        images.length > 0 &&
        window.innerHeight === document.scrollingElement.scrollHeight
      ) {
        loadMore();
      }


    });
  
    

  }, [offset, images]);

  const loadMore = useCallback(
    (e) => {
      if (
        scroll &&
        window.innerHeight + document.documentElement.scrollTop ===
          document.scrollingElement.scrollHeight
      ) {
        window.removeEventListener("scroll", loadMore);
        setOffsetHandler();
      }
    },
    [offset,scroll]
  );

  return (
      <div className="row no-gutters align-items-center justify-content-center">
          
        {images &&
          images.length > 0 &&
          images.map((element, index) => {
            return (
            <ImageDisplay elem={element} key={`ImageDisplay${index}`} />
            );
          })
        }
      </div>
    
  );
};

export default GifResult;
