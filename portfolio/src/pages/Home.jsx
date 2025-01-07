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


import design from "../../public/assets/homepage/web-design.svg"
import uxui from "../../public/assets/homepage/uxui.svg"
import coding from "../../public/assets/homepage/front-end.svg"
import data from '../data/generalData.json';


function Home() {
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
                    delay: index * 0.18,
                    //when animation completes, allow background mouse interaction
                    onComplete: () => setAnimationComplete(true)
                },
                "<"
            );
        });

        timeline.to(
            '.role', {
            color: '#E36A46',
            duration: .5,
            ease: 'power1.out'
        },
            "+1.5"
        )
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


    const aboutRef = useRef(null);
    const aboutCtaRef = useRef(null);


    // animation for about section
    useGSAP(() => {
        const baseScrollTriggerConfig = {
            trigger: aboutRef.current,
            start: 'top 10%',
            toggleActions: "play none none none",
            //markers: true,
        }

        gsap.fromTo(
            '.explore', {
            y: -50,
            rotate: 0
        },
            {
                y: 0,
                rotate: 6,
                duration: .5,
                ease: "bounce.out",
                scrollTrigger: { ...baseScrollTriggerConfig }
            }
        )

        gsap.fromTo(
            ".aboutHeader",
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
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { ...baseScrollTriggerConfig },
            });

        gsap.fromTo(
            '.card', { x: 200 },
            {
                x: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: { ...baseScrollTriggerConfig }
            });
        gsap.fromTo(
            '.card-2', { opacity: 0, y: 200 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: { ...baseScrollTriggerConfig }
            });

        // Add hover animation for individual letters in "Do"
        const letters = document.querySelectorAll(".about-letter");

        letters.forEach((letter) => {
            let hoverTimeline;

            letter.addEventListener("mouseenter", () => {
                if (hoverTimeline) hoverTimeline.kill();

                hoverTimeline = gsap.timeline();
                hoverTimeline.to(letter, {
                    x: -3, // Slightly pop left
                    y: -3, // Slightly pop up
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
                    `, // Expanded shadow
                    duration: 0.3,
                    ease: "elastic.out(1, 0.4)", // Springy pop-out effect
                });
            });

            letter.addEventListener("mouseleave", () => {
                if (hoverTimeline) hoverTimeline.kill();

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
                    6px 6px 0 #1e1e1e`,
                    duration: 0.3,
                    ease: "power3.out",
                });
            });
        });

    }, [aboutRef.current])


    const craftRef = useRef(null);
    const gridRef = useRef(null);
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
            <div className='h-full relative'>
                <section ref={heroRef} className='relative h-[calc(100vh-70px)] w-full outer-container'>
                    {positions.map((pos, index) => {
                        return (
                            <div
                                key={index}
                                ref={(el) => (glitchRefs.current[index] = el)}
                                className="hidden md:block md:absolute md:-translate-x-1/2 md:-translate-y-1/2 md:origin-center md:mt-0"
                                style={{ top: pos.top, left: pos.left }}
                            >
                                <img src={outline} loading="lazy" alt="" className="w-full md:scale-100 lg:scale-105" />
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

                        <div className='absolute left-8 md:left-14 bottom-[10%]'>

                            <div className='flex gap-3 items-start'>
                                {/* <div className='inline-flex justify-center items-center h-[2.3rem] w-[2.3rem] border-2  rounded-full inset-shadow'>
                                    <FontAwesomeIcon icon={faUser} className='text-[20px] ' />
                                </div> */}
                                <div>
                                    <span className='text-base tracking-[3px] font-roundo-medium uppercase'>A UX/UI Designer <br /> who enjoys coding &#x2661;</span>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:block md:absolute md:right-14 md:bottom-[10%]'>
                            <div className='flex gap-3 items-start'>
                                {/* <div className='inline-flex justify-center items-center h-[2.3rem] w-[2.3rem] border-2  rounded-full inset-shadow'>
                                    <FontAwesomeIcon icon={faUser} className='text-[20px] ' />
                                </div> */}
                                <div>
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
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>A designer who can code</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>A developer who can design</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-widest text-white'>Based in Vancouver</span>
                </HorizontalScroll>

                {/* <section ref={aboutRef} className="relative py-[10rem] bg-darker-bg">
                    <div className="max-w-container">
                        <div className="relative z-10">
                            <div className="mb-6 lg:mb-12">
                                <div className="explore flex w-fit mx-auto bg-charcoal rounded-md px-4 py-2 -rotate-6">
                                    <p className="uppercase text-white text-nowrap text-sm md:text-base lg:text-base md:tracking-widest lg:tracking-widest">Explore</p>
                                </div>

                                <div className="relative z-10">
                                    <h2 className="sub-header text-center">
                                        What I
                                        <span className="aboutHeader ml-6 text-nowrap">
                                            {Array.from("Do").map((letter, index) => (
                                                <span key={index} className="about-letter inline-block text-stroke text-light-yellow-bg font-craftwork font-extrabold ">
                                                    {letter}
                                                </span>
                                            ))}
                                        </span>
                                    </h2>
                                </div>
                            </div>

                            <Swiper
                                style={{
                                    overflow: 'visible',
                                }}
                                spaceBetween={20}
                                slidesPerView={1.05}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                breakpoints={{
                                    450: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 20,
                                    },
                                    720: { // Tablet
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1000: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 40,
                                    },
                                    1024: { // Desktop
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                className='mb-10 overflow-visible'
                            >
                                <SwiperSlide>
                                    <div data-cursor='hover' className="relative group hover:-translate-y-2 hover:-rotate-2 transition duration-500">
                                        <div className="absolute top-3 left-0 w-full h-full bg-light-yellow-bg rounded-xl -z-10 border-2"></div>

                                        <div className="relative z-10 about-card bg-light-yellow-bg p-4 border-2 overflow-hidden rounded-xl h-[440px]">
                                            <div className="flex flex-col group-hover:rounded-xl transition-all duration-500 group-hover:bg-yellow h-full">
                                                <div className="translate-x-[60%] relative">
                                                    <img src={design} alt="icon" className="card w-[180px] md:w-[200px] lg:w-[220px] h-full" />
                                                </div>
                                                <div className="p-4">
                                                    <h2 className="group-hover:text-white">Web Design</h2>
                                                    <p className="text-[18px]">I create interactive, impactful websites that blend creativity and functionality seamlessly.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div data-cursor='hover' className="about-card group hover:-translate-y-2 transition duration-500">
                                        <div className="relative">
                                            <div className="absolute top-3 left-0 w-full h-full bg-light-yellow-bg rounded-xl -z-10 border-2"></div>

                                            <div className="relative z-10 about-card bg-light-yellow-bg p-4 border-2 overflow-hidden rounded-xl h-[440px]">
                                                <div className='flex flex-col group-hover:rounded-xl transition-all duration-500 group-hover:bg-orange'>
                                                    <div className="p-4">
                                                        <h2 className="pb-2 group-hover:text-white">UX / UI Design</h2>
                                                        <p className="text-[18px]">I’m passionate about understanding people and designing solutions that truly resonate with them.</p>
                                                    </div>
                                                    <div className="translate-x-[50%]">
                                                        <img src={uxui} alt="icon" className="card-2 w-[190px] md:w-[230px] h-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div data-cursor='hover' className="about-card relative z-10 transition-all duration-500 group hover:-translate-y-2 hover:rotate-2">
                                        <div className='relative'>
                                            <div className="absolute top-3 left-0 w-full h-full bg-light-yellow-bg rounded-xl -z-10 border-2"></div>

                                            <div className="relative z-10 about-card bg-light-yellow-bg p-4 border-2 overflow-hidden rounded-xl h-[440px]">
                                                <div className='flex flex-col group-hover:rounded-xl transition-all duration-500 group-hover:bg-blue'>
                                                    <div className="translate-x-[50%] overflow-hidden">
                                                        <img src={coding} alt="icon" className="card w-[200px] lg:w-[250px] h-full" />
                                                    </div>
                                                    <div className="p-4  -mt-8 z-10">
                                                        <h2 className="pb-2 group-hover:text-white">Front-End Development</h2>
                                                        <p className="text-[18px]">I love turning ideas into interactive experiences by bringing designs to life with code.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>


                            <div ref={aboutCtaRef} className="flex justify-center items-center">
                                <PrimaryBtn
                                    to="/about"
                                    text="About Me"
                                    icon={arrow}
                                    className="about-btn"
                                />
                            </div>
                        </div>
                    </div>
                </section > */}
                {/* 
                <div className='overflow-hidden bg-darker-bg '>
                    <div className='max-w-container py-4 h-full flex'>
                        <Marquee autoFill='true' pauseOnHover='true' direction='right'>
                            <img src={icon1} alt="" className='mr-10 md:mr-[5rem] ' />
                            <img src={icon2} alt="" className='mr-10 md:mr-[5rem]' />
                            <img src={icon3} alt="" className='mr-10 md:mr-[5rem]' />
                            <img src={icon4} alt="" className='mr-10 md:mr-[5rem]' />
                            <img src={icon5} alt="" className='mr-10 md:mr-[5rem]' />
                        </Marquee>

                    </div>
                </div> */}


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
                    <span className='font-roundo-medium uppercase tracking-wide '>Say Hi</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide '>Contact Me</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide'>Say Hi</span>
                    <div className=' w-[25px]'>
                        <img src={images[currentImage]} alt="emoji " loading="lazy" className="h-[25px] w-[25px]" />
                    </div>
                    <span className='font-roundo-medium uppercase tracking-wide'>Contact Me</span>
                </HorizontalScroll>
            </div >
        </>
    )
}

export default Home
