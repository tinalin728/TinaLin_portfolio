import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import whiteLogo from '../../public/assets/white-logo.svg'

export default function Footer() {
    return (
        <footer className=' h-[70vh] sticky bottom-0 bg-black z-0 '>
            <div className='relative max-w-container pb-10  h-full overflow-hidden flex flex-col justify-center items-center'>

                <div className='relative'>
                    <img src={whiteLogo} alt="logo" className='w-[40px] md:w-[55px] absolute top-0 -right-8' />
                    <h2 className='text-white heading text-center mb-5 '>Don't Be Shy</h2>
                </div>

                <div className='flex gap-4 items-center justify-center flex-col md:flex-row md:gap-2'>
                    <a href="mailto:contact@tinalin.ca" className='font-inter font-medium text-white lowercase tracking-widest px-10 py-4 border rounded-full gap-10 text-base hover:bg-white hover:text-black transition-all duration-500'>contact@tinalin.ca</a>

                    <div className='flex gap-2 items-center justify-center'>
                        <div className="w-14 h-14 flex items-center justify-center border border-white rounded-2xl hover:bg-white group transition-all duration-500 cursor-pointer">
                            <a href="https://www.linkedin.com/in/tina-lin-000613b5/" target="_blank" rel="noopener noreferrer" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 2xl:w-6 2xl:h-6 stroke-white group-hover:stroke-black transition-all duration-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-14 h-14 flex items-center justify-center border border-white rounded-2xl hover:bg-white group transition-all duration-500 cursor-pointer ">
                            <a href="https://github.com/tinalin728" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 3xl:w-7 3xl:h-7 stroke-white group-hover:stroke-black transition-all duration-300"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    )
}
