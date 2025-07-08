import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
    const [canRender, setCanRender] = useState(false);
    const location = useLocation();


    useEffect(() => {
        const footerTrigger = document.getElementById("footer-trigger");
        const textEls = document.querySelectorAll('#bottom-nav p, #bottom-nav a, #bottom-nav button');
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

    useLayoutEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        const timer = setTimeout(() => {
            setCanRender(true);
        }, 50);

        return () => {
            clearTimeout(timer);
            setCanRender(false);
        };
    }, [location.pathname]);

    const pageTitles = {
        '/': "Tina Lin | Digital Designer & Web Developer",
        '/about': "About | Tina Lin, digital Designer & web Developer",
        '/crafts': "Crafts | Tina Lin, digital Designer & web Developer",
    };

    const defaultTitle = "Tina Lin | Portfolio";

    const projectTitleMap = {
        '/project/tim-hortons-redesign': "Tim Hortons Redesign – UX/UI Case Study | Tina Lin",
        '/project/furrytales-pet-redesign': "FurryTales Redesign – Web Case Study | Tina Lin",
        '/project/fitme': "FitMe – UX/UI Case Study | Tina Lin",
        '/project/nomly': "Nomly – Full Stack App | Tina Lin",
        '/project/solar-system': "Solar System – Interactive Web Experience | Tina Lin"
    };

    const currentTitle =
        projectTitleMap[location.pathname] ||
        pageTitles[location.pathname] ||
        defaultTitle;

    return (
        <>
            <Helmet>
                <title>{currentTitle}</title>
                <meta name="description" content="Tina Lin is a digital designer and web developer creating thoughtful, user-centered web experiences with clean UI and interactive design." />
                <meta name="keywords" content="Tina Lin, Digital Designer, UX/UI, Web Developer, Portfolio, React, Tailwind, GSAP" />
                <meta name="author" content="Tina Lin" />

                <meta property="og:title" content={currentTitle} />
                <meta property="og:description" content="Explore Tina Lin's design and development projects focused on creativity, clarity, and connection." />
                <meta property="og:url" content={`https://www.tinalin.ca${location.pathname}`} />
                <meta property="og:type" content="website" />
            </Helmet>


            <div id='top' className='h-full flex flex-col overflow-hidden lg:overflow-visible relative'>
                <Navbar id="top" open={open} setOpen={setOpen} currentTime={currentTime} />

                <div
                    aria-hidden="true"
                    className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-14 lg:hidden transition-opacity duration-800 ease-in-out ${open ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                />

                <main ref={mainRef} className='min-h-screen h-full flex-1 relative z-10'>
                    {canRender && <Outlet />}
                    <div id="footer-trigger" className=" w-full"></div>
                </main>
                <Footer />

                {/* bottom nav */}
                <div id="bottom-nav" className='fixed bottom-0 left-1/2 -translate-x-1/2 z-20 h-fit max-w-container flex justify-between items-center pb-3 2xl:pb-4 4xl:pb-6'>
                    <div className='flex-1'>
                        <img id='bottom-logo' src={outlineLogo} alt="" className='w-[30px] 3xl:w-[35px] 4xl:w-[40px]' />
                    </div>
                    <div className='hidden md:flex-1 md:flex md:items-center md:justify-center  md:gap-10 uppercase'>
                        <p className='leading-[1.75] uppercase text-sm 3xl:text-base 4xl:text-md font-inter font-normal text-nowrap'>
                            Vancouver, BC, Canada
                        </p>
                        <p className="leading-[1.75] uppercase text-sm 3xl:text-base 4xl:text-md font-inter font-normal text-nowrap">
                            {currentTime} PST
                        </p>
                    </div>

                    <button
                        id='scrollToTop'
                        onClick={() => {
                            document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="font-normal text-end flex-1 leading-[1.75] uppercase text-sm font-inter underline underline-offset-4 cursor-pointer"
                    >
                        Back to top
                    </button>

                </div>
            </div>
        </>
    );
}

