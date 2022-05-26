import React, {useContext} from "react";
import {MdOutlineNavigateNext} from "react-icons/md";
import GalleryContext from "../../contexts/GalleryContext";
import {GrPrevious, GrNext} from "react-icons/gr";

const ImageNavBtns = () => {

    const {selectedImage, getNext, getPrevious} = useContext(GalleryContext);

    return (
        <>
            <button className="nav-btn-right">
                <GrNext onClick={getNext(selectedImage?.id)}/>
            </button>
            <button className="nav-btn-left">
                <GrPrevious onClick={getPrevious(selectedImage?.id)}/>
            </button>
        </>
    )

};

export default ImageNavBtns;
