import React, {useContext} from "react";
import {GalleryModalContext} from "../../contexts/GalleryModalContext";

const ModalHeader = () => {

    const {handleClose} = useContext(GalleryModalContext);

    return (
           <button className="position-absolute bg-transparent border-0 text-white-light mr-auto" style={{right: "3%", top: "3%", fontSize: "3rem"}}
                   onClick={handleClose}
           >
               &times;
           </button>
    );
};

export default ModalHeader;
