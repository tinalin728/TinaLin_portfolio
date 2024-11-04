import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import coffee from '../assets/images/coffee.png'


function Footer() {
    return (
        <footer className='pt-16'>
            <div className='max-w-container'>
                <h2 className='font-craftwork font-extrabold text-orange '> Let's talk about</h2>

                <h2>
                    <div className='relative overflow-hidden h-[60px] leading-[60px] md:h-[90px] md:leading-[90px]'>
                        <span className='relative animation-text md:animation-text-lg text-orange'>
                            Design <br />
                            Code <br />
                            Ideas <br />
                            Collabs <br />
                        </span>
                    </div>
                </h2>

                <h5 className='mt-6 max-w-[65rem] font-roundo'> I would love to hear from you! Feel free to reach out to me about anything and let’s get creative together!</h5>

                <div className='text-xl flex gap-4 my-16 flex-wrap'>
                    <div className='relative group transition-all duration-100 ease-in cursor-pointer'>
                        <a
                            href="https://www.linkedin.com/in/tina-lin-000613b5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border h-[3rem] w-[3rem] inline-flex justify-center items-center rounded-lg border-black bg-light-yellow-bg relative z-10 hover:shadow-inner group-hover:text-orange transition-all duration-100 ease-in"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} className='cursor-pointer ' />
                        </a>
                        <div className='absolute w-full h-full top-[1px] left-[1px] border-2 border-black rounded-lg group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in'> </div>
                    </div>
                    <div className='relative group transition-all duration-100 ease-in cursor-pointer'>
                        <a
                            href="https://github.com/tinalin728"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border h-[3rem] w-[3rem] inline-flex justify-center items-center rounded-lg border-black bg-light-yellow-bg relative z-10 hover:shadow-inner group-hover:text-orange transition-all duration-100 ease-in"
                        >
                            <FontAwesomeIcon icon={faGithub} className='cursor-pointer text-[2rem]' />
                        </a>
                        <div className='absolute w-full h-full top-[1px] left-[1px] border-2 border-black rounded-lg group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in'> </div>
                    </div>

                    <div className='relative group transition-all duration-100 ease-in cursor-pointer'>
                        <a
                            href="mailto:yuting.lin728@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-[3rem] px-4 inline-flex justify-center items-center rounded-lg bg-light-yellow-bg border border-black text-md tracking-[.8px] font-roundo-medium relative z-10 hover:shadow-inner transition-all duration-100 ease-in group-hover:text-orange"
                        >
                            yuting.lin728@gmail.com
                        </a>
                        <div className='absolute w-full h-full top-[1px] left-[1px] border-2 border-black rounded-lg group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in'> </div>
                    </div>


                </div>

                <div className='h-[1px] w-full bg-dark-grey rounded-full'></div>

                <div className='flex items-center flex-col md:flex-row md:justify-between font-roundo py-4'>
                    <div className='flex items-center gap-2'>
                        <img src={coffee} alt="coffee illustration" width={40} />
                        <span className='text-sm'>Made with shots of expresso</span>
                    </div>
                    <span className='text-sm'>&copy; 2024 Tina Lin</span>
                </div>
            </div >
        </footer >

    )
}

export default Footer
