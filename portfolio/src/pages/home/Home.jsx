import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import { addAnimation, removeAnimation } from './HomeAnimation';
import './HomeAnimation.css'
import mockup from '../../assets/images/mockup-Tim_Hortons.png'
import mockup2 from '../../assets/images/mockup-basics.png'
import AboutCard from '../../components/AboutCard';
import arrow from '../../assets/images/arrow.svg';

function Home() {

    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const { about } = data;
                setAbout(about);
                console.log(about)
            });
    }, [])

    // inline constant for styling
    const eyeSize = {
        width: 'clamp(30px, 4.5vw, 60px)',
        height: 'clamp(35px, 5.5vw, 65px)'
    }

    const pupilSize = {
        width: 'clamp(15px, 2.5vw, 25px)',
        height: 'clamp(15px, 2.5vw, 25px)'
    }

    const testStroke = {
        WebkitTextStroke: '2px #FBF8F0'
    }


    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                addAnimation();
            } else {
                removeAnimation();
            };
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize)
        }

    }, []);



    return (
        <>
            <section className='overflow-hidden'>
                <div className="max-w-container  min-h-[85vh] flex flex-col justify-between">

                    <div className='flex flex-col justify-center items-center md:items-end py-[5rem] pr-4'>
                        <div className='relative'>
                            <p className='text-center font-aleo'>Based in <span className='block'>Vancouver</span> </p>
                            <span className='animation-morph absolute top-1/2 left-1/2 min-h-[80px] min-w-[120px] border border-yellow -translate-x-1/2 -translate-y-1/2 rounded-[50%] -rotate-12'></span>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col items-center md:flex-row md:items-end md:justify-start'>
                            <h2 className='text-light-yellow-bg text-stroke order-last text-center mb-8 md:text-left'>Into the
                                <div className=' ml-[.8rem] md:ml-4 lg:ml-6 inline-block relative border'>
                                    <span className='md:tracking-[5px]'> <span style={testStroke}>e</span>y<span style={testStroke}>e</span></span>

                                    <div className='absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center bg-light-yellow-bg rounded-[50%] border border-dark-grey overflow-hidden' style={eyeSize}>
                                        <div className='pupil bg-black rounded-full translate-y-[10px] md:translate-y-[15px] lg:translate-y-[20px]' style={pupilSize}></div>
                                    </div>
                                    <div className='absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center bg-light-yellow-bg rounded-[50%] border border-dark-grey overflow-hidden' style={eyeSize}>
                                        <div className='pupil bg-black rounded-full translate-y-[10px] md:translate-y-[15px] lg:translate-y-[20px]' style={pupilSize}></div>
                                    </div>
                                </div>

                                <span className='block'>& mind of</span>
                            </h2>

                            <div className='pb-4 md:pb-4 md:order-last lg:pb-14' >
                                <h5 className=''>A Product Designer  & <br /> Front-End Developer </h5>
                            </div>
                        </div>

                        <div className="text-center md:text-left scroller" data-speed="fast" data-direction="left">
                            <div className='scroller__inner'>
                                <h1 className='text-orange'>
                                    Tina Lin
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-light-grey-bg h-full rounded-t-2xl lg:rounded-t-[8%] shadow-[0_-10px_14px_-15px_rgba(0,0,0,0.3)] -mt-2 md:-mt-4 pb-16'>
                <div className='w-full inline-flex justify-center items-center'>
                    <div className='bg-light-grey w-[150px] h-[6px] md:w-[180px] lg:w-[250px] rounded-full mt-4'> </div>
                </div>

                <div className="max-w-container">
                    <div className='text-center py-[5rem]'>
                        <div className='inline-block'>
                            <span className='font-roundo font-roundo-semibold tracking-[2px] text-orange uppercase'>Lin's Toolkit</span>
                        </div>
                        <h3>What I Do.</h3>
                    </div>

                    <div className="grid grid-col-1 md:grid-cols-3 gap-[4rem] md:gap-4 lg:gap-10">
                        {about.map((item) => (
                            <AboutCard
                                key={item.title}
                                header={item.title}
                                icon={item.icon}
                                content={item.description}
                            />
                        ))}
                    </div>

                    <div className='text-center mt-10 w-full border border-dark-grey py-4 rounded-xl lg:mt-16'>
                        <Link to="/about" className='font-roundo text-base lg:tracking-[2px]'>More About Me</Link>
                    </div>

                </div>
            </section >

            <section className='bg-light-grey-bg pb-16 rounded-b-2xl lg:rounded-b-[8%] shadow-[0_10px_14px_-15px_rgba(0,0,0,0.3)]'>
                <div className="max-w-container">

                    <div className='text-center pt-16 pb-8 md:pb-14 lg:pb-16'>
                        <div className='inline-block'>
                            <span className='font-roundo font-roundo-semibold tracking-[2px] text-orange uppercase'>Linspired</span>
                        </div>
                        <h3>Featured Crafts.</h3>
                    </div>

                    <div className='grid grid-col-1 lg:grid-cols-2 gap-[4rem] md:gap-4 lg:gap-10'>
                        <div className='group '>
                            <div className='flex flex-col gap-1 mb-2 md:flex-row md:items-center md:justify-between md:mb-4'>
                                <h5 className='group-hover:text-orange transition-all duration-300 ease-in'>Tim Horton's App Redesign</h5>
                                <div className='inline-block'>
                                    <span className='font-roundo tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm'>UXUI</span>
                                </div>
                            </div>

                            <div className='bg-off-white rounded-xl  shadow-lg group-hover:border-2 group-hover:border-black  group-hover:bg-light-grey transition-all duration-300 ease-in'>
                                <img src={mockup} alt="" className='group-hover:scale-95 transition-all duration-300 ease-in' />
                            </div>
                        </div>

                        <div className='group '>
                            <div className='flex flex-col gap-1 mb-2 md:flex-row md:items-center md:justify-between md:mb-4'>
                                <h5 className='group-hover:text-orange transition-all duration-300 ease-in'>Basics. - E-commerce Retailer</h5>
                                <div className='flex gap-2'>
                                    <div className='inline-block'>
                                        <span className='font-roundo tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm text-nowrap '>Front-End</span>
                                    </div>
                                    <div className='inline-block'>
                                        <span className='font-roundo tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm'>PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-off-white rounded-xl shadow-lg group-hover:border-2 group-hover:border-black  group-hover:bg-light-grey transition-all duration-300 ease-in'>
                                <img src={mockup2} alt="" className='group-hover:scale-95 transition-all duration-300 ease-in' />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className='inline-flex gap-4 justify-center items-center mx-auto mt-10 border border-black py-3 px-8 rounded-full  lg:mt-16 group'>
                            <Link to="/crafts" className='font-roundo text-base lg:tracking-[2px]'>More Crafts</Link>
                            <div>
                                <img src={arrow} alt="" width={35} className='group-hover:-rotate-[15deg] transition duration-300 ease-in' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='pt-16'>
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

                    <div className='h-[.2rem] w-full bg-yellow rounded-full'></div>

                    <div className='flex justify-between items-center font-aleo py-4'>
                        <div className='flex items-center gap-2'>
                            <img src={coffee} alt="coffee illustration" width={40} />
                            <span>Made with shots of expresso</span>
                        </div>
                        <span>&copy; 2024 Tina Lin</span>
                    </div>
                </div >
            </section > */}
        </>
    )
}

export default Home
