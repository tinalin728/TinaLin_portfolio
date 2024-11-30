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
import cursor from '../../public/assets/homepage/cursor.png'
import arrow from '../../public/assets/icons/arrow.svg';
import outline from '../../public/assets/homepage/outlineLogo.svg'


import data from '../data/generalData.json';

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
        const { about, crafts } = data;
        setAbout(about);
        setCrafts(crafts);
    }, []);

    //for parallax speed
    const windowWidth = WindowWidth();
    const isMobile = windowWidth < 768;


    const Card = forwardRef(({ item }, ref) => (
        <div ref={ref} className={`about-card h-[400px] col-span-1 lg:col-span-4 relative z-10  hover:scale-[1.01] transition-all duration-500`}>
            <div className='absolute inset-0 '>
                <div className='absolute w-full h-full top-2 left-2 md:top-4 md:left-4 bg-[#EBE1D8] border-charcoal border-2 rounded-xl '> </div>
                <div className='absolute w-full h-full top-1 left-1 md:top-2 md:left-2 bg-[#EBE1D8] border-charcoal border-2 rounded-xl'> </div>
            </div>

            <div
                className='relative z-10 p-4 bg-light-yellow-bg border-2 border-black h-full rounded-xl overflow-hidden'>
                <div className='flex flex-col gap-8 justify-center rounded-xl h-full p-6 relative'>
                    <div className="">
                        <h4 className="pb-2 font-craftwork">{item.title}</h4>
                        <p className='text-[18px]'>{item.content}</p>
                    </div>

                    <div className="flex justify-center py-0 scale-[.85] md:scale-100 md:py-4">
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
        // { top: "53%", left: "53%" },
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

        glitchRefs.current.slice().reverse().forEach((glitch, index) => {
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
                    onUpdate: function () {
                        glitch.style.transform = `translate(-50%, -50%) translate(${constrainedX}px, ${constrainedY}px)`;
                    },
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
                toggleActions: "play none none reverse",
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
                stagger: 0.2, // Stagger animation for cards
            }
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


    const craftRef = useRef(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: craftRef.current,
                start: 'top 20%',
                toggleActions: "play reverse play reverse",
                // markers: true,
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

                onStart: () => console.log("Animation started"),
                onComplete: () => console.log("Animation completed"),
            }
        );
    }, [])

    return (
        <>
            <div id='main-content'>
                <section ref={heroRef} className='p-0 relative h-[calc(100vh-70px)] w-full'>
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
                        <div className='inline-flex flex-col items-center gap-2 text-center '>
                            <Parallax speed={isMobile ? -.5 : -1}>
                                <div ref={refs.line1} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit rotate-3 -translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>I Create</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={isMobile ? -1 : -2}>
                                <div ref={refs.line2} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit -rotate-3 translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>Meaningful</h1>
                                </div>
                            </Parallax>

                            <Parallax speed={isMobile ? -1.5 : -3}>
                                <div ref={refs.line3} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit rotate-6 -translate-x-[30%]'>
                                    <h1 className='text-white font-normal big-header uppercase'>Digital</h1>
                                </div>
                            </Parallax>
                            <Parallax speed={isMobile ? -1 : -4}>
                                <div ref={refs.line4} className='inline-block px-4 py-2 md:px-6 lg:px-8 lg:py-4 bg-charcoal w-fit -rotate-6 translate-x-10'>
                                    <h1 className='text-white font-normal big-header uppercase'>Experiences</h1>
                                </div>
                            </Parallax>
                        </div>
                        <div className='absolute left-10 md:left-14 bottom-[10%]'>
                            <p className='text-lg'>Hi I'm Tina,<br />
                                a product designer <br /> who loves coding	&#x2661;</p>
                        </div>
                        <div className='absolute bottom-14 right-14 hidden md:block'>
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
                            <div className='inline-block w-fit bg-charcoal px-4 py-2 -rotate-12'>
                                <p className="text-base tracking-[3px] md:tracking-[5px] md:text-xl font-roundo-semibold uppercase text-white">Explore</p>
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
                                text="About Me"
                                icon={arrow}
                                className='about-btn'
                            />
                        </div>
                    </div>
                </section>

                <section ref={craftRef} className="relative h-full py-[10rem]">
                    <div className=' max-w-container w-full flex justify-end'>
                        <div className='inline-block w-fit bg-charcoal px-4 py-2 rotate-12'>
                            <p className="text-base tracking-[3px] md:tracking-[5px] md:text-xl font-roundo-semibold uppercase text-white">Linspired</p >
                        </div >
                    </div >
                    <div className="text-center mb-6 lg:mb-12">
                        <h3 id="craftHeader" className="text-center sub-header font-craftwork font-extrabold mt-2 tracking-[2px] text-light-yellow-bg text-stroke uppercase leading-normal">Feat. Crafts</h3>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 border-y-2  mb-10'>
                        {crafts.slice(0, 4).map((craft, index) => {
                            const columns = 2;
                            const isLastRow = index >= crafts.length - (crafts.length % columns || columns);

                            return (
                                <CraftCard
                                    key={craft.id}
                                    id={craft.id}
                                    title={craft.title}
                                    img={craft.img}
                                    skills={craft.skills}
                                    border={`${!isLastRow ? 'border-b-2' : ''
                                        } ${index % columns === 0 ? 'md:border-r-2' : ''}`}
                                />
                            );
                        }
                        )}
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

            </div >
        </>
    )
}

export default Home
