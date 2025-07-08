import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ArrowRight } from 'lucide-react';
import "../styles/navbar.css"
import outlineLogo from '../../public/assets/outline_logo.svg'
import outlineWhite from '../../public/assets/outline-white.svg'

export default function Navbar({ open, setOpen, currentTime }) {
    const dropdownRef = useRef(null);
    const itemRefs = useRef([]);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    itemRefs.current = [];

    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    useEffect(() => {
        if (open) {
            gsap.set(itemRefs.current, { x: 20, opacity: 0 });

            gsap.set(dropdownRef.current, {
                pointerEvents: 'auto',
                display: 'block',
                x: 100,
                opacity: 0,
            });

            gsap.to(dropdownRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.to(itemRefs.current, {
                        x: 0,
                        opacity: 1,
                        duration: 0.4,
                        stagger: 0.2,
                        ease: 'power2.out',
                    });
                },
            });
        }
        else {
            gsap.to(dropdownRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    if (dropdownRef.current) {
                        gsap.set(dropdownRef.current, { display: 'none' });
                    }
                }
            });

        }
    }, [open]);


    return (
        <header className={`fixed z-20 inset-0 h-fit border-b transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/30 backdrop-blur-md' : ''}`}>

            <div className='flex w-full items-center justify-between max-w-[120rem] mx-auto relative'>
                <NavLink
                    to="/"
                    className='cursor-pointer tracking-wider text-base font-inter 3xl:text-md 4xl:text-lg font-normal px-[20px] md:px-[2rem] lg:px-[2.5rem] transition-all duration-500 ease-in-out uppercase flex items-center gap-2'
                >
                    Tina Lin
                </NavLink>

                <div className="hidden md:flex md:items-end ">
                    {[
                        { label: "Crafts", to: "/crafts" },
                        { label: "Profile", to: "/about" },
                        { label: "Let's Work", to: "#footer" },
                    ].map((item, i, arr) => (
                        item.to.startsWith('#') ? (
                            <a
                                key={i}
                                href={item.to}
                                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                className={`navlink-animated group border-l px-8 3xl:px-10  flex items-center justify-center gap-2 3xl:gap-4 transition-all duration-500 ease-in-out cursor-pointer ${scrolled ? 'py-2 3xl:py-3 ' : 'py-4 3xl:py-5'}`}
                            >
                                <span className="leading-[1.75] uppercase text-sm 3xl:text-base 4xl:text-md font-inter font-normal">
                                    {item.label}
                                </span>
                                <img src={outlineLogo} alt="logo" className='w-[18px] -translate-y-[1px] 3xl:w-[24px]' />
                                <div className="side-border absolute inset-0 pointer-events-none"></div>
                            </a>
                        ) : (
                            <NavLink
                                key={i}
                                to={item.to}
                                className={`navlink-animated group border-l px-8 3xl:px-10 font-inter font-normal flex items-center justify-center gap-2 3xl:gap-4  transition-all duration-500 ease-in-out cursor-pointer ${scrolled ? 'py-2 3xl:py-3' : 'py-4 3xl:py-5'}`}
                            >
                                <span className="leading-[1.75] uppercase text-sm 3xl:text-base 4xl:text-md font-inter font-normal">
                                    {item.label}
                                </span>
                                <ArrowRight className="-translate-y-[1px] w-[15px] xl:w-[18px] 3xl:w-[20px]" />
                                <div className="side-border absolute inset-0 pointer-events-none"></div>
                            </NavLink>
                        )
                    ))}
                </div>

                {/* mobile nav */}
                <div className='block relative z-20 md:hidden cursor-pointer'>
                    <button
                        onClick={() => setOpen(!open)}
                        className="relative  flex flex-col justify-center items-center cursor-pointer w-18 h-13"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`inline-block absolute w-8 h-[2px] transition-transform duration-400 ease-in-out ${open ? 'rotate-45 bg-white' : '-translate-y-1 bg-black'}`}
                            style={{ transformOrigin: 'center' }}
                        />

                        <span
                            className={`inline-block absolute w-8 h-[2px] transition-transform duration-400 ease-in-out ${open ? '-rotate-45 bg-white' : 'translate-y-1 bg-black'}`}
                            style={{ transformOrigin: 'center' }}
                        />

                    </button>
                </div>

                <div ref={dropdownRef}
                    className="absolute right-0 top-0 h-screen w-[90%] bg-black z-10 hidden rounded-l-3xl">
                    <div className='flex flex-col justify-between h-full'>
                        <div className='flex flex-col items-center justify-center h-full px-10 gap-12'>
                            {[
                                { label: "Crafts", to: "/crafts" },
                                { label: "Profile", to: "/about" },
                                { label: "Let's Work", to: "#footer" },
                            ].map((item, i) =>
                                item.to.startsWith('#') ? (
                                    <div
                                        key={i}
                                        ref={addToRefs}
                                        onClick={() => {
                                            setOpen(false);
                                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                        }}
                                        className="uppercase tracking-wide flex flex-row justify-between items-center gap-10 pb-3 w-full text-xl text-white border-b cursor-pointer"
                                    >
                                        {item.label}
                                        <img src={outlineWhite} alt="logo" className='w-[25px] ' />
                                    </div>
                                ) : (
                                    <NavLink
                                        key={i}
                                        to={item.to}
                                        ref={addToRefs}
                                        onClick={() => setOpen(false)}
                                        className="uppercase tracking-wide flex flex-row justify-between items-center gap-10 pb-3 w-full text-xl text-white border-b"
                                    >
                                        {item.label}
                                        <ArrowRight size={25} color="white" />
                                    </NavLink>
                                )
                            )}

                        </div>

                        <div className='pl-10 pb-10'>
                            <p className='font-normal text-sm text-white uppercase'>
                                Vancouver, BC, Canada
                            </p>
                            <p className="font-normal text-white text-sm transition-colors duration-300">
                                {currentTime} PST
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
