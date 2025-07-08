import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [canRender, setCanRender] = useState(false);

    useLayoutEffect(() => {
        // Reset scroll to top immediately
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Wait a tick before allowing render
        const frame = requestAnimationFrame(() => setCanRender(true));

        return () => {
            cancelAnimationFrame(frame);
            setCanRender(false); // reset on route change
        };
    }, [pathname]);

    // Prevent rendering anything until scroll is complete
    if (!canRender) return null;
    return null;
};

export default ScrollToTop;
