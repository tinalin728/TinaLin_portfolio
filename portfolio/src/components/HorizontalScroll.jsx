import { useEffect, useRef } from 'react';

function HorizontalScroll({ children, speed = 1, bgColor = 'bg-off-white' }) {
    const scrollContainerRef = useRef(null);
    const innerContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const innerContainer = innerContainerRef.current;

        // Clone content
        innerContainer.innerHTML += innerContainer.innerHTML;

        let scrollPosition = 0;

        // Scroll function
        const animateScroll = () => {
            scrollPosition += speed;
            //checks if it reaches halfway, reset position
            if (scrollPosition >= innerContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;

            //pause when the browser is inactive
            requestAnimationFrame(animateScroll);
        };

        animateScroll();

        return () => cancelAnimationFrame(animateScroll);
    }, [speed]);

    return (
        <div className={`border-y-2 border-black py-4 ${bgColor}`}>

            <div className="overflow-hidden border-y border-dashed lg:border-white">
                {/* Scrolling content */}
                <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap">
                    <div ref={innerContainerRef} className="inline-flex gap-10 items-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HorizontalScroll;
