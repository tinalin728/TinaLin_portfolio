import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react'


function ScrollToTop() {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true }); // Ensure Lenis scrolls to the top
        }
    }, [pathname, lenis]);

    return null;
}

export default ScrollToTop;
