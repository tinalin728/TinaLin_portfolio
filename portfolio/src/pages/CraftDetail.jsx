import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'
import { craftsData } from '../data/craftsData'
import UIUXLayout from '../components/craftDetail/UIUXLayout';
import CodingLayout from '../components/craftDetail/CodingLayout';
import DesignLayout from '../components/craftDetail/DesignLayout';
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Helmet } from 'react-helmet';

import PrimaryBtn from '../components/buttons/PrimaryBtn';
import arrow from '../../public/assets/icons/arrow.svg';

gsap.registerPlugin(ScrollTrigger);



function CraftDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const craft = craftsData.find(c => c.id === parseInt(id));

    if (!craft) {
        return <p>Project Not Found</p>
    }
    if (craft.status !== 'completed') {
        return <section className='max-w-container'> <h1>Coming Soon </h1> </section>
    }

    const currentIndex = craftsData.findIndex(c => c.id === parseInt(id));
    const prev = craftsData[currentIndex - 1];
    const next = craftsData[currentIndex + 1];

    //handle overflow for uxui
    useEffect(() => {
        if (craft?.type === 'UXUI') {
            document.querySelector('main').style.overflow = 'visible';
        } else {
            document.querySelector('main').style.overflow = 'hidden';
        }
        return () => {
            document.querySelector('main').style.overflow = '';
        };
    }, [craft])

    useEffect(() => {
        // Scroll to the top of the page whenever the `id` changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto', // You can change to 'auto' for instant scroll
        });
    }, [id]);




    return (
        <>
            {/* metadata */}
            <Helmet>
                <title>{craft.title} | Tina Lin's Portfolio</title>
                <meta name="description" content={craft.overview.content} />
                <meta
                    name="keywords"
                    content={`Tina Lin, ${craft.title}, ${craft.type}, Portfolio, UX Design, Web Development`}
                />
                <meta property="og:title" content={`${craft.title} | Tina Lin's Portfolio`} />
                <meta property="og:description" content={craft.overview.content} />
                <meta property="og:image" content={craft.banner.image.src} />
                <meta property="og:url" content={`https://www.tinalin.ca/crafts/${craft.id}`} />
                <meta property="og:type" content="article" />
            </Helmet>

            {/* banner */}
            <section className='max-w-container overflow-hidden py-[6rem]'>
                <div className='relative h-full flex flex-col items-center justify-between gap-8 md:flex-row'>
                    <div className='flex-1'>
                        <p className='text-dark-grey text-center mb-2 md:text-left'>{craft.banner.subHeader}</p>
                        <h1 className='text-wrap text-center md:text-left'> {craft.banner.header}</h1>
                    </div>

                    <div className='flex-1'>
                        <img src={craft.banner.image.src} alt={craft.banner.image.altText} className={`${craft.banner.image.classes}`} />
                    </div>
                </div>
            </section>

            {/* overview */}
            <section className='overview border-t-2  bg-darker-bg pt-[10rem]'>
                <div className='content-w pb-4 '>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Introduction</span>
                        <h1>Overview</h1>
                    </div>

                    <div>
                        <div className='flex flex-col gap-6 md:flex-row md:justify-center md:gap-10 my-10'>
                            <div className='flex-1'>
                                <p className='font-roundo-medium uppercase tracking-wider'>Role</p>
                                <p>{craft.overview.role}</p>
                            </div>
                            <div className='flex-1'>
                                <p className='font-roundo-medium uppercase tracking-wider'>Project Timeline</p>
                                <p>{craft.overview.duration}</p>
                            </div>
                            <div className='flex-1'>
                                <p className='font-roundo-medium uppercase tracking-wider'>{craft.overview.user.title}</p>
                                <p>{craft.overview.user.content}</p>
                            </div>
                            <div className='flex-1'>
                                <p className='font-roundo-medium uppercase tracking-wider'>Process</p>
                                <p>{craft.overview.process}</p>
                            </div>
                        </div>

                        <div className='flex flex-col-reverse gap-10 content-gap items-center md:flex-row'>
                            <div className='basis-2/3'>
                                <h3 className='mb-10 ital'>{craft.overview.headline} </h3>
                                <p className='mb-10'>{craft.overview.content}</p>
                                <p className='font-roundo-medium uppercase tracking-wider'>The Challenge</p>
                                <p className='mb-10'>{craft.overview.challenge}</p>

                                <p className='font-roundo-medium uppercase tracking-wider'> The Solution</p>
                                <p>{craft.overview.solution}</p>

                                <div className='mt-14'>
                                    <a href="#prototype" className='px-6 py-4 rounded-full border-2 font-roundo-medium shadow-charcoal hover:shadow-charcoal-hover transition duration-300'>{craft.overview.link}</a>
                                </div>

                            </div>

                            <div className='basis-1/3'>
                                <img src={craft.overview.img.src} alt={craft.overview.img.altText} className="w-full"
                                    loading="lazy"
                                />
                                <p className='font-roundo-medium text-center text-sm mt-2 text-dark-grey mb-10'>{craft.overview.img.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='relative h-full bg-darker-bg'>
                <div className='h-full'>
                    {/* render uiux or coding project */}

                    {craft.type === 'UXUI' ?
                        (<UIUXLayout craft={craft} />) :
                        craft.type === 'coding' ? (
                            <CodingLayout craft={craft} />) : (
                            <DesignLayout craft={craft} />
                        )
                    }
                </div>
            </div>

            <section className="border-y border-black py-14 overflow-hidden">
                <div className="max-w-container">
                    <h2 className="mb-6">View More Projects!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            craftsData[(currentIndex + 1) % craftsData.length], // Next project
                            craftsData[(currentIndex + 2) % craftsData.length], // Project after next
                        ].map((project) => (
                            <Link
                                key={project.id}
                                to={`/crafts/${project.id}`}
                                className="group block p-2 border-2 rounded-lg shadow-lg relative overflow-hidden"
                            >
                                {project.media === "video" ? (
                                    <video
                                        src={project.cover}
                                        alt={project.banner.image.altText}
                                        autoPlay muted playsInline loop
                                        className="w-full border-2"
                                    />
                                ) : (
                                    <img src={project.cover}
                                        alt={project.banner.image.altText}
                                        className="w-full border-2"
                                    />
                                )}

                                <div
                                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex justify-center items-center text-white transition-opacity duration-300"
                                >
                                    <h3 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CraftDetail
