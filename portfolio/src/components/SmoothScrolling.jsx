import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SmoothScrolling({ children }) {

    const location = useLocation();
    const isCraftDetail = /^\/crafts\/[^/]+$/.test(location.pathname);

    // Sync GSAP ScrollTrigger with Lenis
    const lenis = useLenis(({ scroll }) => {
        ScrollTrigger.update(); // ✅ Forces GSAP to refresh on every scroll
    });

    useEffect(() => {
        if (!lenis) return;

        // Make GSAP listen to Lenis’ smooth scrolling
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.body.style.transform ? "transform" : "fixed",
        });

        ScrollTrigger.addEventListener("refresh", () => lenis.raf()); // ✅ Keeps GSAP in sync
        ScrollTrigger.refresh(); // ✅ Ensures correct trigger positions

        return () => {
            ScrollTrigger.removeEventListener("refresh", () => lenis.raf());
        };
    }, [lenis]);

    return (
        <>
            {!isCraftDetail ? (
                <ReactLenis root options={{ smooth: true, lerp: 0.1, duration: 1, smoothTouch: false }}>
                    {children}
                </ReactLenis>
            ) : (children)}
        </>
    );
}

export default SmoothScrolling;
