import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import WindowWidth from '../hooks/WindowWidth';
import CraftCard from '../components/CraftCard'
import FeatureCraftCard from '../components/FeatureCraftCard';
import data from '../data/generalData.json';

function Crafts() {

    const windowWidth = WindowWidth();
    const craftRef = useRef(null);

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
            '.craftSection',
            { y: 200, opacity: 0 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.inOut",
                onComplete: () => {
                    hoverEnabled = true;
                }

            }
        )

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

    const [hoverStates, setHoverStates] = useState({});

    const handleMouseEnter = (id) => {
        setHoverStates((prev) => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setHoverStates((prev) => ({ ...prev, [id]: false }));
    };


    return (
        <>
            <section className='bg-light-yellow-bg py-[6rem] relative lg:py-[8rem]'>
                <div className='max-w-container flex flex-col justify-center items-center'>
                    <div className='tag mx-auto py-2 px-4 bg-charcoal w-fit rounded-md -rotate-6'>
                        <p className='tracking-widest uppercase text-white text-sm md:text-base text-nowrap'>Linspired</p>
                    </div>
                    <div className=''>
                        <h2 className="craftHeader text-center sub-header text-nowrap">
                            {Array.from("Crafts").map((letter, index) => (
                                <span key={index} className="letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase leading-none lg:px-0 mx-0 md:tracking-wider">
                                    {letter}
                                </span>
                            ))}
                        </h2>
                    </div>
                </div>
            </section>


            <section className='pb-20 md:pb-[10rem] lg:pb-[15rem] craftSection'>
                <div className=' max-w-container'>
                    {filteredCrafts.slice(0, 2).map((craft) => (

                        <FeatureCraftCard
                            key={craft.id}
                            id={craft.id}
                            title={craft.title}
                            mediaType={craft.media}
                            src={craft.src}
                            skills={craft.skills}
                            content={craft.content}
                            status={craft.status}
                        />
                    ))}

                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {filteredCrafts.slice(2, 6).map((craft) => {
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
