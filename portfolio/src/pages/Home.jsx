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
import arrow from '../../public/assets/icons/arrow.svg';
import outline from '../../public/assets/homepage/outlineLogo.svg'

import data from '../data/generalData.json';
import FeatureCraftCard from '../components/FeatureCraftCard';


function Home() {
    const [crafts, setCrafts] = useState([]);
    const [heroAnimationTriggered, setHeroAnimationTriggered] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const heroRef = useRef(null);
    const glitchRefs = useRef([]);
    const craftRef = useRef(null);

    const windowWidth = WindowWidth();
    const isMobile = windowWidth < 768;

    const [time, setTime] = useState('');

    useEffect(() => {
        const { about, crafts } = data;
        setCrafts(crafts);
    }, []);

    //for hero tagline
    const refs = {
        line1: useRef(null),
        line2: useRef(null),
        line3: useRef(null),
        line4: useRef(null),
    }

    //position for the background logo image
    const positions = [
        { top: "53%", left: "53%" },
        { top: "52%", left: "52%" },
        { top: "51%", left: "51%" },
        { top: "50%", left: "50%" },
        { top: "49%", left: "49%" },
        { top: "48%", left: "48%" },
    ];

    useEffect(() => {
        const elements = [refs.line1.current, refs.line2.current, refs.line3.current, refs.line4.current];
        elements.forEach((element) => {
            if (element) gsap.set(element, { y: -15 });
        });

        setTimeout(() => {
            setHeroAnimationTriggered(true);
        }, 500);
    }, []);

    // hero
    useGSAP(() => {
        if (!heroAnimationTriggered) return; // Wait until delayed trigger

        const elements = [refs.line1.current, refs.line2.current, refs.line3.current, refs.line4.current];
        const rotations = [6, -3, 6, -6];

        const timeline = gsap.timeline();

        elements.forEach((element, index) => {
            if (!element) return; // Ensure element exists before animating

            timeline.fromTo(
                element,
                {
                    rotate: 0, // Start with no rotation
                    y: -15,
                },
                {
                    rotate: rotations[index],
                    duration: .8,
                    y: 0,
                    ease: "bounce.out",
                    delay: index * 0.14,
                    onComplete: () => setHeroAnimationTriggered(true)
                },
                "<"
            );
        });
    }, [heroAnimationTriggered]); // Runs when heroAnimationTriggered changes


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
                    ? 1.25
                    : screenWidth > 1440
                        ? 1.1 + (0.15 * (screenWidth - 1490)) / (1920 - 1490)
                        : 1.1;


            //console.log(`Screen Width: ${screenWidth}, Default Scale: ${defaultScale}`); 

            // Apply the scaling to each glitch element
            glitchRefs.current.forEach((glitch, index) => {
                if (glitch) {
                    // Ensure each glitch has the correct transform applied
                    glitch.style.transform = `translate(-50%, -50%) scale(${defaultScale})`;
                    //console.log(`Element ${index} Transform: ${glitch.style.transform}`); 
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
                        ? 1.25
                        : screenWidth > 1440
                            ? 1.1 + (0.15 * (screenWidth - 1490)) / (1920 - 1490)
                            : 1.1;

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


    useEffect(() => {
        setTimeout(() => {
            if (document.querySelectorAll(".craftCard").length > 0) {
                // console.log(".craftCard elements found! Running GSAP...");
                setIsLoaded(true);
            }
        }, 200);
    }, []);

    useGSAP(() => {

        if (!craftRef.current || !isLoaded) return;
        const ctx = gsap.context(() => {

            let hoverEnabled = false;


            const scrollTriggerConfig = {
                trigger: craftRef.current,
                start: "top 50%",
                toggleActions: "play none none none",
                // markers: true,
            };

            // Animate recent text
            gsap.fromTo(
                ".recent",
                { y: -50, rotate: 0, opacity: 0 },
                {
                    y: 10,
                    rotate: -6,
                    opacity: 1,
                    duration: 1,
                    ease: "bounce.out",
                    scrollTrigger: { ...scrollTriggerConfig },
                }
            );

            gsap.fromTo(
                ".craft-letter",
                { textShadow: "none" },
                {

                    textShadow: `
                        0.5px 0.5px 0 #342A1A,
                        1px 1px 0 #342A1A,
                        1.5px 1.5px 0 #342A1A,
                        2px 2px 0 #342A1A,
                        2.5px 2.5px 0 #342A1A,
                        3px 3px 0 #342A1A,
                        3.5px 3.5px 0 #342A1A,
                        4px 4px 0 #342A1A,
                        4.5px 4.5px 0 #342A1A,
                        5px 5px 0 #342A1A,
                        5.5px 5.5px 0 #342A1A,
                        6px 6px 0 #342A1A`,
                    duration: .8,
                    ease: "elastic.inOut",
                    stagger: .05,
                    scrollTrigger: { ...scrollTriggerConfig },
                }
            );
            gsap.fromTo(
                ".craftCard",
                { opacity: 0, y: 200 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "back.inOut",
                    scrollTrigger: { ...scrollTriggerConfig },
                    onComplete: () => {
                        hoverEnabled = true;
                    }
                }
            );

            // hover on the letter
            const letters = document.querySelectorAll(".craft-letter");
            letters.forEach((letter) => {
                let hoverTimeline;

                letter.addEventListener("mouseenter", () => {

                    if (!hoverEnabled) return;

                    // If an existing timeline is active, kill it
                    if (hoverTimeline) hoverTimeline.kill();

                    // Create a new timeline for the hover effect
                    hoverTimeline = gsap.timeline();
                    hoverTimeline.to(letter, {
                        x: -3,
                        y: -3,
                        textShadow: `
                            1px 1px 0 #342A1A,
                            2px 2px 0 #342A1A,
                            3px 3px 0 #342A1A,
                            4px 4px 0 #342A1A,
                            5px 5px 0 #342A1A,
                            6px 6px 0 #342A1A,
                            7px 7px 0 #342A1A,
                            8px 8px 0 #342A1A,
                            9px 9px 0 #342A1A,
                            10px 10px 0 #342A1A
                            `,
                        duration: 0.2,
                        ease: "elastic.out",
                    });
                });

                letter.addEventListener("mouseleave", () => {
                    if (!hoverEnabled) return;

                    // If an existing timeline is active, kill it
                    if (hoverTimeline) hoverTimeline.kill();

                    // Create a new timeline for resetting the animation
                    hoverTimeline = gsap.timeline();
                    hoverTimeline.to(letter, {
                        x: 0, // Reset position
                        y: 0, // Reset position
                        textShadow: `
                            0.5px 0.5px 0 #342A1A,
                        1px 1px 0 #342A1A,
                        1.5px 1.5px 0 #342A1A,
                        2px 2px 0 #342A1A,
                        2.5px 2.5px 0 #342A1A,
                        3px 3px 0 #342A1A,
                        3.5px 3.5px 0 #342A1A,
                        4px 4px 0 #342A1A,
                        4.5px 4.5px 0 #342A1A,
                        5px 5px 0 #342A1A,
                        5.5px 5.5px 0 #342A1A,
                        6px 6px 0 #342A1A`,
                        duration: 0.2,
                        ease: "power3.out",
                    });
                });
            });
            ScrollTrigger.refresh();
        })
        return () => ctx.revert();

    }, [isLoaded]);

    return (
        <>
            <div className='relative'>
                <section ref={heroRef} className='h-[85vh] w-full outer-container relative'>
                    {positions.map((pos, index) => {
                        return (
                            <div
                                key={index}
                                ref={(el) => (glitchRefs.current[index] = el)}
                                className="glitch-element hidden md:block md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:origin-center md:-mt-2"
                                style={{ top: pos.top, left: pos.left }}
                            >
                                <img src={outline} loading="lazy" alt="" className="w-full" />
                            </div>
                        );
                    })}


                    <div className='relative max-w-container w-full h-full flex flex-col items-center justify-center'>
                        <div className='-mt-20 inline-flex flex-col items-center justify-center gap-2 md:-mt-14'>
                            <div ref={refs.line1} className='inline-block px-4 py-2 md:px-8 lg:px-10 lg:py-3 xl:py-5 bg-charcoal rounded-md w-fit -translate-x-2'>
                                <h1 className='text-white big-header'>The</h1>
                            </div>
                            <div ref={refs.line2} className='inline-block px-4 py-2 md:px-6 lg:px-10 lg:py-3 xl:py-5 bg-charcoal rounded-md w-fit translate-x-0'>
                                <h1 className='text-white big-header'> Product &</h1>
                            </div>

                            <div ref={refs.line3} className='inline-block px-4 py-2 md:px-6 lg:px-10 lg:py-3 xl:py-5 mt-2 md:mt-4 bg-charcoal rounded-md  w-fit translate-y-1 -translate-x-2 md:-translate-x-4 lg:-translate-x-[12%]'>
                                <h1 className='text-white big-header'>Design of</h1>
                            </div>
                            <div ref={refs.line4} className='inline-block px-4 py-2 md:px-6 lg:px-10 lg:py-3 xl:py-5 mt-2 md:mt-4 bg-charcoal rounded-md w-fit -rotate-4 translate-x-10 relative'>
                                <h1 className='text-white big-header'>Tina Lin</h1>
                            </div>

                        </div>

                        <div className='mt-10 absolute left-8 md:left-14 bottom-[2%]'>
                            <div className='flex flex-col'>
                                <p className='text-base tracking-[3px] font-roundo-medium uppercase'>A UX / UI Designer <br /> who enjoys coding</p>
                                <Link to='/about' className="mt-2 block tracking-wider font-roundo-medium group  hover:text-orange transition-transform duration-300 ease-in-out px-4 border-l border-orange">
                                    More about me <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-x-150 group-hover:translate-x-2">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className='hidden md:block md:absolute md:right-14 md:bottom-[2%]'>
                            <div className='flex gap-3 items-start'>
                                <div className='flex flex-col items-end'>
                                    <a href='#footer'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="mt-2 tracking-wider font-roundo-medium group  hover:text-orange transition-all duration-500 ease-in-out flex justify-center items-center">
                                        <span className="inline-block transition-all duration-300 ease-in-out group-hover:text-orange pr-2 text-xl leading-none">☻</span>Connect with me
                                    </a>
                                    <p className='text-base tracking-[3px] font-roundo-medium uppercase'>Based in Vancouver, BC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section ref={craftRef} id='crafts' className="relative h-full my-[10rem] bg-light-yellow-bg w-full">
                    <div className='max-w-container relative'>
                        <div className='relative'>
                            <div className='recent flex mx-auto w-fit bg-charcoal rounded-md px-4 py-2 rotate-6'>
                                <span className="tracking-widest uppercase text-white text-sm md:text-base text-nowrap">Featured</span >
                            </div >
                            <div className="mx-auto mb-6 lg:mb-12">
                                <h2 className="craftHeader text-center sub-header">
                                    {Array.from("Crafts").map((letter, index) => (
                                        <span key={index} className="craft-letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase leading-none mx-0 md:tracking-wider">
                                            {letter}
                                        </span>
                                    ))}
                                </h2>
                            </div>

                            <div className="craftCard relative grid grid-cols-1 mb-10 gap-8">
                                {crafts.slice(0, 2).map((craft) => {
                                    return (
                                        <FeatureCraftCard
                                            key={craft.id}
                                            id={craft.id}
                                            title={craft.title}
                                            mediaType={craft.media}
                                            src={craft.src}
                                            skills={craft.skills}
                                            content={craft.content}
                                            status={craft.status}
                                        />
                                    )
                                })}
                            </div>


                            <div className='flex items-center justify-center'>
                                <PrimaryBtn
                                    to='/crafts'
                                    text='More Crafts'
                                    icon={arrow}
                                />
                            </div>
                        </div>
                    </div>
                </section >


            </div >
        </>
    )
}

export default Home
