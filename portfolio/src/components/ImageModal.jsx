import React from 'react'

function ImageModal({ isOpen, src, alt, onClose }) {

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 w-full h-full overflow-auto bg-black bg-opacity-80 pt-[80px]' onClick={onClose}>

            <div className='relative max-w-[85rem] mx-auto h-auto scroll py-4 px-12'>
                <img src={src} alt={alt} className='mx-auto transition duration-300 animation-zoom'
                    onClick={(e) => e.stopPropagation()}
                />

            </div>
            <button className='absolute top-10 right-10 text-white text-2xl'>
                &times;
            </button>
        </div>
    )

}

export default ImageModal
