import {createContext} from "react";

const GalleryContext = createContext({
    items: [],
    selectedImage: null,
    setSelectedImage: null
});

export default GalleryContext;

