import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectPageLoading({ children, delay = 1000 }) {
    const [loading, setLoading] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);

            // Animate in the content once it's shown
            if (contentRef.current) {
                gsap.from(contentRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                });
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p className="animate-pulse text-sm uppercase tracking-widest">Loading...</p>
            </div>
        );
    }

    return (
        <div ref={contentRef}>
            {children}
        </div>
    )
}
