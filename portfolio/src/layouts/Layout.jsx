import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import outlineLogo from '../../public/assets/outline_logo.svg'
import outlineWhite from '../../public/assets/outline-white.svg'

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
    const [open, setOpen] = useState(false);
    const mainRef = useRef(null);
    useEffect(() => {
        const footerTrigger = document.getElementById("footer-trigger");
        const textEls = document.querySelectorAll('#bottom-nav p, #bottom-nav a');
        const logoImg = document.getElementById("bottom-logo");

        const handleScroll = () => {
            if (!footerTrigger) return;
            const rect = footerTrigger.getBoundingClientRect();

            const isVisible = rect.top <= window.innerHeight;

            textEls.forEach((el) => {
                el.style.transition = "color 0.3s ease";
                el.style.color = isVisible ? "#ffffff" : "#000000";
            });

            logoImg.src = isVisible
                ? outlineWhite
                : outlineLogo;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Time
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const formatted = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'America/Vancouver'
            });

            setCurrentTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const location = useLocation();
    const [currentTitle, setCurrentTitle] = useState('Tina Lin | Digital Designer');

    useEffect(() => {
        let title = 'Tina Lin | Digital Designer';
        const path = location.pathname;

        if (path === '/') title = 'Tina Lin | Home';
        else if (path === '/about') title = 'About | Tina Lin';
        else if (path === '/crafts') title = 'Crafts | Tina Lin';
        else if (path.includes('/project/tim-hortons-redesign')) title = 'Tim Hortons Redesign - UXUI case study | Tina Lin';
        else if (path.includes('/project/furrytales-pet-redesign')) title = 'FurryTales Redesign - web redesign case study | Tina Lin';
        else if (path.includes('/project/nomly')) title = 'Nomly - full stack development | Tina Lin';
        else if (path.includes('/project/solar-system')) title = 'Solar System - web design & development | Tina Lin';
        else if (path.includes('/project/fitme')) title = 'FitMe - UXUI case study | Tina Lin';

        document.title = title;
    }, [location.pathname]);



    return (
        <>
            <Helmet>
                <title>{currentTitle}</title>
                <meta name="description" content="Tina Lin is a digital designer and web developer specializing in creating user-centered websites, intuitive UI designs, and modern web experiences." />

                <meta
                    name="keywords"
                    content="Tina Lin, Digital Designer, UX/UI Designer, Web Designer, Front-End Developer, Web Development, UX/UI Design, React, GSAP, Portfolio"
                />
                <meta name="author" content="Tina Lin" />
                <meta property="og:title" content={currentTitle} />
                <meta
                    property="og:description"
                    content="Explore Tina Lin's portfolio featuring innovative product designs and web development projects."
                />
                <meta property="og:url" content={`https://www.tinalin.ca${location.pathname}`} />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className='h-full flex flex-col overflow-hidden lg:overflow-visible relative'>
                <Navbar id="top" open={open} setOpen={setOpen} currentTime={currentTime} />

                <div
                    aria-hidden="true"
                    className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-14 lg:hidden transition-opacity duration-800 ease-in-out ${open ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                />

                <main ref={mainRef} className='min-h-screen h-full flex-1 relative z-10'>
                    <Outlet />
                    <div id="footer-trigger" className=" w-full"></div>
                </main>
                <Footer />

                {/* bottom nav */}
                <div id="bottom-nav" className='fixed bottom-0 z-20 h-fit max-w-container flex justify-between items-center pb-2'>
                    <div className='flex-1'>
                        <img id='bottom-logo' src={outlineLogo} alt="" width={30} />
                    </div>
                    <div className='hidden md:flex-1 md:flex md:items-center md:justify-center  md:gap-10 uppercase'>
                        <p className={`font-normal text-sm text-nowrap`}>
                            Vancouver, BC, Canada
                        </p>
                        <p className="font-normal text-sm transition-colors duration-300 text-nowrap">
                            {currentTime} PST
                        </p>
                    </div>

                    <a href="#top" className='text-end flex-1 scroll-smooth font-normal text-sm uppercase font-inter underline underline-offset-4'>Back to top</a>
                </div>
            </div>
        </>
    );
}

