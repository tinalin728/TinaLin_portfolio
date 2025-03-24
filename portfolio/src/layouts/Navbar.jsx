import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../public/assets/logo.svg'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const menuRef = useRef(null)
    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth >= 720) {
    //             setIsOpen(false); // Close the menu on desktop
    //             gsap.set(menuRef.current, { x: '0%' }); // Reset GSAP transform
    //         } else {
    //             if (isOpen) {
    //                 gsap.set(menuRef.current, { x: '0%' }); // Keep menu open on mobile
    //             } else {
    //                 gsap.set(menuRef.current, { x: '-100%' }); // Ensure menu is hidden
    //             }
    //         }
    //     };

    //     handleResize(); // Initial check on mount
    //     window.addEventListener('resize', handleResize);

    //     return () => window.removeEventListener('resize', handleResize);
    // }, [isOpen]);

    // const toggleMenu = () => {
    //     if (window.innerWidth < 768) {
    //         if (isOpen) {
    //             // Close the menu
    //             gsap.to(menuRef.current, {
    //                 x: '-100%',
    //                 duration: .5,
    //                 ease: 'none',
    //                 overwrite: 'auto',
    //                 onComplete: () => {
    //                     menuRef.current.classList.remove('justify-end');
    //                     setIsOpen(false);
    //                 },
    //             });
    //         } else {
    //             // Open the menu
    //             menuRef.current.classList.add('justify-end'); // Add justify-end on open
    //             setIsOpen(true);
    //             gsap.fromTo(
    //                 menuRef.current,
    //                 { x: '-100%' },
    //                 {
    //                     x: '0', duration: 0.5, ease: 'power2.out', overwrite: 'auto',
    //                 }
    //             );
    //         }
    //     }
    // };


    return (
        <header className='overflow-hidden py-6 bg-primary sticky top-0 z-0'>
            <div className='max-w-container'>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <NavLink to="/"
                            aria-label="Go to homepage"
                            className="z-[1000] py-6 text-md font-roundo-bold">

                            <img src={logo} alt="logo" width={45} />
                        </NavLink>
                    </div>

                    <div className='flex gap-6 md:gap-8'>
                        <NavLink to="/projects"
                            aria-label="Go to projects page"
                            className={({ isActive }) =>
                                `uppercase tracking-[1.5px] font-roundo-medium  hover:scale-95 transition duration-300 ${isActive ? "text-orange" : ""
                                }`
                            }
                        >
                            Crafts
                        </NavLink>

                        <NavLink to="/about"
                            aria-label="Go to About page"
                            className={({ isActive }) =>
                                `uppercase tracking-[1.5px] font-roundo-medium  hover:scale-95 transition duration-300 ${isActive ? "text-orange" : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </div>

                </div>
            </div>
        </header >
    )
}

export default Navbar
