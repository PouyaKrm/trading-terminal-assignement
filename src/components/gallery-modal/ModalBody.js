import React, {useContext, useEffect} from "react";
import GalleryContext from "../../contexts/GalleryContext";
import "./GalleryModal.scss";
import ImageNavBtns from "./ImageNavBtns";

const ModalBody = () => {

    const {selectedImage} = useContext(GalleryContext);

    return (
        <div className="width-100 height-100">
            <img className="width-100 height-100" src={selectedImage?.image} alt={selectedImage?.title}/>
            <div className="item-text">
                <h3>{selectedImage?.title}</h3>
                <h4>{selectedImage?.description}</h4>
            </div>
            <ImageNavBtns/>
        </div>
    )
};

export default ModalBody;
