import React, {useContext} from "react";
import "./GalleryModal.scss";
import {ModalContext} from "../../contexts/ModalContext";
import ModalWindow from "./ModalWindow";
import "./GalleryModal.scss"

const GalleryModal = () => {

    const {open} = useContext(ModalContext);

    return (
        <>
            {open &&
            (
                <div className="modal">
                    <ModalWindow/>
                </div>
            )}
        </>
    )

};

export default GalleryModal;

