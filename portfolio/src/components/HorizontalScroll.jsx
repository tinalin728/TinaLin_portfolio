import { useEffect, useRef } from 'react';
import sunglasses from "../assets/images/homepage/emoji-sunglasses.png"



// props children, speed = 1, bgColor = 'bg-light-grey-bg', currentImage 

function HorizontalScroll({ children, speed = 1, bgColor = 'bg-charcoal' }) {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        let scrollPosition = 0;

        const animateScroll = () => {
            scrollPosition += speed;
            if (scrollContainer.scrollWidth > 0 && scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0; // Reset position when halfway
            }
            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(animateScroll);
        };

        animateScroll();

        return () => cancelAnimationFrame(animateScroll);
    }, [speed]);


    // ref={innerContainerRef}

    return (
        <div className={`border-y-2 border-charcoal py-4 ${bgColor}`}>

            <div className="border-y-2 border-dashed border-white">
                {/* Scrolling content */}
                <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap">
                    <div className="inline-flex gap-10 justify-center items-center py-2">
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
