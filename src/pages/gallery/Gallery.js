import "./Gallery.scss";
import React from "react";

const Gallery = () => {

    const items = Array.from(Array(10).keys());
    const addItems = () => {
        let items = [];
        for (let i = 0; i < 10; i++) {
            const item = (
                <div style={{backgroundColor: "red", border: "1px solid black", width: "100%", height: "100%"}}>
                </div>
            );
            items.push(item)
        }
        return items;
    };

    return (
        <div className="container">
            {
                items.map((e, index) => {
                    return (
                        <div key={index} className="gallery-item">
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Gallery;
