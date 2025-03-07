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

            className='fixed flex bottom-10 left-1/2 -translate-x-1/2 items-center h-[50px] w-[50px] justify-center z-[50] rounded-full border-2 bg-primary cursor-pointer shadow-button hover:shadow-none hover:bottom-[2.4rem] transition-all duration-200 ease-in-out'
            onClick={scrollToTop}
        >
            <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
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
