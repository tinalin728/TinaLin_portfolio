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
    const [isPaused, setIsPaused] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        // if (!isOpen) 
        //     document.body.classList.add('overflow-hidden');
        // } else {
        //     document.body.classList.remove('overflow-hidden');
        // }
    }

    const handleMenuToggle = () => {
        if (window.innerWidth < 768) {
            toggleMenu();
        }
    }



    // animation styles for the hamburger icon 
    const topStyle = isOpen
        ? { transform: 'translateX(-20px) rotate(45deg)', transition: 'transform 0.5s', transformOrigin: 'center' }
        : { transform: 'none', transition: 'transform 0.5s', transformOrigin: 'center' };

    const middleStyle = isOpen
        ? { opacity: 0, transition: 'opacity 0.5s' }
        : { opacity: 1, transition: 'opacity 0.5s' };

    const bottomStyle = isOpen
        ? { transform: 'translateY(-13px) translateX(0px) rotate(-45deg)', transition: 'transform 0.5s', transformOrigin: 'center', width: '66.67%' }
        : { transform: 'none', transition: 'transform 0.5s', transformOrigin: 'center', width: '100%' };



    return (
        <header className='overflow-hidden outer-container'>
            <div className='max-w-container relative'>
                <div className='flex justify-between items-center w-full'>
                    <NavLink to="/" className="logo-wrapper z-[100] py-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-20 -20 202 194"
                            className="w-14 h-14"
                        >
                            <g className="logo" data-name="Layer 1">
                                {/* Polygon */}
                                <polygon
                                    className="polygon"
                                    points="0 2 0 39 62 39 62 154 99 154 99 39 99 24 99 2 0 2"
                                    fill="black"
                                    stroke="black"
                                    strokeWidth="1"

                                />
                                {/* Circle */}
                                <circle
                                    className="circle"
                                    cx="140"
                                    cy="22"
                                    r="22"
                                    fill="#e36a46"
                                    stroke="#e36a46"
                                    strokeWidth="2"
                                />
                            </g>
                        </svg>
                    </NavLink>

                    <div className={`${isOpen ? 'fixed inset-0 h-screen bg-light-grey-bg md:relative md:h-auto' : 'hidden'} md:block z-[99]`}>
                        <div className='flex flex-col justify-center h-full'>
                            <nav className='md:grow'>
                                <ul className='flex flex-col items-center justify-center gap-8 md:h-auto md:flex-row'>
                                    <NavLink to="/" onClick={handleMenuToggle} className={({ isActive }) =>
                                        `font-roundo-medium py-6 md:py-8 hover:scale-95 transition-all duration-300 ${isActive ? "text-orange" : ""
                                        }`
                                    }>
                                        Crafts
                                    </NavLink>
                                    <NavLink to="/about" onClick={handleMenuToggle} className={({ isActive }) =>
                                        `font-roundo-medium py-6 md:py-8  hover:scale-95 transition-all duration-300  ${isActive ? "text-orange" : ""
                                        }`
                                    }>
                                        TinaLin
                                    </NavLink>

                                    <SocialIcon
                                        href='yuting.lin728@gmail.com'
                                        icon={faEnvelope}
                                        mail={true}
                                        additionalClasses='shadow-charcoal hover:shadow-charcoal-hover'
                                    />
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <button className="hamburger z-[100] md:hidden " aria-controls="primary-nav"
                        aria-expanded={isOpen} onClick={toggleMenu}>
                        <svg className="hamburger w-[2.5rem]" viewBox="0, 0, 100, 100">

                            <rect className="top w-2/3 h-[.4rem] fill-black" x="40" y="25" rx="4" style={topStyle}></rect>

                            <rect className="middle w-1/2 h-[.4rem] fill-black" x="50" y="45" rx="4" style={middleStyle}></rect>

                            <rect className="bottom w-2/3 h-[.4rem] fill-black" x="16" y="65" rx="4" style={bottomStyle}></rect>

                        </svg>
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Navbar
