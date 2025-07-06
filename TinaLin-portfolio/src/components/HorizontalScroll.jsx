import { useEffect, useRef } from 'react';

function HorizontalScroll({ children, speed = 1, bgColor = '' }) {
    const scrollContainerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (!scrollContainer) return;

        let scrollPosition = 0;

        const animateScroll = () => {
            if (scrollContainer) {
                scrollPosition += speed;

                // Reset the scroll position if it exceeds the scrollable content width
                if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                    scrollPosition = 0;
                }

                // Apply the scroll position
                scrollContainer.scrollLeft = scrollPosition;
            }

            animationRef.current = requestAnimationFrame(animateScroll); // Keep animating
        };

        animateScroll(); // Start the animation

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current); // Cleanup
            }
        };
    }, [speed]);

    return (
        <div className={`border-y-2 py-3 ${bgColor}`}>
            <div className="border-y border-dashed border-light-grey">
                {/* Scrolling content */}
                <div
                    ref={scrollContainerRef}
                    className="overflow-hidden whitespace-nowrap"
                    style={{
                        display: 'flex',
                        gap: '1rem',
                    }}
                >
                    <div
                        className="inline-flex gap-10 justify-center items-center py-1"
                        style={{ display: 'inline-flex', width: 'max-content' }}
                    >
                        {children}
                        {children}
                        {children}
                        {children}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorizontalScroll;
