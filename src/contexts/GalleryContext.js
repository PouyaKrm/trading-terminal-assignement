import {createContext} from "react";

const GalleryContext = createContext({
    getNext: (imageId) => {},
    getPrevious: (imageId) => {},
    selectedImage: null,
    setSelectedImage: null
});

export default GalleryContext;

