import React, { useEffect, useState } from 'react'
import BackToTop from '../buttons/BackToTop'
import ImageModal from '../ImageModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bulletPoint from '../../assets/images/crafts/bulletP.svg'

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
    useEffect(() => {
        console.log('Webrouk Scroll Indicator loaded');
    }, []);



    return (
        <>


            <BackToTop />

            <div className='mb-10'>
                <img src={craft.process.image.src} alt={craft.process.image.altText} className='design process' />
            </div>

            <div className='sticky-nav hidden md:block md:sticky md:top-6 z-50'>
                <div className='border px-10 py-4 border-black bg-off-white rounded-full flex items-center justify-center md:gap-8 lg:gap-12 shadow-sm w-fit mx-auto'>
                    <a href="#research" className='cursor-pointer text-base capitalize tracking-normal'>
                        <p><span className='mr-2 font-bold text-orange'>01</span>Research</p>
                    </a>
                    <a href="#define" className='cursor-pointer text-base capitalize tracking-normal'>
                        <p><span className='mr-2 font-bold text-orange'>02</span>Define</p>
                    </a>
                    <a href="#design" className='cursor-pointer text-base capitalize tracking-normal'>
                        <p><span className='mr-2 font-bold text-orange'>03</span>Design</p>
                    </a>
                    <a href="#testing" className='cursor-pointer text-base capitalize tracking-normal'>
                        <p><span className='mr-2 font-bold text-orange'>05</span>Testing</p>
                    </a>
                    <a href="#reflection" className='cursor-pointer text-base capitalize tracking-normal'>
                        <p><span className='mr-2 font-bold text-orange'>06</span>Reflection</p>
                    </a>
                </div>
            </div>

            {/* research */}
            <section id='research' className='pt-14 pb-0'>
                <div className='py-14 border-t-2 border-light-grey border-dashed'>
                    <div className='content-gap'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Understanding Users</span>
                        <h1>Research</h1>
                    </div>


                    <div className='content-gap'>
                        <h3>Research Goals</h3>
                        <p className='mb-2'>{craft.research.description}
                        </p>

                        {craft.research.goals.map((goal, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <img src={bulletPoint} alt="" width={18} />
                                <p className='font-roundo-medium'>{goal}</p>
                            </div>
                        ))}
                    </div>

                    {craft.research.quoteImg && (
                        <div className='w-1/3 mx-auto'>
                            <img src={craft.research.quoteImg.src} alt={craft.research.quoteImg.altText} />
                        </div>
                    )}
                    <div className='content-gap'>
                        <div className='flex gap-10 flex-col md:flex-row mb-10'>
                            <div className='flex-1'>
                                <h3>User Interviews</h3>
                                <p className='mb-4'>{craft.research.interview.description}</p>
                            </div>


                            {craft.research.interview.image && (
                                <div className='flex-1'>
                                    <div className=' mx-auto'>
                                        <img src={craft.research.interview.image.src} alt={craft.research.interview.image.altText} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            {craft.research.interview.results.map((p, index) => (
                                <div key={index} className='relative z-10'>
                                    <div className='absolute top-2 left-2 bg-black w-full h-full rounded-xl'></div>
                                    <div key={index} className='relative z-10 h-full p-8  border border-black rounded-xl bg-white'>
                                        <p className='inline-block rounded-full font-roundo-medium text-orange'>{p.title}</p>

                                        <p className='text-md font-roundo-medium leading-normal border-b border-dashed border-black mb-5'>{p.subtitle}</p>
                                        <p className='mb-5'>{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {craft.research.flowAnalysis && (
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='flex-1'>
                                <h3>{craft.research.flowAnalysis.title}</h3>
                                <p>{craft.research.flowAnalysis.description}</p>
                                <ul className='px-4 mt-2'>
                                    {craft.research.flowAnalysis.issues.map((issue, index) => (
                                        <li key={index} className='font-roundo-medium list-disc mt-2'>
                                            {issue}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='flex-1 cursor-pointer p-6 border border-black rounded-xl bg-off-white'>
                                <div className='w-auto h-[400px] mx-auto overflow-hidden border rounded-md'>
                                    <img src={craft.research.flowAnalysis.image.src}
                                        alt={craft.research.flowAnalysis.image.altText}
                                        className='w-full h-auto object-contain object-center'
                                        onClick={() => handleImgClick({
                                            src: craft.research.flowAnalysis.image.src,
                                            alt: craft.research.flowAnalysis.image.altText
                                        })} />
                                </div>

                                <p className='text-center mt-2 text-dark-grey italic'>{craft.research.flowAnalysis.image.caption}</p>

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
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='flex-1'>
                                <h3>{craft.research.competitor.title}</h3>

                                <p dangerouslySetInnerHTML={{ __html: craft.research.competitor.description }} />
                            </div>

                            <div className='flex-1 cursor-pointer p-6 border border-black rounded-xl bg-off-white'>
                                <div className='w-auto h-[80%] mx-auto overflow-hidden border rounded-md'>
                                    <img src={craft.research.competitor.image.src}
                                        alt={craft.research.competitor.image.altText}
                                        className='w-full h-auto object-cover'
                                        onClick={() => handleImgClick({
                                            src: craft.research.competitor.image.src,
                                            alt: craft.research.competitor.image.altText
                                        })} />
                                </div>
                                <p className='text-center mt-2 text-dark-grey italic'>{craft.research.competitor.image.caption}</p>

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
            <section id='define'>
                <div className='py-14 border-y-2 border-light-grey border-dashed'>
                    <div className='content-gap'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Insight Synthesis</span>
                        <h1>Define</h1>
                    </div>


                    {craft.define.em &&
                        (<div className='content-gap flex gap-10 flex-col lg:flex-row'>
                            <div className='flex-1'>
                                <h3>Putting Insights Together</h3>
                                <p> {craft.define.em.content}</p>
                            </div>
                            <div className='flex-1 cursor-pointer p-6 border border-black rounded-xl bg-off-white'>
                                <div className='w-auto mx-auto overflow-hidden border rounded-md'>
                                    <img src={craft.define.em.image.src}
                                        alt={craft.define.em.image.altText}
                                        className='w-full h-auto object-cover'
                                        onClick={() => handleImgClick({
                                            src: craft.define.em.image.src,
                                            alt: craft.define.em.image.altText
                                        })} />
                                </div>

                                <p className='text-center mt-2 text-dark-grey italic'>{craft.define.em.image.caption}</p>

                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.alt}
                                    onClose={closeModal}
                                />
                            </div>
                        </div>)}

                    {craft.define.insights && (
                        <div className='content-gap'>
                            <div className='flex-1 mb-10'>
                                <h3>Why Not Having Our Own Model?</h3>
                                <p dangerouslySetInnerHTML={{ __html: craft.define.insights.content }} />

                                <div className="my-10 relative z-10 mx-auto bg-light-yellow-bg w-1/2">
                                    <p className='text-md text-center font-roundo-medium'>{craft.define.insights.solution}</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-10'>
                                {craft.define.insights.image.map((img, index) => (
                                    <div key={index}>
                                        <div className='mb-10 border rounded-xl overflow-hidden p-6 bg-off-white'>
                                            <img src={img.src} alt={img.altText}
                                                onClick={() => handleImgClick({
                                                    src: img.src,
                                                    alt: img.altText
                                                })}
                                                className='border rounded-md h-[90%] w-full object-cover'
                                            />

                                            <p className='text-center text-dark-grey italic'>{img.caption}</p>
                                        </div>

                                        <ImageModal
                                            isOpen={modalData.isOpen}
                                            src={modalData.src}
                                            alt={modalData.alt}
                                            onClose={closeModal}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='content-gap'>
                                <h2>Competitor Analysis</h2>
                                <p dangerouslySetInnerHTML={{ __html: craft.define.ca.content }} />

                                <div className='p-10'>
                                    <img src={craft.define.ca.img.src} alt="" />
                                </div>
                            </div>

                        </div>

                    )}

                    <div className='content-gap'>
                        <h3> {craft.define.persona.title}</h3>
                        <p className='mb-8' dangerouslySetInnerHTML={{ __html: craft.define.persona.content }} />

                        <div>
                            <img src={craft.define.persona.image.src} alt={craft.define.persona.image.altText} />
                        </div>
                    </div>

                    <div className='content-gap'>
                        <h3> User Journey </h3>
                        <p className='mb-8'> {craft.define.journey.content} </p>
                        <div>
                            <img src={craft.define.journey.image.src} alt={craft.define.journey.image.altText} />
                        </div>
                    </div>




                    {/* <div className='content-gap'>

                        <div className='mb-10'>
                            <h3>Putting insights together</h3>
                            <p className='text-left' dangerouslySetInnerHTML={{ __html: craft.define.content }}></p>
                        </div>

                        {craft.define.insights && (
                            <>
                                <div className='flex flex-col items-start md:flex-row gap-8 cursor-pointer content-gap'>
                                    {craft.define.insights.image.map((img, index) => (
                                        <div key={index} className='p-6 bg-light-grey'>
                                            <img src={img.src} alt={img.altText} onClick={() => handleImgClick({
                                                src: img.src,
                                                alt: img.altText
                                            })} />
                                            <p className='text-center'>{img.caption}</p>
                                        </div>
                                    ))}
                                </div>

                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.altText}
                                    onClose={closeModal}
                                />)}

                                <div className='content-gap'>
                                    <p dangerouslySetInnerHTML={{ __html: craft.define.content2 }} />
                                </div>
                            </>
                        )}

                        <div>
                            <div className='grid gap-4'>
                                {craft.define.accordionItems.map((item) => (
                                    <Accordion key={item.id} open={open === item.id} animate={CUSTOM_ANIMATION} className='mb-2 rounded-lg border border-blue-gray-100 px-4'>
                                        <AccordionHeader onClick={() => handleOpen(item.id)}
                                            className={`font-roundo text-base border-b-0 transition-colors ${open === item.id ? "text-orange hover:!text-orange" : ""}`}>
                                            <div className='w-full flex justify-between items-center'>
                                                <span>
                                                    {item.title}
                                                </span>
                                                <FontAwesomeIcon className='text-xl'
                                                    icon={open === item.id ? faAngleUp : faAngleDown}
                                                />
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <div className=''>
                                                <img src={item.src} alt={item.altText} onClick={() => handleImgClick({
                                                    src: item.src,
                                                    alt: item.altText
                                                })} />
                                            </div>

                                        </AccordionBody>
                                    </Accordion>
                                ))}

                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.altText}
                                    onClose={closeModal}
                                />
                            </div>
                        </div>

                    </div> */}
                </div>
            </section>


            <section id='design'>
                <div className='py-14' >
                    <div className='content-gap'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Creating Solutions</span>
                        <h1>Design</h1>
                    </div>

                    <div className='content-gap flex flex-col md:flex-row gap-10'>
                        <div className='flex-1'>
                            <h3 >Wireframe Sketches</h3>
                            <p className='mb-4'>{craft.design.sketch.description}</p>
                        </div>

                        <div className='flex-1 h-[400px] cursor-pointer p-6 border border-black rounded-xl overflow-hidden bg-off-white'>
                            <div className='h-[90%] overflow-hidden mx-auto border rounded-md'>
                                <img src={craft.design.sketch.image.src}
                                    alt={craft.design.sketch.image.altText}
                                    className='w-auto h-full object-cover'
                                    onClick={() => handleImgClick({
                                        src: craft.design.sketch.image.src,
                                        alt: craft.design.sketch.image.altText
                                    })} />
                            </div>

                            <p className='text-center mt-2 text-dark-grey italic'>{craft.design.sketch.image.caption}</p>

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

                        <div className='flex-1 h-[400px] cursor-pointer p-6 border border-black rounded-xl overflow-hidden bg-off-white'>
                            <div className='h-[90%] overflow-hidden mx-auto border rounded-md'>
                                <img src={craft.design.flow.image.src}
                                    alt={craft.design.flow.image.altText}
                                    className='w-auto object-fit object-center'
                                    onClick={() => handleImgClick({
                                        src: craft.design.flow.image.src,
                                        alt: craft.design.flow.image.altText
                                    })} />
                            </div>

                            <p className='text-center mt-2 text-dark-grey italic'>{craft.design.flow.image.caption}</p>

                            <ImageModal
                                isOpen={modalData.isOpen}
                                src={modalData.src}
                                alt={modalData.alt}
                                onClose={closeModal}
                            />
                        </div>
                    </div>

                    <div className='content-gap'>
                        <h3>From Sketches to Figma</h3>
                        <p className='mb-4'>{craft.design.wireframes.description}
                        </p>
                        <div className='grid gap-10'>
                            {craft.design.wireframes.image.map((img, index) => (
                                <div key={index}>
                                    <img src={img.src} alt={img.altText} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id='testing'>
                <div className='py-14 border-y-2 border-light-grey border-dashed'>
                    <div className='content-gap'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Validating Solutions</span>
                        <h1>Testing</h1>
                    </div>


                    <div className='content-gap flex-col gap-10 md:flex-row'>
                        <div className='flex-1'>
                            <h3>Does this work?</h3>
                            <p className='mb-4'>
                                {craft.testing.description}
                            </p>
                        </div>
                        <div className='flex-1'>
                            <h3>Usability Testing Goals</h3>
                            <div className='mb-4'>
                                {craft.testing.goals.map((goal, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <img src={bulletPoint} alt="" width={18} />
                                        <p className='font-roundo-medium'>{goal}</p>
                                    </div>
                                ))}
                            </div>
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
                            <h3 className='mb-10'>Problems that users found</h3>
                            <div>
                                <img src={craft.testing.problemImg.src} alt={craft.testing.problemImg.altText} />
                            </div>
                        </div>
                    )}

                    <div className='content-gap'>
                        <h3>Iteration</h3>
                        <p className='mb-4'>{craft.testing.iteration.content}</p>

                        {craft.testing.iteration.image && craft.testing.iteration.image.length > 0 && (
                            <div className='flex gap-10 bg-off-white'>
                                {craft.testing.iteration.image.map((img, index) => (
                                    <div key={index} className='border rounded-md overflow-hidden'>
                                        <img src={img.src} alt={img.altText} />
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

                    {craft.testing.limitation && (
                        <div>
                            <h2> {craft.testing.limitation.title}</h2>
                            <p className='mb-4'> {craft.testing.limitation.content}</p>
                            <ul className='px-4 mb-4'>
                                {craft.testing.limitation.points.map((item, index) => (
                                    <li key={index} className='font-roundo leading-[30px] list-disc' dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>

                            <p>
                                {craft.testing.limitation.conclusion}
                            </p>
                        </div>
                    )}


                    {craft.testing.final && (
                        <div className='content-gap'>
                            <h3 className='mb-4'>Final Look</h3>
                            <div dangerouslySetInnerHTML={{ __html: craft.testing.final.figma }} />
                            <a href=""></a>
                        </div>
                    )}
                </div>
            </section>

            <section id='reflection'>
                <div className='py-14'>
                    <div className='content-gap'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'> Final Thoughts</span>
                        <h1>Reflection</h1>
                    </div>

                    <div className='flex flex-col gap-10 md:flex-row pb-20'>
                        <div className='flex-1'>
                            <h3>What I Learned</h3>
                            {craft.reflection.content.map((item, index) => (
                                <div key={index} className='flex items-start gap-4'>
                                    <img src={bulletPoint} alt="custom bullet point" width={18} className='mt-1' />
                                    <p dangerouslySetInnerHTML={{ __html: item }} />
                                </div>
                            ))}
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
