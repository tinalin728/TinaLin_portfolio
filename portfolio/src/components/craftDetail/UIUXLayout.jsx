import React, { useEffect, useState } from 'react'
import BackToTop from '../buttons/BackToTop'
import ProjectNav from './ProjectNav'
import ImageModal from '../ImageModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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

    // tabs
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <BackToTop />

            {/* sticky nav */}
            <ProjectNav stickyNav={craft.stickyNav} />

            {/* research */}
            <section id='research' className='pb-0'>
                <div className='content-w'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Understanding Users</span>
                        <h1>Research</h1>
                    </div>

                    <div className='pt-10'>
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

                            <div className='p-2 bg-white bg-opacity-50 rounded-xl shadow-md'>
                                <img src={craft.research.interview.map.src} alt={craft.research.interview.map.altText} className='w-full' loading="lazy" />
                            </div>

                        </div>
                    </div>

                    {craft.research.flowAnalysis && (
                        <div className='flex flex-col lg:flex-row gap-10'>
                            <div className='flex-1'>
                                <h2>{craft.research.flowAnalysis.title}</h2>
                                <p>{craft.research.flowAnalysis.description}</p>
                            </div>

                            <div className='flex-1 p-2 rounded-xl bg-white bg-opacity-50 shadow-md'>
                                <div className='w-auto mx-auto h-[400px] border border-gray-400 rounded-md overflow-hidden'>
                                    <img src={craft.research.flowAnalysis.image.src}
                                        alt={craft.research.flowAnalysis.image.altText}
                                        className='w-full h-auto object-contain object-center'
                                        loading="lazy"
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
                        <h2 className='text-red-600'>  {craft.research.problems.title}</h2>
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

                            <div className='flex-1 p-2 rounded-xl bg-white bg-opacity-50 h-full shadow-md'>
                                <div className='mx-auto overflow-hidden border border-gray-400 rounded-md'>
                                    <img src={craft.research.competitor.img.src}
                                        alt={craft.research.competitor.img.altText}
                                        className='h-full object-cover'
                                        loading="lazy"
                                        onClick={() => handleImgClick({
                                            src: craft.research.competitor.img.src,
                                            alt: craft.research.competitor.img.altText
                                        })} />
                                </div>
                                <p className='text-center mt-2 text-dark-grey italic text-sm'>{craft.research.competitor.img.caption}</p>

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

            {/* ideations */}
            <section id='define' className='content-w'>
                <div className='content-gap'>
                    <div className=''>
                        <div className='py-10 border-b-2 border-light-grey border-dashed'>
                            <span className='text-dark-grey uppercase font-roundo tracking-wider'>Insight Synthesis</span>
                            <h1>Ideation</h1>
                        </div>
                    </div>

                    {/* pants */}
                    {craft.define.insights && (
                        <div className='mt-10'>
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
                            </div>
                        </div>
                    )}

                    <div className='mt-10'>
                        <h2 className='mb-4'>{craft.define.header}</h2>
                        <p className='mb-10' dangerouslySetInnerHTML={{ __html: craft.define.content }} />

                        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '15px', paddingTop: '6px' }}>
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
                                    {craft.define.tabData.map((tab, index) => (
                                        <Tab label={tab.tab} {...a11yProps(index)} key={index} />
                                    ))}
                                </Tabs>
                            </Box>

                            {craft.define.tabData.map((tab, index) => (
                                <CustomTabPanel value={value} index={index} key={index}>
                                    <img src={tab.src} alt={tab.altText} loading="lazy" />
                                </CustomTabPanel>
                            ))}
                        </Box>
                    </div>
                </div>

                {/* pants */}
                {craft.define.features && (
                    <div className='content-gap'>
                        <h2>{craft.define.features.header}</h2>
                        <p className='mb-6'>{craft.define.features.content} </p>

                        <div className='p-2 bg-white bg-opacity-50 rounded-xl'>
                            <img src={craft.define.features.img.src} alt={craft.define.features.img.altText} />
                        </div>
                    </div>
                )}

            </section >

            {/* design */}
            <section id='design' className=''>
                <div className='content-w'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Creating Solutions</span>
                        <h1>Design</h1>
                    </div>

                    <div className='pt-10 flex flex-col gap-10 md:flex-row'>
                        <div className='flex-1'>
                            <h2>User Flow</h2>
                            <p>{craft.design.flow.description}</p>
                        </div>

                        <div className='flex-1 h-full p-2 rounded-xl overflow-hidden bg-white bg-opacity-50'>
                            <div className='h-[90%] overflow-hidden mx-auto border border-gray-400 rounded-md'>
                                <img src={craft.design.flow.image.src}
                                    alt={craft.design.flow.image.altText}
                                    loading="lazy"
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
                </div>

                <div className='content-gap'>
                    <div className='content-w'>
                        <h2>{craft.design.wireframes.header}</h2>
                        <p className='mb-8'>{craft.design.wireframes.description}
                        </p>
                    </div>

                    {craft.design.wireframes.medfiProto && (
                        <div className='grid gap-10 px-10'>
                            {craft.design.wireframes.medfiProto.map((img, index) => (
                                <div key={index}>
                                    <img src={img.src} alt={img.altText} className='w-full' loading="lazy" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* user testing, */}
            <section id='testing'>
                <div className='content-w'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Validating Solutions</span>
                        <h1>Testing</h1>
                    </div>

                    <div className='pt-10'>
                        <div className='mb-10'>
                            <h2>Does this work?</h2>
                            <p dangerouslySetInnerHTML={{ __html: craft.testing.description }} />
                        </div>
                        <div className='flex flex-col gap-10 md:flex-row'>
                            <div className='flex-1'>
                                <p className='text-[20px] font-roundo-medium'>Task Given To Participants</p>
                                <p className='mt-2'> {craft.testing.task}</p>
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
                    </div>

                    <div className='content-gap'>
                        <h2 className='mb-4'>Problems that users found</h2>
                        <div className='p-2 bg-white rounded-xl bg-opacity-50'>
                            <img src={craft.testing.problemImg.src} alt={craft.testing.problemImg.altText} className='w-full' loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='iteration'>
                <div className='content-w'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'>Refining design</span>
                        <h1>Iteration</h1>
                    </div>
                    <div className='pt-10'>
                        <p className='mb-4'>{craft.iteration.content}</p>
                    </div>

                    {craft.iteration.image && craft.iteration.image.length > 0 && (
                        <div className='py-10'>
                            {craft.iteration.image.map((img, index) => (
                                <div key={index} className=''>
                                    <img src={img.src} alt={img.altText} loading="lazy" />
                                    <p className='font-roundo-medium text-center text-sm mt-2 text-dark-grey'> Updated offer details and menu screen</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* tims */}
                    {craft.iteration.final && (
                        <>
                            <div className='content-gap' >
                                <h2 className='mb-4'>Final Designs</h2>
                                <div className="space-y-20">
                                    {craft.iteration.final.screens.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`flex flex-col gap-4 md:gap-12 md:items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                                                }`}
                                        >
                                            <div className="flex-1">
                                                <h3>{item.header}</h3>
                                                <p>{item.content}</p>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:gap-10">
                                                    <div>
                                                        <img src={item.original} alt="Original Design" loading="lazy" />
                                                        <p className='font-roundo-medium text-center text-sm mt-2 text-red-600'>{item.ori_caption}</p>
                                                    </div>
                                                    <div>
                                                        <img src={item.new} alt="New Design" />
                                                        <p className='font-roundo-medium text-center text-sm mt-2  text-green-600' loading="lazy">{item.new_caption}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* pants */}
                    {craft.iteration.system && (
                        <div className='content-gap'>
                            <h2> Hi-Fi Design</h2>
                            {craft.iteration.system.map((item, index) => (
                                <>
                                    <div key={index} className='mt-10'>
                                        <div className={`flex flex-col gap-10 md:flex-row md:items-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                                            <div>
                                                <h3>{item.header}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                            <div className='p-2 bg-white bg-opacity-50 rounded-xl shadow-md'>
                                                <img src={item.src} alt={item.alt} loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    )}

                    {craft.iteration.finalScreen && (
                        <>
                            <div>
                                <div className='mb-10'>
                                    <h3>Onboarding Screens</h3>
                                    <p>The onboarding process starts with an intuitive sizing tool that guides users step-by-step to input the necessary data to provide accurate sizing. For those unsure of their size, a visual model allows adjustments via sliders. This approach removes the complexity of size charts and guesswork, making the process seamless and user-friendly.</p>
                                </div>
                                <div>
                                    <img src={craft.iteration.finalScreen.onboarding.img.src} alt={craft.iteration.finalScreen.onboarding.img.alt} loading="lazy" />
                                </div>
                            </div>

                            <div>
                                <div className='content-gap flex flex-col gap-6 md:flex-row md:gap-10 md:items-center'>
                                    <div className='mb-10 basis-2/3'>
                                        <h3>Home - Dashboard</h3>
                                        <p>The Home Screen serves as the main hub where users can easily access the following features: </p>
                                        <ul className='list-decimal ml-3 my-6'>
                                            <li>FitBot (AI Chat)</li>
                                            <li>My Size</li>
                                            <li>Wishlist</li>
                                        </ul>
                                        <p> Since the chatbot is the main focus, by centralizing everything in one place, the interface remains clean and simple, ensuring users can quickly navigate to what they need. </p>
                                    </div>
                                    <div className='basis-1/3'>
                                        <img src={craft.iteration.finalScreen.home.img.src} alt={craft.iteration.finalScreen.home.img.alt} className='max-w-[230px]' loading="lazy" />
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <div className='content-gap flex flex-col gap-6 md:flex-row-reverse md:gap-10 md:items-center'>
                                    <div className='mb-10 flex-1'>
                                        <h3>Chat with FitBot</h3>
                                        <p> Once the sizing data is collected, users can engage with FitBot for further recommendations. FitBot goes beyond traditional suggestions by integrating with a realistic 3D AI model that updates in real-time to reflect user measurements. This allows users to visualize how pants will fit key areas such as the waist, hips, and inseam. Combining AI-driven guidance with realistic fit visualization, FitBot creates a seamless and interactive experience tailored to each user.</p>
                                    </div>



                                    <div className='flex-1'>
                                        <div className='flex gap-4'>
                                            <div className='w-full'>
                                                <img src={craft.iteration.finalScreen.fitbot.img.src} alt={craft.iteration.finalScreen.fitbot.img.alt} loading="lazy" />
                                            </div>
                                            <div className='w-full'>
                                                <img src={craft.iteration.finalScreen.model.img.src} alt={craft.iteration.finalScreen.model.img.alt} loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}


                    <div id="prototype" className='content-gap'>
                        <h2 className='mb-10'>Try It Yourself!</h2>
                        <iframe
                            className="w-full h-[800px]"
                            src={craft.iteration.figma}
                            allowFullScreen
                            title="Figma Prototype"
                        ></iframe>
                    </div>
                </div >




            </section >

            <section id='reflection' className='content-w pb-20 md:pb-[10rem]'>
                <div className=''>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <span className='text-dark-grey uppercase font-roundo tracking-wider'> Final Thoughts</span>
                        <h1>Reflection</h1>
                    </div>

                    <div className='mt-10 flex flex-col gap-10 md:flex-row pb-20'>
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
                    </div>
                </div>
            </section >
        </>
    )
}

export default UIUXLayout
