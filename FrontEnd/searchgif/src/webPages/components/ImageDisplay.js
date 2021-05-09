import React from 'react'

const ImageDisplay = props => {
const {elem}=props
    const shareHandler=(img)=>{

        if (navigator.share) {
            navigator.share({
              title: img.title,
            //   text: 'Check out web.dev.',
              url: img.url
            })
          }
      }
    return (
        <div
        className="col p-1 row no-gutters imgCover justify-content-center"
     >
        <img src={elem.url} alt={elem.title} className="img-thumbnail" />
        {elem.title && (
          <span className="col p1">{elem.title}</span>
        )}
        <i className="fas fa-share-alt" onClick={()=>{shareHandler(elem)}}></i>
      </div>
    )
}


export default ImageDisplay
