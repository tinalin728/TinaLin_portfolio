import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

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
        console.log(`Filtering Craft - Type: "${normalizedType}", Filter: "${normalizedFilter}"`);
        if (normalizedFilter === 'all') return true;
        return normalizedType === normalizedFilter;
    });


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


    return (
        <>
            <section className='bg-light-yellow-bg py-[8rem] p-0 relative'>
                <div className='max-w-container flex flex-col justify-center items-center'>
                    <div className=''>
                        <h2 className="craftHeader text-center sub-header text-nowrap">
                            {Array.from("Crafts").map((letter, index) => (
                                <span key={index} className="letter inline-block font-craftwork font-extrabold mt-2 text-light-yellow-bg text-stroke uppercase tracking-wider leading-none">
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


            <section className=''>
                <div className='py-[10rem] bg-darker-bg border-2'>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6  max-w-container">
                        {filteredCrafts.map((craft, index) => {
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
