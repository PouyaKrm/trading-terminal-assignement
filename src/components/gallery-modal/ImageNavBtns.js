import React, {useContext, useEffect, useState} from "react";
import {MdOutlineNavigateNext} from "react-icons/md";
import GalleryContext from "../../contexts/GalleryContext";
import {GrPrevious, GrNext} from "react-icons/gr";
import {checkIsFirstElementByIndex, checkIsLastElementByIndex, getIndexById} from "../../utils/helpers";


const ImageNavBtns = () => {

    const {selectedImage, items, setSelectedImage} = useContext(GalleryContext);
    const [isLast, setIsLast] = useState(false);
    const [isFirst, setIsFirst] = useState(false);

    useEffect(() => {
        if (!selectedImage) {
            return;
        }

        let index = getIndexById(items, selectedImage?.id);
        let last = checkIsLastElementByIndex(items, index);
        let first = checkIsFirstElementByIndex(items, index);
        setIsLast(last);
        setIsFirst(first);
    }, [selectedImage]);

    const getNext = (imageId) => {
        let index = getIndexById(items, imageId);
        if (!checkIsLastElementByIndex(items, index)) {
            setSelectedImage(items[index + 1]);
        }
    };

    const getPrevious = (imageId) => {
        let index = getIndexById(items, imageId);
        if (!checkIsFirstElementByIndex(items, index)) {
            setSelectedImage(items[index - 1]);
        }
    };

    return (
        <>
            {!isLast &&
            <button className="nav-btn-right">
                <GrNext onClick={(e) => getNext(selectedImage?.id)}/>
            </button>
            }
            {!isFirst &&
            <button className="nav-btn-left">
                <GrPrevious onClick={(e) => getPrevious(selectedImage?.id)}/>
            </button>
            }
        </>
    )

};

export default ImageNavBtns;
