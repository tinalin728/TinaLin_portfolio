import { useState, useEffect, useRef } from 'react'



function BackToTop() {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 2500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showBtn])


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            style={{
                opacity: showBtn ? 1 : 0,
                pointerEvents: showBtn ? 'auto' : 'none',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                transform: showBtn ? 'scale(1)' : 'scale(0.9)',
            }}

            className='fixed flex bottom-10 right-10 items-center h-[50px] w-[50px] rounded-full justify-center z-[50] bg-charcoal bg-opacity-[.8] shadow-md'
            onClick={scrollToTop}
        >
            <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </div>
    )
}

export default BackToTop
