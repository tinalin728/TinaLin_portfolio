import React, { useState } from 'react'
import PrimaryBtn from '../components/buttons/PrimaryBtn'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

// images
import profilePic from '../../public/assets/about/tina.jpg'
import workPic from '../../public/assets/about/work.webp'
import iconDownload from '../../public/assets/about/download.png'
import ps from '../../public/assets/about/ps.svg'
import ai from '../../public/assets/about/ai.svg'
import id from '../../public/assets/about/id.svg'
import ae from '../../public/assets/about/ae.svg'
import dn from '../../public/assets/about/dn.svg'
import figma from '../../public/assets/about/figma.svg'
import wordpress from '../../public/assets/about/wordpress.svg'
import line from "../../public/assets/icons/line.svg"

import eggy from "../../public/assets/about/eggy.jpg"
import coffee from "../../public/assets/about/coffee.jpg"
import jellycat from "../../public/assets/about/jellycat.jpg"

import PrimaryCta from '../components/PrimaryCta';

function About() {

    const coding = ["HTML", "CSS", "JavaScript", "React.JS", "TailwindCSS", "React Native", "GSAP"];
    const design = [ps, ai, id, ae, dn, figma, wordpress]
    const ux = ['User Centered Design', 'User Research', 'Wireframing', 'Interactive Prototyping', 'Usability Testing', 'Responsive Design']


    useGSAP(() => {
        gsap.fromTo(
            '.tag', {
            y: -50,
        },
            {
                y: 0,
                duration: .8,
                ease: "bounce.out",
            }
        ),
            gsap.fromTo(
                ".letter",
                { textShadow: "none" },
                {
                    textShadow: `
                0px 0.5px 0 #1e1e1e,
                0px 1px 0 #1e1e1e,
                0px 1.5px 0 #1e1e1e,
                0px 2px 0 #1e1e1e,
                0px 2.5px 0 #1e1e1e,
                0px 3px 0 #1e1e1e,
                0px 3.5px 0 #1e1e1e,
                0px 4px 0 #1e1e1e,
                0px 4.5px 0 #1e1e1e,
                0px 5px 0 #1e1e1e,
                0px 5.5px 0 #1e1e1e,
                0px 6px 0 #1e1e1e`,
                    duration: .8,
                    ease: "elastic.inOut",
                    stagger: .05,
                });


        gsap.fromTo(
            '.aboutSection',
            { y: 200, opacity: 0 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.inOut",
                onComplete: () => {
                    hoverEnabled = true;
                }
            })

        const letters = document.querySelectorAll('.letter')
        let hoverEnabled = false;

        letters.forEach((l) => {
            let hoverTimeline;

            l.addEventListener('mouseenter', () => {

                if (!hoverEnabled) return;
                if (hoverTimeline) hoverTimeline.kill();

                hoverTimeline = gsap.timeline();
                hoverTimeline.to(l, {
                    x: -3,
                    y: -3,
                    textShadow: `
                        1px 1px 0 #1e1e1e,
                        2px 2px 0 #1e1e1e,
                        3px 3px 0 #1e1e1e,
                        4px 4px 0 #1e1e1e,
                        5px 5px 0 #1e1e1e,
                        6px 6px 0 #1e1e1e,
                        7px 7px 0 #1e1e1e,
                        8px 8px 0 #1e1e1e,
                        9px 9px 0 #1e1e1e,
                        10px 10px 0 #1e1e1e
                        `,
                    duration: 0.2,
                    ease: "power1.inOut",
                })
            });
            l.addEventListener('mouseleave', () => {
                if (!hoverEnabled) return;

                if (hoverTimeline) hoverTimeline.kill();

                hoverTimeline = gsap.timeline();
                hoverTimeline.to(l, {
                    x: 0,
                    y: 0,
                    textShadow: `
                        0px 0.5px 0 #1e1e1e,
                0px 1px 0 #1e1e1e,
                0px 1.5px 0 #1e1e1e,
                0px 2px 0 #1e1e1e,
                0px 2.5px 0 #1e1e1e,
                0px 3px 0 #1e1e1e,
                0px 3.5px 0 #1e1e1e,
                0px 4px 0 #1e1e1e,
                0px 4.5px 0 #1e1e1e,
                0px 5px 0 #1e1e1e,
                0px 5.5px 0 #1e1e1e,
                0px 6px 0 #1e1e1e`,
                    duration: 0.2,
                    ease: "power1.inOut",
                })
            });
        })

    }, [])





    return (
        <>
            <section className='bg-primary py-[6rem] p-0 relative lg:py-[8rem]'>
                <div className='max-w-container flex flex-col justify-center items-center'>
                    <div className='tag mx-auto py-1 px-4 bg-charcoal w-fit rounded-md -rotate-6'>
                        <p className='tracking-widest font-patrick uppercase text-white text-sm md:text-base text-nowrap'>Journey</p>
                    </div>

                    <div className=''>
                        <h1 className="craftHeader text-center text-nowrap">
                            {Array.from("About").map((letter, index) => (
                                <span key={index} className="text-[65px] md:text-[80px] letter inline-block mt-2  font-roundo-bold text-primary text-stroke uppercase leading-none lg:px-0 mx-0 md:tracking-wider
                                ">
                                    {letter}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <div className='w-[250px] md:w-[280px] lg:w-[300px]'>
                        <img src={line} alt="line" />
                    </div>
                </div>

            </section>
            {/* aboutSection */}
            <div className='aboutSection pb-20 h-full bg-primary relative z-10'>
                <div className='max-w-container'>
                    {/* image */}
                    <section className='bg-primary flex flex-col lg:flex-row gap-10 items-center justify-center pb-16 md:pb-20'>
                        <div className='lg:flex-1'>
                            <div className='flex flex-row relative'>
                                <div className='absolute bottom-0 z-10 md:relative md:bottom-0 md:max-w-[350px] w-full -rotate-3 bg-white flex flex-col p-4 lg:hover:-translate-y-2 lg:hover:-rotate-1 transition-all duration-300 rounded-2xl border-2'
                                >
                                    <div className='h-[320px] md:h-[380px] w-full rounded-xl overflow-hidden'>
                                        <img src={profilePic} alt="profile" className='object-cover w-full h-full' loading="lazy" />
                                    </div>
                                    <div className='text-center pt-2'>
                                        <p className='font-patrick text-dark-grey italic tracking-wider'>Say hi</p>
                                    </div>
                                </div>
                                <div className='relative z-0 w-full bg-white flex flex-col p-4 md:translate-y-4 md:max-w-[350px] lg:-translate-x-10 lg:hover:rotate-3 transition-all duration-300 rounded-2xl border-2'
                                >
                                    <div className='h-[320px] md:h-[380px] w-full rounded-xl overflow-hidden'>
                                        <img src={workPic} alt="work photo" className='object-cover w-full h-full' loading="lazy" />
                                    </div>
                                    <div className='text-center pt-2'>
                                        <p className='font-patrick text-dark-grey italic tracking-wider'>life as Miss Lin</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex-1'>
                            <div className=''>
                                <h3 className='normal-case leading-none mb-6'>From <span className='font-patrick text-orange tracking-wider mx-1 text-[29px]'> Education</span> to Tech</h3>

                                <div>
                                    <p className='font-patrick text-md md:text-lg tracking-wider'>Hi! I'm Tina, a digital designer based in Vancouver.</p>

                                    <p className='mt-1'>
                                        With a background in Linguistics and Education, I’ve always found ways to make learning fun—whether through interactive lessons or creative materials.
                                        My aha! moment came when I discovered AAC devices at work. Seeing how design and tech could bridge communication gaps led me to New Media Design at BCIT where I discovered my passion for both design and code. I enjoy making designs that bring warmth and connection, and turning them into life.
                                    </p>
                                    <div className='mt-10'>
                                        <a href="/resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-2 rounded-full px-4 py-3 group w-fit flex items-center justify-center cursor-pointer leading-none shadow-button hover:shadow-none hover:translate-y-1 transition-all duration-200 ease-in-out">
                                            <div className="mr-3"><img src={iconDownload} alt="" width={25} /></div>
                                            <div className="relative z-10 transition duration-100 ease-in-out h-full text-dark group-hover:text-black flex items-center justify-center">Resume
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='bg-primary py-16 md:py-20'>
                        <h3 className='normal-case mb-6 text-center'>The <span className='font-patrick text-orange tracking-wider mx-1 text-[29px]'> Tools</span> Behind My Creations</h3>

                        <div className='flex flex-col items-center justify-center lg:flex-row lg:items-stretch gap-10'>
                            <div className='flex-1 border-2 rounded-2xl relative w-full md:max-w-[400px]  overflow-hidden'>
                                <div className='h-3 w-3 bg-orange rounded-full border-2 absolute top-4 left-4'></div>
                                <h4 className=' font-patrick py-3 border-b-2 text-center tracking-wide'>How I craft experiences</h4>

                                <ul className='flex flex-wrap justify-center gap-3 text-nowrap py-4 px-2'>
                                    {ux.map((item, index) => (
                                        <li key={index} className='text-sm tracking-wide border list-none border-dashed border-light-grey bg-darker-bg/60 rounded-lg w-fit px-4'> {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className='flex-1 border-2 rounded-2xl relative w-full md:max-w-[400px]'>
                                <h4 className=' font-patrick h-fit py-3 border-b-2 text-center tracking-wide'> Where visual magic happens</h4>
                                <div className='h-3 w-3 bg-orange rounded-full border-2 absolute top-4 left-4'></div>
                                <div className='flex flex-wrap justify-center gap-4 py-4 px-5'>
                                    {design.map((item, index) => (
                                        <div key={index} className=''>
                                            <img src={item} alt="" width={50} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex-1 border-2 rounded-2xl relative w-full md:max-w-[400px]'>
                                <h4 className=' font-patrick h-fit py-3 border-b-2 text-center tracking-wide'>How I build my playground</h4>
                                <div className='h-3 w-3 bg-orange rounded-full border-2 absolute top-4 left-4'></div>

                                <ul className='flex flex-wrap justify-center gap-3 text-nowrap py-4 px-2'>
                                    {coding.map((item, index) => (
                                        <li key={index} className='text-sm tracking-wide border list-none border-dashed border-light-grey bg-white/60 rounded-lg w-fit px-4'> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section >

                    <section className='bg-primary max-w-container py-16 md:py-20'>
                        <h3 className='text-center mb-6'>What I Also<span className='font-patrick text-orange tracking-wider mx-2 text-[29px]'>Enjoy</span> </h3>

                        <div className='flex flex-col justify-center items-center gap-6 mt-4 md:flex-row md:items-start'>
                            <div className='md:max-w-[320px]'>
                                <div className='rounded-2xl overflow-hidden border-2'>
                                    <img src={eggy} alt="doodle" loading="lazy" />
                                </div>
                                <p className='mt-2 text-center'>Hanging out with my niece. She's my doodle inspiration.</p>
                            </div>
                            <div className='md:max-w-[320px]' >
                                <div className='rounded-2xl overflow-hidden border-2'>
                                    <img src={jellycat} alt="jelly cat" loading="lazy" />
                                </div>
                                <p className='mt-2 text-center'>Collecting JellyCat. I am a big fan of Ricky.</p>
                            </div>
                            <div className='md:max-w-[320px]'>
                                <div className='rounded-2xl overflow-hidden border-2'>
                                    <img src={coffee} alt="coffee" loading="lazy" />
                                </div>
                                <p className='mt-2 text-center'>Decaf coffee in the afternoon. <br /> No cream, no sugar!</p>
                            </div>
                        </div>
                    </section>
                </div >
            </div >

        </>
    )
}

export default About
