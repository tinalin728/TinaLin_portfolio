import React, { useEffect, useState } from 'react'
import ProjectBanner from '../../components/ProjectBanner';
import { projectData } from '../../data/projectData'
import PrototypeCta from '../../components/PrototypeCta';
import BackToTop from '../../components/BackToTop';
import Sidebar from '../../components/Sidebar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import ImageModal from '../../components/ImageModal';

const project = projectData[0]
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

export default function Tims() {

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

    // tabs
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const sections = [
        { id: "research", label: "Research" },
        { id: "problems", label: "Problems" },
        { id: "ideation", label: "Ideation" },
        { id: "design", label: "Design" },
        { id: "testing", label: "Testing" },
        { id: "iteration", label: "Iteration" },
        { id: "solution", label: "Solutions" },
        { id: "reflection", label: "Reflection" },
    ];


    return (
        <>
            <BackToTop />
            <ProjectBanner project={project} />

            <div className='max-w-container md:flex md:gap-10 lg:gap-14 relative bg-primary z-10'>
                <Sidebar sections={sections} />

                <div className='overflow-hidden'>
                    {/* overview */}
                    <section className=''>
                        <div className='section-gap'>
                            <h2 className=''>Overview</h2>
                            <div className='content-gap flex flex-col-reverse items-center gap-10 lg:flex-row'>
                                <div className='flex-1'>
                                    <h4 className='mb-10 text-dark font-patrick italic tracking-wider'>{project.overview.headline} </h4>
                                    <p className='mb-10' dangerouslySetInnerHTML={{ __html: project.overview.content }} />

                                    <p className='uppercase tracking-wider underline underline-offset-[4px] font-roundo-medium text-orange'>The Challenge</p>

                                    <p className='' dangerouslySetInnerHTML={{ __html: project.overview.challenge }} />

                                    <PrototypeCta inPageLink="View Prototype" scrollToId='prototype' />

                                </div>

                                <div className='flex-1 w-full h-full mx-auto'>

                                    <div className='w-full max-w-[350px] lg:max-w-[450px] mx-auto'>
                                        <img
                                            src={project.overview.media.src}
                                            alt={project.overview.media.altText}
                                            className=""
                                            loading='lazy'
                                        />
                                        <p className="text-center text-sm mt-2 text-grey">
                                            {project.overview.media.caption}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* research */}
                    <section id='research'>
                        <div>
                            <div className='section-gap border-t-2 border-light-grey border-dashed'>
                                <h2 className=''>Research</h2>

                                <div className='content-gap'>
                                    <h3 className=''>Survey</h3>
                                    <div className='mt-2'>
                                        <p className='font-roundo-medium'>{project.research.survey.question} </p>
                                        <p dangerouslySetInnerHTML={{ __html: project.research.survey.content }} />
                                    </div >
                                    <div className='flex flex-col gap-8 mt-10 md:flex-row'>
                                        <div className="basis-[46%] grid gap-8 lg:gap-0">
                                            {project.research.survey.imgRow1.map((img, index) => (
                                                <div key={index}>
                                                    <img src={img.src} alt={img.alt}
                                                        loading='lazy'
                                                        className="w-full h-auto" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="basis-[54%] grid gap-8 lg:translate-y-[8rem]">
                                            {project.research.survey.imgRow2.map((img, index) => (
                                                <div key={index}>
                                                    <img src={img.src} alt={img.alt}
                                                        loading='lazy'
                                                        className="w-full h-auto" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='pt-4 md:pt-[4rem] lg:mt-[8rem]'>
                                    <div className='flex flex-col gap-2 mb-10 mt-2 md:gap-6 lg:gap-10'>
                                        <div className='flex-1'>
                                            <h3>{project.research.interview.title}</h3>
                                            <p className='mt-2 mb-4' dangerouslySetInnerHTML={{ __html: project.research.interview.description }} />
                                        </div>

                                        <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap lg:items-stretch  rounded-xl '>
                                            {project.research.interview.users.map((user, index) => (
                                                <div key={index} className='flex flex-col border border-gray-500 shadow-md   overflow-hidden w-full max-w-[350px]  rounded-2xl'>
                                                    <div className='w-full h-[220px] px-6 pt-14 bg-white relative mx-auto overflow-hidden'>
                                                        <p className='capitalize text-base mb-2 absolute top-4 bg-orange text-white left-0 px-4 z-10'>{user.type}</p>
                                                        <div className='relative z-0 w-full h-full '>
                                                            <img src={user.img} alt={user.type}
                                                                loading='lazy'
                                                                className='object-scale-down w-full h-full' />
                                                        </div>
                                                    </div>
                                                    <div className='px-4'>
                                                        <p className='mt-2 font-roundo-medium text-center leading-normal'>{user.name}</p>
                                                        <p className='font-light text-center border-b border-dashed border-brown/40 leading-normal text-grey pb-2 text-[15px]'> {user.description}</p>

                                                    </div>

                                                    {user.complete && (
                                                        <p dangerouslySetInnerHTML={{ __html: user.complete }} className='px-4 mt-2' />
                                                    )}
                                                    {user.time && (
                                                        <p dangerouslySetInnerHTML={{ __html: user.time }} className='px-4' />
                                                    )}
                                                    <div className='py-5 px-4'>
                                                        <p className='font-patrick tracking-wide italic leading-[1.2] text-dark-grey'>"
                                                            {user.quote} "
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={`flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-10 content-gap`}>
                                    <div className='flex-1'>
                                        <h3>{project.research.flowAnalysis.title}</h3>
                                        <p className='mt-2'>{project.research.flowAnalysis.description}</p>
                                    </div>

                                    <div className='flex-1 p-2  bg-white/50 rounded-2xl  shadow-md'>
                                        <div className='w-auto mx-auto h-[400px] border border-gray-400 overflow-hidden rounded-xl'>
                                            <img src={project.research.flowAnalysis.image.src}
                                                alt={project.research.flowAnalysis.image.altText}
                                                className='w-full h-auto object-contain object-center'
                                                loading="lazy"
                                                onClick={() => handleImgClick({
                                                    src: project.research.flowAnalysis.image.src,
                                                    alt: project.research.flowAnalysis.image.altText
                                                })} />
                                        </div>

                                        <p className='text-center mt-2 text-grey italic font-patrick'>{project.research.flowAnalysis.image.caption}</p>

                                        <ImageModal
                                            isOpen={modalData.isOpen}
                                            src={modalData.src}
                                            alt={modalData.alt}
                                            onClose={closeModal}
                                        />
                                    </div>
                                </div>

                                <div id='problems' className='content-gap'>
                                    <h3 className=''> <span className='font-roundo-semibold bg-amber-100/60'>Prioritized Problems</span> : What Needs Fixing First?
                                    </h3>
                                    <p className='pb-4'>{project.research.problems.content}</p>

                                    {/* issue 1 */}
                                    <div className='flex flex-col-reverse items-center lg:flex-row gap-4 md:gap-8 md:mt-4 lg:gap-12 lg:mt-6'>
                                        <div className='flex-1 flex gap-6'>
                                            <div className='max-w-[300px]'>
                                                <img src={project.research.problems.issue1.screenSrc} alt='screen'
                                                    loading='lazy'
                                                    className='w-full' />
                                                <p className='text-center mt-2 font-patrick text-dark leading-[1.2] px-2'>Directed to full menu after clicking an offer</p>
                                            </div>
                                            <div className='max-w-[300px]'>
                                                <img src={project.research.problems.issue1.screenSrc2} alt='screen'
                                                    loading='lazy'
                                                    className='w-full' />
                                                <p className='text-center mt-2 font-patrick text-dark leading-[1.2]'>No sign of offer indication</p>
                                            </div>
                                        </div>
                                        <div className='flex-1 w-full h-fit bg-white/50 p-2 rounded-2xl shadow-md'>
                                            <div className='flex flex-col gap-3 bg-white border border-gray-400  p-4 h-full rounded-xl'>
                                                <img src={project.research.problems.issue1.iconSrc} alt={project.research.problems.issue1.altText}
                                                    loading='lazy'
                                                    className='w-[54px] object-contain' />
                                                <p className='text-[20px] border-b py-2 border-dashed border-gray-400 text-orange font-roundo-medium'>
                                                    {project.research.problems.issue1.header}
                                                </p>
                                                <p>{project.research.problems.issue1.caption}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* issue 2 */}
                                    <div className='mt-20 flex flex-col items-center justify-end gap-4 lg:flex-row md:gap-8 lg:gap-12 '>
                                        <div className='flex-1 w-full h-fit bg-white/50 p-2 rounded-2xl shadow-md'>
                                            <div className='flex flex-col gap-3 bg-white border border-gray-400 p-4 h-full rounded-xl'>
                                                <img src={project.research.problems.issue2.iconSrc} alt={project.research.problems.issue2.altText}
                                                    loading='lazy'
                                                    className='w-[54px] object-contain' />
                                                <p className='text-[20px] border-b py-2 border-dashed border-gray-400 text-orange font-roundo-medium'>
                                                    {project.research.problems.issue2.header}
                                                </p>
                                                <p >{project.research.problems.issue2.caption}</p>
                                            </div>
                                        </div>
                                        <div className='flex-1 flex gap-6'>
                                            <div className='max-w-[300px]'>
                                                <img src={project.research.problems.issue2.screenSrc} alt='screen'
                                                    loading='lazy'
                                                    className='w-full' />
                                                <p className='text-center mt-2 font-patrick text-dark leading-[1.2]'>Activate buttons necessary?</p>
                                            </div>
                                            <div className='max-w-[300px]'>
                                                <img src={project.research.problems.issue2.screenSrc2} alt='screen'
                                                    loading='lazy'
                                                    className='w-full' />
                                                <p className='text-center mt-2 font-patrick-hand text-dark leading-[1.2]'></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* issue 3 */}
                                    <div className='my-20 flex flex-col-reverse items-center gap-4 lg:flex-row  md:gap-8 lg:gap-12 '>
                                        <div className='max-w-[280px] p-3'>
                                            <img src={project.research.problems.issue3.screenSrc}
                                                loading='lazy'
                                                alt='screen' className='w-full' />
                                            <p className='text-center mt-2 font-patrick text-dark leading-[1.2]'>No edit button</p>
                                        </div>
                                        <div className='w-full h-fit bg-white/50 p-2 rounded-2xl shadow-md'>
                                            <div className='flex flex-col gap-3 border border-gray-400 bg-white  p-4 h-full rounded-xl'>
                                                <img src={project.research.problems.issue3.iconSrc} alt={project.research.problems.issue3.altText}
                                                    loading='lazy'
                                                    className='w-[54px] object-contain' />
                                                <p className='text-[20px] border-b py-2 border-dashed text-orange border-gray-400 font-roundo-medium'>
                                                    {project.research.problems.issue3.header}
                                                </p>
                                                <p>{project.research.problems.issue3.caption}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <PrototypeCta inPageLink="Skip to Solutions" scrollToId='solution' />
                                </div>

                            </div>
                        </div>
                    </section >

                    {/* ideations */}
                    <section id='ideation'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Ideation</h2>

                            {/* competitor analysis */}
                            <div className='content-gap'>
                                <div className='flex flex-col lg:flex-row gap-10'>
                                    <div className='flex-1'>
                                        <h3>{project.research.competitor.title}</h3>

                                        <p className='mt-2' dangerouslySetInnerHTML={{ __html: project.research.competitor.description }} />
                                    </div>

                                    <div className='flex-1 p-2 bg-white/50 h-full shadow-md rounded-2xl'>
                                        <div className='mx-auto overflow-hidden border border-gray-400 rounded-xl'>
                                            <img src={project.research.competitor.img.src}
                                                alt={project.research.competitor.img.altText}
                                                className='h-full object-cover'
                                                loading="lazy"
                                                onClick={() => handleImgClick({
                                                    src: project.research.competitor.img.src,
                                                    alt: project.research.competitor.img.altText
                                                })} />
                                        </div>
                                        <p className='text-center mt-2 text-grey italic  font-patrick'>{project.research.competitor.img.caption}</p>

                                        <ImageModal
                                            isOpen={modalData.isOpen}
                                            src={modalData.src}
                                            alt={modalData.alt}
                                            onClose={closeModal}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* persona */}
                            <div className='content-gap'>
                                <h3 className='mb-2'>{project.define.persona.header}</h3>
                                <p className='mb-10' dangerouslySetInnerHTML={{ __html: project.define.persona.content }} />
                                <img
                                    src={project.define.persona.src}
                                    alt={project.define.persona.altText}
                                    loading='lazy'
                                    className='shadow-md rounded-2xl' />
                            </div>

                            {/* journey-map */}
                            <div className='content-gap'>
                                <h3 className='mb-2'>{project.define.journey.header}</h3>
                                <p className='mb-10'> {project.define.journey.content}</p>
                                <img src={project.define.journey.src} alt={project.define.journey.altText} loading='lazy'
                                    className='shadow-md rounded-2xl' />
                            </div>
                        </div>
                    </section>

                    {/* design */}
                    <section id='design' className=''>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Design</h2>

                            <div>
                                <div className='content-gap flex flex-col gap-10'>
                                    <div className='flex-1'>
                                        <h3>User Flow</h3>
                                        <p className='mt-2'>{project.design.flow.description}</p>
                                    </div>

                                    <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', paddingTop: '6px', borderRadius: '15px' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider', borderRadius: '0px' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="define tabs"
                                                sx={{
                                                    '& .MuiTab-root': {
                                                        fontFamily: 'roundo, sans-serif',
                                                        fontSize: '15px',
                                                    },

                                                    '& .Mui-selected': {
                                                        color: '#E36A46 !important',
                                                        fontWeight: 'bold',
                                                    },
                                                    '& .MuiTabs-indicator': {
                                                        backgroundColor: '#E36A46',
                                                    },
                                                }}
                                            >
                                                {project.design.flow.tabData.map((tab, index) => (
                                                    <Tab label={tab.tab} {...a11yProps(index)} key={index} />
                                                ))}
                                            </Tabs>
                                        </Box>

                                        {project.design.flow.tabData.map((tab, index) => (
                                            <CustomTabPanel value={value} index={index} key={index}>
                                                <img src={tab.src} alt={tab.altText} loading="lazy" />
                                            </CustomTabPanel>
                                        ))}
                                    </Box>
                                </div>
                            </div>

                            <div className='content-gap'>
                                <div>
                                    <h3>{project.design.wireframes.header}</h3>
                                    <p className='mb-8 mt-2'>{project.design.wireframes.description}
                                    </p>
                                </div>

                                {project.design.wireframes.medfiProto && (
                                    <div className='grid gap-10'>
                                        {project.design.wireframes.medfiProto.map((img, index) => (
                                            <div key={index}>
                                                <img src={img.src} alt={img.altText} className='w-full rounded-2xl shadow-md' loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* user testing */}
                    <section id='testing'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Testing</h2>
                            <div className='content-gap'>
                                <div className='mb-4'>
                                    <h3>{project.testing.header}</h3>
                                    <p className='mt-2'>
                                        To validate the new design, I conducted usability testing with 4 participants. Each participant was tasked with <span className='font-roundo-medium bg-amber-100/60'> redeeming a Farmer\'s Breakfast Wrap and a Classic Donut </span>, to match common user actions. The goal was to see how well the new flow worked, check if they noticed the "Activate" button was gone, find out what changes they wanted, and spot any problems they faced. While all participants liked the simpler flow to the offers menu, some issues remained:
                                    </p>
                                </div>

                                <div className='mb-4 mt-8'>
                                    <p className='font-roundo-medium text-md'>Key Findings:</p>
                                    <ul className='my-2'>
                                        {project.testing.findings.map((finding, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: finding }} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='iteration'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2 className=''>Iteration</h2>

                            <div className='pt-10'>
                                <p className='mb-4'>{project.iteration.content}</p>
                            </div>


                            <div className='py-10 '>
                                {project.iteration.image.map((img, index) => (
                                    <div key={index} className='p-2  overflow-hidden bg-white/50 rounded-2xl shadow-md'>
                                        <div className='rounded-lg py-6 mx-auto bg-darker-bg border border-default/20 overflow-hidden px-4'>
                                            <img src={img.src} alt={img.altText} loading="lazy" className='object-cover w-full' />
                                        </div>
                                        <p className="text-center mt-2 text-grey font-patrick">
                                            Major changes on offer details and menu screen
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div id='solution' className='content-gap'>
                                <h3 className='mb-4'>Final Designs</h3>
                                <div className="space-y-20">
                                    {project.iteration.final.screens.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`flex flex-col gap-4 justify-center md:gap-12 md:items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                                                }`}
                                        >
                                            <div className="flex-1">
                                                <h4 className='text-orange'>{item.header}</h4>
                                                <p dangerouslySetInnerHTML={{ __html: item.content }} />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex flex-row justify-center items-center gap-4 md:items-start">
                                                    <div className='max-w-[300px]'>
                                                        <img src={item.original} alt="Original Design" loading="lazy" />
                                                        <p className='text-center mt-2 font-patrick text-grey leading-[1.2]'>{item.ori_caption}</p>
                                                    </div>
                                                    <div className='max-w-[300px]'>
                                                        <img src={item.new} alt="New Design"
                                                            loading='lazy'
                                                        />
                                                        <p className='font-patrick text-center mt-2 font-patrick-hand text-grey leading-[1.2]'>{item.new_caption}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div id="prototype" className='content-gap'>
                                    <h3 className='mb-10'>Try It Yourself!</h3>
                                    <iframe
                                        className="w-full h-[800px]"
                                        src={project.iteration.figma}
                                        allowFullScreen
                                        title="Figma Prototype"
                                    ></iframe>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section id='reflection' >
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Reflection</h2>

                            <div className='content-gap flex flex-col gap-10 md:flex-row pb-20'>
                                <div className='flex-1'>
                                    <h3>What I Learned</h3>
                                    <ul className='ml-3 mt-2 flex gap-5 flex-col'>
                                        {project.reflection.content.map((item, index) => (
                                            <li key={index} className='list-disc' dangerouslySetInnerHTML={{ __html: item }} />

                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}
