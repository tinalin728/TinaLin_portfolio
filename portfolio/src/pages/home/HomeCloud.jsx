import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import './HomeAnimation.css'

import AboutCard from '../../components/AboutCard';
import DivContainer from '../../components/DivContainer';
import CraftGrid from '../../components/CraftGrid';
import PrimaryBtn from '../../components/buttons/PrimaryBtn';

import cloud from '../../assets/images/cloud.svg'
import dashline from '../../assets/images/dashline.svg'
import locationIcon from '../../assets/images/icon-location.svg'
import arrow from '../../assets/images/arrow.svg';
import cloudTest from '../../assets/images/homepage/cloud.png'
import cloudBorder from '../../assets/images/homepage/cloud-border_1.svg'

//import arrow from '../../assets/images/arrow.svg';


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

    const cloudStyle = {
        backgroundImage: `url(${cloud})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: window.innerWidth < 768 ? '80%' : '50%',
    }
    const cloudStyle2 = {
        backgroundImage: `url(${cloudTest})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: window.innerWidth < 768 ? '80%' : '50%',
    }


    const dashlineStyle = {
        backgroundImage: `url(${dashline})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'

    }


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {


        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    // lg:h-[calc(100vh-80px)]
    // <div className='absolute top-10 left-2/3 rotate-[15deg]'> <img src={cloudTest} alt="cloud" width={150} /></div>
    // <div className='absolute top-[10%] left-[25%] -translate-x-1/2 -rotate-[15deg]'> <img src={cloudTest} alt="cloud" width={150} /></div>
    return (
        <>
            <section
                className='relative bg-light-yellow-bg p-0 h-[calc(100vh-80px)]'
                style={dashlineStyle}>

                {/* Centered Content */}
                <div className='h-full' style={cloudStyle}>
                    <div className="relative grid place-items-center">
                        <div className="relative inline-block">
                            <h1 className="relative text-center text-orange">
                                Tina <br /> Lin
                            </h1>
                            <div className="absolute top-14 -left-6 px-4 py bg-yellow-light border border-black rounded-full -rotate-[5deg] md:-left-10 md:top-16 lg:-left-[4rem] lg:top-[5rem] lg:px-8">
                                <p className="font-craftwork font-medium text-sm md:text-base md:tracking-[1px] lg:leading-none lg:py-2">Front-End Developer</p>
                            </div>
                            <div className="absolute bottom-6 -right-6 px-4 bg-[#feebe7] border border-black rounded-full rotate-[5deg] md:-right-8 md:bottom-8 lg:bottom-10 lg:px-6">
                                <p className="font-craftwork font-medium text-sm md:text-base md:tracking-[1px] lg:leading-none lg:py-2">Product Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-container">
                        <div className="relative inline-block -rotate-[3deg]">
                            <div className="absolute inset-0 w-full h-full bg-yellow border border-black translate-y-[.2rem] rotate-[5deg] -z-10"></div>
                            <div className="p-[.8rem] bg-off-white border border-black z-10 flex gap-4 items-center">
                                <img src={locationIcon} alt="location" className="w-[25px]" />
                                <p className="text-base text-nowrap">Based in Vancouver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DivContainer>
                <section className='grid place-items-center'>
                    <div className='text-center pb-[5rem]'>
                        <span className='font-roundo-semibold tracking-[2px] text-orange uppercase'>Lin's Toolkit</span>

                        <h3 className='mt-2' >What I Do<span className='dot custom-text text-stroke text-transparent relative z-10' data-text=".">.</span></h3>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 mb-10 lg:mb-16 md:gap-4 lg:gap-10">
                        {about.map((item) => (
                            <AboutCard
                                key={item.title}
                                header={item.title}
                                icon={item.icon}
                                content={item.description}
                                width={item}
                            />
                        ))}
                    </div>

                    <PrimaryBtn
                        to='/about'
                        text='More About Me'
                        icon={arrow}
                    />

                </section>



                <section className='grid place-items-center'>
                    <div className='text-center pb-8 md:pb-14 lg:pb-16 '>
                        <div className='inline-block'>
                            <span className='font-roundo-semibold tracking-[2px] text-orange uppercase'>Linspired</span>
                        </div>
                        <h3 className=''>Featured Crafts.</h3>
                    </div>

                    <div className='mb-10 lg:mb-16'>
                        <CraftGrid crafts={crafts.slice(0, 2)} />
                    </div>
                    <PrimaryBtn
                        to='/crafts'
                        text='More Crafts'
                        icon={arrow}
                    />
                </section>


            </DivContainer>



        </>
    )
}

export default Home
