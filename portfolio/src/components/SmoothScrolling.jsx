import { ReactLenis, useLenis } from 'lenis/react'
import { useLocation } from 'react-router-dom';

function SmoothScrolling({ children, disable }) {

    const location = useLocation();

    const isCraftDetail = /^\/crafts\/[^/]+$/.test(location.pathname);


    const lenisOptions = {
        lerp: 0.1,         // Controls how smooth the scrolling is
        duration: 1,     // Slows down or speeds up the scrolling
        smoothTouch: false, // Disable smooth scroll on touch devices
        smooth: true,      // Smooth scroll for desktop (obviously)
    };

    return (
        <>
            {!isCraftDetail ? (
                <ReactLenis root options={lenisOptions}>
                    {children}
                </ReactLenis>
            ) : (children)}
        </>
    );
}

export default SmoothScrolling;
