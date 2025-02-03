import React, { useState } from 'react'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faPaperPlane, faComment, faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

// images
import profilePic from '../../public/assets/about/tina.jpg'
import workPic from '../../public/assets/about/work.jpeg'
import iconDownload from '../../public/assets/about/download.png'
import hobbies from '../../public/assets/about/hobbies.png'
import ps from '../../public/assets/about/ps.svg'
import ai from '../../public/assets/about/ai.svg'
import id from '../../public/assets/about/id.svg'
import ae from '../../public/assets/about/ae.svg'
import dn from '../../public/assets/about/dn.svg'
import figma from '../../public/assets/about/figma.svg'
import wordpress from '../../public/assets/about/wordpress.svg'
import checker from '../../public/assets/about/checker.svg'
import orangeChecker from '../../public/assets/about/orangeChecker.svg'
import greyChecker from '../../public/assets/about/greyChecker.svg'
import grainbg from '../../public/assets/about/grain.png'
import designSvg from "../../public/assets/homepage/web-design.svg"
import uxuiSvg from "../../public/assets/homepage/uxui.svg"
import codingSvg from "../../public/assets/homepage/front-end.svg"


function About() {

    const coding = ["HTML", "CSS", "JavaScript", "React.JS", "TailwindCSS", "React Native", "GSAP"];
    const design = [ps, ai, id, ae, dn, figma, wordpress]
    const ux = ['User Centered Design', 'User Research', 'Wireframing', 'Interactive Prototyping', 'Usability Testing', 'Responsive Design']
    const softSkills = ['Communication', 'Critical Thinking', 'Problem Solving', 'Flexibility', 'Empathy']

    const checkerBg = {
        backgroundImage: `url(${checker})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }
    const greyCheckerBg = {
        backgroundImage: `url(${greyChecker})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }
    const orangeCheckerBg = {
        backgroundImage: `url(${orangeChecker})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }
    const grain = {
        backgroundImage: `url(${grainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }

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
                0.5px 0.5px 0 #1e1e1e,
                1px 1px 0 #1e1e1e,
                1.5px 1.5px 0 #1e1e1e,
                2px 2px 0 #1e1e1e,
                2.5px 2.5px 0 #1e1e1e,
                3px 3px 0 #1e1e1e,
                3.5px 3.5px 0 #1e1e1e,
                4px 4px 0 #1e1e1e,
                4.5px 4.5px 0 #1e1e1e,
                5px 5px 0 #1e1e1e,
                5.5px 5.5px 0 #1e1e1e,
                6px 6px 0 #1e1e1e`,
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
                         0.5px 0.5px 0 #1e1e1e,
                    1px 1px 0 #1e1e1e,
                    1.5px 1.5px 0 #1e1e1e,
                    2px 2px 0 #1e1e1e,
                    2.5px 2.5px 0 #1e1e1e,
                    3px 3px 0 #1e1e1e,
                    3.5px 3.5px 0 #1e1e1e,
                    4px 4px 0 #1e1e1e,
                    4.5px 4.5px 0 #1e1e1e,
                    5px 5px 0 #1e1e1e,
                    5.5px 5.5px 0 #1e1e1e,
                    6px 6px 0 #1e1e1e
                        `,
                    duration: 0.2,
                    ease: "power1.inOut",
                })
            });
        })

    }, [])

    const slides = [
        { id: 1, image: profilePic, content: 'Swipe to see more!' },
        { id: 2, image: workPic, content: 'Happy Halloween 😈' },
    ];

    const [liked, setLiked] = useState({});
    const [pulsing, setPulsing] = useState({});
    const toggleLike = (id) => {
        console.log(`Toggling button with id: ${id}`); // Debugging

        // Trigger pulsing animation for the specific button
        setPulsing((prev) => ({
            ...prev,
            [id]: true, // Set pulsing to true for this button
        }));

        setTimeout(() => {
            setPulsing((prev) => ({
                ...prev,
                [id]: false,
            }));
        }, 150);

        // Toggle liked state for the specific button
        setLiked((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the liked state for this button
        }));

        console.log('Updated Liked State:', liked); // Debugging
    };



    return (
        <>
            <section className='bg-light-yellow-bg py-[6rem] p-0 relative lg:py-[8rem]'>
                <div className='max-w-container flex flex-col justify-center items-center'>

                    <div className='tag mx-auto py-2 px-4 bg-charcoal w-fit rounded-md -rotate-6'>
                        <p className='tracking-widest uppercase text-white text-sm md:text-base text-nowrap'>Journey</p>
                    </div>

                    <div className=''>
                        <h2 className="craftHeader text-center sub-header text-nowrap">
                            {Array.from("About").map((letter, index) => (
                                <span key={index} className="letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase leading-none mx-0 md:tracking-wider">
                                    {letter}
                                </span>
                            ))}
                        </h2>
                    </div>

                </div>

            </section>

            <div className='aboutSection pb-20 md:pb-[10rem] lg:pb-[15rem]'>
                <div className='max-w-container'>
                    {/* image */}
                    <section className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
                        <div className='basis-[35%]'>

                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper max-w-[340px] h-[480px]"
                                style={{
                                    overflow: 'visible',
                                }}
                            >
                                {slides.map((slide) => (
                                    <SwiperSlide
                                        key={slide.id}
                                        className="rounded-xl border-2 flex justify-between items-center bg-white"
                                    >
                                        <div className="relative pt-12">
                                            <div className="relative z-10 mx-auto">
                                                <img
                                                    src={slide.image}
                                                    alt=""
                                                    className="object-cover w-[90%] mx-auto border-2 rounded-md"
                                                />
                                            </div>

                                            <div className="flex justify-between items-center px-6">
                                                <div className="flex gap-4 z-20 relative">
                                                    {/* Heart Button */}
                                                    <FontAwesomeIcon
                                                        icon={liked[slide.id] ? faSolidHeart : faRegularHeart} // Use slide.id
                                                        className={`text-[28px] pr-2 py-4 transform transition-transform duration-150 ${liked[slide.id] ? 'text-orange' : 'text-black animate-flash'
                                                            } ${pulsing[slide.id] ? 'scale-125' : 'scale-100'}`} // Animation per slide
                                                        onClick={() => toggleLike(slide.id)} // Pass slide.id
                                                    />

                                                    {/* Other Icons */}
                                                    <FontAwesomeIcon icon={faComment} className="text-xl py-4 pr-1" />
                                                    <FontAwesomeIcon icon={faPaperPlane} className="text-xl py-4" />
                                                </div>

                                                <div className="relative z-20 w-[25px]">
                                                    <FontAwesomeIcon icon={faBookmark} className="text-xl" />
                                                </div>
                                            </div>
                                            <div className="px-6 text-dark-grey">
                                                <p>{slide.content}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='basis-[65%]'>
                            <div className=''>
                                <div className='pb-2 leading-none text-orange border-b border-black border-dashed'>
                                    <h2>From Education to Tech</h2>
                                </div>

                                <div>
                                    <p className='pt-4 mb-2 font-roundo-medium text-[20px]'>Hi I'm Tina!</p>
                                    <p className='mb-3'>
                                        With a background in Linguistics and Education, I’ve always tried to find ways to bring creativity into my professional life, whether through creating interactive curriculums to meet the diverse needs of children or designing engaging materials using everyday items.
                                    </p>
                                    <p className=''>
                                        What really drew me into the design and tech industry was when I was introduced to
                                        <a href="https://lingraphica.com/aac-devices/what-is-an-aac-device/" target='_blank' className='text-base font-roundo tracking-normal md:text-[18px] capitalize text-dark-grey mx-2'>AAC devices</a>
                                        as a communication aid for autistic children at work. It showed me how thoughtful design and technology can bridge communication gaps and improve lives, which led me to pursue the New Media Design and Development program at BCIT, where I've discovered my passion for both design and development. My goal is to bridge the gap between technology and diverse user needs by creating accessible, inclusive solutions that empower everyone.
                                    </p>
                                    <div className='mt-10'>
                                        <PrimaryBtn
                                            text='resume'
                                            href='/resume.pdf'
                                            bgColor='bg-yellow'
                                            icon={iconDownload}
                                            reverseOrder='true'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className='pt-[10rem] flex flex-col gap-10 relative'>
                        <div className='pb-2 border-b border-black border-dashed'>
                            <h2 className='text-orange leading-none'>The Tools Behind my creations</h2>
                        </div>

                        <div className='flex flex-col justify-between gap-10 w-full md:flex-row flex-wrap'>
                            <div className='rounded-2xl p-6 border-2 w-full relative overflow-hidden  shadow-charcoal flex-1  md:min-w-[20rem] lg:min-w-[25rem]'>
                                <div className='relative z-10 flex flex-col'>
                                    <p className='font-roundo-medium text-md'>How I Craft Experiences</p>
                                    <ul className='flex flex-wrap gap-y-4 gap-x-6 text-nowrap mt-4'>
                                        {ux.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-none rounded-full w-fit px-4 border border-dashed'> <span className='mr-1 text-orange text-lg'> ✐</span> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='flex-1 rounded-2xl p-6 border-2 flex flex-col w-full min-h-[35vh] shadow-charcoal relative overflow-hidden md:min-w-[25rem] lg:min-w-[25rem]'>
                                <p className='font-roundo-medium text-md mb-4'>Where Visual Magic Happens</p>
                                <div className='flex flex-wrap gap-y-4 gap-x-6 '>
                                    {design.map((item, index) => (
                                        <div key={index} className=''>
                                            <img src={item} alt="" width={70} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='rounded-2xl p-6 border-2 flex flex-col w-full relative min-h-[35vh]  overflow-hidden shadow-charcoal flex-1 md:min-w-[30rem] lg:min-w-[25rem]'>
                                <div className='relative z-10'>
                                    <p className='font-roundo-medium text-md'>How I Build My Playground</p>
                                    <ul className='flex flex-wrap gap-y-4 gap-x-6 text-nowrap mt-4'>
                                        {coding.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-none rounded-full w-fit px-4 border border-dashed'> <span className='mr-1 text-yellow text-xl leading-none'>⚒</span>  {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className='lg:basis-[65%] w-full'>
                            <div className='mb-2 border-b border-black border-dashed'>
                                <h3 className='text-orange'>Skills</h3>
                            </div>

                            <div className='grid gap-10 pt-4'>
                                <div>
                                    <p className='font-roundo-medium text-md'>UX Skillsets</p>
                                    <ul className='grid md:grid-cols-2 gap-x-6 px-4 py-2'>
                                        {ux.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-disc'> {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className='font-roundo-medium pb-2 text-md'>Programming Language & Library</p>
                                    <ul className='grid md:grid-cols-2 gap-x-6 px-4 py-2'>
                                        {coding.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-disc'> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className='font-roundo-medium pb-2 text-md'>Design Software</p>
                                    <div className='flex flex-wrap gap-4 pt-2'>
                                        {design.map((item, index) => (
                                            <div key={index} className=''>
                                                <img src={item} alt="" width={55} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="relative basis-[35%]">
                            <div className="relative flex flex-col justify-center items-end">
                                <div
                                    className="card bg-white w-[300px] h-[400px] p-4 rounded-xl border-2 relative overflow-hidden hover:z-10 hover:scale-105 hover:translate-y-2 transition-transform duration-300 ease-in">
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-blue border-b-2">
                                        <div className="flex justify-between items-center">
                                            <p className="font-roundo-medium mt-1"> Hidden Talent </p>
                                            <div className='h-3 w-3 border-2 rounded-full bg-light-yellow-bg'></div>
                                        </div>
                                    </div>

                                    <p className="italic leading-normal text-lg bg-light-yellow-bg py-8 px-10 border-2 rounded-md mt-14" style={greyCheckerBg}>
                                        I can manage a group of 3-5 years old, turning chaos and tantrums into giggles and fun <span className='not-italic'>&#128520; &#128520; &#128520; </span>
                                    </p>
                                </div>

                                <div
                                    className="card bg-white  flex flex-col justify-center items-center p-4 w-[300px] h-[400px] rounded-xl border-2 relative overflow-hidden mr-0 md:mr-[6rem] -mt-[20rem] hover:z-10 hover:scale-105 hover:translate-y-2 transition-transform duration-300 ease-in"
                                >
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-charcoal border-b-2">
                                        <div className='flex justify-between items-center'>
                                            <p className="font-roundo-medium mt-1 text-white">Core Value</p>
                                            <div className='h-3 w-3 border-2 rounded-full bg-orange'></div>
                                        </div>
                                    </div>

                                    <p className="italic leading-normal text-lg bg-light-yellow-bg p-8 border-2 rounded-md mt-10" style={orangeCheckerBg}>
                                        I value creating inclusive spaces where everyone feels heard and connected, with a touch of warmth and creativity
                                    </p>
                                </div>

                                <div
                                    className="card bg-white flex flex-col justify-center items-center p-4 w-[300px] h-[400px] rounded-xl border-2 relative overflow-hidden mr-0 md:mr-[12rem] -mt-[20rem] hover:z-10 hover:scale-105 hover:translate-y-2 transition-transform duration-300 ease-in"
                                >
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-orange border-b-2">
                                        <div className='flex justify-between items-center'>
                                            <p className="font-roundo-medium mt-1">Fun Fact About Me</p>

                                            <div className='h-3 w-3 border-2 rounded-full bg-yellow'></div>
                                        </div>
                                    </div>
                                    <p className="italic leading-normal text-lg bg-light-yellow-bg p-8 mt-10 border-2 rounded-md" style={checkerBg}>
                                        I spent a year in Korea teaching little kiddos while immersing myself in K-pop, kimchi, and karaoke adventures.
                                    </p>
                                </div>
                            </div>
                        </div> */}


                    </section >

                    <section className='pt-[10rem]'>
                        <div className='flex flex-col-reverse lg:flex-row gap-16 relative'>
                            <div className='basis-[35%] relative overflow-hidden bg-white rounded-xl'>
                                <div className='h-14 w-full absolute top-0 border-2 bg-charcoal rounded-t-xl z-10 text-white flex items-center justify-between px-6'>
                                    <p className=''>
                                        My Current Interests
                                    </p>
                                    <div className='flex gap-2 items-center md:gap-4'>
                                        <div className='h-3 w-3 rounded-full bg-white'></div>
                                        <div className='h-3 w-3 rounded-full bg-orange'></div>
                                        <div className='h-3 w-3 rounded-full bg-yellow'></div>
                                        {/* <div class="relative w-5 h-5">
                                            <div class="absolute top-1/2 left-0 w-full h-[3px] bg-white rotate-45 origin-center"></div>
                                            <div class="absolute top-1/2 left-0 w-full h-[3px] bg-white -rotate-45 origin-center"></div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='pt-14 pb-4 px-10 relative border-2 rounded-xl' style={grain}>
                                    <img src={hobbies} alt="hobbies" className='' />
                                </div>
                            </div>

                            <div className='basis-[65%] w-full'>
                                <div className='mb-2 border-b border-black border-dashed text-orange'>
                                    <h2>When I'm Away from my monitors</h2>
                                </div>
                                <div className='basis-[60%] pt-2'>
                                    <ul className='flex flex-col gap-4'>
                                        <li className='flex gap-2'> <span className='text-lg text-brown'>⛫ </span> <span className='font-roundo'>I love hanging out with my 3-year-old niece. She's my doodle inspiration. We spend hours building epic block towers and laughing along to Peppa Pig episodes.  </span></li>
                                        <li className='flex gap-2'> <span className='text-xl text-brown'>⚐ </span> <span className='font-roundo'>I'm working hard to stay healthy by making yoga and Pilates a regular habit.</span></li>
                                        <li className='flex gap-2'> <span className='text-lg text-brown'>✤ </span> <span className='font-roundo'>And, I bead. I love hands-on crafts. There’s something so satisfying about turning tiny, colorful beads into something beautiful and unique. It’s my go-to when I need to unplug and create with my hands. </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >

        </>
    )
}

export default About
