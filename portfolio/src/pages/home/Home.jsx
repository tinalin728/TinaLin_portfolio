import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import './HomeAnimation.css'

import AboutCard from '../../components/AboutCard';
import CraftGrid from '../../components/CraftGrid';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';
import WindowWidth from '../../hooks/WindowWidth';
import HorizontalScroll from '../../components/HorizontalScroll';
import AirplaneTest from './AirplaneTest';

import cloud from '../../assets/images/cloud.svg'
import airplaneBg from '../../assets/images/homepage/airplane.svg'
import arrow from '../../assets/images/arrow.svg';
import arrowDown from '../../assets/images/homepage/arrowDown.svg'
import sun from "../../assets/images/homepage/sun.svg"
import sunglasses from "../../assets/images/homepage/emoji-sunglasses.png"
import pBorder from '../../assets/images/homepage/pixelated-border.svg'

function Home() {

    const cloudStyle = {
        backgroundImage: `url(${cloud})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const airplaneContainer = useRef(null);
    const cloudContainer1 = useRef(null);
    const cloudContainer2 = useRef(null);
    const scrollContainer = useRef(null);
    const emojiContainer = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            airplaneContainer.current,
            { x: '-100%' },
            {
                x: '0%',
                duration: 2,
                ease: 'power2.out',
            }),

            gsap.fromTo(
                cloudContainer2.current, // Target the cloud container
                {
                    x: '-5vw',
                },
                {
                    x: '100vw', // Move to off-screen on the right
                    duration: 25, // Animation duration (10 seconds for a smooth floating effect)
                    ease: 'linear', // Use linear easing for constant speed (floating effect)
                    repeat: -1, // Infinite repeat
                    repeatDelay: 0, // No delay between repetitions
                });

        gsap.fromTo(cloudContainer1.current,
            {
                x: 0,
                y: 0,
            },
            {
                x: 8,
                y: 10,
                yoyo: true,
                repeat: -1,
                duration: 1.5,
                ease: 'sine.inOut'
            });

        // scroll container
        gsap.fromTo(scrollContainer.current,
            {
                y: 150,
                scale: .2,
                opacity: .5,
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: .5,
                ease: 'back.out(1.7)',
            })
    }, []);


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

    return (
        <>
            <section
                className='relative bg-light-yellow-bg p-0 h-[calc(100vh-80px)]'>

                <div ref={airplaneContainer} className='absolute top-1/2 bottom-0 left-0 w-[112%] -translate-y-1/2'><img src={airplaneBg} alt="bg airplane" className='w-full object-cover' /></div>

                <div ref={cloudContainer1}
                    className='absolute top-[10%] left-[25%] -translate-x-1/2 '> <img src={cloud} alt="cloud" className='cloud w-[50%] md:w-[60%] lg:w-[65%]' /></div>
                <div ref={cloudContainer2} className='absolute bottom-[30%] left-0 -translate-x-1/2 '> <img src={cloud} alt="cloud" className='w-[50%] md:w-[60%] lg:w-[65%]' /></div>

                {/* Content */}
                <div className='h-full' >
                    <div className="max-w-container h-full grid place-items-center relative">
                        <div className='absolute top-20 left-[5%] md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-10'>
                            <img src={sun} alt="" className='md:w-[150px] lg:w-[160px]' />
                        </div>
                        <div className='flex flex-col items-center relative'>
                            <div className='flex flex-col gap-4 md:flex-row lg:gap-10 items-center mb-6'>
                                <div className="px-4 py bg-white border border-black rounded-full lg:px-8">
                                    <p className="font-craftwork font-medium text-sm md:text-base md:tracking-[1px] lg:leading-none lg:py-2">Front-End Developer</p>
                                </div>
                                <FontAwesomeIcon icon={faX} className='hidden md:block' />

                                <div className="px-4 bg-charcoal border border-charcoal rounded-full  lg:px-6">
                                    <p className="font-craftwork font-medium text-white text-sm md:text-base md:tracking-[1px] lg:leading-none lg:py-2">Product Designer</p>
                                </div>
                            </div>
                            <div className="relative text-center flex flex-col lg:flex-row mb-[2rem]">
                                <h1 className="relative text-orange">
                                    Tina
                                </h1>
                                <h1 className='relative text-orange lg:px-10'>
                                    Lin
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* scroll element */}
                    <div ref={scrollContainer} className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <div className="relative inline-flex flex-col items-center justify-center">
                            <div className="inline-block relative">
                                <div className="absolute inset-0 w-full h-full bg-light-grey border border-black translate-y-[.2rem] rotate-[5deg] -z-10"></div>

                                <div className="p-[.8rem] bg-off-white border-2 border-black z-10 inline-flex gap-4 items-center">
                                    <img src={arrowDown} alt="location" className="w-[32px]" />
                                    <p className="text-sm md:text-base text-nowrap tracking-[1px]">SCROLL</p>
                                </div>
                            </div>
                            <div className='h-[60px] w-2 border-x-2 border-black bg-white'></div>
                        </div>
                    </div>
                </div>
            </section >

            <HorizontalScroll speed={.1} bgColor='bg-yellow'>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p >A designer who can code</p>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p >A developer who can design</p>
                <img src={sunglasses} alt="emoji" width={25} className="h-[25px]" />
                <p >Based in Vancouver</p>
            </HorizontalScroll>

            {/* about me */}
            <section className='grid place-items-center bg-light-grey-bg'>
                <div className="max-w-container text-center">
                    <div className='text-center pb-10 lg:pb-12'>
                        <span className='font-roundo-semibold tracking-[2px] text-orange uppercase'>Lin's Toolkit</span>
                        <h3 className='mt-2' >What I Do<span className='dot custom-text text-stroke text-transparent relative z-10' data-text=".">.</span></h3>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 mb-10 md:mb-14 lg:mb-20">
                        {about.map((item) => (
                            <AboutCard
                                key={item.id}
                                header={item.title}
                                icon={item.icon}
                                content={item.description}
                                width={item}
                                translate={item.id === 2 ? 'lg:translate-y-4' : ''}
                            />
                        ))}
                    </div>

                    <PrimaryBtn
                        to='/about'
                        text='More About Me'
                        icon={arrow}
                    />
                </div>
            </section>

            {/* divider */}
            <div className='bg-light-grey-bg flex flex-col justify-center'>
                <div ref={emojiContainer} className="max-w-container w-full origin-center	">
                    <img className='origin-center' src={sunglasses} alt="" width={30} />
                </div>
                <div className="max-w-container w-full">
                    <div className="max-w-container h-2"
                        style={{
                            backgroundImage: `url(${pBorder})`,
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: 'auto 100%'
                        }}>

                    </div>
                </div>
            </div>

            {/* featured crafts */}
            <section className='bg-light-grey-bg  pb-[8rem] rounded-b-[50px] lg:rounded-b-[70px]'>
                <div className="max-w-container text-center">
                    <div className='text-center pb-10 lg:pb-12'>
                        <div className='inline-block'>
                            <span className='font-roundo-semibold tracking-[2px] text-orange uppercase'>Linspired</span>
                        </div>
                        <h3 className='text-wrap'>Featured Crafts.</h3>
                    </div>

                    <div className='mb-10 lg:mb-16 flex flex-col'>
                        <CraftGrid crafts={crafts.slice(0, 2)} />
                    </div>

                    <PrimaryBtn
                        to='/crafts'
                        text='More Crafts'
                        icon={arrow}
                    />
                </div>
            </section>
        </>
    )
}

export default Home


// const dashlineStyle = {
//     backgroundImage: `url(${dashline})`,
//     backgroundPosition: 'left center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '112%'
// }

// const airplaneRef = useRef(null);
// useGSAP(() => {
//     gsap.fromTo(
//         airplaneRef.current,
//         { x: '-100%' },
//         {
//             x: '0%',
//             duration: 2,
//             ease: 'power2.out',
//         }
//     )
// }, { scope: airplaneRef })
