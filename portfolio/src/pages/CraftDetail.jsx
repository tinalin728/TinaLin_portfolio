import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { craftsData } from '../data/craftsData'
import UIUXLayout from '../components/craftDetail/UIUXLayout';
import CodingLayout from '../components/craftDetail/CodingLayout';

import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";
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


    return (
        <>
            {/* banner */}
            <section className='overflow-hidden py-[10rem]'>
                <div className='relative h-full max-w-container flex flex-col items-center justify-between gap-8 md:flex-row '>
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
            <section className='overview  border-t'>
                <div className=' content-w  border-x pt-[10rem] pb-4 '>
                    <div className='max-w-[35rem]'>
                        <p className='text-dark-grey'> {craft.overview.tagline} </p>
                        <h2>{craft.title}</h2>
                        <p>{craft.overview.companyOverview}</p>
                    </div>

                    <div className='content-gap mb-0 md:flex md:gap-12 md:justify-center'>
                        <div className='flex-1'>
                            <h3>Project Overview</h3>
                            <p dangerouslySetInnerHTML={{ __html: craft.overview.content }} />

                            <div className='mt-6 mb-4'>
                                <p className='font-roundo-medium text-orange'>My Role</p>
                                <p>{craft.overview.role}</p>
                            </div>
                            <div className='mb-6'>
                                <p className='font-roundo-medium text-orange'>Project Duration</p>
                                <p>{craft.overview.duration}</p>
                            </div>
                        </div>

                        <div className='flex-1'>
                            <div className='flex flex-col justify-between gap-10'>
                                <div>
                                    <h3>Challenges</h3>
                                    <p dangerouslySetInnerHTML={{ __html: craft.overview.challenge }} />
                                </div>
                                <div>
                                    <h3>What I Accomplished</h3>
                                    <ul className='ml-3'>
                                        {craft.overview.accomplish.map((item, index) => (
                                            <li key={index} className='font-roundo list-disc leading-[30px]'> {item} </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='relative h-full border-black'>
                <div className='h-full content-w border-x'>
                    {/* render uiux or coding project */}

                    {craft.type === 'UXUI' ?
                        <UIUXLayout craft={craft} /> :

                        <CodingLayout craft={craft} />
                    }
                </div>

            </div>

            <div className='border-y border-black pt-14 overflow-hidden'>
                <div className='max-w-container flex justify-between translate-y-2 md:translate-y-4 lg:translate-y-6'>
                    {prev ?
                        (<button
                            onClick={() => navigate(`/crafts/${prev.id}`)}
                            className='font-craftwork text-light-yellow-bg text-stroke text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase hover:btn-text-shadow transition duration-500'>
                            Prev
                        </button>) :
                        (<span className='font-craftwork text-transparent text-stroke text-2xl md:text-3xl lg:text-4xl  font-extrabold uppercase cursor-not-allowed'>Prev </span>)

                    }

                    {next ? (
                        <button
                            onClick={() => navigate(`/crafts/${next.id}`)}
                            className='font-craftwork font-extrabold text-light-yellow-bg text-2xl md:text-3xl lg:text-4xl text-stroke uppercase hover:btn-text-shadow-r'>
                            Next
                        </button>
                    ) : (
                        <span className='font-craftwork text-transparent text-stroke text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase cursor-not-allowed'>Next </span>
                    )}
                </div>
            </div>
        </>
    )
}

export default CraftDetail
