import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScrolling({ children }) {
    const lenisOptions = {
        lerp: 0.1,         // Controls how smooth the scrolling is
        duration: 2,     // Slows down or speeds up the scrolling
        smoothTouch: false, // Disable smooth scroll on touch devices
        smooth: true,      // Smooth scroll for desktop (obviously)
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
