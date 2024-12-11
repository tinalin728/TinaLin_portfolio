import React, { useEffect, useState } from 'react'
import BackToTop from '../buttons/BackToTop'
import ProjectNav from './ProjectNav'
import ImageModal from '../ImageModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bulletPoint from '../../../public/assets/icons/bulletP.svg'

import { Tabs, Tab, TabList, TabPanel } from "react-tabs";


import { useLenis } from "lenis/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: .9 },
};

function UIUXLayout({ craft }) {

    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value)



    // image modal
    const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });
    // const [modalData.isOpen, setModalData.isOpen] = useState(false);
    // const [modalData, setModalData] = useState({ src: "", alt: "" });

    const handleImgClick = (image) => {
        setModalData({ isOpen: true, ...image })
    }

    const closeModal = () => {
        setModalData({ isOpen: false, src: '', alt: '' })
    }

    const [activeTab, setActiveTab] = useState(0);


    return (
        <>
            <BackToTop />

            <div className='py-[5rem] lg:py-[8rem] mx-auto max-w-container px-0'>
                <img src={craft.process.image.src} alt={craft.process.image.altText} className='design process object-cover object-center' />
            </div>

            {/* sticky nav */}
            <ProjectNav stickyNav={craft.stickyNav} />

            {/* research */}
            <section id='research' className='pt-14 pb-0 content-w'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>
                    <div>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Understanding Users</span>
                        <h1>Research</h1>
                    </div>

                    <div className='content-gap'>
                        <h2>Research Goals</h2>
                        <p className='mb-2'>{craft.research.description}
                        </p>
                        <ul>
                            {craft.research.goals.map((goal, index) => (
                                <li key={index} className='ml-4 list-decimal font-roundo-medium'>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='content-gap'>
                        <div className='flex gap-10 flex-col mb-10'>
                            <div className='flex-1'>
                                <h2>User Interviews</h2>
                                <p className='mb-4' dangerouslySetInnerHTML={{ __html: craft.research.interview.description }} />
                            </div>

                            <div className='p-2 bg-white bg-opacity-50 rounded-xl'>
                                <img src={craft.research.interview.map.src} alt={craft.research.interview.map.altText} className='w-full' />
                            </div>

                        </div>
                    </div>

                    {craft.research.flowAnalysis && (
                        <div className='flex flex-col lg:flex-row gap-10'>
                            <div className='flex-1'>
                                <h3>{craft.research.flowAnalysis.title}</h3>
                                <p>{craft.research.flowAnalysis.description}</p>
                            </div>

                            <div className='flex-1 p-2 rounded-xl bg-white bg-opacity-50'>
                                <div className='w-auto mx-auto h-[400px] border border-gray-400 rounded-md overflow-hidden'>
                                    <img src={craft.research.flowAnalysis.image.src}
                                        alt={craft.research.flowAnalysis.image.altText}
                                        className='w-full h-auto object-contain object-center'
                                        onClick={() => handleImgClick({
                                            src: craft.research.flowAnalysis.image.src,
                                            alt: craft.research.flowAnalysis.image.altText
                                        })} />
                                </div>

                                <p className='text-center mt-2 text-dark-grey italic text-sm'>{craft.research.flowAnalysis.image.caption}</p>

                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.alt}
                                    onClose={closeModal}
                                />
                            </div>
                        </div>
                    )}

                    <div className='content-gap'>
                        <h2>  {craft.research.problems.title}</h2>
                        <p className='pb-4'>{craft.research.problems.content}</p>

                        <div className='grid gap-10 md:grid-cols-2'>
                            {craft.research.problems.icons.map((issue, index) => (
                                <div key={index} className='flex flex-col gap-3 items-center md:p-8'>
                                    <img src={issue.src} alt={issue.altText} className='w-[100px]' />
                                    <p className='font-roundo-medium text-[19px]'> {issue.header}</p>
                                    <p className='text-center'>{issue.caption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='content-gap'>
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='flex-1'>
                                <h2>{craft.research.competitor.title}</h2>

                                <p dangerouslySetInnerHTML={{ __html: craft.research.competitor.description }} />
                            </div>

                            <div className='flex-1 p-2 rounded-xl bg-white bg-opacity-50 h-full'>
                                <div className='mx-auto overflow-hidden border border-gray-400 rounded-md'>
                                    <img src={craft.research.competitor.image.src}
                                        alt={craft.research.competitor.image.altText}
                                        className='h-full object-cover'
                                        onClick={() => handleImgClick({
                                            src: craft.research.competitor.image.src,
                                            alt: craft.research.competitor.image.altText
                                        })} />
                                </div>
                                <p className='text-center mt-2 text-dark-grey italic text-sm'>{craft.research.competitor.image.caption}</p>

                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.alt}
                                    onClose={closeModal}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* define */}
            <section id='define' className='content-w'>
                <div className='py-14 border-y-2 border-light-grey border-dashed'>
                    <div>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Insight Synthesis</span>
                        <h1>Define</h1>
                    </div>

                    {/* pants */}
                    {craft.define.insights && (
                        <div className='content-gap'>
                            <div className='flex-1 mb-10'>
                                <h2>Finding Opportunities</h2>
                                <p dangerouslySetInnerHTML={{ __html: craft.define.insights.content }} />
                                <ul className="flex flex-col gap-10 justify-center mt-10 md:flex-row">
                                    {craft.define.insights.solution.map((item, index) => (
                                        <li key={index} className="flex-1 bg-white p-6 rounded-xl bg-opacity-50 md:w-[33%]">
                                            <p className="text-center text-[19px]">
                                                <span className="mr-2">{item.icon}</span>
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-gray-600 text-center mt-2">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>



                                <div className='content-gap flex flex-col gap-10 lg:flex-row'>
                                    <div className='flex-1'>
                                        <h2>Competitor Analysis</h2>
                                        <p dangerouslySetInnerHTML={{ __html: craft.define.ca.content }} />
                                    </div>

                                    <div className='flex-1 p-2 bg-white rounded-xl bg-opacity-50 mt-6 h-full'>
                                        <img src={craft.define.ca.img.src} alt={craft.define.ca.img.src}
                                            className='border border-gray-400 rounded-md h-full object-cover'
                                            onClick={() => handleImgClick({
                                                src: craft.define.ca.img.src,
                                                alt: craft.define.ca.img.altText
                                            })} />

                                        <p className='text-center mt-2 text-dark-grey italic text-sm'>{craft.define.ca.img.caption}</p>
                                        <ImageModal
                                            isOpen={modalData.isOpen}
                                            src={modalData.src}
                                            alt={modalData.alt}
                                            onClose={closeModal}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* pants */}
                    {craft.define.features && (
                        <div>
                            <h2>{craft.define.features.header}</h2>
                            <p className='mb-6'>{craft.define.features.content} </p>

                            <div className='p-2 bg-white bg-opacity-50 rounded-xl'>
                                <img src={craft.define.features.img.src} alt={craft.define.features.img.altText} />
                            </div>
                        </div>
                    )}

                    <div className='content-gap'>
                        <h2>{craft.define.header}</h2>
                        <p className='mb-6'>{craft.define.content}</p>
                        <Tabs className='relative' selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                            <TabList className='flex'>
                                {craft.define.images.map((item, index) => (
                                    <Tab key={index} className={`border-t border-x px-4 py-2 tracking-wide text-sm ${activeTab === index ? 'bg-charcoal text-white outline-none' : 'bg-transparent text-black'
                                        }
                                    `} > {item.tab}</Tab>
                                ))}

                            </TabList>

                            {craft.define.images.map((item, index) => (
                                <TabPanel key={index} >
                                    <img src={item.src}
                                        alt={item.altText} className='border p-2 bg-white bg-opacity-50' />
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </section>


            <section id='design' className='content-w'>
                <div className='py-14' >
                    <span className='text-dark-grey uppercase font-roundo tracking-wider'>Creating Solutions</span>
                    <h1>Design</h1>

                    <div className='content-gap flex flex-col md:flex-row gap-10'>
                        <div className='flex-1'>
                            <h3 >Wireframe Sketches</h3>
                            <p className='mb-4'>{craft.design.sketch.description}</p>
                        </div>

                        <div className='flex-1 p-2 rounded-xl overflow-hidden bg-white bg-opacity-50'>
                            <div className='w-full h-[350px] overflow-hidden mx-auto border border-gray-500 rounded-md'>
                                <img src={craft.design.sketch.image.src}
                                    alt={craft.design.sketch.image.altText}
                                    className='w-full object-cover'
                                    onClick={() => handleImgClick({
                                        src: craft.design.sketch.image.src,
                                        alt: craft.design.sketch.image.altText
                                    })} />
                            </div>

                            <p className='text-center mt-2 text-dark-grey italic text-sm'>{craft.design.sketch.image.caption}</p>

                            <ImageModal
                                isOpen={modalData.isOpen}
                                src={modalData.src}
                                alt={modalData.alt}
                                onClose={closeModal}
                            />
                        </div>
                    </div>

                    <div className='content-gap flex flex-col gap-10 md:flex-row-reverse'>
                        <div className='flex-1 md:'>
                            <h3>User Flow</h3>
                            <p>{craft.design.flow.description}</p>
                        </div>

                        <div className='flex-1 h-full p-2 rounded-xl overflow-hidden bg-white bg-opacity-50'>
                            <div className='h-[90%] overflow-hidden mx-auto border border-gray-400 rounded-md'>
                                <img src={craft.design.flow.image.src}
                                    alt={craft.design.flow.image.altText}
                                    className='object-cover object-center'
                                    onClick={() => handleImgClick({
                                        src: craft.design.flow.image.src,
                                        alt: craft.design.flow.image.altText
                                    })} />
                            </div>

                            <p className='text-center mt-2 text-dark-grey italic text-sm'>{craft.design.flow.image.caption}</p>

                            <ImageModal
                                isOpen={modalData.isOpen}
                                src={modalData.src}
                                alt={modalData.alt}
                                onClose={closeModal}
                            />
                        </div>
                    </div>

                    <div className='content-gap'>
                        <h3>{craft.design.wireframes.header}</h3>
                        <p className='mb-8'>{craft.design.wireframes.description}
                        </p>
                        {craft.design.wireframes.medfiProto && (
                            <div className='grid gap-10'>
                                {craft.design.wireframes.medfiProto.map((img, index) => (
                                    <div key={index}>
                                        <img src={img.src} alt={img.altText} />
                                    </div>
                                ))}
                            </div>
                        )}

                        {craft.design.wireframes.medfi && (
                            <>
                                <div className="flex flex-col gap-10 mb-10 lg:flex-row lg:items-stretch lg:mb-20">
                                    <div className="lg:basis-1/3 lg:sticky lg:top-[40%] h-full">
                                        <div className='border-l-2 border-orange py-2 mb-4'>
                                            <p className='text-[18px] font-roundo-medium capitalize px-2 lg:px-4 lg:text-[20px]'> {craft.design.wireframes.medfi.input.header} </p>
                                        </div>
                                        <p>{craft.design.wireframes.medfi.input.content}</p>
                                    </div>

                                    <div className="lg:basis-2/3 lg:mt-20">
                                        <div id="input-image">
                                            <img
                                                src={craft.design.wireframes.medfi.input.img.src}
                                                alt={craft.design.wireframes.medfi.input.img.altText}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 mb-10 lg:flex-row lg:items-stretch lg:mb-20">
                                    <div className="lg:basis-1/3 lg:sticky lg:top-[40%] h-full">
                                        <div className='border-l-2 border-yellow py-2 mb-4'>
                                            <p className='text-[18px] font-roundo-medium capitalize px-2 lg:px-4 lg:text-[20px]'> {craft.design.wireframes.medfi.visualInput.header} </p>
                                        </div>
                                        <p>{craft.design.wireframes.medfi.visualInput.content}</p>
                                    </div>

                                    <div className="lg:basis-2/3 lg:mt-20">
                                        <div id="input-image">
                                            <img
                                                src={craft.design.wireframes.medfi.visualInput.img.src}
                                                alt={craft.design.wireframes.medfi.visualInput.img.altText}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-10 mb-10 lg:flex-row lg:items-stretch lg:mb-20">
                                    <div className="lg:basis-1/3 lg:sticky lg:top-[40%] h-full">
                                        <div className='border-l-2 border-blue py-2 mb-4'>
                                            <p className='text-[18px] font-roundo-medium capitalize px-2 lg:px-4 lg:text-[20px]'> {craft.design.wireframes.medfi.sizeRec.header} </p>
                                        </div>
                                        <p>{craft.design.wireframes.medfi.sizeRec.content}</p>
                                    </div>

                                    <div className="lg:basis-2/3 lg:mt-20">
                                        <div id="input-image">
                                            <img
                                                src={craft.design.wireframes.medfi.sizeRec.img.src}
                                                alt={craft.design.wireframes.medfi.sizeRec.img.altText}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 mb-10 lg:flex-row lg:items-stretch lg:mb-20">
                                    <div className="lg:basis-1/3 lg:sticky lg:top-[40%] h-full">
                                        <div className='border-l-2 border-charchaol py-2 mb-4'>
                                            <p className='text-[18px] font-roundo-medium capitalize px-2 lg:px-4 lg:text-[20px]'> {craft.design.wireframes.medfi.avatar.header} </p>
                                        </div>
                                        <p>{craft.design.wireframes.medfi.avatar.content}</p>
                                    </div>

                                    <div className="lg:basis-2/3 lg:mt-20">
                                        <div id="input-image">
                                            <img
                                                src={craft.design.wireframes.medfi.avatar.img.src}
                                                alt={craft.design.wireframes.medfi.avatar.img.altText}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* prototype */}
            {craft.prototype && (
                <section id={`${craft.prototype.id}`} className=' content-w'>
                    <div className='py-14 border-y-2 border-light-grey border-dashed'>

                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Testing in Action</span>
                        <h1>Prototype</h1>

                    </div>
                </section>
            )}

            {/* user testing */}
            {craft.testing && (
                <section id='testing' className='content-w'>
                    <div className='py-14 border-y-2 border-light-grey border-dashed'>
                        <div className=''>
                            <span className='text-dark-grey uppercase font-roundo tracking-wider'>Validating Solutions</span>
                            <h1>Testing</h1>
                        </div>


                        <div className='content-gap flex-col gap-10 md:flex-row'>
                            <div className='flex-1'>
                                <h3>Does this work?</h3>
                                <p className='mb-4' dangerouslySetInnerHTML={{ __html: craft.testing.description }} />

                            </div>
                            <div className='flex-1'>
                                <p className='text-[20px] font-roundo-medium'>Usability Testing Goals</p>
                                <ul className='my-2 ml-3'>
                                    {craft.testing.goals.map((goal, index) => (
                                        <li key={index} className='list-disc'>
                                            {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {
                            craft.testing.result && (
                                <div className='content-gap'>
                                    <h3>{craft.testing.result.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: craft.testing.result.content }} />
                                </div>
                            )
                        }

                        {craft.testing.problemImg && (
                            <div className='content-gap'>
                                <h3 className='mb-4'>Problems that users found</h3>
                                <div className='p-2 bg-white rounded-xl bg-opacity-50'>
                                    <img src={craft.testing.problemImg.src} alt={craft.testing.problemImg.altText} className='w-full' />
                                </div>
                            </div>
                        )}

                        <div className='content-gap'>
                            <h3>Iteration</h3>
                            <p className='mb-4'>{craft.testing.iteration.content}</p>

                            {craft.testing.iteration.image && craft.testing.iteration.image.length > 0 && (
                                <div className='flex flex-col gap-10'>
                                    {craft.testing.iteration.image.map((img, index) => (
                                        <div key={index} className='p-2 bg-white bg-opacity-50 rounded-xl overflow-hidden'>
                                            <img src={img.src} alt={img.altText} className='border border-gray-400 rounded-md' />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {craft.testing.screens &&
                            (
                                <>
                                    <div className='grid place-items-center gap-10 mb-[6.5rem]'>
                                        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10'>
                                            <div className='basis-[60%]'>
                                                <img src={craft.testing.screens.first.image.src} alt={craft.testing.screens.first.image.altText} className='border rounded-md' />
                                            </div>
                                            <div className='basis-[40%]'>
                                                <p>{craft.testing.screens.first.content} </p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-6 md:gap-10'>
                                            <div className='basis-[60%]'>
                                                <img src={craft.testing.screens.second.image.src} alt={craft.testing.screens.second.image.altText} className='border rounded-md' />
                                            </div>
                                            <div className='basis-[40%]'>
                                                <p>{craft.testing.screens.second.content} </p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10'>
                                            <div className='basis-[60%]'>
                                                <img src={craft.testing.screens.fourth.image.src} alt={craft.testing.screens.fourth.image.altText} className='border rounded-md' />
                                            </div>
                                            <div className='basis-[40%]'>
                                                <p>{craft.testing.screens.fourth.content} </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}


                        {craft.testing.final && (
                            <div id="prototype" className='content-gap'>
                                <h3 className='mb-4'>Final Look</h3>
                                <div dangerouslySetInnerHTML={{ __html: craft.testing.final.figma }} />
                                <a href=""></a>
                            </div>
                        )}
                    </div>
                </section>
            )}


            <section id='reflection' className=' content-w'>
                <div className='py-14'>

                    <span className='text-dark-grey uppercase font-roundo tracking-wider'> Final Thoughts</span>
                    <h1>Reflection</h1>

                    <div className=' content-gap flex flex-col gap-10 md:flex-row pb-20'>
                        <div className='flex-1'>
                            <h3>What I Learned</h3>
                            <ul className='ml-3'>
                                {craft.reflection.content.map((item, index) => (
                                    <li key={index} className='font-roundo list-disc leading-[30px]'>
                                        <p dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {craft.reflection.nextSteps && (
                            <div className='flex-1'>
                                <h3 className='mb-2'>Next Steps</h3>
                                <ul className='ml-3'>
                                    {craft.reflection.nextSteps.map((item, index) => (
                                        <li key={index} className='font-roundo list-disc leading-[30px]'> {item} </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section >
        </>
    )
}

export default UIUXLayout
