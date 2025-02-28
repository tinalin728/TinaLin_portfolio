import React, { useRef, useEffect, useState } from 'react';
import WindowWidth from '../hooks/WindowWidth';
import defaultCursor from '../../public/assets/cursor.png';
import thumbCursor from '../../public/assets/thumb.png';
import pointer from '../../public/assets/point.png';
import stickyPoint from '../../public/assets/point2.svg';

function Cursor() {
    const cursorRef = useRef(null);
    const [cursorImage, setCursorImage] = useState(defaultCursor);
    const windowWidth = WindowWidth();

    useEffect(() => {
        // Disable cursor on smaller screens
        if (windowWidth <= 768) {
            if (cursorRef.current) {
                cursorRef.current.style.visibility = 'none'; // Hide cursor
            }
            return; // Exit early
        }

        // Update cursor position on mouse move
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (cursorRef.current) {
                cursorRef.current.style.left = `${clientX}px`;
                cursorRef.current.style.top = `${clientY}px`;
            }
        };

        // Change cursor image on hover
        const handleMouseOver = (e) => {
            const element = e.target.closest('a, button, [data-cursor], .sidebar');
            if (element) {
                const cursorType = element.getAttribute('data-cursor');

                if (cursorType === 'sticky-nav') {
                    setCursorImage(stickyPoint);
                } else if (element.classList.contains('sidebar')) {
                    setCursorImage(defaultCursor);
                } else if (cursorType === 'hover') {
                    setCursorImage(thumbCursor);
                } else if (element.tagName === 'A') {
                    setCursorImage(stickyPoint);
                } else if (element.tagName === 'BUTTON') {
                    setCursorImage(stickyPoint);
                } else {
                    setCursorImage(defaultCursor);
                }
            }
        };

        // Reset cursor image when leaving elements
        const handleMouseOut = (e) => {
            const element = e.target.closest('a, button, [data-cursor, .sidebar');
            if (element) {
                setCursorImage(defaultCursor); // Reset to default cursor
            }
        };

        // Hide cursor when leaving the viewport
        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.visibility = 'hidden';
            }
        };

        // Show cursor when entering the viewport
        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.visibility = 'visible';
            }
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
        }
    }, [windowWidth]);

    // Return null for smaller screens
    if (windowWidth <= 768) {
        return null;
    }

    return (
        <div
            ref={cursorRef}
            style={{
                backgroundImage: `url(${cursorImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
                width: '38px',
                height: '38px',
                position: 'fixed',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                visibility: 'visible',
            }}
        ></div>
    );
}

export default Cursor;
