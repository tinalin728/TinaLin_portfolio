import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    // Inline styles for the hamburger icon 
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
        <header className='bg-light-yellow-bg'>
            <div className='container py-6 relative'>
                <div className='flex items-center'>
                    <Link to="/" className='flex-1 z-10'>
                        <img src={logo} alt="logo" width={60} />
                    </Link>

                    <div className={`${isOpen ? 'fixed inset-0 h-screen bg-light-grey-bg lg:relative lg:h-auto' : 'hidden'} lg:block`}>
                        <div className='flex flex-col gap-[5rem] items-center justify-center h-full'>
                            <nav>
                                <ul className='flex flex-col items-center justify-center gap-10 lg:h-auto lg:flex-row'>
                                    <li>
                                        <Link to="/crafts" className='font-roundo text-3xl lg:tracking-[2px] lg:text-base'>Crafts</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className='font-roundo text-3xl lg:tracking-[2px] lg:text-base'>About</Link>
                                    </li>

                                    <div className='relative inline-flex'>
                                        <a href="#contact" className='font-roundo text-3xl uppercase lg:tracking-[2px] lg:text-base border border-black rounded-md px-4 py-2 bg-yellow z-10'> Contact</a>
                                        <div className='absolute w-full h-full top-[2px] left-[2px] border-4 border-black rounded-md'> </div>
                                    </div>
                                </ul>
                            </nav>
                            <div className='lg:hidden'>
                                <a href="https://www.linkedin.com/in/tina-lin-000613b5/" className='text-2xl'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* hamburger icon */}
                    <button className="hamburger z-10 cursor-pointer lg:hidden" aria-controls="primary-nav"
                        aria-expanded={isOpen} onClick={toggleMenu}>
                        <svg className="hamburger w-[3.2rem]" viewBox="0, 0, 100, 100">

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
