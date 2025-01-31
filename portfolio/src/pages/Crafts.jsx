import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import WindowWidth from '../hooks/WindowWidth';
import CraftCard from '../components/CraftCard'

import data from '../data/generalData.json';

function Crafts() {

    const windowWidth = WindowWidth();

    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        const { crafts } = data;
        setCrafts(crafts);
    }, []);


    const [filter, setFilter] = useState('all');
    const filteredCrafts = crafts.filter((craft) => {
        const normalizedType = craft.type.toLowerCase().trim(); // Normalize type
        const normalizedFilter = filter.toLowerCase().trim(); // Normalize filter
        // console.log(`Filtering Craft - Type: "${normalizedType}", Filter: "${normalizedFilter}"`);
        if (normalizedFilter === 'all') return true;
        return normalizedType === normalizedFilter;
    });
    const firstCraft = filteredCrafts[0];


    const filterClasses = (isActive) =>
        `font-roundo-medium text-base py-1 px-8 transition duration-300 cursor-none ${isActive ? 'bg-charcoal text-white border-t-2 border-x-2' : 'bg-light-yellow-bg text-charcoal border-t-2 border-x-2'
        }`
    const columns = windowWidth < 768 ? 1 : 2;
    const rows = Math.ceil(filteredCrafts.length / columns);

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
    const [scale, setScale] = useState(1);

    const handleMouseMove = () => setScale(1.1);
    const handleMouseOut = () => setScale(1);



    return (
        <>
            <section className='bg-light-yellow-bg py-[6rem] relative lg:py-[8rem]'>
                <div className='max-w-container flex flex-col justify-center items-center'>
                    <div className=''>
                        <h2 className="craftHeader text-center sub-header text-nowrap">
                            {Array.from("Crafts").map((letter, index) => (
                                <span key={index} className="letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase leading-none lg:px-0 -mx-[2px] md:mx-0 md:tracking-wider">
                                    {letter}
                                </span>
                            ))}
                        </h2>
                    </div>

                    <div className='tag hidden md:block md:absolute md:top-[30%] md:left-[40%] md:-translate-x-1/2 md:-translate-y-1/2 py-2 px-4 bg-charcoal w-fit rounded-md md:-rotate-6'>
                        <p className='tracking-widest uppercase text-white text-sm md:text-base text-nowrap'>Love & Purpose</p>
                    </div>
                </div>
            </section>


            <section className='pb-20 md:pb-[10rem] lg:pb-[15rem]'>
                <div className=' max-w-container'>
                    {firstCraft && (
                        <Link
                            onMouseMove={handleMouseMove}
                            onMouseOut={handleMouseOut}
                            to={`/crafts/${firstCraft.id}`} className="block font-bold leading-normal capitalize group">
                            <div className='w-full flex flex-col p-3 mb-10 border-2 rounded-2xl overflow-hidden lg:flex-row lg:justify-center lg:items-center lg:gap-10 relative lg:mb-12 hover:border-[3px] transition-all duration-300'>

                                <div className="img-container overflow-hidden rounded-xl border border-black border-opacity-55 lg:basis-[60%]">
                                    {firstCraft.media === "video" ? (
                                        <video
                                            src={firstCraft.src}
                                            autoPlay
                                            muted
                                            playsInline
                                            loop
                                            className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out z-0  overflow-hidden"
                                            style={{ transform: `scale(${scale})` }}
                                        />
                                    ) : (
                                        <div className="relative">
                                            <img
                                                src={firstCraft.src}
                                                alt="project"
                                                className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out z-0  overflow-hidden project-img"
                                                loading="lazy"
                                                style={{ transform: `scale(${scale})` }}
                                            />
                                        </div>
                                    )}
                                    <div className='absolute top-8 left-10 bg-orange px-4 rounded-md'><p className='text-white tracking-widest capitalize lg:text-[18px]'>featured</p></div>
                                </div>

                                <div className=' p-4 lg:basis-[40%] lg:px-4'>
                                    <div className='flex flex-col gap-4 '>
                                        <div className="flex flex-wrap gap-2">
                                            {firstCraft.skills.map((skill, index) => (
                                                <div className="inline-block" key={index}>
                                                    <span className="font-roundo tracking-[.8px] md:tracking-[1.5px] text-gray-800 bg-darker-bg px-3 py-1 rounded-full text-sm text-nowrap">
                                                        {skill}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <h3 className='leading-normal'>
                                            {firstCraft.title}
                                        </h3>

                                    </div>
                                    <p className='tracking-normal normal-case'> {firstCraft.content}</p>

                                    <button className="block tracking-wide font-roundo-medium mt-4 py-4 group group-hover:text-orange">
                                        Read Now <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-x-150 group-hover:translate-x-2">→</span>
                                    </button>

                                </div>
                            </div>
                        </Link>
                    )}


                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {filteredCrafts.slice(1, 6).map((craft) => {
                            return (
                                <CraftCard
                                    key={craft.id}
                                    id={craft.id}
                                    title={craft.title}
                                    mediaType={craft.media}
                                    src={craft.src}
                                    skills={craft.skills}
                                    content={craft.content}
                                    status={craft.status}
                                />
                            );
                        })}
                    </div>
                </div>
            </section >

        </>
    )
}

export default Crafts
