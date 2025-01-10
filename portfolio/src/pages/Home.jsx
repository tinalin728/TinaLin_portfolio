import React, { useState, useEffect, useRef, useLayoutEffect, forwardRef } from 'react'
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"


import CraftCard from '../components/CraftCard';
import PrimaryBtn from '../components/buttons/PrimaryBtn';
import HorizontalScroll from '../components/HorizontalScroll';
import WindowWidth from '../hooks/WindowWidth';

import sunglasses from "../../public/assets/homepage/emoji-sunglasses.png"
import rainbow from '../../public/assets/homepage/rainbow.svg'
import thunder from '../../public/assets/homepage/thunder.svg'
import rose from '../../public/assets/homepage/rose.svg'
import icon1 from '../../public/assets/homepage/marquee/icon1.svg'
import icon2 from '../../public/assets/homepage/marquee/icon2.svg'
import icon3 from '../../public/assets/homepage/marquee/icon3.svg'
import icon4 from '../../public/assets/homepage/marquee/icon4.svg'
import icon5 from '../../public/assets/homepage/marquee/icon5.svg'
import arrow from '../../public/assets/icons/arrow.svg';
import arrowD from '../../public/assets/icons/arrow_down.svg';
import outline from '../../public/assets/homepage/outlineLogo.svg'
import logo from '../../public/assets/logo.svg'


import design from "../../public/assets/homepage/web-design.svg"
import uxui from "../../public/assets/homepage/uxui.svg"
import coding from "../../public/assets/homepage/front-end.svg"
import data from '../data/generalData.json';


function Home() {
    const [crafts, setCrafts] = useState([]);
    const windowWidth = WindowWidth();
    const isMobile = windowWidth < 768;

    const [time, setTime] = useState('');

    useEffect(() => {
        const { about, crafts } = data;
        setCrafts(crafts);
    }, []);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "America/Los_Angeles" };
            const localTime = now.toLocaleTimeString("en-US", options);
            setTime(localTime);
        };

        updateTime(); // Initialize the time immediately
        const interval = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);



    // horizontal scroll, image swapping
    const images = [sunglasses, rainbow, thunder, rose];
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 1500);

        return () => clearInterval(imageInterval);
    }, []);

    const refs = {
        line1: useRef(null),
        line2: useRef(null),
        line3: useRef(null),
        line4: useRef(null),
    }
    const cursorRef = useRef(null);

    // animation for hero section
    useGSAP(() => {

        const elements = [refs.line1.current, refs.line2.current, refs.line3.current, refs.line4.current];
        const rotations = [6, -3, 6, -6];

        const timeline = gsap.timeline();

        elements.forEach((element, index) => {
            if (!element) return; // Ensure element exists before animating

            timeline.fromTo(
                element,
                {
                    rotate: 0, // Start with no rotation
                },
                {
                    rotate: rotations[index], // Apply unique rotation
                    duration: 1.2,
                    ease: "bounce.out",
                    delay: index * 0.2, // Stagger delay for each element
                    onComplete: () => setAnimationComplete(true)
                },
                "<"
            );
        });

        timeline.to(
            ".role",
            {
                color: "#E36A46",
                duration: 0.5,
                ease: "power1.out",
            },
            "+=1.5"
        );
    }, []); // Only start the animation after preloader finishes


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

    useEffect(() => {
        // Function to calculate dynamic scaling
        const applyInitialScaling = () => {
            const screenWidth = window.innerWidth;

            // Calculate the scale dynamically based on screen width
            const defaultScale =
                screenWidth > 1920
                    ? 1.3
                    : screenWidth > 1440
                        ? 1 + (0.3 * (screenWidth - 1440)) / (1920 - 1440)
                        : 1;


            console.log(`Screen Width: ${screenWidth}, Default Scale: ${defaultScale}`); // Debugging

            // Apply the scaling to each glitch element
            glitchRefs.current.forEach((glitch, index) => {
                if (glitch) {
                    // Ensure each glitch has the correct transform applied
                    glitch.style.transform = `translate(-50%, -50%) scale(${defaultScale})`;
                    console.log(`Element ${index} Transform: ${glitch.style.transform}`); // Debugging
                }
            });
        };

        applyInitialScaling(); // Apply scaling on mount

        // Reapply scaling dynamically on window resize
        window.addEventListener("resize", applyInitialScaling);

        return () => {
            window.removeEventListener("resize", applyInitialScaling);
        };
    }, []);




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

                const screenWidth = window.innerWidth;
                const dynamicScale =
                    screenWidth > 1920
                        ? 1.3
                        : screenWidth > 1440
                            ? 1 + (0.3 * (screenWidth - 1440)) / (1920 - 1440)
                            : 1;

                // Animates the glitch element to the calculated x and y positions.
                gsap.to(glitch, {
                    x: constrainedX,
                    y: constrainedY,
                    duration: 0.5,
                    scale: dynamicScale,
                    ease: "power2.out",
                    delay: index * 0.1,
                    onUpdate: function () {
                        //ensures that the elements are always transform from the center.
                        glitch.style.transform = `translate(-50%, -50%) translate(${constrainedX}px, ${constrainedY}px) scale(${dynamicScale})`;
                    },
                });
            }
        });
        //dependencies required to reruns the effect and that animations only start when the initial animation finishes.
    }, [mousePosition, animationComplete]);


    const craftRef = useRef(null);
    useGSAP(() => {
        const scrollTriggerConfig = {
            trigger: craftRef.current,
            start: "top 10%",
            toggleActions: "play none none none",
            // markers: true,
        };

        // Animate recent text
        gsap.fromTo(
            ".recent",
            { y: -50, rotate: 0 },
            {
                y: 0,
                rotate: -6,
                duration: 0.5,
                ease: "bounce.out",
                scrollTrigger: { ...scrollTriggerConfig },
            }
        );

        // Animate craftHeader text-shadow to make it look like it's popping out
        gsap.fromTo(
            ".craftHeader",
            { textShadow: "none" },
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
                duration: 0.8,
                ease: "power4.out", // Strong easing for pop-out effect
                scrollTrigger: { ...scrollTriggerConfig },
            }
        );

        const letters = document.querySelectorAll(".craft-letter");

        letters.forEach((letter) => {
            let hoverTimeline; // Define a timeline for each letter

            letter.addEventListener("mouseenter", () => {
                // If an existing timeline is active, kill it
                if (hoverTimeline) hoverTimeline.kill();

                // Create a new timeline for the hover effect
                hoverTimeline = gsap.timeline();
                hoverTimeline.to(letter, {
                    x: -3, // Slightly press down
                    y: -3, // Slightly press right
                    textShadow: `
                        1px 1px 0 #1e1e1e,
                        2px 2px 0 #1e1e1e,
                        3px 3px 0 #1e1e1e,
                        4px 4px 0 #1e1e1e,
                        5px 5px 0 #1e1e1e,
                        6px 6px 0 #1e1e1e,
                        7px 7px 0 #1e1e1e,
                        8px 8px 0 #1e1e1e,
                        9px 9px 0 #1e1e1e,
                        10px 10px 0 #1e1e1e
                        `,
                    duration: 0.2,
                    ease: "power1.inOut", // Smooth press effect
                });
            });

            letter.addEventListener("mouseleave", () => {
                // If an existing timeline is active, kill it
                if (hoverTimeline) hoverTimeline.kill();

                // Create a new timeline for resetting the animation
                hoverTimeline = gsap.timeline();
                hoverTimeline.to(letter, {
                    x: 0, // Reset position
                    y: 0, // Reset position
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
                    6px 6px 0 #1e1e1e`, // Reset shadow
                    duration: 0.3,
                    ease: "power3.out", // Smooth reset
                });
            });
        });

    }, [craftRef.current]);

    return (
        <>
            <div className='relative'>
                <section ref={heroRef} className='relative h-[85vh] w-full outer-container'>
                    {positions.map((pos, index) => {
                        return (
                            <div
                                key={index}
                                ref={(el) => (glitchRefs.current[index] = el)}
                                className="glitch-element hidden md:block md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:origin-center md:mt-0"
                                style={{ top: pos.top, left: pos.left }}
                            >
                                <img src={outline} loading="lazy" alt="" className="w-full" />
                            </div>
                        );
                    })}

                    <div className='relative max-w-container w-full h-full flex flex-col justify-center items-center gap-4'>
                        <div className='inline-flex flex-col items-center justify-center gap-2 -mt-12 md:-mt-10'>
                            <Parallax speed={isMobile ? -.5 : -1}>
                                <div ref={refs.line1} className='inline-block px-4 py-2 md:px-8 lg:px-10 lg:py-5 bg-charcoal rounded-md w-fit rotate-6 -translate-x-2'>
                                    <h1 className='text-white big-header'>The </h1>
                                </div>
                            </Parallax>
                            <Parallax speed={isMobile ? -1 : -2}>
                                <div ref={refs.line2} className='inline-block px-4 py-2 md:px-6 lg:px-10 lg:py-5 bg-charcoal rounded-md w-fit -rotate-4 translate-x-0'>
                                    <h1 className='text-white big-header'> Product &</h1>
                                </div>
                            </Parallax>

                            <Parallax speed={isMobile ? -1.5 : -2.5}>
                                <div ref={refs.line3} className='inline-block px-4 py-2 md:px-6 lg:px-10 lg:py-5 mt-2 md:mt-4 bg-charcoal rounded-md  w-fit rotate-4 -translate-x-[10%]'>
                                    <h1 className='text-white big-header'>Design of</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={isMobile ? -1 : -3}>
                                <div ref={refs.line4} className='inline-block px-4 py-2 md:px-6 lg:px-10 lg:py-5  mt-2 md:mt-4 bg-charcoal rounded-md w-fit -rotate-4 translate-x-10'>
                                    <h1 className='text-white big-header'>Tina Lin</h1>
                                </div>
                            </Parallax>
                        </div>

                        <div className='absolute left-8 md:left-14 bottom-[5%]'>
                            <div className='flex gap-3 items-start'>
                                <div>
                                    <span className='text-base tracking-[3px] font-roundo-medium uppercase'>A UX/UI Designer <br /> who enjoys coding &#x2661;</span>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block md:absolute md:right-14 md:bottom-[5%]'>
                            <div className='flex gap-3 items-start'>

                                <div className='flex flex-col '>
                                    <span className='text-base tracking-[3px] font-roundo-medium uppercase text-end'>{time}, PST</span>
                                    <span className='text-base tracking-[3px] font-roundo-medium uppercase'>Vancouver, BC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <HorizontalScroll speed={.3}>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>Web design</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>Ux/ui design</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>Research</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>Front-end development</span>
                </HorizontalScroll>

                {/* <section className='max-w-container py-[8rem] h-full bg-darker-bg'>
                    <div className=''>
                        <div className='flex w-fit bg-charcoal rounded-md px-4 py-2 mb-4'>
                            <span className="text-base font-roundo tracking-[3px] font-roundo-medium uppercase text-white">About</span >
                        </div>

                        <h2 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo accusamus molestiae voluptatum quia libero, omnis tempora nihil ullam, recusandae exercitationem eveniet, minus quisquam. Molestias dolor incidunt voluptatem doloribus doloremque.</h2>
                    </div>
                </section> */}

                <section ref={craftRef} id='crafts' className="relative h-full py-[10rem] bg-darker-bg">
                    <div className='max-w-container relative rounded-xl'>
                        <div className='recent flex mx-auto w-fit bg-charcoal rounded-md px-4 py-2 rotate-6'>
                            <span className="text-base tracking-[3px] font-roundo-medium uppercase text-white">Selected</span >
                        </div >

                        <div className="text-center mb-6 lg:mb-12">
                            <h2 className="craftHeader text-center sub-header ">
                                {Array.from("Crafts").map((letter, index) => (
                                    <span key={index} className="craft-letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase tracking-wider leading-none">
                                        {letter}
                                    </span>
                                ))}
                            </h2>
                        </div>

                        <div className="relative grid grid-cols-1 lg:grid-cols-2 mb-10 gap-6">
                            {crafts.map((craft) => {
                                return (
                                    <CraftCard
                                        key={craft.id}
                                        id={craft.id}
                                        title={craft.title}
                                        mediaType={craft.media}
                                        src={craft.src}
                                        skills={craft.skills}
                                        content={craft.content}
                                        status={craft.status}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section >

                <HorizontalScroll speed={.3} bgColor='bg-light-yellow-bg'>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest '>Say Hi</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest '>Contact Me</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest'>Say Hi</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest'>Contact Me</span>
                </HorizontalScroll>
            </div >
        </>
    )
}

export default Home
