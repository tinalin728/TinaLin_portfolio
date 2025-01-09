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



function About() {

    const coding = ["HTML", "CSS", "JS", "REACT . JS", "TAILWINDCSS", "JQUERY"];
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
                duration: .5,
                ease: "bounce.out",
            }
        ),
            gsap.fromTo(
                ".sub-header",
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
                    duration: 1,
                    ease: "power3.out",
                });

        const letters = document.querySelectorAll('.letter')

        letters.forEach((l) => {
            let hoverTimeline;

            l.addEventListener('mouseenter', () => {
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

        // Remove pulsing animation after 150ms
        setTimeout(() => {
            setPulsing((prev) => ({
                ...prev,
                [id]: false, // Reset pulsing state for this button
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
            <section className='bg-light-yellow-bg py-[8rem] p-0 relative'>
                <div className='max-w-container flex flex-col justify-center items-center'>
                    <div className=''>
                        <h2 className="craftHeader text-center sub-header text-nowrap">
                            {Array.from("About").map((letter, index) => (
                                <span key={index} className="letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase tracking-wider leading-none">
                                    {letter}
                                </span>
                            ))}
                        </h2>
                    </div>

                    <div className='tag hidden md:block md:absolute md:top-[30%] md:left-[40%] md:-translate-x-1/2 md:-translate-y-1/2 py-2 px-4 bg-charcoal w-fit rounded-md md:-rotate-6'>
                        <p className='tracking-widest uppercase text-white text-sm md:text-base text-nowrap'>From Education to Tech</p>
                    </div>
                </div>

            </section>

            <div className='bg-darker-bg border-t-2'>
                <div className='max-w-container max-content-w'>
                    {/* image */}
                    <section className='flex flex-col lg:flex-row gap-10 items-center justify-between py-[10rem]'>
                        <div className='basis-[35%]'>
                            {/* <div className='flex flex-col items-center gap-[6rem] -mt-20 mb-10'>
                                <div className='relative pt-14 max-w-[350px]'>
                                    <div className="absolute top-[62%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[101%] h-[115%] bg-light-yellow-bg border-2 rounded-xl z-[1]"></div>
                                    <div className="absolute top-[60%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[101%] h-[115%] bg-light-yellow-bg border-2 rounded-xl z-[1]"></div>

                                    <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[115%] bg-light-yellow-bg border-2 rounded-xl z-[1]"></div>


                                    <div className='relative z-10 mx-auto mb-4'>
                                        <img src={profilePic} alt="" className='object-cover w-[90%] mx-auto border-2 rounded-md' />
                                    </div>

                                    <div className='flex justify-between items-center px-6'>
                                        <div className='flex gap-6 z-20 relative'>
                                            <FontAwesomeIcon icon={faHeart} className='text-xl' />
                                            <FontAwesomeIcon icon={faComment} className='text-xl' />
                                            <FontAwesomeIcon icon={faPaperPlane} className='text-xl' />
                                        </div>

                                        <div className='relative z-20 w-[25px]'>
                                            <FontAwesomeIcon icon={faBookmark} className='text-xl' />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
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
                                        className="rounded-xl border-2 flex justify-between items-center bg-light-yellow-bg"
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

                        <div className='basis-[65%] '>
                            <div className=''>
                                <div className='pb-2 leading-none text-orange border-b border-black border-dashed'>
                                    <h3>Peek Into My Life</h3>
                                </div>

                                <div>
                                    <p className='indent-4 pt-4 mb-2 font-roundo-medium text-[20px]'>Hi I'm Tina!</p>
                                    <p className='indent-4 mb-2'>
                                        With a background in Linguistics and Education, I’ve always tried to find ways to bring creativity into my professional life, whether through creating interactive curriculums to meet the diverse needs of children or designing engaging materials using everyday items.
                                    </p>
                                    <p className='indent-4'>
                                        What really drew me into the design and tech industry was when I was introduced to
                                        <a href="https://lingraphica.com/aac-devices/what-is-an-aac-device/" target='_blank' className='text-base font-roundo tracking-normal md:text-[18px] capitalize text-dark-grey mx-2'>AAC devices</a>
                                        as a communication aid for autistic children at work. It showed me how thoughtful design and technology can bridge communication gaps and improve lives, which then led me to pursue the New Media Design and Development program at BCIT.
                                    </p>
                                    <div className='mt-10'>
                                        <PrimaryBtn
                                            text='resume'
                                            href='#'
                                            bgColor='bg-yellow'
                                            icon={iconDownload}
                                            reverseOrder='true'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className=' flex flex-col items-center justify-between lg:flex-row gap-10 relative'>
                        <div className='lg:basis-[65%] w-full'>
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
                                    <p className=''></p>
                                </div>
                                {/* <div>
                                    <p className='font-roundo-medium text-md'>Soft Skills</p>
                                    <ul className='grid md:grid-cols-2 gap-x-6 px-4 py-2'>
                                        {softSkills.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-disc'> {item}</li>
                                        ))}
                                    </ul>
                                </div> */}
                                <div>
                                    <p className='font-roundo-medium pb-2 text-md'>Programming Language & Library</p>
                                    <div className='flex gap-2 flex-wrap pt-2'>
                                        {coding.map((item, index) => (
                                            <div key={index} className='px-4 bg-charcoal rounded-md'><p className='text-white'>{item}</p></div>
                                        ))}
                                    </div>
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
                        </div>

                        <div className="relative basis-[35%]">
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
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-yellow border-b-2">
                                        <div className='flex justify-between items-center'>
                                            <p className="font-roundo-medium mt-1">Core Value</p>
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
                        </div>
                    </section >

                    <section className='py-[10rem]'>
                        <div className='flex flex-col-reverse items-center lg:flex-row gap-16 relative'>
                            <div className='basis-[35%] relative overflow-hidden bg-white rounded-xl'>
                                <div className='h-14 w-full absolute top-0 border-2 bg-charcoal rounded-t-xl z-10 text-white flex items-center justify-between px-6'>
                                    <p className=''>
                                        My Currents
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
                                    <h3>I Also Like</h3>
                                </div>
                                <div className='basis-[60%] pt-2'>
                                    <ul className='list-disc px-4 '>
                                        <li>I love hanging out with my 3-year-old niece. She's my doodle inspiration. We spend hours building epic block towers and laughing along to Peppa Pig episodes. </li>

                                        <li className='mt-2'>I'm working hard to stay healthy by making yoga and Pilates a regular habit. </li>
                                        <li className='mt-2'>Yes, I bead. I love hands-on crafts. There’s something so satisfying about turning tiny, colorful beads into something beautiful and unique. It’s my go-to when I need to unplug and create with my hands. </li>
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
