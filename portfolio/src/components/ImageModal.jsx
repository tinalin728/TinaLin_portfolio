import React, { useEffect } from 'react';

function ImageModal({ isOpen, src, alt, onClose }) {

    useEffect(() => {

        if (isOpen) {

            document.body.style.overflow = 'hidden';


        } else {

            document.body.style.overflow = '';
        }

        // Cleanup when the component unmounts
        return () => {

            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 w-full h-screen overflow-scroll bg-black "
            onClick={onClose}
        >

            <div
                className="relative max-w-[85rem] mx-auto h-auto pt-[6rem] pb-12 px-12"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
                <img
                    src={src}
                    alt={alt}
                    className="block mx-auto transition duration-300 animation-zoom"
                />
            </div>
            <button
                className="absolute top-10 right-10 text-white text-2xl"
                onClick={onClose}
            >
                &times;
            </button>
        </div>

    );
}

export default ImageModal;
