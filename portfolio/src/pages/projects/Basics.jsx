import React, { useEffect, useState } from 'react'
import ProjectBanner from '../../components/ProjectBanner'
import { projectData } from '../../data/projectData'
import BackToTop from '../../components/BackToTop';
import Sidebar from '../../components/Sidebar';
import PrototypeCta from '../../components/PrototypeCta';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import ImageModal from '../../components/ImageModal';

// tabs
function CustomTabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: .9 },
};

const project = projectData[4]


export default function Basics() {

    const [open, setOpen] = useState(null);

    const handleOpen = (index) => {
        setOpen((prev) => (prev === index ? null : index)); // Correct toggle logic
    };

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


    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }
    const sections = [
        { id: "planning", label: "Planning" },
        { id: "design", label: "Design" },
        { id: "develop", label: "Develop" },
        { id: "reflection", label: "Reflection" },

    ];

    return (
        <>
            <ProjectBanner project={project} />

            <BackToTop />
            <div className='max-w-container md:flex md:gap-8 lg:gap-14 relative z-10 bg-primary'>
                <Sidebar sections={sections} />

                <div className='overflow-hidden'>
                    {/* overview */}
                    <section className='bg-primary'>
                        <div className=''>
                            <h2 className='mt-[5rem]'>Overview</h2>
                            <div className='content-gap flex flex-col-reverse items-start gap-10 lg:flex-row'>
                                <div className='flex-1'>
                                    <h4 className='mb-10 text-dark font-patrick italic tracking-wider'>{project.overview.headline} </h4>
                                    <p className='mb-10' dangerouslySetInnerHTML={{ __html: project.overview.content }} />

                                    <p className='uppercase tracking-wider underline underline-offset-[4px] text-orange font-roundo-medium'>The Challenge</p>

                                    <p dangerouslySetInnerHTML={{ __html: project.overview.challenge }} />

                                    <PrototypeCta webLink={{ link: "https://basics.tinalin.ca/", text: "Visit Website" }} />
                                </div>

                                <div className='flex-1 w-full h-full mx-auto'>

                                    <div className='w-full h-full mx-auto'>
                                        <img
                                            src={project.overview.media.src}
                                            alt={project.overview.media.altText}
                                            loading='lazy'
                                        />
                                        <p className="text-center text-sm mt-2 text-dark-grey">
                                            {project.overview.media.caption}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='planning' >
                        <div className='section-gap section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Planning</h2>

                            <div className='content-gap flex flex-col lg:flex-row gap-10 '>
                                <div className='flex-1' >
                                    <h3 className='mb-4'>Project Backlog Creation</h3>
                                    <p>In the Basics project, the product backlog served as the foundation for our Agile workflow. As the Product Owner, I was responsible for <span> creating and maintaining the backlog </span>. The backlog included all key tasks, such as wireframe development, front-end implementation, content creation, and stakeholder reviews. Each item was prioritized based on its importance to the project timeline and deliverables.</p>
                                </div>

                                <div className='flex-1 p-2  bg-white/60 h-full rounded-2xl shadow-md'>
                                    <img src={project.contribution.backlog.image.src} alt={project.contribution.backlog.image.altText}
                                        loading="lazy"
                                        className='w-full h-full max-h-[400px] object-cover border border-gray-400 rounded-xl'
                                        onClick={() => handleImgClick({
                                            src: project.contribution.backlog.image.src,
                                            alt: project.contribution.backlog.image.altText
                                        })}
                                    />
                                    <p className='text-center italic font-patrick text-dark-grey pt-2'>{project.contribution.backlog.image.caption}</p>
                                </div>
                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.alt}
                                    onClose={closeModal}
                                />
                            </div>

                            <div className='content-gap flex flex-col gap-6 lg:flex-row-reverse'>
                                <div className='flex-1'>
                                    <h3 className='mb-4'>User Stories</h3>
                                    <p>{project.contribution.stories.content}</p>
                                </div>
                                <div className='flex-1 shadow-md rounded-2xl'>
                                    <img
                                        src={project.contribution.stories.image.src} alt={project.contribution.stories.image.altText}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='design'>
                        <div className='section-gap section-gap border-t-2 border-light-grey border-dashed'>
                            <div>
                                <span className='text-dark-grey uppercase font-roundo tracking-wider'>Sprint 1 & 2</span>
                                <h2 className='mt-2'>Design</h2>
                            </div>

                            <div className='content-gap flex flex-col lg:flex-row gap-10'>
                                <div className='flex-1'>
                                    <h3 className='mb-4'>{project.contribution.sitemap.title}</h3>
                                    <p>{project.contribution.sitemap.content}</p>
                                </div>

                                <div className='flex-1 p-2 bg-white/60 shadow-md rounded-2xl'>
                                    <img src={project.contribution.sitemap.image.src} alt={project.contribution.sitemap.image.altText}
                                        loading="lazy"
                                        className=' border border-gray-400 rounded-xl'
                                        onClick={() => handleImgClick({
                                            src: project.contribution.sitemap.image.src,
                                            alt: project.contribution.sitemap.image.altText
                                        })}
                                    />
                                    <p className='text-center italic text-dark-grey pt-2 font-patrick'>{project.contribution.sitemap.image.caption}</p>
                                </div>
                                <ImageModal
                                    isOpen={modalData.isOpen}
                                    src={modalData.src}
                                    alt={modalData.alt}
                                    onClose={closeModal}
                                />
                            </div>

                            <div className='content-gap flex flex-col lg:flex-row-reverse gap-10'>
                                <div className='flex-1'>
                                    <h3 className='mb-4'>{project.contribution.wireframe.title}</h3>
                                    <p>{project.contribution.wireframe.content}</p>
                                </div>

                                <div className='flex-1 p-2 bg-white/60 rounded-2xl shadow-md'>
                                    <img src={project.contribution.wireframe.image.src} alt={project.contribution.wireframe.image.altText}
                                        loading="lazy"
                                        className=' border border-gray-400 rounded-xl'
                                        onClick={() => handleImgClick({
                                            src: project.contribution.wireframe.image.src,
                                            alt: project.contribution.wireframe.image.altText
                                        })}
                                    />
                                    <p className='text-center italic font-patrick text-dark-grey pt-2'>{project.contribution.wireframe.image.caption}</p>
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
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <span className='text-dark-grey uppercase font-roundo tracking-wider'>Sprint 3 & 4 / Revision</span>
                            <h2>Develop</h2>

                            <div className='content-gap'>
                                <div>
                                    <h3 className='mb-4' >Deliverables</h3 >
                                    <p>During sprint 3, we met with our instructor, who acted as a stakeholder, and she suggested adding elements to reflect the company’s philosophy and values, such as sustainability. To address this, the design team prioritized refining the original pages and added a new product homepage, postponing the cart page development. By the end of sprint 4, I developed a five-page website that followed the wireframe design.</p>
                                </div>
                                <div className='mt-10 px-8 grid grid-cols-1 gap-4 md:grid-cols-3 place-content-center'>
                                    {project.dev.screens.map((item, index) => (
                                        <div key={index}>
                                            <img src={item.src} alt={item.altText}
                                                loading="lazy"
                                            />
                                            <p className='font-roundo-medium text-center text-sm mt-2 text-dark-grey'>{item.caption}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='content-gap'>
                                <div className='flex flex-col gap-10 items-center lg:flex-row'>
                                    <div className='flex-1'>
                                        <h3 className='mb-4'>{project.dev.tailwind.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: project.dev.tailwind.content }} className='mb-4' />
                                    </div>
                                    <div className='flex-1'>
                                        <img
                                            loading="lazy"
                                            src={project.dev.tailwind.image.src} alt={project.dev.tailwind.image.altText} className='w-[50%] mx-auto lg:w-[60%]' />
                                    </div>
                                </div>
                            </div>

                            <div className='content-gap'>
                                <h3 className='mb-4'>{project.dev.component.header}</h3>
                                <p className='mb-6'>{project.dev.component.content}</p>

                                <div className='flex flex-col gap-6'>
                                    {project.dev.component.snippets.map((item, index) => (
                                        <Accordion
                                            key={index}
                                            open={open === index}
                                            icon={<Icon id={index} open={open} />}
                                            className='border  px-4 py-1 shadow-md max-w-full rounded-2xl'
                                        >
                                            <AccordionHeader
                                                onClick={() => handleOpen(index)}
                                                className='border-0 font-roundo-medium text-[18px] text-black capitalize tracking-wide'
                                            >
                                                {`< ${item.tab} >`}
                                            </AccordionHeader>
                                            <AccordionBody>
                                                <SyntaxHighlighter
                                                    language='javascript'
                                                    style={tomorrow}
                                                    showLineNumbers={true}
                                                    wrapLines
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
                                            </AccordionBody>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='reflection'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Reflection</h2>

                            <div className='content-gap'>
                                <p>
                                    This was my first time juggling both Product Owner and Front-End Developer roles. Balancing everything within a 5-week timeline—on top of other coursework—was tough, but it pushed me to manage time better and stay organized.
                                </p>
                                <p className='my-8'> The biggest challenge was keeping everything aligned with Agile while building the site from scratch. I had to prioritize user stories, coordinate with my team, and still get hands-on with development. It was a lot, but I learned how to adapt, communicate better, and keep things moving.
                                </p>
                                <p>Looking back, I’d refine the workflow and set clearer milestones, but overall, this project reinforced my passion for creating clean, functional designs while handling real-world constraints.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}
