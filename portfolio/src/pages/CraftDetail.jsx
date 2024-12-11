import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'
import { craftsData } from '../data/craftsData'
import UIUXLayout from '../components/craftDetail/UIUXLayout';
import CodingLayout from '../components/craftDetail/CodingLayout';
import DesignLayout from '../components/craftDetail/DesignLayout';
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


    return (
        <>
            {/* banner */}
            <section className='max-w-container overflow-hidden py-[6rem]'>
                <div className='relative h-full flex flex-col items-center justify-between gap-8 md:flex-row '>
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
            <section className='overview border-t-2  bg-darker-bg'>
                <div className='content-w pb-4 pt-[10rem]'>
                    <h2>Project Overview</h2>
                    <div className='md:flex md:gap-16 md:justify-center'>
                        <div className='flex-1'>
                            <p className='mb-10'>{craft.overview.content}</p>
                            <a href="#prototype" className='px-6 py-4 rounded-full border-2  font-roundo-medium shadow-charcoal hover:shadow-charcoal-hover transition duration-300'>Skip to Prototype</a>
                        </div>

                        <div className='flex-1'>
                            <div className='flex flex-col justify-between gap-6'>
                                <div>
                                    <p className='font-roundo-medium text-orange'>My Role</p>
                                    <p>{craft.overview.role}</p>
                                </div>
                                <div>
                                    <p className='font-roundo-medium text-orange'>Project Duration</p>
                                    <p>{craft.overview.duration}</p>
                                </div>
                                <div>
                                    <p className='font-roundo-medium text-orange'>Deliverables</p>
                                    <p>{craft.overview.deliverables}</p>
                                </div>
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

            <div className='border-y border-black pt-14 overflow-hidden'>
                <div className='max-w-container flex justify-between translate-y-4'>
                    {prev ?
                        (<button
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'auto',
                                }); navigate(`/crafts/${prev.id}`);
                            }}
                            className='font-craftwork text-light-yellow-bg text-stroke text-3xl font-extrabold uppercase hover:btn-text-shadow transition duration-500'>
                            Prev
                        </button>) :
                        (<span className='font-craftwork text-transparent text-stroke text-3xl  font-extrabold uppercase cursor-not-allowed'>Prev </span>)

                    }

                    {next ? (
                        <button
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'auto',
                                });
                                navigate(`/crafts/${next.id}`);
                            }}
                            className='font-craftwork font-extrabold text-light-yellow-bg text-3xl text-stroke uppercase hover:btn-text-shadow-r'>
                            Next
                        </button>
                    ) : (
                        <span className='font-craftwork text-transparent text-stroke text-3xl font-extrabold uppercase cursor-not-allowed'>Next </span>
                    )}
                </div>
            </div>
        </>
    )
}

export default CraftDetail
