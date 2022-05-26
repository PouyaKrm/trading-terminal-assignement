import React, {useContext} from "react";
import GalleryContext from "../../contexts/GalleryContext";
import "./GalleryModal.scss";
import ImageNavBtns from "./ImageNavBtns";

const ModalBody = () => {

    const {selectedImage} = useContext(GalleryContext);

    return (
        <div className="width-100 height-100">
            <img className="width-100 height-100" src="http://dummyimage.com/858x270.png/ff4444/ffffff" alt="image"/>
            <div className="item-text">
                <h3>Hello word</h3>
                <h4>heffygfyegftfgyfgeygfyegfyegfyegfyegfyegygeyfgefygeyf efrfrgrgr grg rgrgrgrgrgr</h4>
            </div>
            <ImageNavBtns/>
        </div>
    )


};

export default ModalBody;
