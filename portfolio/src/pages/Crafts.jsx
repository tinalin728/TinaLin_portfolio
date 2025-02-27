import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { projectData } from "../data/projectData";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import WindowWidth from '../hooks/WindowWidth';
import CraftCard from '../components/CraftCard'
import FeatureCraftCard from '../components/FeatureCraftCard';
import ProjectCard from '../components/ProjectCard';
import line from "../../public/assets/icons/line.svg"

function Crafts() {

    const windowWidth = WindowWidth();
    const craftRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            '.tag', {
            y: -50,
        },
            {
                y: -10,
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

    const [hoverStates, setHoverStates] = useState({});

    const handleMouseEnter = (id) => {
        setHoverStates((prev) => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setHoverStates((prev) => ({ ...prev, [id]: false }));
    };


    return (
        <>
            <section className='bg-primary py-[6rem] relative lg:py-[8rem]'>
                <div className='max-w-container flex flex-col justify-center items-center'>

                    <div className='tag mx-auto py-1 px-4 bg-charcoal w-fit rounded-md -rotate-6'>
                        <p className='tracking-widest font-patrick uppercase text-white text-sm md:text-base text-nowrap'>Linspired</p>
                    </div>
                    <div className=''>
                        <h1 className="craftHeader uppercase text-center  text-nowrap">
                            {Array.from("Crafts").map((letter, index) => (
                                <span key={index} className="letter text-[65px] md:text-[80px] inline-block mt-2  font-roundo-bold text-primary text-stroke uppercase leading-none lg:px-0 mx-0 md:tracking-wider">
                                    {letter}
                                </span>
                            ))}
                        </h1>
                    </div>
                    <img src={line} alt="" width={300} />
                </div>
            </section>


            <section className='pb-20 md:pb-[10rem] lg:pb-[15rem] craftSection'>
                <div className=' max-w-container grid gap-6 md:grid-cols-2'>
                    {projectData.map((project) => (
                        <ProjectCard
                            key={project.id} project={project}
                        />
                    ))}
                </div>
            </section >

        </>
    )
}

export default Crafts
