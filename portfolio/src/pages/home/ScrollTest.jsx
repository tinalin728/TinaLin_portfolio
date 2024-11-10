import { useEffect, useRef } from 'react';
import sunglasses from '../../assets/images/homepage/emoji-sunglasses.png'; // Update with your actual image path

function ScrollTest() {
    const scrollContainerRef = useRef(null);
    const innerContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const innerContainer = innerContainerRef.current;

        // Clone content for seamless scroll
        innerContainer.innerHTML += innerContainer.innerHTML;

        let scrollPosition = 0;
        const scrollSpeed = 1; // Adjust scroll speed as desired

        // Scroll function
        const animateScroll = () => {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= innerContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(animateScroll);
        };

        animateScroll();

        return () => cancelAnimationFrame(animateScroll);
    }, []);

    return (
        <div ref={scrollContainerRef} className="overflow-hidden border-y border-white border-dashed whitespace-nowrap">
            <div ref={innerContainerRef} className="inline-flex gap-10 items-center">
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p>A designer who can code</p>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p>A developer who can design</p>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p>Based in Vancouver</p>
            </div>
        </div>
    );
}

export default ScrollTest;
