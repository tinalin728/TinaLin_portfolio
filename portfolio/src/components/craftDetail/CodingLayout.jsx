import React, { useEffect, useState } from 'react'
import BackToTop from '../buttons/BackToTop'
import ProjectNav from './ProjectNav'
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';


import ImageModal from '../ImageModal'

function CodingLayout({ craft }) {
    const [activeTab, setActiveTab] = useState(0);

    // image modal
    const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });

    const handleImgClick = (image) => {
        setModalData({ isOpen: true, ...image })
    }

    const closeModal = () => {
        setModalData({ isOpen: false, src: '', alt: '' })
    }
    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: .9 },
    };



    return (
        <>
            <BackToTop />

            {/* sticky nav */}
            <ProjectNav stickyNav={craft.stickyNav} />

            <section id='planning' className='content-w'>
                <div className=''>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Project Initiation</span>
                        <h1>Planning</h1>
                    </div>


                    <div className='mt-10 flex flex-col md:flex-row gap-10 '>
                        <div className='flex-1' >
                            <h2>{craft.contribution.backlog.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: craft.contribution.backlog.content }} />
                        </div>

                        <div className='flex-1 p-2 rounded-xl bg-white bg-opacity-55 h-full'>
                            <img src={craft.contribution.backlog.image.src} alt={craft.contribution.backlog.image.altText}
                                className='w-full max-h-[400px] object-cover border border-gray-400 rounded-md'
                                onClick={() => handleImgClick({
                                    src: craft.contribution.backlog.image.src,
                                    alt: craft.contribution.backlog.image.altText
                                })}
                            />
                            <p className='text-center italic text-sm text-dark-grey pt-2'>{craft.contribution.backlog.image.caption}</p>
                        </div>
                        <ImageModal
                            isOpen={modalData.isOpen}
                            src={modalData.src}
                            alt={modalData.alt}
                            onClose={closeModal}
                        />
                    </div>

                    <div className='content-gap flex flex-col gap-6 md:flex-row-reverse'>
                        <div className='flex-1'>
                            <h2>User Stories</h2>
                            <p>{craft.contribution.stories.content}</p>
                        </div>
                        <div className='flex-1'>
                            <img src={craft.contribution.stories.image.src} alt={craft.contribution.stories.image.altText} />
                        </div>
                    </div>
                </div>
            </section >


            <section id='design' className='content-w'>
                <div className=''>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Sprint 1 & 2</span>
                        <h1>Design</h1>
                    </div>


                    <div className='content-gap flex flex-col md:flex-row gap-10'>
                        <div className='flex-1'>
                            <h2 className=''>{craft.contribution.sitemap.title}</h2>
                            <p>{craft.contribution.sitemap.content}
                            </p>
                        </div>

                        <div className='flex-1 p-2 bg-white bg-opacity-50 rounded-xl'>
                            <img src={craft.contribution.sitemap.image.src} alt={craft.contribution.sitemap.image.altText}
                                className='rounded-md border border-gray-400'
                                onClick={() => handleImgClick({
                                    src: craft.contribution.sitemap.image.src,
                                    alt: craft.contribution.sitemap.image.altText
                                })}
                            />
                            <p className='text-center italic text-sm text-dark-grey pt-2'>{craft.contribution.sitemap.image.caption}</p>
                        </div>
                        <ImageModal
                            isOpen={modalData.isOpen}
                            src={modalData.src}
                            alt={modalData.alt}
                            onClose={closeModal}
                        />
                    </div>

                    <div className='content-gap flex flex-col md:flex-row-reverse gap-10'>
                        <div className='flex-1'>
                            <h2 className=''>{craft.contribution.wireframe.title}</h2>
                            <p>{craft.contribution.wireframe.content}
                            </p>
                        </div>

                        <div className='flex-1 p-2 bg-white bg-opacity-50 rounded-xl'>
                            <img src={craft.contribution.wireframe.image.src} alt={craft.contribution.wireframe.image.altText}
                                className='rounded-md border border-gray-400'
                                onClick={() => handleImgClick({
                                    src: craft.contribution.wireframe.image.src,
                                    alt: craft.contribution.wireframe.image.altText
                                })}
                            />
                            <p className='text-center italic text-sm text-dark-grey pt-2'>{craft.contribution.wireframe.image.caption}</p>
                        </div>
                        <ImageModal
                            isOpen={modalData.isOpen}
                            src={modalData.src}
                            alt={modalData.alt}
                            onClose={closeModal}
                        />
                    </div>
                </div>
            </section>

            <section id='develop'>
                <div className='content-w'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Sprint 3 & 4 / Revision</span>
                        <h1>Develop</h1>
                    </div>
                </div>


                <div className='mt-10'>
                    <div className='content-w'>
                        <h2>Deliverables</h2>
                        <p>During sprint 3, we met with our instructor, who acted as a stakeholder, and she suggested adding elements to reflect the company’s philosophy and values, such as sustainability. To address this, the design team prioritized refining the original pages and added a new product homepage, postponing the cart page development. By the end of sprint 4, I developed a five-page website that followed the wireframe design.</p>
                    </div>
                    <div className='mt-10 px-8 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5'>
                        {craft.dev.screens.map((item, index) => (
                            <div key={index}>
                                <img src={item.src} alt={item.altText} />
                                <p className='font-roundo-medium text-center text-sm mt-2 text-dark-grey'>{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='content-gap'>
                    <div className='content-w flex flex-col gap-10 items-center lg:flex-row'>
                        <div className='flex-1'>
                            <h2>{craft.dev.tailwind.title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: craft.dev.tailwind.content }} className='mb-4' />
                        </div>
                        <div className='flex-1'>
                            <img src={craft.dev.tailwind.image.src} alt={craft.dev.tailwind.image.altText} className='w-[80%]' />
                        </div>
                    </div>
                </div>

                <div className='content-gap'>
                    <div className='content-w'>
                        <h2 className='mb-6'>{craft.dev.component.header}</h2>
                        <p className='mb-6'>{craft.dev.component.content}</p>
                        <div className='flex flex-col gap-10 lg:flex-row overflow-hidden'>
                            <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                                <TabList className='flex -mb-2'>
                                    {craft.dev.component.snippets.map((item, index) => (
                                        <Tab key={index} className={`border-t border-x px-4 py-2 tracking-wide ${activeTab === index ? 'bg-charcoal text-white outline-none' : 'bg-transparent text-black'
                                            }
                                            `}> {item.tab}</Tab>
                                    ))}
                                </TabList>

                                {craft.dev.component.snippets.map((item, index) => (
                                    <TabPanel key={index}>
                                        <SyntaxHighlighter language='javascript'
                                            style={tomorrow} showLineNumbers={true} wrapLines
                                            customStyle={{
                                                width: '100%',
                                                minHeight: "500px",
                                                height: '100%',
                                                overflow: "auto",
                                                letterSpacing: '.8px'
                                            }}
                                        >
                                            {item.code}
                                        </SyntaxHighlighter>
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

            <section id='prototype' className='pb-20 md:pb-[10rem]'>
                <div className='content-w'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Results</span>
                        <h1>Final Look</h1>
                    </div>
                </div>
                <div className='content-gap'>
                    <div className='content-w'>
                        <div className='relative'>
                            <Swiper
                                style={{
                                    overflow: 'hidden !important',
                                }}
                                rewind={true}
                                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                                pagination={true}
                                modules={[Navigation, Pagination]}
                                slidesPerView={1}
                            >

                                {craft.final.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div>
                                            <p className='text-center mb-4'>{item.caption}</p>

                                            <video
                                                src={item.src}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-auto rounded-xl"
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="arrow-left absolute top-1/2 left-10 z-10 w-10 h-10 bg-white rounded-full">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button className="arrow-right absolute top-1/2 right-10 z-10 w-10 h-10 bg-white rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>

                        <div className='content-gap flex justify-center'>
                            <div>
                                <a href="https://github.com/tinalin728/basics/tree/main/src" target='_blank' className='px-6 py-4 rounded-full border-2 font-roundo-medium shadow-charcoal hover:shadow-charcoal-hover transition duration-300'> View Code </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CodingLayout
