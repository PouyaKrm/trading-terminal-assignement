import "./Gallery.scss";
import React, {useContext, useEffect, useState} from "react";
import GalleryItem from "../../components/gallery-item/GalleryItem";
import {fetchGalleryItems, galleryItems} from "../../utils/gallery";
import GalleryModal from "../../components/gallery-modal/GalleryModal";
import {GalleryModalContext, GalleryModalProvider} from "../../contexts/GalleryModalContext";
import GalleryContext from "../../contexts/GalleryContext";

const Gallery = () => {

    const [items, setItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState({});

    useEffect(() => {
        getItems();
        let intervalId = setInterval((e) => {
          getItems();
        }, 10000);
        return () => clearInterval(intervalId);
        // setItems(galleryItems);
    }, []);

    const getItems = () => {
        fetchGalleryItems().then(response => {
            console.log(response);
            let newItems = items.slice();
            newItems.push(...response.data);
            console.log(newItems);
            setItems(newItems);
        });
    };

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
