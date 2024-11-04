import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import { addAnimation, removeAnimation } from './HomeAnimation';
import './HomeAnimation.css'
import mockup from '../../assets/images/mockup-Tim_Hortons.png'
import mockup2 from '../../assets/images/mockup-basics.png'
import AboutCard from '../../components/AboutCard';
import SectionContainer from '../../components/SectionContainer';
import CraftCard from '../../components/CraftCard';
import arrow from '../../assets/images/arrow.svg';
import CraftGrid from '../../components/CraftGrid';

function Home() {

    const [about, setAbout] = useState([]);
    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const { about, crafts } = data;
                setAbout(about);
                setCrafts(crafts);
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
            <section className='pb-0'>
                <div className="max-w-container min-h-[85vh] flex flex-col justify-between">
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

            <SectionContainer>
                <section>
                    <div className='text-center pb-[5rem]'>
                        <div className='inline-block'>
                            <span className='font-roundo-semibold tracking-[2px] text-orange uppercase'>Lin's Toolkit</span>
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
                </section>


                <section>
                    <div className='text-center pb-8 md:pb-14 lg:pb-16'>
                        <div className='inline-block'>
                            <span className='font-roundo-semibold tracking-[2px] text-orange uppercase'>Linspired</span>
                        </div>
                        <h3>Featured Crafts.</h3>
                    </div>

                    <CraftGrid crafts={crafts.slice(0, 2)} />

                    <div className="flex justify-center">
                        <div className='inline-flex gap-4 justify-center items-center mx-auto mt-10 border border-black py-3 px-8 rounded-full  lg:mt-16 group'>
                            <Link to="/crafts" className='font-roundo text-base lg:tracking-[2px]'>More Crafts</Link>
                            <div>
                                <img src={arrow} alt="" width={35} className='group-hover:-rotate-[15deg] transition duration-300 ease-in' />
                            </div>
                        </div>
                    </div>
                </section>


            </SectionContainer>

        </>
    )
}

export default Home
