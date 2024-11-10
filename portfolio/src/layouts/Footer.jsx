import React, { useState, useEffect, useRef } from 'react'
import { ReactTyped } from "react-typed";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import SocialMediaBtn from '../components/buttons/SocialMediaBtn'
import WindowWidth from '../hooks/WindowWidth';

import coffee from '../assets/images/footer/coffee.png'
import arrowUp from '../assets/images/footer/backToTop.svg'
import dashline from '../assets/images/footer/dashline-footer.svg'
import satisfiedFace from '../assets/images/homepage/face-satisfied.png'


function Footer() {
    const typeStyle = {
        fontSize: 'clamp(2.375rem, 1.0106rem + 5.8216vw, 6.25rem)',
    }

    const dashlineStyle = {
        backgroundImage: `url(${dashline})`,
        backgroundPosition: 'top 40% center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    }

    const windowWidth = WindowWidth();
    const [breakText, setBreakText] = useState(false);

    useEffect(() => {
        if (windowWidth >= 492 && windowWidth <= 562) {
            setBreakText(true);
        } else {
            setBreakText(false);
        }
    }, [windowWidth]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const faceContainer = useRef(null);
    useGSAP(() => {
        gsap.fromTo(
            faceContainer.current,
            {
                rotate: -15,
            },
            {
                rotate: 15,
                duration: .8,
                ease: 'linear',
                repeat: -1,
                yoyo: true,
            }
        )
    })





    return (
        <footer className='relative' style={dashlineStyle}>
            <div ref={faceContainer} className='flex justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src={satisfiedFace} alt="" className='w-[40%]' />
            </div>

            <div className='relative max-w-container py-14 lg:py-[5rem] leading-tight'>
                <h2> Let's talk about

                    {!breakText && <br />}
                    <ReactTyped strings={["Design", "Code", "Ideas", "Collabs"]} typeSpeed={120} backSpeed={120} loop className={breakText ? 'ml-4' : ''}
                    />
                </h2>


                <h5 className='mt-8 lg:mt-12 max-w-[50rem] font-roundo tracking-normal'> I would love to hear from you! Feel free to reach out to me about anything and let’s get creative together!</h5>

                <div className='text-xl flex gap-4 flex-wrap my-8 lg:my-16 '>
                    <SocialMediaBtn
                        href='https://www.linkedin.com/in/tina-lin-000613b5/'
                        icon={faLinkedinIn}
                    />
                    <SocialMediaBtn
                        href='https://github.com/tinalin728'
                        icon={faGithub}
                    />
                    <SocialMediaBtn
                        href='mailto:yuting.lin728@gmail.com'
                        type='text'
                        text='yuting.lin728@gmail.com'
                    />
                </div>
                <div className='mt-[8rem] md:-[4rem] lg:mt-12'>
                    <div className='inline-flex flex-col items-center absolute bottom-0 right-20 cursor-pointer' onClick={scrollToTop}>
                        <div className='relative inline-block -rotate-[3deg]'>
                            <div className='absolute top-0 left-2 w-full h-full bg-light-grey border border-black rotate-[5deg] -z-10'></div>
                            <div className='p-[.8rem] bg-off-white border border-black z-10 flex gap-4'>
                                <img src={arrowUp} alt="icon arrow" width={32} />
                                <p className='text-base tracking-[1px] uppercase'>Back to Top</p>
                            </div>
                        </div>
                        <div className='h-[60px] w-2 border-x-2 border-black bg-white'></div>
                    </div>
                </div>
            </div >


            <div className='bg-light-grey-bg border-t border-black'>
                <div className='max-w-container '>
                    <div className='flex items-center flex-col md:flex-row md:justify-between font-roundo py-2'>
                        <div className='flex items-center gap-2'>
                            <img src={coffee} alt="coffee illustration" width={40} />
                            <span className='text-sm'>Made with shots of expresso</span>
                        </div>
                        <span className='text-sm'>&copy; 2024 Tina Lin</span>
                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer
