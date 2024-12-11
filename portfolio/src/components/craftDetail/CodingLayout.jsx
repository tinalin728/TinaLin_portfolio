import React, { useEffect, useState } from 'react'
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import backLog from '../../../public/assets/basics/backlog.png'


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
            <section className='pt-14 pb-0 content-w'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>
                    <h2 className='mb-10 text-orange'>{craft.contribution.backlog.title}</h2>

                    <div className='mb-10 flex flex-col md:flex-row gap-10 '>
                        <div className='flex-1' >
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
                </div>
            </section >


            <section className='content-w'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>

                    <h2 className=' text-orange mb-10'>{craft.contribution.wireframe.title}</h2>

                    <div className='flex flex-col-reverse md:flex-row gap-10'>
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
                        <div className='flex-1'>
                            <p>{craft.contribution.wireframe.content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='content-w'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>

                    <h2 className='mb-10 text-orange'>{craft.dev.header}</h2>

                    <div className=''>
                        <div className='flex flex-col gap-10 lg:flex-row'>
                            <div className='flex-1'>
                                <h3>{craft.dev.tailwind.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: craft.dev.tailwind.content }} className='mb-4' />
                            </div>
                            <div className='flex-1'>
                                <img src={craft.dev.tailwind.image.src} alt={craft.dev.tailwind.image.altText} className='w-[80%]' />
                            </div>
                        </div>
                    </div>

                    <div className='content-gap'>
                        <h3 className='mb-6'>{craft.dev.component.header}</h3>
                        <p className='mb-6'>{craft.dev.component.content}</p>
                        <div className='flex flex-col gap-10 lg:flex-row'>
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
                                                width: "100%",
                                                maxWidth: "65rem",
                                                height: "500px",
                                                overflow: "auto",
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

            <section className='content-w'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>
                    <div>
                        <h2 className='text-orange'>Final Result</h2>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CodingLayout
