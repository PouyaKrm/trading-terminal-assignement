import React, {createContext, useState} from "react";

const GalleryModalContext = createContext({
    open: false,
    setOpen: null,
    handleClose: () => {
    }
});

const GalleryModalProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <GalleryModalContext.Provider value={{open, setOpen, handleClose}}>
            {children}
        </GalleryModalContext.Provider>
    )
};

export {GalleryModalContext, GalleryModalProvider};
