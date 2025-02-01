import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SocialIcon from '../components/buttons/SocialIcon';

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
// import "./navbar.css"
gsap.registerPlugin(useGSAP);
import logo from '../../public/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Lenis from 'lenis'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const menuRef = useRef(null)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 720) {
                setIsOpen(false); // Close the menu on desktop
                gsap.set(menuRef.current, { x: '0%' }); // Reset GSAP transform
            } else {
                if (isOpen) {
                    gsap.set(menuRef.current, { x: '0%' }); // Keep menu open on mobile
                } else {
                    gsap.set(menuRef.current, { x: '-100%' }); // Ensure menu is hidden
                }
            }
        };

        handleResize(); // Initial check on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    const toggleMenu = () => {
        if (window.innerWidth < 768) {
            if (isOpen) {
                // Close the menu
                gsap.to(menuRef.current, {
                    x: '-80%',
                    duration: .3,
                    ease: 'none',
                    overwrite: 'auto',
                    onComplete: () => {
                        menuRef.current.classList.remove('justify-end');
                        setIsOpen(false);
                    },
                });
            } else {
                // Open the menu
                menuRef.current.classList.add('justify-end'); // Add justify-end on open
                setIsOpen(true);
                gsap.fromTo(
                    menuRef.current,
                    { x: '80%' },
                    {
                        x: '0', duration: 0.5, ease: 'power2.out', overwrite: 'auto',
                    }
                );
            }
        }
    };




    // animation styles for the hamburger icon 
    const topStyle = isOpen
        ? { transform: 'translateX(-20px) rotate(45deg)', transition: 'transform 0.8s', transformOrigin: 'center' }
        : { transform: 'none', transition: 'transform 0.8s', transformOrigin: 'center' };

    const middleStyle = isOpen
        ? { opacity: 0, transition: 'opacity 0.8s' }
        : { opacity: 1, transition: 'opacity 0.8s' };

    const bottomStyle = isOpen
        ? { transform: 'translateY(-13px) translateX(0px) rotate(-45deg)', transition: 'transform 0.8s', transformOrigin: 'center', width: '66.67%' }
        : { transform: 'none', transition: 'transform 0.8s', transformOrigin: 'center', width: '100%' };



    return (
        <header className='overflow-hidden pt-4 md:pt-0'>
            <div className='max-w-container relative'>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <NavLink to="/" className="z-[1000] py-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-20 -20 202 194"
                                className="w-14 h-14"
                            >
                                <g className="logo" data-name="Layer 1">
                                    <polygon
                                        points="0 2 0 39 62 39 62 154 99 154 99 39 99 24 99 2 0 2"
                                        fill="black"
                                    />
                                    <circle
                                        cx="140"
                                        cy="22"
                                        r="22"
                                        fill="#e36a46"
                                    />
                                </g>
                            </svg>
                        </NavLink>
                    </div>

                    <div
                        ref={menuRef}
                        className={`fixed inset-0 h-screen md:relative md:h-auto z-[29] justify-end transition-all ${isOpen
                            ? 'translate-x-0 bg-charcoal'
                            : '-translate-x-full'
                            } md:translate-x-0 md:bg-transparent md:justify-end`}
                    >

                        <div className='flex flex-col justify-center h-full md:justify-end'>
                            <nav className=''>
                                <ul className="flex flex-col items-center gap-8 md:flex-row md:justify-center w-full">
                                    <NavLink
                                        to="/"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            `font-roundo-medium py-6 md:py-8 hover:scale-95 transition-all duration-300 ${isActive ? (isOpen ? 'text-orange text-xl' : 'text-orange') : isOpen ? 'text-light-yellow-bg text-xl' : ''
                                            }`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/crafts"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            `font-roundo-medium py-6 md:py-8 hover:scale-95 transition-all duration-300 ${isActive ? (isOpen ? 'text-orange text-xl' : 'text-orange') : isOpen ? 'text-light-yellow-bg text-xl' : ''
                                            }`
                                        }

                                    >
                                        Crafts
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        onClick={toggleMenu}
                                        className={({ isActive }) =>
                                            `font-roundo-medium py-6 md:py-8 hover:scale-95 transition-all duration-300 ${isActive ? (isOpen ? 'text-orange text-xl' : 'text-orange') : isOpen ? 'text-light-yellow-bg text-xl' : ''
                                            }`
                                        }

                                    >
                                        About
                                    </NavLink>


                                    {/* <SocialIcon
                                        href='yuting.lin728@gmail.com'
                                        icon={faEnvelope}
                                        mail={true}
                                        additionalClasses={`${isOpen
                                            ? 'shadow-white border-white hover:shadow-white text-white'
                                            : 'shadow-charcoal hover:shadow-charcoal-hover text-black'
                                            }`} /> */}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <button
                        className="hamburger z-[100] md:hidden"
                        aria-controls="primary-nav"
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <svg className="hamburger w-[2.5rem]" viewBox="0, 0, 100, 100">
                            <rect
                                className="top w-2/3 h-[.4rem]"
                                x="40"
                                y="25"
                                rx="4"
                                style={topStyle}
                                fill={isOpen ? '#FBF8F0' : 'black'}
                            ></rect>
                            <rect
                                className="middle w-1/2 h-[.4rem]"
                                x="50"
                                y="45"
                                rx="4"
                                style={middleStyle}
                                fill={isOpen ? '#FBF8F0' : 'black'}
                            ></rect>
                            <rect
                                className="bottom w-2/3 h-[.4rem]"
                                x="16"
                                y="65"
                                rx="4"
                                style={bottomStyle}
                                fill={isOpen ? '#FBF8F0' : 'black'}
                            ></rect>
                        </svg>
                    </button>

                </div>
            </div>
        </header >
    )
}

export default Navbar
