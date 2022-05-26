import "./Gallery.scss";
import React, {useEffect, useState} from "react";
import GalleryItem from "./gallery-item/GalleryItem";
import axios from "../../utils";
import {fetchGalleryItems, galleryItems} from "../../utils/gallery";

const Gallery = () => {

    const [items, setItems] = useState([]);

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

    return (
        <div className="container">
            {
                items.map((e, index) => {
                    return (
                        <div key={index} className="gallery-item">
                            <GalleryItem imageData={e}/>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Gallery;
