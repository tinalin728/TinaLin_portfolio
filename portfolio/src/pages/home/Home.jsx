import React, { useState, useEffect, useRef, useLayoutEffect, forwardRef } from 'react'

import { Parallax } from 'react-scroll-parallax';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import CraftCard from '../../components/CraftCard';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import HorizontalScroll from '../../components/HorizontalScroll';
import WindowWidth from '../../hooks/WindowWidth';

import sunglasses from "/../../assets/images/homepage/emoji-sunglasses.png"
import rainbow from '../../assets/images/homepage/rainbow.svg'
import thunder from '../../assets/images/homepage/thunder.svg'
import rose from '../../assets/images/homepage/rose.svg'
import cursor from '../../assets/images/homepage/cursor.png'
import arrow from '../../assets/images/arrow.svg';
import outline from '../../assets/images/homepage/outlineLogo.svg'


function Home() {

    const aboutRef = useRef(null);
    const exploreRef = useRef(null);
    const cardRef = useRef(null);
    const cardRefs = useRef([]);
    const aboutCtaRef = useRef(null);
    const refs = {
        line1: useRef(null),
        line2: useRef(null),
        line3: useRef(null),
        line4: useRef(null),
    }
    const cursorRef = useRef(null);


    const [about, setAbout] = useState([]);
    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const { about, crafts } = data;
                setAbout(about);
                setCrafts(crafts);
            });
    }, [])



    //const windowWidth = WindowWidth();

    const Card = forwardRef(({ item }, ref) => (
        <div ref={ref} className={`about-card min-w-[300px] h-[400px] col-span-1 lg:col-span-4 relative z-10  hover:scale-[1.01] transition-all duration-500`}>
            <div className='absolute inset-0 '>
                <div className='absolute w-full h-full top-4 left-4 bg-[#EBE1D8] border-charcoal border-2 rounded-xl '> </div>
                <div className='absolute w-full h-full top-2 left-2 bg-[#EBE1D8] border-charcoal border-2 rounded-xl'> </div>
            </div>

            <div
                className='relative z-10 p-6 bg-light-yellow-bg border-2 border-black h-full   rounded-xl overflow-hidden'>
                <div className='flex flex-col gap-8 justify-center rounded-xl h-full p-6 relative'>
                    <div className="">
                        <h4 className="pb-2 font-craftwork">{item.title}</h4>
                        <p className='text-[18px]'>{item.content}</p>
                    </div>

                    <div className="flex justify-center py-4">
                        <img src={item.icon} alt="h-full w-full" />
                    </div>

                </div>
            </div>
        </div >
    ));


    // horizontal scroll image swapping
    const images = [sunglasses, rainbow, thunder, rose];

    const [currentImage, setCurrentImage] = useState(0)
    const currentImageRef = useRef(currentImage)
    useEffect(() => {
        currentImageRef.current = currentImage;
    }, [currentImage]);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1500);
        return () => clearInterval(imageInterval)
    }, [])


    const [animationComplete, setAnimationComplete] = useState(false);

    // gsap for hero
    useEffect(() => {
        const elements = [refs.line1.current, refs.line2.current, refs.line3.current, refs.line4.current];
        const rotations = [6, -3, 6, -6];

        const timeline = gsap.timeline({
        });

        elements.forEach((element, index) => {
            timeline.fromTo(
                element,
                {
                    rotate: 0, // Start with no rotation
                },
                {
                    opacity: 1,
                    rotate: rotations[index], // Apply unique rotation
                    duration: 1,
                    ease: "bounce.out",
                    delay: index * 0.1, // Stagger animations manually,
                    onComplete: () => setAnimationComplete(true)
                },
                "<"
            );
        });

        timeline.fromTo(
            cursorRef.current, {
            //x: "100%",
            opacity: 0,
        }, {
            // x: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        });
        timeline.to(
            cursorRef.current, {
            y: '+=8',
            x: '-=5',
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut'
        }, '+=.2'
        );

    }, [])

    const [isMouseInside, setIsMouseInside] = useState(false);
    const heroRef = useRef(null);
    const glitchRefs = useRef([]);
    const positions = [
        { top: "53%", left: "53%" },
        { top: "52%", left: "52%" },
        { top: "51%", left: "51%" },
        { top: "50%", left: "50%" },
        { top: "49%", left: "49%" },
        { top: "48%", left: "48%" },
    ];

    //hook responsible for tracking mouse position
    const useMousePosition = (enabled) => {

        const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

        React.useEffect(() => {
            if (!enabled) return;

            const updateMousePosition = (ev) => {
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            };

            window.addEventListener("mousemove", updateMousePosition);

            return () => {
                window.removeEventListener("mousemove", updateMousePosition);
            };
        }, [enabled]);

        return mousePosition;
    };

    const mousePosition = useMousePosition(animationComplete);

    // Attach mouse event listeners to the hero section
    useEffect(() => {
        const container = heroRef.current;
        if (!container) return;

        const handleMouseEnter = () => setIsMouseInside(true);
        const handleMouseLeave = () => setIsMouseInside(false);

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);


    // Limit movement within the hero section
    useEffect(() => {
        if (!animationComplete || !isMouseInside) return; // Only run when animation is done and mouse is inside

        if (!animationComplete) return;

        const container = heroRef.current;
        if (!container) return;

        const containerBounds = container.getBoundingClientRect(); // Get hero section bounds

        glitchRefs.current.forEach((glitch, index) => {
            if (glitch) {
                const relativeMouseX = Math.min(
                    Math.max(mousePosition.x - containerBounds.left, 0),
                    containerBounds.width
                );
                const relativeMouseY = Math.min(
                    Math.max(mousePosition.y - containerBounds.top, 0),
                    containerBounds.height
                );

                const movementFactor = 25; // Adjust for sensitivity
                const constrainedX = ((relativeMouseX - containerBounds.width / 2) / containerBounds.width) * movementFactor;
                const constrainedY = ((relativeMouseY - containerBounds.height / 2) / containerBounds.height) * movementFactor;

                gsap.to(glitch, {
                    x: constrainedX,
                    y: constrainedY,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: index * 0.1,
                });
            }
        });
    }, [mousePosition, animationComplete]);


    // gsap for about section
    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: 'top 30%',
                toggleActions: 'play none none reverse',
                //markers: true,
            }
        })

        tl.fromTo(
            exploreRef.current, {
            width: '0', opacity: 0
        },
            {
                width: 'auto',
                opacity: 1,
                duration: .8,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        tl.fromTo(
            "#aboutHeader",
            {
                textShadow: "none",
            },
            {
                textShadow: `
                0.5px 0.5px 0 #1e1e1e,
                1px 1px 0 #1e1e1e,
                1.5px 1.5px 0 #1e1e1e,
                2px 2px 0 #1e1e1e,
                2.5px 2.5px 0 #1e1e1e,
                3px 3px 0 #1e1e1e,
                3.5px 3.5px 0 #1e1e1e,
                4px 4px 0 #1e1e1e,
                4.5px 4.5px 0 #1e1e1e,
                5px 5px 0 #1e1e1e,
                5.5px 5.5px 0 #1e1e1e,
                6px 6px 0 #1e1e1e`,
                duration: 1,
                ease: "power3.out",
            }
        );

        tl.fromTo(
            cardRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2, // Stagger animation for cards
            },
            "+=0.2"
        );

        // Button animation (AFTER cards finish)
        tl.fromTo(
            aboutCtaRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=1"
        );


    }, [])




    return (
        <>
            <div id='main-content'>
                <section ref={heroRef} className='p-0 relative h-[calc(100vh-70px)] w-full'>
                    {positions.map((pos, index) => (
                        <div
                            key={index}
                            ref={(el) => (glitchRefs.current[index] = el)}
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            style={{ top: pos.top, left: pos.left }}
                        >
                            <img src={outline} alt="" className="w-full scale-150 md:scale-110 lg:scale-100" />
                        </div>
                    ))}


                    <div className='relative max-w-container w-full h-full flex flex-col justify-center items-center gap-4'>
                        <div className='inline-flex flex-col items-center gap-2 text-center '>
                            <Parallax speed={-1}>
                                <div ref={refs.line1} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit rotate-3 -translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>I Create</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={-2}>
                                <div ref={refs.line2} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit -rotate-3 translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>Meaningful</h1>
                                </div>
                            </Parallax>

                            <Parallax speed={-3}>
                                <div ref={refs.line3} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit rotate-6 -translate-x-[30%]'>
                                    <h1 className='text-white font-normal big-header uppercase'>Digital</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={-4}>
                                <div ref={refs.line4} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit -rotate-6 translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>Experiences</h1>
                                </div>
                            </Parallax>
                        </div>
                        <div className='absolute left-10 md:left-14 bottom-14'>

                            <p className='text-lg'>Hi I'm Tina,<br />
                                a product designer <br /> who loves coding	&#x2661;</p>
                        </div>
                        <div className='absolute bottom-10 right-14 hidden md:block'>
                            <img ref={cursorRef} src={cursor} alt="" className='w-[8rem] md:w-[10rem]' />
                        </div>
                    </div>
                </section >


                <HorizontalScroll speed={.3}>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide text-white'>A designer who can code</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide text-white'>A developer who can design</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide text-white'>Based in Vancouver</span>
                </HorizontalScroll>

                <section ref={aboutRef} className="about-container pb-2 h-full py-[10rem]">
                    <div className='max-w-container'>
                        <div className='mb-6 lg:mb-12'>
                            <div ref={exploreRef} className='inline-block w-fit bg-charcoal px-4 py-2 -rotate-12'>
                                <p className="text-lg tracking-[3px] md:tracking-[5px] md:text-xl font-roundo-semibold uppercase text-white">Explore</p>
                            </div>

                            <div>
                                <h3 id="aboutHeader" className="sub-header text-center font-craftwork font-extrabold mt-2 text-stroke tracking-[2px] leading-normal text-light-yellow-bg uppercase">What I Do</h3>
                            </div>

                        </div>

                        <div ref={cardRef} className={`about-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 place-items-center gap-14 mb-14 md:mb-[5rem] lg:mb-[6rem]`}>
                            {about.map((item, index) => (
                                <Card
                                    key={item.id}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    item={item}
                                />
                            ))}
                        </div>

                        <div ref={aboutCtaRef} className='flex justify-center items-center'>
                            <PrimaryBtn
                                to="/about"
                                text="More About Me"
                                icon={arrow}
                                className='about-btn'
                            />
                        </div>
                    </div>
                </section>

                <section className="relative h-full py-[10rem]">
                    <div className=' max-w-container w-full flex justify-end'>
                        <div className='inline-block w-fit bg-charcoal px-4 py-2 rotate-12'>
                            <p className="text-lg tracking-[3px] md:tracking-[5px] md:text-xl font-roundo-semibold uppercase text-white">Linspired</p >
                        </div >
                    </div >
                    <div className="text-center mb-6 lg:mb-12">
                        <h3 id="craftHeader" className="text-center sub-header font-craftwork font-extrabold mt-2 tracking-[2px] text-light-yellow-bg text-stroke text-shadow uppercase leading-normal">Feat. Crafts</h3>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 border-t-2 border-black mb-10'>
                        {crafts.slice(0, 4).map((craft) => (
                            <CraftCard
                                key={craft.id}
                                id={craft.id}
                                title={craft.title}
                                img={craft.img}
                                skills={craft.skills}
                                border={`${craft.id === 1 || craft.id === 3 ? 'md:border-r-2' : ''}`}
                            />

                        ))}
                    </div>

                    <div className='flex justify-center items-center'>
                        <PrimaryBtn
                            to="/crafts"
                            text="More Crafts"
                            icon={arrow}
                            className='about-btn'
                        />
                    </div>
                </section >
                <HorizontalScroll speed={.1} bgColor='bg-light-yellow-bg'>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide'>A designer who can code</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide '>A developer who can design</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide '>Based in Vancouver</span>
                </HorizontalScroll>

            </div>
        </>
    )
}

export default Home


{/* <div className='smile absolute bottom-0 -left-10 group z-20' >
                <div className="max-w-container group">
                    <div className="relative grid place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 177" fill="none" className='absolute top-1 overflow-hidden group-hover:scale-[.95] origin-center transition duration-300 ease-in-out'>

                            <path d="M87.3985 130.111C62.8786 130.004 43.0881 110.012 43.1953 85.4582C43.3024 60.9042 63.2666 41.086 87.7864 41.193C112.306 41.3 132.097 61.2917 131.99 85.8456C131.882 110.4 111.918 130.218 87.3985 130.111Z" fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" className='group-hover:scale-[1.8] origin-center transition duration-300 ease-in-out' />

                            <g className='group'>
                                <path d="M103.659 68.3914C102.724 68.3873 101.969 67.6249 101.974 66.6885C101.978 65.7521 102.739 64.9963 103.674 65.0004C104.609 65.0045 105.364 65.7669 105.36 66.7033C105.356 67.6397 104.594 68.3954 103.659 68.3914Z" fill="#222831" />
                                <path d="M76.1925 68.2703C75.2574 68.2662 74.5027 67.5038 74.5068 66.5674C74.5109 65.631 75.2722 64.8753 76.2073 64.8793C77.1424 64.8834 77.8971 65.6458 77.893 66.5822C77.8889 67.5186 77.1276 68.2743 76.1925 68.2703Z" fill="#222831" />
                                <path d="M99.498 78.7324C99.498 78.7324 96.4865 84.4146 91.1114 84.2013C85.7363 83.988 82.7317 78.6593 82.7317 78.6593" stroke="#222831" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M63.3601 77.2559C59.9315 77.2409 57.1564 76.2167 57.1619 74.9682C57.1673 73.7197 59.9512 72.7197 63.3798 72.7346C66.8084 72.7496 69.5835 73.7738 69.578 75.0223C69.5726 76.2708 66.7887 77.2708 63.3601 77.2559Z" fill="#FFC7C7" />
                                <path d="M116.038 76.7344C112.609 76.7194 109.834 75.6952 109.84 74.4467C109.845 73.1982 112.629 72.1982 116.058 72.2131C119.486 72.2281 122.261 73.2523 122.256 74.5009C122.25 75.7494 119.466 76.7494 116.038 76.7344Z" fill="#FFC7C7" />
                            </g>
                        </svg>


                        <svg className='rotating-text' viewBox="0 0 200 200" width="160" height="160" >
                            <defs>
                                <path
                                    id="circle"
                                    d="M 100, 100
                                            m -75, 0
                                            a 75, 75 0 1, 0 150, 0
                                            a 75, 75 0 1, 0 -150, 0"
                                ></path>
                            </defs>
                            <text width="300">
                                <textPath alignmentBaseline="top" href="#circle" className="tracking-[8px] text-[18px]">
                                    Click Me To Have Some Fun *
                                </textPath>
                            </text>
                        </svg>

                    </div>
                </div>
            </div> */}




{/* <div className='-rotate-12 flex justify-end translate-y-[15%] md:translate-x-[20%] md:-translate-y-[5%]'>
                                        <div className='relative grid place-items-center'>
                                            <h2 className='text-dotted dotted-header lg:text-[60px] font-extrabold font-craftwork leading-tight' data-text='Playground'>
                                                Playground
                                            </h2>
                                            <div className='w-full scale-125 absolute'><img src={border} alt="" /></div>
                                        </div>
                                    </div> */}

{/* <div ref={bgRef} className='z-0 w-full absolute h-[105%] bg-light-yellow-bg rounded-t-[50px] -top-[8px] left-1/2 -translate-x-1/2'>
                        </div> */}



{/* <div className='absolute inset-0 bg-cover bg-center z-10'>
                    <Parallax
                        speed={-500}
                        rotate={[45, -90, 'easeIn']}
                        scale={[1.2, .7, 'easeInOut']}
                    >
                        <img src={name} alt="" className='w-full' />
                    </Parallax>
                </div> */}




{/* <div className='smile absolute -bottom-[8%] left-1/2 -translate-x-1/2 group'  >
<div className="max-w-container scale-125">
    <div className="relative grid place-items-center group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 177" fill="none" className='absolute top-1 overflow-hidden'>

            <path d="M87.3985 130.111C62.8786 130.004 43.0881 110.012 43.1953 85.4582C43.3024 60.9042 63.2666 41.086 87.7864 41.193C112.306 41.3 132.097 61.2917 131.99 85.8456C131.882 110.4 111.918 130.218 87.3985 130.111Z" fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" className='group-hover:scale-[1.8] origin-center transition duration-300 ease-in-out' />

            <g className='group'>
                <path d="M103.659 68.3914C102.724 68.3873 101.969 67.6249 101.974 66.6885C101.978 65.7521 102.739 64.9963 103.674 65.0004C104.609 65.0045 105.364 65.7669 105.36 66.7033C105.356 67.6397 104.594 68.3954 103.659 68.3914Z" fill="#222831" />
                <path d="M76.1925 68.2703C75.2574 68.2662 74.5027 67.5038 74.5068 66.5674C74.5109 65.631 75.2722 64.8753 76.2073 64.8793C77.1424 64.8834 77.8971 65.6458 77.893 66.5822C77.8889 67.5186 77.1276 68.2743 76.1925 68.2703Z" fill="#222831" />
                <path d="M99.498 78.7324C99.498 78.7324 96.4865 84.4146 91.1114 84.2013C85.7363 83.988 82.7317 78.6593 82.7317 78.6593" stroke="#222831" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M63.3601 77.2559C59.9315 77.2409 57.1564 76.2167 57.1619 74.9682C57.1673 73.7197 59.9512 72.7197 63.3798 72.7346C66.8084 72.7496 69.5835 73.7738 69.578 75.0223C69.5726 76.2708 66.7887 77.2708 63.3601 77.2559Z" fill="#FFC7C7" />
                <path d="M116.038 76.7344C112.609 76.7194 109.834 75.6952 109.84 74.4467C109.845 73.1982 112.629 72.1982 116.058 72.2131C119.486 72.2281 122.261 73.2523 122.256 74.5009C122.25 75.7494 119.466 76.7494 116.038 76.7344Z" fill="#FFC7C7" />
            </g>
        </svg>


        <svg className='rotating-text' viewBox="0 0 200 200" width="160" height="160" >
            <defs>
                <path
                    id="circle"
                    d="M 100, 100
                        m -75, 0
                        a 75, 75 0 1, 0 150, 0
                        a 75, 75 0 1, 0 -150, 0"
                ></path>
            </defs>
            <text width="300">
                <textPath alignmentBaseline="top" href="#circle" className="tracking-[4.3px] ">
                    SCROLL TO EXPLORE & SEE THE FUN *
                </textPath>
            </text>
        </svg>

    </div>
</div>
</div> */}

{/* 
                    <div className="max-w-container h-full">
                        <div className="bg-orange rounded-[50px] flex flex-col justify-center items-center gap-8 h-full">
                            <h2 className='text-center font-craftwork  text-light-yellow-bg quote'>A</h2>
                            <h2 className='text-light-yellow-bg quote font-craftwork font-extrabold'> Product Designer
                                <span className='ml-4 font-medium text-white'> & </span>
                            </h2>
                            <h2 className='text-light-yellow-bg quote  font-craftwork font-extrabold tracking-[3px]'>Front-End Developer</h2>
                        </div>
                    </div> */}









// const dashlineStyle = {
//     backgroundImage: `url(${dashline})`,
//     backgroundPosition: 'left center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '112%'
// }

// const airplaneRef = useRef(null);
// useGSAP(() => {
//     gsap.fromTo(
//         airplaneRef.current,
//         { x: '-100%' },
//         {
//             x: '0%',
//             duration: 2,
//             ease: 'power2.out',
//         }
//     )
// }, { scope: airplaneRef })


//scroll to reveal header
// useEffect(() => {
//     // Set initial scale of the clipping mask to hide the orange text
//     gsap.set([clipPathRef1.current, clipPathRef2.current, clipPathRef3.current], { scaleY: 0, transformOrigin: 'center' });

//     // Reveal the first line
//     gsap.to(clipPathRef1.current, {
//         duration: 2,
//         scaleY: 1, // Scale up to reveal the text
//         ease: 'power1.out',
//         scrollTrigger: {
//             trigger: '.reveal-text',
//             start: 'top center', // Trigger when the first line reaches the center of the viewport
//             end: 'bottom center',
//             scrub: true, // Smooth scroll effect
//             toggleActions: 'play none none reverse',
//             markers: true,
//         },
//     });

//     // Reveal the second line
//     gsap.to(clipPathRef2.current, {
//         duration: 2,
//         scaleY: 1,
//         ease: 'power1.out',
//         scrollTrigger: {
//             trigger: '.reveal-text',
//             start: 'top+=50 center', // Trigger the second line after the first one
//             end: 'bottom center',
//             toggleActions: 'play none none reverse',
//             scrub: true,
//         },
//     });

//     // Reveal the third line
//     gsap.to(clipPathRef3.current, {
//         duration: 2,
//         scaleY: 1,
//         ease: 'power1.out',
//         scrollTrigger: {
//             trigger: '.reveal-text',
//             start: 'top+=100 center', // Trigger the third line after the second one
//             end: 'bottom center',
//             toggleActions: 'play none none reverse',
//             scrub: true,
//         },
//     });
// }, []);





{/* <HorizontalScroll speed={.1}>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p >A designer who can code</p>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p >A developer who can design</p>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p >Based in Vancouver</p>
            </HorizontalScroll> */}

{/* divider */ }
{/* <div className='bg-light-grey-bg flex flex-col justify-center'>
                <div ref={emojiContainer} className="max-w-container w-full origin-center	">
                    <img className='origin-center' src={sunglasses} alt="" width={30} />
                </div>
                <div className="max-w-container w-full">
                    <div className="max-w-container h-2"
                        style={{
                            backgroundImage: `url(${pBorder})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: 'auto 100%'
                        }}>

                    </div>
                </div>
            </div> */}



{/* <div className="reveal-text h-screen flex items-center justify-center text-center">
    <div className="relative ">
        <h2 className="relative font-roundo-semibold text-[60px] leading-normal border border-black overflow-hidden">
            <svg width="100%" height="100%">
                <defs>
                    <clipPath id="textRevealClip1">
                        <rect ref={clipPathRef1} x="0" y="0" width="100%" height="100%" />
                    </clipPath>
                    <clipPath id="textRevealClip2">
                        <rect ref={clipPathRef2} x="0" y="0" width="100%" height="100%" />
                    </clipPath>
                    <clipPath id="textRevealClip3">
                        <rect ref={clipPathRef3} x="0" y="0" width="100%" height="100%" />
                    </clipPath>
                </defs>
            </svg>

            <span className="inline-flex items-center text-gray-500" style={{ clipPath: 'url(#textRevealClip1)' }}>
                I strive to build
                <span className="font-craftwork font-extrabold text-[55px] ml-4">paths</span>
                <span className="ml-4">
                    <img src={path} alt="" className="w-[50px]" />
                </span>
            </span>
            <br />
            <span className="text-gray-500" style={{ clipPath: 'url(#textRevealClip2)' }}>that bring warmth</span>
            <br />
            <span className="ml-4 text-gray-500" style={{ clipPath: 'url(#textRevealClip3)' }}>& connections</span>
        </h2>
    </div>
</div> */}

{/* Text content with the classes to animate the color */ }
{/* <span className="inline-flex items-center text-wrap text-gray-500 reveal-text-line1">
                                    I strive to build paths
                                    <span className="mx-4">
                                        <img src={path} alt="" className="w-[50px]" />
                                    </span>
                                    that
                                </span>
                                <br />

                                <span className="reveal-text-line2 text-gray-500 inline-flex items-center text-wrap">
                                    bring warmth
                                    <span className='ml-4'>
                                        <img src={wink} alt="" width={60} />
                                    </span>
                                    <span className="ml-4">& connections</span>
                                    <span className='ml-4'> <img src={connection} alt="" /></span> 
                                    </span>*/}



// useEffect(() => {
//     gsap.fromTo(
//         '.line-1', {
//         x: -1000,
//     },
//         {
//             x: 0,
//             duration: 3,
//             ease: 'power2.out',
//             scrollTrigger: {
//                 trigger: '.line-1',
//                 start: 'top center',
//                 end: 'bottom 20% center',
//                 scrub: 1,
//                 toggleActions: 'play none none reverse',
//                 markers: true,
//             }
//         }
//     )
//     gsap.fromTo(
//         '.line-2', {
//         x: 1000,
//     },
//         {
//             x: 0,
//             duration: 3,
//             ease: 'power2.out',
//             scrollTrigger: {
//                 trigger: '.line-1',
//                 start: 'top center',
//                 end: 'bottom 20% center',
//                 scrub: 1,
//                 toggleActions: 'play none none reverse',
//                 markers: true,
//             }
//         }
//     )

//     // Apply the opacity and scale effect when scrolling
//     gsap.fromTo('.reveal-text-line', {
//         opacity: 0,  // Initial opacity (invisible)
//         scale: 0.9,  // Initial scale (slightly smaller)
//     }, {
//         opacity: 1,  // Final opacity (fully visible)
//         scale: 1,    // Final scale (normal size)
//         duration: 1.5, // Duration of the effect
//         ease: 'power2.out', // Ease for smooth transition
//         scrollTrigger: {
//             trigger: '.reveal-text-line',  // Element to trigger the animation on
//             start: 'top 80%',  // Trigger when top of the element reaches 80% of the viewport height
//             end: 'bottom', // End when bottom of the element reaches 20% of the viewport height
//             scrub: 1,  // Smoothly scrub the effect based on scroll position
//             toggleActions: 'play none none reverse',  // Play on scroll into view and reverse on scroll out

//         },
//     });
// }, []);





// useEffect(() => {
//     const Engine = Matter.Engine,
//         Render = Matter.Render,
//         Events = Matter.Events,
//         MouseConstraint = Matter.MouseConstraint,
//         Mouse = Matter.Mouse,
//         World = Matter.World,
//         Bodies = Matter.Bodies;

//     // Create the engine
//     const engine = Engine.create();
//     const world = engine.world;

//     // Get the canvas size dynamically
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Ensure canvas size is set to full screen
//     canvasRef.current.width = width;
//     canvasRef.current.height = height;

//     // Create a renderer
//     const render = Render.create({
//         canvas: canvasRef.current,
//         engine: engine,
//         options: {
//             width: width,
//             height: height,
//             background: "transparent", // Background color of the canvas
//             wireframes: false,
//         },
//     });

//     // Create ground and walls for collisions
//     const ground = Bodies.rectangle((width / 2) + 160, height + 60, width + 320, 160, {
//         isStatic: true,
//         render: {
//             fillStyle: "transparent",
//         }
//     });
//     const wallLeft = Bodies.rectangle(-80, height / 2, 160, height, { isStatic: true });
//     const wallRight = Bodies.rectangle(width + 80, height / 2, 160, height, { isStatic: true });
//     const roof = Bodies.rectangle((width / 2) + 160, -80, width + 320, 160, { isStatic: true })

//     console.log("World setup complete. Bodies added:", world.bodies);



//     // Set gravity (make the pills fall)
//     engine.world.gravity.y = 1;

//     const border = 2
//     const radius = 20
//     const xOffset = 200
//     // pills
//     let uiux = Bodies.rectangle(width / 2 - xOffset, height / 2 - 100, 133, 40, {
//         restitution: 1,
//         render: {
//             sprite: {
//                 texture: '/assets/pills/pill.svg',

//             }
//         }
//     })
//     let frontEnd = Bodies.rectangle(width / 2 + 200, height / 2 - 100, 300, 40, {
//         restitution: 1,
//         render: {
//             sprite: {
//                 texture: '/public/assets/pills/pill2.svg',
//             }
//         }
//     })
//     let fun = Bodies.rectangle(width / 2, height / 2, 133, 40, {
//         restitution: 1,

//         render: {
//             sprite: {
//                 texture: '/public/assets/pills/pill3.svg'
//             }
//         }
//     })


//     World.add(engine.world, [ground, wallLeft, wallRight, roof, uiux, frontEnd, fun])

//     // add mouse control
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//             stiffness: .2,
//             render: {
//                 visible: false
//             }
//         }
//     });
//     // mouseConstraintRef.current = mouseConstraint

//     World.add(world, mouseConstraint)

//     render.mouse = mouse
//     console.log("mouse position", mouse.position);
//     console.log("dragging body", mouseConstraint.bodyB);
//     // Run the engine and the renderer
//     Engine.run(engine);
//     Render.run(render);

//     Events.on(mouseConstraint, "startdrag", (event) => {
//         console.log("Dragging body: ", event.body);
//     });

//     const handleWheel = (event) => {
//         event.preventDefault();
//         if (!mouseConstraint.body) {
//             window.scrollBy(0, event.deltaY);
//         }
//     };

//     if (canvasRef.current) {

//         canvasRef.current.addEventListener('wheel', handleWheel);
//     }

//     const interval = setInterval(() => {
//         Engine.update(engine, 1000 / 60);
//     }, 1000 / 60);

//     // Cleanup on unmount
//     return () => {
//         Matter.Render.stop(render);
//         Matter.Engine.clear(engine);
//         canvasRef.current.removeEventListener('wheel', handleWheel);
//     };
// }, []);
