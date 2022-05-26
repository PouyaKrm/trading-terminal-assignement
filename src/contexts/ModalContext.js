import React, {createContext, useState} from "react";

const ModalContext = createContext({
    open: false,
    setOpen: null,
    handleClose: () => {
    }
});

const ModalProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <ModalContext.Provider value={{open, setOpen, handleClose}}>
            {children}
        </ModalContext.Provider>
    )
};

export {ModalContext, ModalProvider};
