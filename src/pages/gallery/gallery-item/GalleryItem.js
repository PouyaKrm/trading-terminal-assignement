import "./GalleryItem.scss";
import React from "react";

const GalleryItem = ({imageData}) => {

    return (
        <div className="item-container">
            <img className="item-image" src={imageData?.image} alt="image" />
            <h3 className="item-text">{imageData?.title}</h3>
        </div>
    )
};

export default GalleryItem;
