import React, {useContext} from "react";
import "./GalleryModal.scss";
import {GalleryModalContext} from "../../contexts/GalleryModalContext";
import ModalWindow from "./ModalWindow";
import "./GalleryModal.scss"

const GalleryModal = () => {

    const {open} = useContext(GalleryModalContext);

    return (
        <>
            {open &&
            (
                <div className="modal" >
                    <ModalWindow/>
                </div>
            )}
        </>
    )

};

export default GalleryModal;

