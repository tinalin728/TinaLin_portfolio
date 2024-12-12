import React, { useState, useEffect, useRef, useLayoutEffect, forwardRef } from 'react'

import { Parallax } from 'react-scroll-parallax';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import CraftCard from '../components/CraftCard';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import HorizontalScroll from '../components/HorizontalScroll';
import WindowWidth from '../hooks/WindowWidth';

import sunglasses from "../../public/assets/homepage/emoji-sunglasses.png"
import rainbow from '../../public/assets/homepage/rainbow.svg'
import thunder from '../../public/assets/homepage/thunder.svg'
import rose from '../../public/assets/homepage/rose.svg'
// import cursor from '../../public/assets/homepage/cursor.png'
import arrow from '../../public/assets/icons/arrow.svg';
import outline from '../../public/assets/homepage/outlineLogo.svg'

import design from "../../public/assets/homepage/web-design.svg"
import uxui from "../../public/assets/homepage/uxui.svg"
import coding from "../../public/assets/homepage/front-end.svg"
import data from '../data/generalData.json';

function Home() {

    const aboutRef = useRef(null);
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
        const { about, crafts } = data;
        setAbout(about);
        setCrafts(crafts);
    }, []);

    //adjust parallax speed in different window screen size
    const windowWidth = WindowWidth();
    const isMobile = windowWidth < 768;

    //card component
    const translateValues = ['translate-y-0', 'translate-y-8', 'translate-y-10', '-translate-y-2'];

    const Card = ({ title, content, icon, width }) => (
        <div className={` about-card min-h-[400px] relative z-10 transition-all duration-500 group cursor-pointer`}>
            <div className='relative z-10 p-4 bg-light-yellow-bg border h-full overflow-hidden rounded-xl'>
                <div className='flex flex-col gap-8 justify-center h-full p-6 relative group-hover:rounded-xl group-hover:bg-charcoal transition-all duration-300'>
                    <div className="">
                        <h4 className="pb-2 font-craftwork">{title}</h4>
                        <p className='text-[18px]'>{content}</p>
                    </div>

                    <div className="flex justify-center py-0 scale-[.85]">
                        <img src={icon} alt="icon" width={width} />
                    </div>
                </div>
            </div>
        </div>
    );

    // const Card = forwardRef(({ item }, ref) => (
    //     <div ref={ref} className={`about-card h-[400px] col-span-1 lg:col-span-4 relative z-10  hover:scale-[1.01] transition-all duration-500`}>
    //         <div className='absolute inset-0 '>
    //             <div className='absolute w-full h-full top-2 left-2 md:top-4 md:left-4 bg-[#EBE1D8] border-charcoal border-2 rounded-xl '> </div>
    //             <div className='absolute w-full h-full top-1 left-1 md:top-2 md:left-2 bg-[#EBE1D8] border-charcoal border-2 rounded-xl'> </div>
    //         </div>

    //         <div
    //             className='relative z-10 p-4 bg-light-yellow-bg border-2 border-black h-full rounded-xl overflow-hidden'>
    //             <div className='flex flex-col gap-8 justify-center rounded-xl h-full p-6 relative'>
    //                 <div className="">
    //                     <h4 className="pb-2 font-craftwork">{item.title}</h4>
    //                     <p className='text-[18px]'>{item.content}</p>
    //                 </div>

    //                 <div className="flex justify-center py-0 scale-[.85] md:scale-100 md:py-4">
    //                     <img src={item.icon} alt="h-full w-full" />
    //                 </div>

    //             </div>
    //         </div>
    //     </div >
    // ));


    // horizontal scroll, image swapping
    const images = [sunglasses, rainbow, thunder, rose];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1500);

        return () => clearInterval(imageInterval);
    }, []);


    // animation for hero section
    useEffect(() => {
        // headline animation
        const elements = [refs.line1.current, refs.line2.current, refs.line3.current, refs.line4.current];
        //each line has unique rotation
        const rotations = [6, -3, 6, -6];

        const timeline = gsap.timeline({
        });

        elements.forEach((element, index) => {
            timeline.fromTo(
                element,
                {
                    rotate: 0,
                },
                {
                    opacity: 1,
                    // Apply unique rotation
                    rotate: rotations[index],
                    duration: 1,
                    ease: "bounce.out",
                    delay: index * 0.1,
                    //when animation completes, allow background mouse interaction
                    onComplete: () => setAnimationComplete(true)
                },
                "<"
            );
        });
        //cursor animation
        timeline.fromTo(
            cursorRef.current, {
            x: "100%",
            opacity: 0,
        }, {
            x: '0%',
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

    const [animationComplete, setAnimationComplete] = useState(false);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const heroRef = useRef(null);
    const glitchRefs = useRef([]);
    //position for the background image
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
        //mousePosition holds the current mouse position as an object with x and y coordinates.
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

        //enabled dependency: determines whether the mouse position tracking is active. If enabled is false, the hook does nothing.
        useEffect(() => {
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

    //useMousePosition hook only tracks the mouse position when animationComplete is true (headline animation)
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
    }, [heroRef.current]);


    // Limit movement within the hero section
    useEffect(() => {

        // Only run when animation is done and mouse is inside
        if (!animationComplete || !isMouseInside) return;

        const container = heroRef.current;
        //ensures that code only executes further if the container reference is valid
        if (!container) return;
        // Get hero section bounds
        const containerBounds = container.getBoundingClientRect();

        //array is reversed (slice().reverse()) to apply animation in reverse order
        glitchRefs.current.slice().reverse().forEach((glitch, index) => {
            //condition ensures that the code inside the block is only executed if glitch is truthy
            if (glitch) {
                //relativeMouseX and Y are calculated based on the mouse's position within the container (containerBounds)
                const relativeMouseX = Math.min(
                    //mouse x position relative to container's left edge
                    Math.max(mousePosition.x - containerBounds.left, 0),
                    containerBounds.width
                );
                const relativeMouseY = Math.min(
                    //mouse y position relative to container's top edge
                    Math.max(mousePosition.y - containerBounds.top, 0),
                    containerBounds.height
                );

                //// Adjust for sensitivity, determines how much each element moves relative to mouse position
                const movementFactor = 20;
                // Centers movement around the middle of the container by subtracting half the container's dimensions.
                // Scales the movement proportionally to the container's width and height.
                const constrainedX = ((relativeMouseX - containerBounds.width / 2) / containerBounds.width) * movementFactor;
                const constrainedY = ((relativeMouseY - containerBounds.height / 2) / containerBounds.height) * movementFactor;

                // Animates the glitch element to the calculated x and y positions.
                gsap.to(glitch, {
                    x: constrainedX,
                    y: constrainedY,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: index * 0.1,
                    onUpdate: function () {
                        //ensures that the elements are always transform from the center.
                        glitch.style.transform = `translate(-50%, -50%) translate(${constrainedX}px, ${constrainedY}px)`;
                    },
                });
            }
        });
        //dependencies required to reruns the effect and that animations only start when the initial animation finishes.
    }, [mousePosition, animationComplete]);




    // animation for about section
    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: 'top 30%',
                toggleActions: "play none none none",
                //markers: true,
            }
        })

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
            }, "-=0.5"
        );

        // Button animation
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
    }, [aboutRef.current])


    const craftRef = useRef(null);
    const craftHeaderRef = useRef([]);
    const gridRef = useRef(null);

    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: craftRef.current,
                start: 'top 30%',
                toggleActions: "play none none none",
                //markers: true,
            }
        })

        tl.fromTo(
            "#craftHeader", {
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
                duration: .8,
                ease: "power3.out",
            }
        );



    }, [craftRef.current])

    useLayoutEffect(() => {
        craftHeaderRef.current.forEach((img, index) => {
            if (!img) return;

            gsap.fromTo(
                img, { opacity: 0 },
                {
                    opacity: 1,
                    duration: .8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })

    }, [gridRef.current])


    return (
        <>
            <div className='h-full relative'>
                <section ref={heroRef} className='relative h-[calc(100vh-70px)] w-full outer-container'>

                    {positions.map((pos, index) => {
                        return (
                            <div
                                key={index}
                                ref={(el) => (glitchRefs.current[index] = el)}
                                className="absolute -translate-x-1/2 -translate-y-1/2 origin-center"
                                style={{ top: pos.top, left: pos.left }}
                            >
                                <img src={outline} alt="" className="w-full scale-[1.7] md:scale-110 lg:scale-100" />
                            </div>
                        );
                    })}

                    <div className='relative max-w-container w-full h-full flex flex-col justify-center items-center gap-4'>
                        <div className='inline-flex flex-col items-center gap-2 text-center'>
                            <Parallax speed={isMobile ? -.5 : -1}>
                                <div ref={refs.line1} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal rounded-md w-fit rotate-3 -translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>I Create</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={isMobile ? -1 : -2}>
                                <div ref={refs.line2} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal rounded-md  w-fit -rotate-3 translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>Meaningful</h1>
                                </div>
                            </Parallax>

                            <Parallax speed={isMobile ? -1.5 : -3}>
                                <div ref={refs.line3} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal rounded-md  w-fit rotate-6 -translate-x-[30%]'>
                                    <h1 className='text-white font-normal big-header uppercase'>Digital</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={isMobile ? -1 : -4}>
                                <div ref={refs.line4} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal rounded-md w-fit -rotate-6 translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>Experiences</h1>
                                </div>
                            </Parallax>
                        </div>
                        <div className='absolute left-10 md:left-14 bottom-[10%]'>
                            <p className='text-lg'>Hi I'm Tina,<br />
                                a product designer <br /> who loves coding	&#x2661;</p>
                        </div>
                        {/* <div className='absolute bottom-14 right-14 hidden md:block z-10'>
                            <img src={cursor} alt="" className='w-[8rem] md:w-[10rem]' />
                        </div> */}
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

                <section ref={aboutRef} className="about-container h-full relative">
                    <div className='max-w-container py-[10rem] relative'>
                        <div className='border relative rounded-xl'>
                            {/* <div className='hidden md:block md:absolute md:h-full md:w-[.5px] md:bg-gray-400 md:top-0 md:left-1/4 md:transform md:-translate-x-1/2 -z-1'></div>
                            <div className='hidden md:block md:absolute md:h-full md:w-[.5px] md:bg-gray-400 md:top-0 md:left-2/4 md:transform md:-translate-x-1/2 -z-1'></div>
                            <div className='hidden md:block md:absolute md:h-full md:w-[.5px] md:bg-gray-400 md:top-0 md:left-3/4 md:transform md:-translate-x-1/2 -z-1'></div> */}

                            <div className='mb-6 lg:mb-12'>
                                <div className='flex w-fit mx-auto bg-charcoal rounded-md px-4 py-2 -rotate-6 -translate-y-6'>
                                    <p className="text-base text-center tracking-[3px] md:tracking-[5px] md:text-xl font-roundo-semibold uppercase text-white">Explore</p>
                                </div>

                                <div className='relative z-10'>
                                    <h3 id="aboutHeader" className="sub-header text-center font-craftwork font-extrabold mt-2 text-stroke tracking-[2px] leading-normal text-light-yellow-bg uppercase">What I Do</h3>
                                </div>
                            </div>

                            {/* ref={cardRef} */}
                            <div className='about-container px-6 flex flex-wrap justify-between items-center gap-4 mb-14 md:mb-[5rem] lg:mb-[6rem] md:px-6 lg:px-10'>
                                <div className='about-card h-fit z-10 transition-all duration-500 group cursor-pointer bg-light-yellow-bg w-full md:w-[48%] lg:w-[31%]'>
                                    <div className='relative z-10 p-4 border-2 h-full overflow-hidden rounded-xl'>
                                        <div className='flex flex-col group-hover:bg-yellow group-hover:rounded-xl transition-all duration-500'>
                                            <div className="translate-x-[60%]">
                                                <img src={design} alt="icon" className='w-[200px] md:w-[260px] h-full' />
                                            </div>
                                            <div className="p-4 ">
                                                <h2 className='group-hover:text-white'>Web Design</h2>
                                                <p className='text-[18px]'>I craft ideas and solutions to bridge people and purpose on web.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='about-card h-fit group cursor-pointer w-full md:w-[48%] lg:w-[31%]'>
                                    <div className='relative z-10 p-4 bg-light-yellow-bg border-2 h-full overflow-hidden rounded-xl'>
                                        <div className='flex flex-col group-hover:bg-orange group-hover:rounded-xl transition-all duration-500'>
                                            <div className="p-4">
                                                <h2 className="pb-2 group-hover:text-white">UXUI Design</h2>
                                                <p className='text-[18px]'>I build user-friendly and visually appealing interfaces for intuitive digital experiences. </p>
                                            </div>

                                            <div className="translate-x-[50%]">
                                                <img src={uxui} alt="icon" className='w-[200px] md:w-[230px] h-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='about-card h-fit relative z-10 transition-all duration-500 group cursor-pointer w-full md:w-[48%] lg:w-[31%]'>
                                    <div className='relative z-10 p-4 bg-light-yellow-bg border-2 h-full overflow-hidden rounded-xl'>
                                        <div className='flex flex-col group-hover:bg-blue group-hover:rounded-xl transition-all duration-500'>
                                            <div className="translate-x-[60%]">
                                                <img src={coding} alt="icon" className='w-[200px] lg:w-[260px] h-full' />
                                            </div>
                                            <div className="p-4">
                                                <h2 className="pb-2 group-hover:text-white">Front-End Development</h2>
                                                <p className='text-[18px]'>I bring designs to life by coding responsive, functional, and engaging web interfaces.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div ref={aboutCtaRef} className='flex justify-center items-center  mb-6 lg:mb-12'>
                                <PrimaryBtn
                                    to="/about"
                                    text="About Me"
                                    icon={arrow}
                                    className='about-btn'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={craftRef} className="relative h-full outer-container">
                    <div className='max-w-container border-x relative'>
                        <div className='hidden md:block md:absolute md:h-full md:w-[.5px] md:bg-gray-400 md:top-0 md:left-1/4 md:transform md:-translate-x-1/2 -z-1'></div>
                        <div className='hidden md:block md:absolute md:h-full md:w-[.5px] md:bg-gray-400 md:top-0 md:left-2/4 md:transform md:-translate-x-1/2 -z-1'></div>
                        <div className='hidden md:block md:absolute md:h-full md:w-[.5px] md:bg-gray-400 md:top-0 md:left-3/4 md:transform md:-translate-x-1/2 -z-1'></div>
                        <div className='w-full flex justify-end'>
                            <div className='inline-block w-fit bg-charcoal px-4 py-2 rotate-12'>
                                <p className="text-base tracking-[3px] md:tracking-[5px] md:text-xl font-roundo-semibold uppercase text-white">Linspired</p >
                            </div >
                        </div >
                        <div className="text-center mb-6 lg:mb-12">
                            <h3 id="craftHeader" className="text-center sub-header font-craftwork font-extrabold mt-2 tracking-[2px] text-light-yellow-bg text-stroke uppercase leading-normal">Feat. Crafts</h3>
                        </div>

                        <div ref={gridRef} className="relative grid grid-cols-1 md:grid-cols-2 mb-10 overflow-hidden">
                            {/* border in desktop */}
                            <div className='hidden md:block md:absolute md:w-full md:h-[2px] md:bg-charcoal md:top-0 z-0'></div>
                            <div className='hidden md:block md:absolute md:w-full md:h-[2px] md:bg-charcoal md:bottom-0 z-0'></div>
                            <div className='hidden md:block md:absolute md:w-full md:h-[2px] md:bg-charcoal md:top-1/2 z-0 md:-translate-y-1/2'></div>
                            <div className='hidden md:block md:absolute md:h-full md:w-[2px] md:bg-charcoal md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 z-0'></div>

                            {crafts.slice(0, 4).map((craft, index) => {
                                return (
                                    <CraftCard
                                        key={craft.id}
                                        id={craft.id}
                                        title={craft.title}
                                        img={craft.img}
                                        skills={craft.skills}
                                    // craftHeaderRef={(el) => (craftHeaderRef.current[index] = el)}
                                    />
                                );
                            })}
                        </div>


                        <div className='flex justify-center items-center'>
                            <PrimaryBtn
                                to="/crafts"
                                text="More Crafts"
                                icon={arrow}
                                className='about-btn'
                            />
                        </div>
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

            </div >
        </>
    )
}

export default Home
