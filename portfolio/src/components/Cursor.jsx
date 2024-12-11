import React, { useRef, useEffect, useState } from 'react'
import WindowWidth from '../hooks/WindowWidth'
import defaultCursor from '../../public/assets/cursor.png'
import thumbCursor from '../../public/assets/thumb.png'
import pointer from '../../public/assets/point.png'
import stickyPoint from '../../public/assets/point2.svg'

function Cursor() {
    const cursorRef = useRef(null);
    const [cursorImage, setCursorImage] = useState(defaultCursor);
    const [isMobile, setIsMobile] = useState(false)
    const windowWidth = WindowWidth();

    useEffect(() => {

        if (windowWidth <= 768) return;
        //update cursor position on mouse move
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (cursorRef.current) {
                cursorRef.current.style.left = `${clientX}px`;
                cursorRef.current.style.top = `${clientY}px`;
            }
        };

        //change cursor image on hover
        const handleMouseOver = (e) => {
            const element = e.target.closest("a, button, [data-cursor]");
            if (element) {
                const cursorType = element.getAttribute("data-cursor");

                if (cursorType === "sticky-nav") {
                    setCursorImage(stickyPoint);
                } else if (cursorType === "hover") {
                    setCursorImage(thumbCursor);
                } else if (element.tagName === "A") {
                    setCursorImage(stickyPoint);
                } else if (element.tagName === "BUTTON") {
                    setCursorImage(pointer);
                } else {
                    setCursorImage(defaultCursor);
                }
            }
        };

        const handleMouseOut = (e) => {
            const element = e.target.closest("a, button, [data-cursor]");
            if (element) {
                setCursorImage(defaultCursor); // Reset to default cursor
            }
        };

        const handleMouseLeave = () => {
            console.log("Mouse left viewport");
            if (cursorRef.current) {
                cursorRef.current.style.visibility = "hidden";
            }
        };

        const handleMouseEnter = () => {
            console.log("Mouse entered viewport");
            if (cursorRef.current) {
                cursorRef.current.style.visibility = "visible";
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
        }
    }, [windowWidth]);

    if (windowWidth <= 768) {
        return null;
    }


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
                transform: 'translate(-50%, -20%)',
                zIndex: 9999,
                visibility: 'visible',
            }}
        >

        </div>
    )
}

export default Cursor
