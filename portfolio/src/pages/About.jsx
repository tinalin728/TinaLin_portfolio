import { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutDraggable from "../components/about/AboutDraggable";
import TinderCard from "../components/about/TinderCard";
import profile from "../../public/assets/about/profile.jpg"
import logo from "../../public/assets/logo.svg"
import PrimaryCta from "../components/PrimaryCta";

import { CloudDownload } from 'lucide-react';


export default function About() {
    const [loading, setLoading] = useState(true);

    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const cardRefs = useRef([]);
    const logoRef = useRef(null);


    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileOrTablet(window.innerWidth <= 1024); // Tablet and below
        };

        checkScreenSize(); // Run on mount

        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    useEffect(() => {
        // Set a small delay before showing the content
        const timer = setTimeout(() => setLoading(false), 400); // Adjust duration for natural effect
        return () => clearTimeout(timer);
    }, []);

    useGSAP(() => {
        if (loading) return; // Don't run until loading is false

        // Animate text + profile card
        gsap.from([logoRef.current, "#aboutTitle"], {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.4,
        });

        gsap.from(".fade-item", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.6,
        });

        gsap.from(".p-4", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3,
        });

        gsap.from("#resumecta", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 1.2,
        });

        // Animate logo spin
        if (logoRef.current) {
            const logo = logoRef.current;
            let rotation = 0;
            let scrollSpeed = 0;
            let lastScrollY = window.scrollY;

            const updateRotation = () => {
                rotation += 0.1 + scrollSpeed;
                logo.style.transform = `rotate(${rotation}deg)`;
            };

            gsap.ticker.add(updateRotation);

            const scrollTrigger = ScrollTrigger.create({
                trigger: ".wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: () => {
                    const currentScroll = window.scrollY;
                    const delta = currentScroll - lastScrollY;
                    scrollSpeed = delta * 0.1;
                    lastScrollY = currentScroll;
                },
            });

            const fadeScrollSpeed = () => {
                scrollSpeed *= 0.9;
                requestAnimationFrame(fadeScrollSpeed);
            };
            fadeScrollSpeed();

            return () => {
                gsap.ticker.remove(updateRotation);
                scrollTrigger.kill();
            };
        }
    }, [loading]);


    return (
        loading ? <div className="h-screen"></div> : (
            <>
                <section className="wrapper elative z-10 h-full md:pb-20 max-w-container pb-14">
                    <div className="pt-30 flex gap-14 mb-5 flex-col items-center lg:flex-row lg:gap-10">
                        <div className='basis-[45%] flex flex-col items-center justify-center relative'>
                            <div className="p-4 md:p-6 lg:p-8 border rounded-2xl mx-auto shadow-md relative z-10 bg-white">
                                <img src={profile} alt="profile" className='mb-2 object-cover object-left-top h-full w-full max-w-[500px] max-h-[450px] rounded-md lg:max-h-[600px] xl:max-w-[650px]' />
                                <p className="text-sm font-normal text-center">( I tried not to look awkward )</p>
                            </div>
                        </div>

                        <div className="basis-[55%] relative">
                            <div className='absolute right-4 -top-4'>
                                <img ref={logoRef} src={logo} alt="logo" className='spin-infinite inline-block w-[60px] md:w-[70px]' />
                            </div>
                            <div id="aboutTitle">
                                <p className="subtitle-sm">Short Story</p>
                                <h2 className="-mt-2 mb-5 font-extralight">A <span className="project-title font-golften italic heading">creative</span>  digital designer based in Vancouver, specialized in UXUI and Web development.</h2>
                            </div>

                            <p className="mb-5 fade-item">
                                I didn’t grow up dreaming of pixels, but I’ve always loved making things that bring joy. From preschool teaching to designing and coding today, my path has been anything but linear — and that’s what makes it mine.
                            </p>

                            <p className="fade-item mb-10 md:mb-15">
                                I see design as a bridge — connecting ideas with emotions, and aesthetics with usability. By blending design and development, I aim to create experiences that feel human, warm, and just a bit unexpected. I stay curious, playful, and open to what’s next, including new opportunities to collaborate and grow.
                            </p>
                            <div id="resumecta" className=''>
                                <PrimaryCta to="/resume.pdf" label="My Resume" icon={CloudDownload} iconSize='20' />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="max-w-container">
                    <div className="flex flex-col md:flex-row md:justify-between border-y py-14 md:py-20 md:gap-10">
                        <h2 className='heading text-center mb-10 md:text-left lg:-translate-y-5 font-extralight text-nowrap'>What I do</h2>

                        <div className="flex flex-col items-center justify-between">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 space-y-8">
                                {Object.entries(skillCategories).map(([category, skills]) => (
                                    <div key={category} className="pl-6">
                                        <p className="font-canela mb-2">{category}</p>
                                        <ul className="list-none border-l pl-3 h-fit">
                                            {skills.map((skill) => (
                                                <li key={skill} className="text-base font-inter">{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {isMobileOrTablet ? <TinderCard /> : <AboutDraggable />}

            </>
        ))
}

const skillCategories = {
    "UX & Strategy": [
        "UX Research",
        "Wireframing",
        "User Flows",
        "Information Architecture",
        "Content Strategy",
        "Usability Testing",
    ],
    "Design Tools": [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Procreate",
        "After Effects",
        "WordPress",
    ],
    "Tech Stack": [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "WordPress",
    ],
    "Others": [
        "Jira",
        "Canva",
    ],
};
