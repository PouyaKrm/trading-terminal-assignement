import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import React from "react";
import "./GalleryModal.scss";

const ModalWindow = () => {
    return (
        <div className="modal-window">
            <ModalHeader/>
            <ModalBody/>
        </div>
    )
};

export default ModalWindow;
