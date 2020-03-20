import React from "react";


const ImageList = (props) => {
    const images = props.images.map(image => {
        return <img key={image.id} src={image.urls.regular} alt=""/>
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;