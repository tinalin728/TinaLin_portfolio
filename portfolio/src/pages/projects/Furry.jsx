import React from 'react'
import ProjectBanner from '../../components/ProjectBanner'
import { projectData } from '../../data/projectData'
import BackToTop from '../../components/BackToTop';
import Sidebar from '../../components/Sidebar';
import PrototypeCta from '../../components/PrototypeCta';

const project = projectData[2]
console.log(projectData); // Check the whole data array
console.log(projectData[2]); // See if index 5 exists

export default function Furry() {

    const sections = [
        { id: "research", label: "Research" },
        { id: "problems", label: "Problems" },

    ];

    return (
        <>
            <ProjectBanner project={project} />

            <div className='max-w-container md:flex md:gap-10 lg:gap-14'>
                <Sidebar sections={sections} />
                <div className='overflow-hidden'>
                    {/* overview */}
                    <section className='bg-primary'>
                        <div className='section-gap'>
                            <h2 className=''>Overview</h2>
                            <div className='content-gap flex flex-col-reverse gap-10 lg:flex-row'>
                                <div className='flex-1'>
                                    <h4 className='mb-10 text-dark font-patrick-hand italic tracking-wider'>Furrytales Pet is a Canadian small business that specializes in handcrafted dehydrated and freshly baked pet treats.
                                    </h4>
                                    <p className='mb-10'> hackathon </p>
                                    <p className='uppercase tracking-wider underline underline-offset-[4px] font-roundo-medium text-orange'>The Challenge</p>

                                    <p className='mb-10'>  </p>

                                    <PrototypeCta inPageLink="View Prototype" scrollToId='prototype' />
                                </div>

                                <div className='flex-1 w-full h-full mx-auto'>
                                    <div className='w-full max-w-[350px] lg:w-[600px] mx-auto'>
                                        <img
                                            src={project.overview.media.src}
                                            alt={project.overview.media.altText}
                                            className=""
                                            loading='lazy'
                                        />
                                        <p className="text-center text-sm mt-2 text-grey font-patrick-hand tracking-wider">
                                            {project.overview.media.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='research' className='pb-0'>
                        <div>
                            <div className='section-gap border-t-2 border-light-grey border-dashed'>
                                <h2>Problems</h2>
                                <div className='content-gap'>

                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
