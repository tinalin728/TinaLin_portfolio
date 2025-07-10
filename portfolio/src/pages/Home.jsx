import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projectData } from "../data/projectData";
import ProjectCard from '../components/ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logo from "../../public/assets/logo.svg"
import { ArrowRight } from 'lucide-react';

import PrimaryCta from "../components/PrimaryCta";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const [loading, setLoading] = useState(true);
    const logoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 400);
        return () => clearTimeout(timer);
    }, []);

    useGSAP(() => {
        if (loading) return;
        // Entry animation for hero text
        gsap.from("#scroll-from-right", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
        });
        gsap.from(["#scroll-from-left", "#mobile-title"], {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
        });

        gsap.from("#heroContent", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.7,
        });

        gsap.from("#craftTitle", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#craftTitle",
                start: "top 40%",
            },
        });

        gsap.from("#craftContent", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#craftContent",
                start: "top 50%",
            },
            delay: 0.2,
        });

        const mm = gsap.matchMedia();

        mm.add('(min-width: 1024px)', () => {
            gsap.fromTo(
                "#scroll-from-right",
                { xPercent: -20 },
                {
                    xPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrapper",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                "#scroll-from-left",
                { xPercent: 20 },
                {
                    xPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrapper",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        });

        return () => mm.revert();
    }, [loading]);



    useGSAP(() => {
        if (!logoRef.current) return;

        const logo = logoRef.current;
        let rotation = 0;
        let scrollSpeed = 0;
        let lastScrollY = window.scrollY;

        // Infinite spin with scroll override
        const updateRotation = () => {
            rotation += 0.1 + scrollSpeed;
            logo.style.transform = `rotate(${rotation}deg)`;
        };

        // Add to GSAP ticker
        gsap.ticker.add(updateRotation);

        // Track scroll direction and speed
        const scrollTrigger = ScrollTrigger.create({
            trigger: "#wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: () => {
                const currentScroll = window.scrollY;
                const delta = currentScroll - lastScrollY;

                scrollSpeed = delta * 0.1; // tweak multiplier as needed
                lastScrollY = currentScroll;
            },
        });

        // Gradually reduce scroll influence
        const fadeScrollSpeed = () => {
            scrollSpeed *= 0.9;
            requestAnimationFrame(fadeScrollSpeed);
        };
        fadeScrollSpeed(); // start fading scroll speed

        return () => {
            gsap.ticker.remove(updateRotation);
            scrollTrigger.kill();
        };
    }, [loading]);


    return (
        loading ? <div className="h-screen bg-white"></div> : (
            <>
                <div className='relative z-10 pb-20 bg-white'>
                    <section id='wrapper' className='relative z-20 overflow-hidden max-w-container'>
                        <div className="pt-18 md:pt-20 md:w-full flex flex-col justify-between h-screen">
                            <div className=''>
                                <p id='scroll-from-right' className='biggest-header'>Design to</p>

                                <p id='scroll-from-left' className='hidden md:block biggest-header md:text-end'>Development</p>


                                <div id='mobile-title'>
                                    <p className='biggest-header  text-end md:hidden '>Develop</p>
                                    <p className='biggest-header  text-end md:hidden '>–ment</p>
                                </div>
                            </div>


                            <div id="heroContent" className='flex flex-col-reverse pb-18  md:flex-row md:justify-between items-end 2xl:pb-20'>
                                <p className='font-medium xl:text-md md:w-[60%] lg:w-[45%]'>
                                    Hello there! I’m Tina — a digital designer with a soft spot for playful code and thoughtful design.
                                    Whether it’s bold or minimal, quirky or clean, I love uncovering the meaning behind ideas and turning them into intuitive, human-centered experiences — always with a touch of warmth and curiosity.
                                </p>
                                <div className='flex justify-end mb-2 md:block lg:mb-0'>
                                    <img ref={logoRef} src={logo} alt="logo" className='spin-infinite inline-block w-[50px] md:w-[120px] lg:w-[150px]  2xl:w-[180px] 3xl:w-[200px]' />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='craft' className='relative z-10 max-w-container h-full '>
                        <div id='craftTitle' className='flex items-center'>
                            <hr className='flex-1 w-full' />
                            <h1 className='flex-1 w-fit font-extralight text-center leading-[1] pb-5 font-golften'>Selected <br /> Crafts</h1>
                            <hr className='flex-1 w-full' />
                        </div>
                        <div id='craftContent'>
                            <div className='pt-5 pb-10 md:py-10 grid gap-8 md:grid-cols-2 md:gap-6'>
                                {projectData.slice(0, 4).map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>

                            <PrimaryCta to="/crafts" label="View More" additionalClass="mx-auto" />
                        </div>
                    </section>
                </div >

            </>
        ))
}
