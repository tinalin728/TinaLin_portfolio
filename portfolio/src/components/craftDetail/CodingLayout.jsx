import React, { useEffect, useState } from 'react'
import backLog from '../../../public/assets/basics/backlog.png'

import ImageModal from '../ImageModal'

function CodingLayout({ craft }) {

    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: .9 },
    };

    // image modal
    const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });

    const handleImgClick = (image) => {
        setModalData({ isOpen: true, ...image })
    }

    const closeModal = () => {
        setModalData({ isOpen: false, src: '', alt: '' })
    }


    return (
        <>
            <section className='pt-14 pb-0'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>
                    <h2 className='mb-10 text-orange'>{craft.contribution.backlog.title}</h2>

                    <div className='mb-10 flex flex-col md:flex-row gap-10 '>

                        <div className='flex-1' >
                            <p dangerouslySetInnerHTML={{ __html: craft.contribution.backlog.content }} />
                        </div>

                        <div className='flex-1'>
                            <img src={craft.contribution.backlog.image.src} alt={craft.contribution.backlog.image.altText}
                                className='w-full h-[400px] object-cover'
                                onClick={() => handleImgClick({
                                    src: craft.contribution.backlog.image.src,
                                    alt: craft.contribution.backlog.image.altText
                                })}
                            />
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

            <section>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>

                    <h2 className=' text-orange mb-10'>{craft.contribution.wireframe.title}</h2>

                    <div className='flex flex-col-reverse md:flex-row gap-10'>
                        <div className='flex-1'>
                            <img src={craft.contribution.wireframe.image.src} alt={craft.contribution.wireframe.image.altText}
                                onClick={() => handleImgClick({
                                    src: craft.contribution.wireframe.image.src,
                                    alt: craft.contribution.wireframe.image.altText
                                })}
                            />
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

            <section>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>

                    <h2 className='text-orange'>{craft.dev.header}</h2>
                    <div className='content-gap'>
                        <h3>{craft.dev.tailwind.title}</h3>
                        <div className='flex flex-col gap-10 md:flex-row'>
                            <div className='flex-1'>
                                <p dangerouslySetInnerHTML={{ __html: craft.dev.tailwind.content }} className='mb-4' />
                                <p>{craft.dev.tailwind.content2}</p>
                            </div>
                            <div className='flex-1'>
                                <img src={craft.dev.tailwind.image.src} alt={craft.dev.tailwind.image.altText} className='' />
                            </div>
                        </div>
                    </div>

                    <div className='content-gap'>
                        <h3>{craft.dev.mobile.title}</h3>

                        <p dangerouslySetInnerHTML={{ __html: craft.dev.mobile.content }} className='mb-4' />

                        <img src={craft.dev.mobile.image.src} alt={craft.dev.mobile.image.altText} className='mx-auto' />
                    </div>

                    <div className='content-gap'>
                        <h3 className='mb-6'>{craft.dev.component.header}</h3>
                        <p>{craft.dev.component.content}</p>
                        <div className='content-gap mt-6'>
                            <p className='text-md font-roundo-medium'>{craft.dev.component.json.title}</p>
                            <div className='flex flex-col gap-10 md:flex-row'>
                                <p dangerouslySetInnerHTML={{ __html: craft.dev.component.json.content }} />
                                <img src={craft.dev.component.json.image.src} alt={craft.dev.component.json.image.altText} className='w-full md:w-1/2' />
                            </div>
                        </div>

                        <div className='content-gap'>
                            <p className='text-md font-roundo-medium mb-6'>{craft.dev.component.web.title}</p>
                            <div className='flex flex-col-reverse gap-10 md:flex-row'>
                                <img src={craft.dev.component
                                    .web.image.src} alt={craft.dev.component.web.altText} />
                                <p dangerouslySetInnerHTML={{ __html: craft.dev.component.web.content }} />
                            </div>
                        </div>

                        <div className='content-gap'>
                            <p className='text-md font-roundo-medium'>{craft.dev.component.modular.title}</p>
                            <div className='flex flex-col gap-10 md:flex-row'>
                                <div className='flex-1'>
                                    <p dangerouslySetInnerHTML={{ __html: craft.dev.component.modular.content }} className='mb-6' />
                                    <p>{craft.dev.component.modular.content2} </p>
                                </div>

                                <div className='flex-1'>
                                    <div className='flex flex-col gap-10 items-center'>
                                        {craft.dev.component.modular.image.map((img, index) => (
                                            <img key={index} src={img.src} alt={img.altText} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='content-gap'>
                        <h2 className='mb-6'>{craft.dev.functionality.header} </h2>
                        <div className='flex flex-col gap-10 md:flex-row content-gap'>
                            <div className='flex-1'>
                                <p className='text-md font-roundo-medium'>{craft.dev.functionality.fav.title}</p>
                                <p>{craft.dev.functionality.fav.content} </p>
                            </div>

                            <img src={craft.dev.functionality.fav.image.src} alt={craft.dev.functionality.fav.image.altText} className='flex-1' />
                        </div>

                        <div className='flex flex-col gap-10 md:flex-row'>
                            <div className='flex-1'>
                                <p className='text-md font-roundo-medium'>{craft.dev.functionality.slick.title}</p>
                                <p>{craft.dev.functionality.slick.content}</p>
                            </div>

                            <img src={craft.dev.functionality.slick.image.src} alt={craft.dev.functionality.slick.image.altText} className='flex-1' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>
                    <div className='content-gap'>
                        <h2 className='text-orange'>Final Result</h2>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CodingLayout
