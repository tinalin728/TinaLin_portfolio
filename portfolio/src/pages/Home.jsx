import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import WindowWidth from '../hooks/WindowWidth';
import mouse from '../../public/assets/homepage/mouse.svg';
import outline from '../../public/assets/homepage/outlineLogo.svg'

import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard"
import baby from "../../public/assets/homepage/baby.jpg"
import cloud from "../../public/assets/homepage/cloud.png"
import grain from "../../public/assets/about/grain.png"
import PrimaryCta from '../components/PrimaryCta';
import location from "../../public/assets/icons/location.svg"
import line from "../../public/assets/icons/line.svg"


function Home() {
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
        // Ensure elements start at the correct position immediately
        const elements = [refs.line1.current, refs.line2.current, refs.line3.current, refs.line4.current];
        elements.forEach((element) => {
            if (element) gsap.set(element, { y: -15 });
        });

        // Function to trigger animation after the page is fully loaded
        const handleLoad = () => setHeroAnimationTriggered(true);

        if (document.readyState === "complete") {
            // console.log('page ready!')
            setTimeout(() => {

                handleLoad();
            }, 300)
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    // hero
    useGSAP(() => {
        if (!heroAnimationTriggered) return;

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
                    duration: 1,
                    y: 0,
                    ease: "bounce.out",
                    delay: index * 0.15,
                    onComplete: () => {
                        setHeroAnimationTriggered(true)
                        setAnimationComplete(true)
                    }
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
                        ? 1.2
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


    return (
        <>
            <div className='relative'>
                <section ref={heroRef} className='sticky top-[90.77px]'>
                    <div className='bg-primary h-[80vh] md:h-[85vh] w-full outer-container relative -mt-[3rem] md:mt-0 mb-14 md:mb-20'>
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
                            <div className='-mt-20 inline-flex flex-col items-center justify-center gap-2 md:-mt-14 relative'>
                                <div ref={refs.line1} className='inline-block px-4 py-3 md:px-8 md:py-4 lg:px-10 lg:py-3 xl:py-5 bg-charcoal rounded-md w-fit -translate-x-2'>
                                    <h2 className='text-white big-header font-patrick tracking-widest'>The</h2>
                                </div>
                                <div ref={refs.line2} className='inline-block px-4 py-3 md:px-6 md:py-4  lg:px-10 lg:py-3 xl:py-5 bg-charcoal rounded-md w-fit translate-x-0'>
                                    <h2 className='text-white big-header'> Product
                                        <span className='font-patrick pl-4'>&</span>
                                    </h2>
                                </div>

                                <div ref={refs.line3} className='inline-block px-4 py-3 md:px-6 md:py-4 lg:px-8 xl:px-10 xl:py-5 mt-2 md:mt-4 bg-charcoal rounded-md  w-fit translate-y-1 -translate-x-2 md:-translate-x-4 lg:-translate-x-[12%]'>
                                    <h2 className='big-header text-white'> <span className='text-white tracking-widest'>Design </span>of </h2>
                                </div>
                                <div ref={refs.line4} className='inline-block px-4 py-3 md:px-6 md:py-4  lg:px-10 lg:py-3 xl:py-5 mt-2 md:mt-4 bg-charcoal rounded-md w-fit -rotate-4 translate-x-10 relative'>
                                    <h1 className='text-white big-header'>
                                        Tina Lin
                                    </h1>
                                </div>
                            </div>

                            <div className='absolute left-1/2 -translate-x-1/2 text-nowrap bottom-5 md:left-[18%] lg:left-[10%] md:bottom-0 '>
                                <div className=''>
                                    <a href='#crafts'
                                        aria-label="scroll more"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("crafts")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className='text-base tracking-[1.5px] font-roundo-medium uppercase flex items-end gap-2'>
                                        <div><img src={mouse} alt="mouse icon" width={25} className='shake-animation' /> </div>
                                        Scroll More
                                    </a>
                                </div>
                            </div>
                            <div className='absolute right-1/2 bottom-[13%] translate-x-1/2 md:right-[20%] lg:right-[11%] md:bottom-0'>
                                <div className='flex gap-2'>
                                    <div><img src={location} alt="" className='w-[23px] h-full' /></div>
                                    <p className='text-base tracking-[1.5px] font-roundo-medium uppercase flex items-center text-nowrap'> Vancouver, BC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section ref={craftRef} id='crafts' className="relative h-full py-16 md:py-20 bg-primary w-full border-t border-dashed">
                    <div className='max-w-container relative'>
                        <div className='relative flex flex-col items-center md:items-start md:flex-row justify-between'>
                            <div className='h-fit pb-4 md:pb-[20rem] md:sticky md:top-20'>
                                <div className='inline-flex items-center justify-center flex-col md:basis-[40%] md:items-start'>
                                    <h2 className='w-fit text-center sub-header font-black md:text-left'> I <span className='sub-header '>Design</span> <br /> <span className='text-orange font-patrick font-thin'>&</span> Code</h2>
                                    <div>
                                        <img src={line} alt="line" width={200} />
                                    </div>

                                    <p className='mt-4'> Some of my selected crafts.</p>

                                    <div className='hidden md:block mt-14'>
                                        <PrimaryCta to="/projects" text="View More" />
                                    </div>
                                </div>
                            </div>

                            <div className="md:basis-[60%]">
                                <div className='flex flex-col gap-10 md:gap-20'>
                                    {projectData.slice(0, 3).map((project) => {
                                        return (
                                            <ProjectCard
                                                key={project.id} project={project}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='mt-10 md:hidden'>
                                <PrimaryCta to="/projects" text="View More" />
                            </div>
                        </div>
                    </div>
                </section >

                <section className='max-w-container h-full relative pt-16 md:pt-20 pb-20 md:pb-[10rem] lg:pb-[15rem] bg-primary'>
                    <div className='flex flex-col-reverse gap-10 md:flex-row md:justify-between md:gap-12 lg:gap-20'>
                        <div className='flex flex-col w-full px-6 py-12 md:p-10 bg-white border-2 rounded-2xl relative'
                            style={{ backgroundImage: `url(${grain})` }}
                        >
                            <h2 className='sub-header'> A <br /> <span className='leading-[1.2] text-[50px] md:text-[60px] lg:text-[65px] text-orange font-patrick font-normal'>brief</span> Linstory</h2>

                            <div>
                                <img src={line} alt="line" width={200} />
                            </div>

                            <p className='max-w-[35rem] pb-10 pt-4'>From crayons to pixels, my teaching background gives me unique perspectives to design with empathy and creativity.</p>

                            <PrimaryCta to="/about" text="Read More" />
                        </div>

                        <div className='relative w-full max-w-[300px] md:max-w-[350px] h-full mx-auto'>
                            <div className='mx-auto h-full bg-white flex flex-col p-4 rotate-[4deg] border-2 rounded-xl relative z-10'>
                                <div className='h-[320px] md:h-[380px] w-full rounded-xl overflow-hidden relative z-10'>
                                    <img src={baby} alt="baby photo" className='object-cover h-full w-full' loading='lazy' />
                                </div>
                                <div className='text-center pt-2'>
                                    <p className='font-patrick text-dark-grey italic tracking-wider'>Let's go for a ride</p>
                                </div>
                            </div>
                            <div className='absolute z-0 rotate-[20deg] -top-[4.5rem] right-[-3%]'>
                                <img src={cloud} alt="icon" loading='lazy' />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Home
