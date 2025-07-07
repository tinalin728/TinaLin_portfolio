import React, { useEffect, useState } from 'react'
import { projectData } from '../../data/projectData'
import ProjectIntro from '../../components/projects/ProjectIntro';
import ProjectLayout from '../../components/projects/ProjectLayout';
import UXDisplayCard from '../../components/projects/UXDisplayCard';
import CustomTabs from '../../components/projects/CustomTabs';

import checkMark from '../../../public/assets/icons/checklist.png'
import { ArrowDown } from 'lucide-react';

const project = projectData[4]

export default function FitMe() {

    const sections = [
        { id: "overview", label: "Overview" },
        { id: "solutions", label: "Solutions", parentId: "overview" },
        { id: "discover", label: "Discover" },
        { id: "problems", label: "Problems", parentId: "research" },
        { id: "ideation", label: "Ideation" },
        { id: "design", label: "Design" },
        { id: "prototype", label: "Prototype" },
        { id: "reflection", label: "Reflection" },
    ];

    // tabs
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <ProjectIntro
                title={project.intro.title}
                subtitle={project.intro.subtitle}
                timeline={project.intro.timeline}
                role={project.intro.role}
                process={project.intro.process}
                src={project.intro.banner}
                buttonLink="#prototype"
                button="View Prototype"
                icon={ArrowDown}
            />

            <ProjectLayout sections={sections} currentId={project.id} projectData={projectData} >

                {/* overview */}
                <section id='overview' className='mt-20'>
                    <h2 className='text-center'> Overview </h2>

                    <div className='section-gap'>
                        <div className='flex gap-10 xl:gap:14 flex-col lg:flex-row pb-14 lg:pb-20'>
                            <div className='flex-1'>
                                <p className='subtitle-sm'>A familiar frustration</p>

                                <h3 className='mb-5'>Pants shopping online feels like guesswork </h3>
                                <p>
                                    As someone with a petite frame, I’ve spent more time returning clothes than wearing them. With inconsistent size charts and no way to visualize fit, online shopping becomes a cycle of uncertainty and disappointment — even when the options seem endless.
                                </p>
                            </div>
                            <div className='flex-1 rounded-3xl overflow-hidden shadow-lg'>
                                <img src={project.overview.problem.src} alt="jeans" />
                            </div>
                        </div>

                        <hr className='divider' />

                        <div id="solution">
                            <p className='subtitle-sm'> The Solution</p>
                            <div className='pb-10 lg:max-w-[75%]'>
                                <h3 className='mb-5' > Make sizing feel effortless</h3>
                                <p > Through my research, I found that shoppers often give up when faced with confusing size charts and inconsistent fits. FitMe removes that friction by offering size suggestions tailored to the user’s body, so they can browse confidently without second-guessing every product.</p>
                            </div>

                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.onboarding.title}
                                description={project.overview.final.onboarding.description}
                                images={project.overview.final.onboarding.images}
                                additionalClasses={'pb-14 lg:pb-20'}
                                videoClass=""
                            />
                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.design1.title}
                                description={project.overview.final.design1.description}
                                images={project.overview.final.design1.images}
                                additionalClasses={'pb-14 lg:pb-20'}
                                reverse
                            />

                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.design2.title}
                                description={project.overview.final.design2.description}
                                images={project.overview.final.design2.images}
                                additionalClasses='pb-14 lg:pb-20'
                                videoClass='scale-[1.01]'
                            />
                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.design3.title}
                                description={project.overview.final.design3.description}
                                images={project.overview.final.design3.images}
                                reverse
                            />
                        </div>
                    </div>

                </section>

                <hr className='' />

                {/* research */}
                <section id='discover'>
                    <div className='pt-14 lg:pt-20'>
                        <h2 className='text-center'> Discover </h2>

                        <div className='section-gap'>
                            <div className='flex flex-col md:flex-row gap-8 lg:gap-10 xl:gap:14 pb-10'>
                                <div className='flex-1'>
                                    <p className='subtitle-sm'>secondary research / user interviews </p>

                                    <h3 className='mb-5'>
                                        Diving deep into real users' frustrations
                                    </h3>
                                    <p>
                                        After stumbling upon countless Reddit threads about the frustrations of online pant sizing, I wanted to dig deeper. I interviewed with 6 users — half frequent online shoppers, half occasional buyers — to understand their sizing pain points and behavior more clearly.
                                    </p>
                                </div>
                                <div className='flex-1 flex flex-col gap-4 items-center'>
                                    {project.research.reddit.map((img, index) => (
                                        <div className="rounded-xl overflow-hidden shadow-lg max-w-[360px] w-full">
                                            <img src={img.src} alt={img.alt} className="w-full" />
                                        </div>
                                    ))}
                                    <p className='caption'>Quotes from reddit </p>
                                </div>

                            </div>

                            <div id='problems' className='pb-14 lg:pb-20'>
                                <h4 className='mb-5 font-extralight'>Research highlights</h4>

                                <div className='grid grid-cols-2 md:grid-cols-4 h-full gap-4'>
                                    {project.research.problems.icons.map((issue, index) => (
                                        <div key={index} className='flex-1 flex flex-col items-center gap-3 border border-gray-300 bg-white p-6 rounded-xl shadow-lg md:p-8 lg:p-10'>
                                            <h3 className='text-[#527FF3] font-medium'> {issue.number}</h3>

                                            <p className='caption leading-[1.3]'>{issue.caption}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className='divider' />

                            <p className='subtitle-sm'>Competitor Analysis</p>
                            <h3 className='mb-5'>
                                Exploring possible solutions
                            </h3>

                            <p className='w-full lg:w-[65%] mb-10'>
                                I explored tools already on the market that claim to help users find the right fit, <span className='font-medium'>but most were either too general, too tech-reliant, or didn’t focus on pants at all </span>. By comparing them, I saw a clear opportunity: build a simple, inclusive solution that uses body data and real fit reviews to cut the guesswork.
                            </p>
                            <div className='p-4 shadow-lg rounded-3xl border border-gray-300 '>
                                <img src={project.research.competitor.img.src} alt={project.research.competitor.img.alt} className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                {/* ideation */}
                <section id='ideation'>
                    <div className="pt-14 lg:pt-20">
                        <h2 className='text-center'>Ideate </h2>

                        <div className='section-gap'>
                            <p className='subtitle-sm'>User personas</p>
                            <h3 className='mb-5'>Define Target Audience</h3>
                            <p className=''>
                                To make sure my design truly solves a real problem, I created two personas based on recurring pain points I noticed during research. These personas helped me stay focused on who I was designing for, and why it matters.
                            </p>
                            <div className='relative mt-10 flex flex-col-reverse justify-center gap-4 lg:flex-row-reverse lg:items-center mb-10'>
                                <div className='basis-[70%] border border-gray-300 rounded-3xl overflow-hidden shadow-lg  lg:-translate-x-8'>
                                    <img src={project.define.liz.src} alt="persona Liz" />
                                </div>

                                <p className='basis-[30%] max-w-[500px] h-fit p-5 md:p-8 bg-white border border-blue-500 shadow-lg rounded-3xl lg:translate-x-5 '>
                                    <span className='subtitle-sm text-blue-500 mb-4 inline-block'> {project.define.liz.sub}</span>
                                    <br />
                                    {project.define.liz.content}
                                </p>
                            </div>

                            <div className='relative mt-10 flex flex-col-reverse justify-center gap-4 lg:flex-row lg:items-center'>
                                <div className='basis-[70%] border border-gray-300 rounded-3xl overflow-hidden shadow-lg  lg:translate-x-8'>
                                    <img src={project.define.jamie.src} alt="persona Jamie" />
                                </div>

                                <p className='basis-[30%] max-w-[500px] h-fit p-5 md:p-8 bg-white border border-blue-500 shadow-lg rounded-3xl lg:-translate-x-8'>
                                    <span className='subtitle-sm text-blue-500 mb-4 inline-block'> {project.define.jamie.sub}</span>
                                    <br />
                                    {project.define.jamie.content}
                                </p>
                            </div>

                            <hr className='divider' />
                            <div>
                                <p className='subtitle-sm'>Narrative arc </p>
                                <h3 className='mb-5'>
                                    What are their journeys like?
                                </h3>
                                <p className='lg:w-[60%] mb-10'>To design the right solution, I mapped out Liz and Jamie’s struggles. Their journey helped me pinpoint where existing tools fail and where FitMe could make the biggest impact.
                                </p>

                                <div className='overflow-hidden rounded-3xl border border-gray-300 shadow-lg'>
                                    <img src={project.define.arc.src} alt="narrative arc" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section id='design'>
                    <div className="pt-14 lg:pt-20">
                        <h2 className='text-center'>Design </h2>

                        <div className='section-gap'>
                            <div className='pb-14 lg:pb-20'>
                                <p className='subtitle-sm'>User Flow + Wireframes</p>
                                <h3 className='mb-5'> From Flow to structure </h3>

                                <p className='lg:w-[60%] mb-10'>
                                    I mapped out the core steps users take from onboarding to purchase, then turned that flow into med-fi wireframes to define layout and logic.
                                </p>

                                <CustomTabs
                                    value={value}
                                    handleChange={handleChange}
                                    tabData={project.design.flow.tabData}
                                    mainColor="#565656"
                                    selectedTextColor="#ffffff"
                                />

                            </div>

                            <hr className='divider' />

                            <div className='pb-14 lg:pb-20 flex flex-col lg:gap-10'>
                                <div className='flex-1'>
                                    <h3 className='mb-5'> Initial Testing </h3>
                                    <p> Before moving to hi-fi, I tested my mid-fi wireframes with 5 users to spot usability gaps.
                                        Users found the onboarding smooth and intuitive, especially the sliders and step-by-step flow. The progress bar helped maintain focus. Based on feedback, I made a few minor adjustments to improve clarity, including better visibility for size recommendations.</p>
                                </div>

                                <div className='flex-1 mx-auto'>
                                    <img src={project.design.change1.src}
                                        alt={project.design.change1.alt}
                                        loading='lazy'
                                        className='max-w-[550px] w-full'
                                    />
                                </div>
                            </div>

                            <hr className='divider' />

                            <div className='flex flex-col gap-10 lg:flex-row pb-14 lg:pb-20'>
                                <div>
                                    <p className='subtitle-sm'>final design</p>
                                    <h3 className='mb-5'>Design System</h3>

                                    <p className=''>
                                        I made a simple design system with reuseable components to ensure that the design is consistent.
                                    </p>
                                </div>
                                <div className=' overflow-hidden rounded-2xl border border-gray-300 shadow-lg'>
                                    <img src={project.final.system.src}
                                        alt={project.final.system.alt}
                                        className='w-full'
                                        loading='lazy'
                                    />
                                </div>
                            </div>

                            <hr className='divider' />

                            <div className='pb-14 lg:pb-20'>
                                <h3 className='mb-5'>High-Fidelity Wireframes</h3>

                                <div className='p-6 lg:p-10 border border-gray-300 rounded-3xl shadow-lg'>
                                    <img src={project.final.all.src} alt="High-Fidelity Wireframes" />
                                </div>
                            </div>

                            <hr className='divider' />

                            <div id='prototype'>
                                <p className='subtitle-sm'>Prototype</p>
                                <h3 className='mb-5'>Try it yourself!</h3>

                                <div className='rounded-3xl overflow-hidden border border-gray-300 shadow-lg'>
                                    <iframe
                                        src="https://embed.figma.com/proto/ZpCd26RV2lSW6tLaogLtTC/FitMe?page-id=1064%3A7346&node-id=1078-13571&viewport=531%2C-402%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1078%3A13571&embed-host=share"
                                        allowFullScreen
                                        className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
                                    ></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <hr />
                <section id='reflection' className='reflection'>
                    <div className='section-gap'>
                        <h2 className='text-center pb-14 lg:pb-20'> Reflection </h2>

                        <div>
                            <h4 className='mb-4'>
                                User and market research sharpened my direction
                            </h4>

                            <p className=' mb-10'>I began by diving into user frustrations, which helped uncover key pain points in the shopping experience. From there, I explored multiple solution paths to improve the fit recommendation process. Market analysis played a crucial role, helping me narrow my ideas and focus on changes that truly mattered. This experience reinforced how essential both user and market insights are in shaping a strong, purposeful design direction.</p>
                        </div>
                    </div>
                </section>

            </ProjectLayout>

        </>
    )
}
