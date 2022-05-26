import "./Gallery.scss";
import React, {useContext, useEffect, useState} from "react";
import GalleryItem from "../../components/gallery-item/GalleryItem";
import axios from "../../utils/axios";
import {fetchGalleryItems, galleryItems} from "../../utils/gallery";
import GalleryContext from "../../contexts/GalleryContext";
import GalleryModal from "../../components/gallery-modal/GalleryModal";
import {GalleryModalContext, GalleryModalProvider} from "../../contexts/GalleryModalContext";

const Gallery = () => {

    const [items, setItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState({});
    // const {setOpen} = useContext(GalleryModalContext);

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
    }, []);

    // useEffect(() => {
    //     // let intervalId = setInterval((e) => {
    //     //     fetchGalleryItems().then(response => {
    //     //         console.log(response);
    //     //         let newItems = items.splice(0);
    //     //         newItems.push(...response.data);
    //     //         setItems(newItems);
    //     //     })
    //     // }, 1000);
    //     // return () => clearInterval(intervalId);
    //     // setItems(galleryItems);
    //     console.log(selectedImage);
    // }, [selectedImage]);
    //

    return (
        <div className="container">
            <GalleryModalProvider>

                <GalleryContext.Provider value={{selectedImage, setSelectedImage, items}}>
                    {
                        items.map((e, index) => {
                            return (
                                <div key={index} className="gallery-item">
                                    <GalleryItem imageData={e}/>
                                </div>
                            )
                        })
                    }
                    <GalleryModal />
                </GalleryContext.Provider>
            </GalleryModalProvider>

        </div>
    )
};

export default Gallery;
