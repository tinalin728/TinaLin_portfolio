import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Lenis from 'lenis'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

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
                <div className='flex justify-between items-center'>
                    <NavLink to="/" className='flex-1 z-[100] py-6'>
                        <img src={logo} alt="logo" width={40} />
                    </NavLink>
                    <div className={`${isOpen ? 'fixed inset-0 h-screen bg-light-grey-bg md:relative md:h-auto' : 'hidden'} md:block z-[99]`}>
                        <div className='flex flex-col justify-center h-full'>
                            <nav>
                                <ul className='flex flex-col items-center justify-center gap-8 md:h-auto md:flex-row'>
                                    <NavLink to="/crafts" onClick={handleMenuToggle} className="font-roundo-medium hover:text-orange py-6 md:py-8">
                                        Crafts
                                    </NavLink>
                                    <NavLink to="/about" onClick={handleMenuToggle} className="font-roundo-medium hover:text-orange py-6 md:py-8">
                                        About
                                    </NavLink>

                                    <a href="mailto:yuting.lin728@gmail.com" className='inline-flex justify-center items-center h-[3.2rem] w-[3.2rem] border-2 rounded-full shadow-charcoal hover:shadow-charcoal-hover hover:translate-x-[.5%] hover:translate-y-[1%] transition-all duration-500 font-roundo-semibold'> <FontAwesomeIcon icon={faEnvelope} className='text-[28px]' />
                                    </a>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <button className="hamburger z-[100] md:hidden" aria-controls="primary-nav"
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
