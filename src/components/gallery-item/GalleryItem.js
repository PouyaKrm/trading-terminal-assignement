import "./GalleryItem.scss";
import React, {useContext} from "react";
import GalleryContext from "../../contexts/GalleryContext";
import {GalleryModalContext} from "../../contexts/GalleryModalContext";

const GalleryItem = ({imageData}) => {

    const {setSelectedImage} = useContext(GalleryContext);
    const {setOpen} = useContext(GalleryModalContext);

    const handleClick = () => {
        setSelectedImage(imageData);
        setOpen(true);
    };

    return (
        <div className="item-container" onClick={(e) => handleClick()}>
            <img className="item-image" src={imageData?.image} alt={imageData?.title}/>
            <h3 className="item-text">{imageData?.title}</h3>
        </div>

)
};

export default GalleryItem;