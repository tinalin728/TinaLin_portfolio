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

                    <section id='brief' className='pb-0'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Client Brief</h2>
                            <div className='content-gap'>
                                <h3>Product Goals:</h3>
                                <ul className='list-disc'>
                                    <li>⤏ Focus on the pages: Our story/mission, Contact Us, FAQs</li>
                                    <li>⤏ Improve the Pop up designs (Email subscription/Discount Pop Ups)</li>
                                    <li>⤏ Site organization: categorize different products clearly</li>
                                    <li>⤏ A product review section, or a page with pictures of our ambassadors and their testimonies.</li>
                                    <li>⤏ Want to keep wholesale button, so that website visitors are aware of the service</li>
                                    <li>⤏ Easy to navigate</li>
                                    <li>⤏ Warm and friendly, wants a stronger brand identity</li>
                                </ul>
                                <h4 className='mt-10'>Assets Provided:</h4>
                                <ul className='list-disc'>
                                    <li>⤏ Header font</li>
                                    <li>⤏ Logo</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id='research' className='pb-0'>
                        <div>
                            <div className='section-gap border-t-2 border-light-grey border-dashed'>
                                <h2>Research</h2>
                                <div className='content-gap'>
                                    <h3> Defining Current Website Issues</h3>
                                    <p> Before redesigning the website, we conducted an in-depth analysis of its existing structure to understand the client’s strengths and areas for improvement. We identified three key pain points:</p>
                                    <h4 className='font-patrick text-red-500 mt-4'>Prioritized Problems:</h4>
                                    <ul className='flex flex-col gap-2'>
                                        <li> <span>Lack of strong visual hierarchy </span>: CTAs are not prominent. Important information blends in </li>
                                        <li><span>Disorganized information: </span>The homepage lacks a clear structure, causing important details to feel scattered. The navigation bar and product categories are not well-organized, making it harder for users to find what they need.</li>
                                        <li> <span>Lack of brand identity: </span>  The website does not fully reflect the company’s unique personality, making it less memorable to customers.</li>
                                    </ul>
                                </div>

                                <div className='content-gap'>
                                    <h3> Competitor Analysis</h3>
                                    <p>

                                    </p>

                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
