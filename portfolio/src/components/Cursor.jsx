import React, { useRef, useEffect, useState } from 'react'
import defaultCursor from '../../public/assets/cursor.png'
import thumbCursor from '../../public/assets/thumb.png'
import pointer from '../../public/assets/point.png'

function Cursor() {
    const cursorRef = useRef(null);
    const [cursorImage, setCursorImage] = useState(defaultCursor)

    useEffect(() => {
        //update cursor position on mouse move
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const cursor = cursorRef.current

            cursor.style.left = `${clientX}px`;
            cursor.style.top = `${clientY}px`;

        };

        //change cursor image on hover
        const handleMouseOver = (e) => {
            const element = e.target.closest("a, button, [data-cursor='hover']");
            if (element) {
                if (element.tagName === "A") {
                    setCursorImage(pointer);
                } else if (element.tagName === "BUTTON") {
                    setCursorImage(pointer);
                } else if (element.getAttribute("data-cursor") === "hover") {
                    setCursorImage(thumbCursor);
                }
            }
        };

        const handleMouseOut = (e) => {
            const element = e.target.closest("a, button, [data-cursor='hover']");
            if (element) {
                setCursorImage(defaultCursor); // Reset to default cursor
            }
        };


        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        }
    }, []);


    return (
        <div ref={cursorRef}
            style={{
                backgroundImage: `url(${cursorImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
                width: '40px',
                height: '40px',
                position: 'fixed',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                visibility: 'visible'
            }}
        >

        </div>
    )
}

export default Cursor
