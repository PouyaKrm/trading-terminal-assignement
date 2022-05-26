import "./Gallery.scss";
import React, {useContext, useEffect, useState} from "react";
import GalleryItem from "./gallery-item/GalleryItem";
import axios from "../../utils";
import {fetchGalleryItems, galleryItems} from "../../utils/gallery";
import GalleryContext from "../../contexts/GalleryContext";
import GalleryModal from "../../components/gallery-modal/GalleryModal";
import {ModalContext, ModalProvider} from "../../contexts/ModalContext";

const Gallery = () => {

    const [items, setItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const {setOpen} = useContext(ModalContext);

    useEffect(() => {
        // let intervalId = setInterval((e) => {
        //     fetchGalleryItems().then(response => {
        //         console.log(response);
        //         let newItems = items.splice(0);
        //         newItems.push(...response.data);
        //         setItems(newItems);
        //     })
        // }, 1000);
        // return () => clearInterval(intervalId);

        setItems(galleryItems);
        if (setOpen) {
            setOpen(true);
        }

    }, [setOpen]);

    const getNext = (imageId) => {
      let index = items.findIndex(e => e.id === imageId);
      if (index !== -1 && index !== items.length - 1) {
          return items[index + 1];
      }
      return null;
    };

    const getPrevious = (imageId) => {
        let index = items.findIndex(e => e.id === imageId);
        if (index !== -1 && index !== 0) {
            return items[index - 1];
        }
        return null;
    };

    return (
        <div className="container">
                <GalleryModal />
                <GalleryContext.Provider value={{getNext, getPrevious, selectedImage, setSelectedImage}}>
                    {
                        items.map((e, index) => {
                            return (
                                <div key={index} className="gallery-item">
                                    <GalleryItem imageData={e}/>
                                </div>
                            )
                        })
                    }
                </GalleryContext.Provider>
        </div>
    )
};

export default Gallery;
