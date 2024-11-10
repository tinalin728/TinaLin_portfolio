import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import NavLinkBtn from '../components/buttons/NavLinkBtn'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
        <header className=''>
            <div className='max-w-container py-4 md:py-6 relative'>
                <div className='flex items-center'>
                    <NavLink to="/" className='flex-1 z-[100]'>
                        <img src={logo} alt="logo" className='w-[50px] md:w-[60px]' />
                    </NavLink>

                    <div className={`${isOpen ? 'fixed inset-0 h-screen bg-light-grey-bg md:relative md:h-auto' : 'hidden'} md:block z-[99]`}>
                        <div className='flex flex-col gap-[5rem] items-center justify-center h-full'>
                            <nav>
                                <ul className='flex flex-col items-center justify-center gap-8 md:h-auto md:flex-row'>
                                    <NavLinkBtn
                                        text='Crafts'
                                        to='/crafts'
                                        onClick={handleMenuToggle}

                                    />

                                    <NavLinkBtn
                                        text='About'
                                        to='/about'
                                        onClick={handleMenuToggle}
                                    />
                                    <NavLinkBtn
                                        text='Resume'
                                        href='/'
                                        bgColor='bg-yellow'
                                        onClick={handleMenuToggle}

                                    />

                                </ul>
                            </nav>
                            <div className='md:hidden'>
                                <a href="https://www.linkedin.com/in/tina-lin-000613b5/" className='text-2xl'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <button className="hamburger z-[100] cursor-pointer md:hidden" aria-controls="primary-nav"
                        aria-expanded={isOpen} onClick={toggleMenu}>
                        <svg className="hamburger w-[2.5rem]" viewBox="0, 0, 100, 100">

                            <rect className="top w-2/3 h-[.2rem] fill-black" x="40" y="25" rx="4" style={topStyle}></rect>

                            <rect className="middle w-1/2 h-[.2rem] fill-black" x="50" y="45" rx="4" style={middleStyle}></rect>

                            <rect className="bottom w-2/3 h-[.2rem] fill-black" x="16" y="65" rx="4" style={bottomStyle}></rect>

                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
