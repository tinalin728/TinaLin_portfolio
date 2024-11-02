
import React, { useEffect } from 'react'
import './HeroAnimation.css'

function Hero() {

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                addAnimation();
            } else {
                removeAnimation();
            };
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize)
        }

    }, []);


    function addAnimation() {
        const scroller = document.querySelector('.scroller');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        scroller.setAttribute("data-animated", true);

        if (scrollerInner.children.length === 1) {
            const scrollerContent = scrollerInner.firstElementChild.cloneNode(true);
            scrollerContent.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(scrollerContent);
        }
    }

    function removeAnimation() {
        const scroller = document.querySelector('.scroller');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        scroller.removeAttribute('data.animated');

        if (scrollerInner.children.length > 1) {
            scrollerInner.removeChild(scrollerInner.lastElementChild)
        }
        //console.log('scroller is removed')
    }


    const eyeSize = {
        width: 'clamp(25px, 5vw, 60px)',
        height: 'clamp(30px, 5vw, 65px)'
    }

    const pupilSize = {
        width: 'clamp(8px, 8vw, 25px)',
        height: 'clamp(8px, 8vw, 25px)'
    }

    const testStroke = {
        '-webkit-text-stroke': '2px #FBF8F0'
    }

    return (
        <section className='min-h-[calc(100vh-110px)] lg:min-h-[calc(100vh-90px)] bg-light-yellow-bg overflow-x-hidden'>
            <div className="max-w-container">

                <div className='flex flex-col justify-center items-center md:items-end py-[5rem] pr-4'>
                    <div className='relative'>
                        <p className='text-center font-aleo'>Based in <span className='block'>Vancouver</span> </p>
                        <span className='morph absolute top-1/2 left-1/2 min-h-[80px] min-w-[120px] border border-yellow -translate-x-1/2 -translate-y-1/2 rounded-[50%] -rotate-12'></span>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col items-center md:items-start'>
                        <h2 className='text-light-yellow-bg text-stroke order-last'>Into the
                            <div className=' ml-[.8rem] md:ml-4 lg:ml-6 inline-block relative '>
                                <span className=' tracking-[8px]'> <span style={testStroke}>e</span>y<span>e</span></span>

                                <div className='absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center bg-white rounded-[50%] border-2 border-dark-grey overflow-hidden' style={eyeSize}>
                                    <div className='pupil bg-black rounded-full translate-y-[14px] md:translate-y-[18px]' style={pupilSize}></div>
                                </div>

                                {/* <div className='absolute top-1/2 right-1 -translate-y-1/2 flex items-center justify-center w-[60px] h-[65px] bg-white rounded-[50%] border-2 border-dark-grey overflow-hidden'>
                                    <div className='pupil w-[25px] h-[25px] bg-black rounded-full translate-y-[20px]'></div>
                                </div> */}


                            </div>

                            <span className='block'>& mind of</span>
                        </h2>

                        <div className='pb-4 md:pb-4 lg:pb-8' >
                            <h4 className=''>A Product Designer  & <br /> Front-End Developer </h4>
                        </div>
                    </div>

                    <div className="text-center md:text-left scroller" data-speed="fast" data-direction="left">
                        <div className='scroller__inner'>
                            <h1 className='text-orange'>
                                Tina Lin
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero

