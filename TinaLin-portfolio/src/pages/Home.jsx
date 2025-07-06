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
        gsap.from("#textItem", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
        });

        // Entry animation for description + character
        gsap.from("#heroContent", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.7,
        });

        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
            const el = document.getElementById('textItem');
            if (!el) return;

            gsap.fromTo(
                el,
                { xPercent: 75 },
                {
                    xPercent: -80,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '#wrapper',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                        // markers: true
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
                    <section id='wrapper' className='relative z-20 overflow-hidden max-w-container pb-10'>
                        <div className="pt-20 md:pt-15 md: w-full flex flex-col h-screen justify-between">
                            <p id='textItem' className="biggest-header md:text-nowrap md:whitespace-nowrap inline-block h-full"
                            >
                                Design to Develop
                            </p>

                            <div id="heroContent" className='flex flex-col-reverse pb-14 md:pb-16 md:flex-row md:justify-between md:items-end lg:pb-20'>
                                <p className='font-normal md:w-[45%]'>
                                    Hello there! I’m Tina — a digital designer with a soft spot for playful code and thoughtful design.
                                    Whether it’s bold or minimal, quirky or clean, I love uncovering the meaning behind ideas and turning them into intuitive, human-centered experiences — always with a touch of warmth and curiosity.
                                </p>
                                <div className='flex justify-end mb-2 md:block md:mb-0 md:translate-y-5'>
                                    <img ref={logoRef} src={logo} alt="logo" className='spin-infinite inline-block w-[70px] md:w-[150px] lg:w-[200px]' />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='relative z-10 max-w-container h-full '>
                        <div className=''>

                            <div className='flex items-center'>
                                <hr className='flex-1 w-full' />
                                <h1 className='flex-1 font-extralight text-center leading-[1] pb-5 font-golften'>Selected <br /> Crafts</h1>
                                <hr className='flex-1 w-full' />
                            </div>

                            <div className='py-10 grid gap-8 md:grid-cols-2 md:gap-6'>
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
