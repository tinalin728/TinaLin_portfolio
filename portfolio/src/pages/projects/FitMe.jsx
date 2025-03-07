import React, { useEffect, useState } from 'react'
import ProjectBanner from '../../components/ProjectBanner'
import { projectData } from '../../data/projectData'
import PrototypeCta from '../../components/PrototypeCta';
import BackToTop from '../../components/BackToTop';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ImageModal from '../../components/ImageModal';
import Sidebar from '../../components/Sidebar';

const project = projectData[3]
console.log("Current Project Data:", project);

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

export default function FitMe() {


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
        { id: "iteration", label: "Iteration" },
        { id: "solution", label: "Solutions" },
        { id: "reflection", label: "Reflection" },
    ];

    return (
        <>
            <ProjectBanner project={project} />
            <BackToTop />
            <div className='max-w-container md:flex md:gap-10 lg:gap-14 bg-primary relative z-10'>
                <Sidebar sections={sections} />

                <div className='overflow-hidden'>
                    {/* overview */}
                    <section className='bg-primary'>
                        <div className='section-gap'>
                            <h2 className=''>Overview</h2>
                            <div className='content-gap flex flex-col-reverse gap-10 lg:flex-row'>
                                <div className='flex-1'>
                                    <h4 className='mb-10 text-dark font-patrick italic tracking-wider'>{project.overview.headline} </h4>
                                    <p className='mb-10' dangerouslySetInnerHTML={{ __html: project.overview.content }} />
                                    <p className='uppercase tracking-wider underline underline-offset-[4px] font-roundo-medium text-orange'>The Challenge</p>

                                    <p className='mb-10' dangerouslySetInnerHTML={{ __html: project.overview.challenge }} />

                                    <p className='uppercase tracking-wider underline underline-offset-[4px] font-roundo-medium text-orange'> The Solution</p>
                                    <p>FitMe app that suggests clothing based on body measurements, eliminating the need for size charts and helping users find the best fit across brands with ease.
                                    </p>

                                    <PrototypeCta inPageLink="View Prototype" scrollToId='prototype' />
                                </div>

                                <div className='flex-1 w-full h-full mx-auto'>
                                    <div className='w-full max-w-[350px] lg:w-[600px] mx-auto'>
                                        <img
                                            src={project.overview.media.src}
                                            alt={project.overview.media.altText}
                                            className=""
                                            loading='lazy'
                                        />
                                        <p className="text-center text-sm mt-2 text-grey font-patrick-hand tracking-wider">
                                            {project.overview.media.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* research */}
                    <section id='research' className='pb-0'>
                        <div>
                            <div className='section-gap border-t-2 border-light-grey border-dashed'>
                                <h2>Research</h2>
                                <div className='content-gap'>
                                    <div className='flex flex-col gap-10 mb-10 mt-2'>
                                        <div className='flex-1'>
                                            <h3>{project.research.interview.title}</h3>
                                            <p className='my-4' dangerouslySetInnerHTML={{ __html: project.research.interview.description }} />
                                        </div>

                                        <div className='p-2 bg-white/50  shadow-md'>
                                            <img src={project.research.interview.map.src} alt={project.research.interview.map.altText} className='w-full' loading="lazy" />
                                        </div>
                                    </div>
                                </div>

                                <div id="problems" className="mt-4">
                                    <h3 className=''> <span className=' font-roundo-semibold bg-amber-100'>Common Pain Points</span> in Finding the Right Fit
                                    </h3>
                                    <div className='grid gap-6 md:grid-cols-2 py-10'>
                                        {project.research.problems.icons.map((issue, index) => (
                                            <div key={index} className='bg-white/50 p-2 rounded-2xl shadow-md'>
                                                <div className='flex flex-col gap-3 border  border-gray-400 bg-white p-4 h-full rounded-xl'>
                                                    <img
                                                        src={issue.src}
                                                        alt={issue.altText}
                                                        loading="lazy"
                                                        className='w-[54px] object-contain' />
                                                    <p className='text-[20px] border-b py-2 border-dashed border-gray-400 text-orange font-roundo-medium'> {issue.header}</p>
                                                    <p>{issue.caption}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <PrototypeCta inPageLink="Skip to Solutions" scrollToId='solution' />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='ideation'>
                        <div className=''>
                            <div className='section-gap border-t-2 border-light-grey border-dashed'>
                                <h2>Ideation</h2>

                                <div className='content-gap'>
                                    <div className='flex-1'>
                                        <h3 className='mb-4'>What If?: Exploring solutions</h3>
                                        <p>Starting from mind mapping, I quickly jotted down all possible solutions, everything from AI body scans to quiz-based recommendations. Through this process, I narrowed it down to <span className='underline underline-offset-2'>two key solutions</span>  that would have the biggest impact:</p>
                                        <div className="grid gap-6 mt-10 place-content-center md:grid-cols-2">
                                            {project.define.insights.solution.map((item, index) => (
                                                <div key={index} className="flex-1 bg-white/70 p-2  h-fit rounded-2xl shadow-md">
                                                    <div className='bg-white p-4 border border-gray-400 rounded-xl'>
                                                        <div className=''>
                                                            <span className="text-[35px]">{item.icon}</span>
                                                        </div>
                                                        <p className="mt-2 text-[20px] font-roundo-medium text-orange border-b border-dashed border-gray-400 pb-2">
                                                            {item.title}
                                                        </p>
                                                        <p className="mt-4">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* competitor analysis */}
                                <div className='content-gap'>
                                    <div className='flex flex-col lg:flex-row gap-10'>
                                        <div className='flex-1'>
                                            <h3 className='mb-4'>Market Research</h3>
                                            <p>
                                                Most existing tools focus on general clothing but few addresses the challenges of finding the right pants fit. Fit:match has the closest solution to mine, offering product recommendations based on body measurements, but it's <span className='underline underline-offset-3 text-red-600'>NOT</span>  accessible to all users due to its reliance on 3D body scanning and specific iPhone models. Seeing this gap gave me a better idea of how I could tailor my solutions to all audience.
                                            </p>
                                        </div>

                                        <div className='flex-1 p-2  bg-white/60 h-full shadow-md rounded-2xl'>
                                            <div className='mx-auto overflow-hidden border border-gray-400/50 rounded-xl'>
                                                <img
                                                    src={project.research.competitor.img.src}

                                                    alt={project.research.competitor.img.altText}

                                                    className='h-full object-cover'
                                                    loading="lazy"
                                                    onClick={() => handleImgClick({
                                                        src: project.research.competitor.img.src,
                                                        alt: project.research.competitor.img.altText
                                                    })} />
                                            </div>
                                            <p className='text-center mt-2 text-dark-grey italic text-sm'>{project.research.competitor.img.caption}</p>

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
                                    <h3 className='mb-4'>Define Target Audience</h3>
                                    <p className='mb-10'> I made 2 personas that represent the target audience along with user story to help guide my design.</p>

                                    <div className='flex gap-12 flex-col lg:flex-row'>
                                        <div>
                                            <img src={project.define.liz.src} alt={project.define.liz.altText}
                                                loading="lazy"
                                                className=' shadow-md rounded-xl' />

                                            <p className='mt-4'> <span className='font-medium text-orange'>User Story 1:</span> As a frequent online shoppers, I want to quickly find pants that fit me without comparing size charts, so that I can shop with confidence and avoid returns. </p>
                                        </div>
                                        <div>
                                            <img src={project.define.jamie.src} alt={project.define.jamie.altText}
                                                loading="lazy"
                                                className=' shadow-md rounded-xl' />

                                            <p className='mt-4'><span className='font-medium text-orange'>User Story 2:</span>  As a working professional with limited time, I want to get accurate size recommendations instantly, so that I can shop efficiently and avoid returns. </p>
                                        </div>
                                    </div>
                                </div>


                                {/* narrative */}
                                <div className='content-gap'>
                                    <h3> Narrative Arc</h3>
                                    <p className='mt-4'>With these insights, I mapped their journey to understand their struggles and design the best solution.</p>
                                    <img src={project.define.arc.src} alt={project.define.arc.altText} loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='design'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Design</h2>

                            <div className='content-gap flex flex-col md:flex-row gap-10'>
                                <div className='flex-1'>
                                    <h3>User Flow</h3>
                                    <p className='mt-4'>User flow was created to visualize the steps my personas would take to complete their goals.</p>
                                </div>

                                <div className='flex-1 p-2  bg-white/50 h-full shadow-md rounded-2xl'>
                                    <div className='mx-auto overflow-hidden border border-gray-400/40 rounded-xl'>
                                        <img src={project.design.flow.image.src}
                                            alt={project.design.flow.image.altText}
                                            className='h-full object-cover'
                                            loading="lazy"
                                            onClick={() => handleImgClick({
                                                src: project.design.flow.image.src,
                                                alt: project.design.flow.image.altText
                                            })} />
                                    </div>
                                    <p className='text-center mt-2 text-dark-grey italic text-sm'>Click to view</p>

                                    <ImageModal
                                        isOpen={modalData.isOpen}
                                        src={modalData.src}
                                        alt={modalData.alt}
                                        onClose={closeModal}
                                    />
                                </div>
                            </div>

                            <div className='content-gap'>
                                <div className='flex-1'>
                                    <h3>Med-Fi wireframes & Initial User Testing</h3>

                                    <p className='mt-4'>After completing my mid-fidelity wireframes, I conducted a quick user testing session with 5 participants to gather feedback on usability and clarity. The goal was to identify pain points and opportunities for improvement before moving to high-fidelity designs.</p>
                                    <p className='mt-6'>Key areas of focus:</p>
                                    <ul className='flex flex-col gap-2 mt-2'>
                                        <li> <span className='font-bold'>→ Navigation flow: </span>  Were users able to move through the process smoothly?</li>
                                        <li><span className='font-bold'>→ Fit profile setup: </span> Did the steps feel intuitive, or were they overwhelming?</li>
                                        <li><span className='font-bold'>→ Size recommendations: </span> Did users understand how sizing worked in the product catalogue?</li>
                                    </ul>
                                </div>
                                <div className='flex-1 flex flex-col gap-10 md:flex-row mt-10'>
                                    <div>
                                        <img src={project.design.change1.src}
                                            alt={project.design.change1.altText}
                                            loading='lazy'
                                        />
                                    </div>
                                    <div>
                                        <img src={project.design.change2.src}
                                            alt={project.design.change2.altText}
                                            loading='lazy'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='iteration'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Iteration</h2>

                            <div className='content-gap flex gap-10 flex-col md:flex-row'>
                                <div>
                                    <h3>Design system </h3>
                                    <p className='mt-4'>I made a simple design system with reuseable components to ensure that the design is consistent.</p>
                                </div>

                                <div className=' overflow-hidden rounded-2xl shadow-md'>
                                    <img src={project.final.system.src}
                                        alt={project.final.system.alt}
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                            <div id='solution' >
                                <div className='content-gap'>
                                    <h3> Onboarding Process </h3>
                                    <p>The onboarding process makes finding the perfect fit effortless by offering:</p>
                                    <ul className='list-disc ml-4 mt-4 mb-10'>
                                        <li> <span>Step-by-Step Sizing Guide:</span>  Simply follow the intuitive prompts to enter your body measurements.</li>
                                        <li> <span>Adjust with Sliders:</span> Move the sliders to match your body shape and see real-time changes. </li>
                                        <li> <span>Answer Quick Questions:</span> A short questionnaire refines the recommendations for even better accuracy. </li>
                                    </ul>
                                    <div>
                                        <img src={project.final.onboarding.src}
                                            alt={project.final.onboarding.alt}
                                            loading='lazy'
                                        />
                                    </div>
                                </div>

                                <div className='content-gap flex gap-10 mx-auto flex-col md:flex-row'>
                                    <div className='flex-1'>
                                        <h3>Browse Products: Eliminating Size Guesswork</h3>
                                        <p className='mt-4'>Instead of switching between pages to compare sizes, FitMe auto-filters products based on the user’s measurements. The Home screen's Fit Profile provides a general size recommendation, while product listings display the best-matching size per brand. This eliminates size guesswork, making shopping faster, more accurate, and frustration-free.
                                        </p>
                                    </div>

                                    <div className='flex-1 flex gap-5 items-center'>
                                        <div className='shadow-md'>
                                            <img src={project.final.home.src}
                                                alt={project.final.home.alt}
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className='shadow-md'>
                                            <img src={project.final.search.src}
                                                alt={project.final.search.alt}
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='content-gap flex gap-10 mx-auto flex-col md:flex-row-reverse justify-center'>
                                    <div className='flex-1'>
                                        <h3>Product with size recommendation <br /> + Review with similar body types</h3>
                                        <p className='mt-4'>This page makes shopping easier by combining size recommendations and real user reviews so users can find the right fit without the hassle. Instead of scrolling through endless reviews, the system auto-selects reviews from people with similar body types, making it faster and more accurate to judge how the pants will actually fit.
                                        </p>
                                    </div>

                                    <div className='flex-1 flex gap-5 items-center'>
                                        <div className='shadow-md'>
                                            <img src={project.final.detail.src}
                                                alt={project.final.detail.alt}
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className='shadow-md'>
                                            <img src={project.final.review.src}
                                                alt={project.final.review.alt}
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='content-gap flex gap-10 mx-auto flex-col md:flex-row'>
                                    <div className='flex-1'>
                                        <h3>Additional Features: Favorite and Profile Edit</h3>
                                        <p className='mt-4'>
                                            Shopping for the right fit is even easier with these added features:
                                        </p>
                                        <ul className='list-disc ml-4 mt-4 flex flex-col gap-4'>
                                            <li> <span className='font-bold'>Favorite:</span> Save products and revisit them anytime without searching again.</li>
                                            <li> <span className='font-bold'>Edit Fit Profile:</span> Initially focused on pants, I decided to make the Fit Profile more inclusive by allowing users to update both lower and upper body measurements. This gives users flexibility for future fit recommendations beyond just pants. </li>
                                        </ul>
                                    </div>

                                    <div className='flex-1 flex gap-5 items-center'>
                                        <div className='shadow-md'>
                                            <img src={project.final.fav.src}
                                                alt={project.final.fav.alt}
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className='shadow-md'>
                                            <img src={project.final.edit.src}
                                                alt={project.final.edit.alt}
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div id="prototype" className='content-gap'>
                                    <h3 className='mb-10'>Try It Yourself!</h3>
                                    <iframe
                                        src="https://embed.figma.com/proto/ZpCd26RV2lSW6tLaogLtTC/pants?page-id=1064%3A7346&node-id=1078-13571&viewport=75%2C-3073%2C0.18&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1066%3A10263&show-proto-sidebar=1&embed-host=share"
                                        allowfullScreen
                                        className="w-full h-[800px]"
                                    ></iframe>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section id='reflection'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Reflection</h2>

                            <div className='content-gap'>
                                <h3>What I learned</h3>

                                <ul className='list-disc ml-4 mt-4 flex flex-col gap-4'>
                                    <li>
                                        <span>User & market research shaped my focus</span>: Throughout this project, I started by understanding user frustrations, which helped me uncover key pain points in the shopping experience. From there, I brainstormed various possible solutions, exploring different ways to improve the fit recommendation process. Analyzing market gaps was crucial—it guided me in narrowing down my ideas and focusing on what would truly make a difference. This process reinforced the importance of both user and market research in shaping a clear and effective design direction.
                                    </li>
                                    <li>
                                        <span>Early user testing made a HUGE Difference</span>:  Testing helped me catch small but important issues, like missing visual cues and unclear offer details. Without feedback, I might not have noticed them.
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}
