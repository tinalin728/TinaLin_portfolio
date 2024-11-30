import React, { useEffect } from 'react';
import { useLenis } from 'lenis/react';

function ImageModal({ isOpen, src, alt, onClose }) {
    const lenis = useLenis();

    useEffect(() => {

        if (isOpen) {
            // Disable body scroll
            lenis?.stop();
            document.body.style.overflow = 'auto';
            document.querySelector('#modal-container').style.overflow = 'auto'; // Enable modal scroll


        } else {
            // Re-enable body scroll
            lenis?.start();
            document.body.style.overflow = '';
        }

        // Cleanup when the component unmounts
        return () => {
            lenis?.start();
            document.body.style.overflow = '';
        };
    }, [isOpen, lenis]);

    if (!isOpen) return null;

    return (
        <div data-scroll
            id='modal-container'
            className="fixed inset-0 z-50 w-full h-auto bg-black bg-opacity-80"
            onClick={onClose}
        >
            <div
                className="relative max-w-[85rem] mx-auto h-auto overflow-auto py-4 px-12"
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
