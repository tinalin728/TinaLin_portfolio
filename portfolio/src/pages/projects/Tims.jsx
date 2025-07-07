import { useEffect, useState } from 'react'
import { projectData } from '../../data/projectData'
import ProjectIntro from '../../components/projects/ProjectIntro';
import UXDisplayCard from '../../components/projects/UXDisplayCard';
import CustomTabs from '../../components/projects/CustomTabs';
import ProjectLayout from '../../components/projects/ProjectLayout';

import checkMark from '../../../public/assets/icons/checklist.png'
import { ArrowDown } from 'lucide-react';

const project = projectData[0]

export default function Tims() {

    const sections = [
        { id: "overview", label: "Overview" },
        { id: "solutions", label: "Solutions", parentId: "overview" },
        { id: "research", label: "Research" },
        { id: "problems", label: "Problems", parentId: "research" },
        { id: "ideation", label: "Ideation" },
        { id: "design", label: "Design" },
        { id: "testing", label: "Testing" },
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
                src={project.intro.src}
                buttonLink="#prototype"
                button="View Prototype"
                icon={ArrowDown}
            />

            <ProjectLayout sections={sections} currentId={project.id} projectData={projectData} >
                {/* overview */}
                <section id='overview' className='mt-14 lg:mt-20'>
                    <h2 className='text-center'> Overview </h2>

                    <div className='section-gap'>
                        <div className='flex flex-col md:flex-row gap-14 pb-14 lg:pb-20'>
                            <div className='flex-1'>
                                <p className='subtitle-sm'> The Challenge </p>
                                <h3 className='mb-5'>Redeeming offers was never as smooth  as ordering in store</h3>
                                <p className=''>
                                    Being one of Canada’s most iconic brands, Tim Hortons deserved an app that felt just as familiar. As a regular user, I kept running into the same struggles, especially when trying to redeem offers. It felt more like a guessing game than a smooth process, with too many taps, unclear feedback, and a lot of second-guessing along the way.
                                </p>
                            </div>

                            <div className='flex-1 rounded-3xl overflow-hidden shadow-lg'>
                                <img src={project.overview.image.src} alt="Tim Horton's app" className='h-full w-full object-cover' />
                            </div>
                        </div>

                        <hr className='divider' />

                        <div id="solution">
                            <p className='subtitle-sm'> The Solution</p>
                            <div className='lg:max-w-[75%] pb-14 lg:pb-20'>
                                <h3 className='mb-5'> A smoother way to redeem offers, no guesswork. </h3>
                                <p className=''> I simplified the flow by removing unnecessary clicks and guiding users straight to eligible items, instead of the full menu. No more extra steps. Just a clear, easy path to redeem offers. </p>

                            </div>
                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.design1.title}
                                description={project.overview.final.design1.description}
                                images={project.overview.final.design1.images}
                                additionalClasses={'mb-14 lg:mb-20'}
                            />

                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.design2.title}
                                description={project.overview.final.design2.description}
                                images={project.overview.final.design2.images}
                                additionalClasses='mb-14 lg:mb-20'
                                reverse
                            />

                            <UXDisplayCard
                                useIcon
                                iconImg={checkMark}
                                iconSize='w-6 mr-2 translate-y-2'
                                title={project.overview.final.design3.title}
                                description={project.overview.final.design3.description}
                                images={project.overview.final.design3.images}
                            />
                        </div>

                    </div>
                </section>

                {/* research */}
                <hr className='' />

                <section id='research'>
                    <div className='pt-14 lg:pt-20'>
                        <h2 className='text-center'> Research </h2>

                        <div className='section-gap'>
                            <div className='flex flex-col md:flex-row gap-10 xl:gap:14 pb-14 lg:pb-20'>
                                <div className='basis-[60%]'>
                                    <p className='subtitle-sm'>Survey / User Interviews </p>

                                    <h3 className='mb-5'>
                                        Users found redeeming offers harder than placing an order.
                                    </h3>

                                    <p>
                                        I surveyed 19 users and conducted 3 interviews to learn how they interacted with the app. While most found ordering easy, many struggled with offers - <span className='font-medium'> they weren’t sure which items qualified, whether the discount applied, or how to fix mistakes. </span>  These small moments of confusion added up, making the experience feel frustrating and unclear.
                                    </p>
                                </div>

                                <div className='basis-[40%] flex flex-col gap-6'>

                                    {project.research.survey.map((img, index) => (
                                        <div className="w-full rounded-xl overflow-hidden shadow-lg">
                                            <img src={img.src} alt={img.alt} className="w-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className='divider' />

                            <div>
                                <p className='subtitle-sm'>Heuristic Evaluation</p>
                                <h3 className=' mb-5'>
                                    Breaking down UX barriers
                                </h3>

                                <p className='w-full lg:max-w-[60%] mb-10'>
                                    Looking at the current flow, I identified 3 prioritized issues that made redeeming offers more complicated than it needed to be.
                                </p>
                            </div>

                            <div id="problems">
                                <div className='border p-4 md:p-6 lg:p-10 bg-white border-gray-300 rounded-3xl shadow-lg mb-10 lg:mb-20 lg:sticky lg:top-15'>
                                    <UXDisplayCard
                                        number={1}
                                        numberClass="text-[#C8102E]! pr-2"
                                        title={project.research.problems.issue1.title}
                                        description={project.research.problems.issue1.description}
                                        images={project.research.problems.issue1.images}
                                    />
                                </div>

                                <div className='border p-4 md:p-6 lg:p-10 bg-white border-gray-300 rounded-3xl shadow-lg mb-10 lg:sticky lg:top-25'>
                                    <UXDisplayCard
                                        number={2}
                                        numberClass="text-[#C8102E]! pr-2"
                                        title={project.research.problems.issue2.title}
                                        description={project.research.problems.issue2.description}
                                        images={project.research.problems.issue2.images}
                                    />
                                </div>
                                <div className='border p-4 md:p-6 lg:p-10 bg-white border-gray-300 rounded-3xl shadow-lg mb-0 relative z-10'>
                                    <UXDisplayCard
                                        number={3}
                                        numberClass="text-[#C8102E]! pr-2"
                                        title={project.research.problems.issue3.title}
                                        description={project.research.problems.issue3.description}
                                        images={project.research.problems.issue3.images}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* ideation */}
                < hr />

                <section id='ideation'>
                    <div className='section-gap'>
                        <h2 className='text-center pb-14 lg:pb-20'> Ideate </h2>

                        <div className="mb-10">
                            <p className='subtitle-sm'> Empathize with users</p>

                            <h3 className='mb-5'>
                                Mapping opportunities
                            </h3>

                            <p className=''>To shape the redesign direction, I began by studying  <span className='font-medium'>competitors</span> to identify common patterns and pain points. A <span className='font-medium'>persona</span>  and <span className='font-medium'>journey map</span> were created to better understand the frustrations and needs of real users like Jane, a busy professional who values speed and clarity. These tools helped highlight where the current flow fell short and guided early design decisions focused on simplicity and ease.</p>
                        </div>

                        <div className='rounded-3xl shadow-lg overflow-hidden'>
                            <img src={project.define.journey.src} alt={project.define.journey.alt} className='w-full h-full object-cover' />
                        </div>
                    </div>
                </section>

                {/* design */}
                <hr />
                <section id='design'>
                    <div className='section-gap'>
                        <h2 className='text-center pb-14 lg:pb-20'> Design </h2>

                        <div className='mb-10'>
                            <p className='subtitle-sm'>User flow / early designs</p>
                            <h3 className=' mb-5'>
                                Turning insights into structure
                            </h3>

                            <p>I started by mapping two user flows: </p>
                            <div className="py-4">
                                <ol>
                                    <li>Core offer flow</li>
                                    <li>Offer conflict flow</li>
                                </ol>
                            </div>

                            <p>
                                These flows guided the initial wireframes, helping simplify steps and clarify the UI. For the offer detail screen, I reorganized item descriptions into point form to make them easier to scan. I kept the original color palette to stay consistent with Tim Hortons’ brand, while focusing on layout and interaction improvements.
                            </p>
                        </div>
                        <CustomTabs
                            value={value}
                            handleChange={handleChange}
                            tabData={project.design.flow.tabData}
                            mainColor="#F9F5EE"
                            selectedTextColor="#C8102E"
                        />

                    </div>
                </section >

                {/* testing */}
                < hr />
                <section id='testing'>
                    <div className='section-gap'>
                        <h2 className='text-center pb-14 lg:pb-20'> Testing & Iteration </h2>

                        <div className='flex flex-col lg:flex-row lg:gap-10 xl:gap:14 pb-14 lg:pb-20'>
                            <div className='flex-1  mb-5'>
                                <p className='subtitle-sm'>User Testing</p>
                                <h3 className=' mb-5'>
                                    Validating my ideas
                                </h3>

                                <p className="mb-5">
                                    To test the updated design, I ran <span className="font-medium">usability testing with 4 participants</span> who were asked to redeem a Farmer’s Breakfast Wrap and a Classic Donut. The goal was to evaluate how well the new flow worked without the “Activate” button, and to uncover any points of confusion or friction.
                                </p>
                            </div>

                            <div className='flex-1 grid grid-cols-2 gap-4'>
                                <div className='flex flex-col justify-center items-center p-10 border rounded-3xl border-gray-200 text-center shadow-md'>
                                    <h3 className="text-green"> 75% </h3>
                                    <p className='text-sm mt-3  leading-[1.2]'> Found process smoother</p>
                                </div>
                                <div className='flex flex-col justify-center items-center p-10 border rounded-3xl border-gray-200 text-center shadow-md'>
                                    <h3 className="text-red"> 25% </h3>
                                    <p className='text-sm mt-3 leading-[1.2]'> Found offer details unclear</p>
                                </div>
                                <div className='flex flex-col justify-center items-center p-10 border rounded-3xl border-gray-200 text-center shadow-md'>
                                    <h3 className="text-red"> 25% </h3>
                                    <p className='text-sm mt-3  leading-[1.2]'> Felt lost after adding items</p>
                                </div>
                                <div className='flex flex-col justify-center items-center p-10 border rounded-3xl border-gray-200 text-center shadow-md'>
                                    <h3 className="text-red"> 50% </h3>
                                    <p className='text-sm mt-3 leading-[1.2]'> Needed quick offer reference</p>
                                </div>
                            </div>
                        </div>

                        <hr className='divider' />

                        <div className='pb-14 lg:pb-20'>
                            <p className='subtitle-sm'>Iteration</p>
                            <h3 className=' mb-5'>
                                Refining the experience
                            </h3>
                            <p className='mb-10'>
                                User testing revealed that although the new flow felt smoother, the offer details still lacked clarity. Some participants struggled to understand what the offer included and how to make their selections confidently.
                            </p>


                            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 border p-8 md:p-10 rounded-3xl border-gray-200 shadow-lg mb-10">
                                <div className="basis-[60%]">
                                    <img src={project.iteration.before.src} alt={project.iteration.before.alt} />
                                </div>
                                <div className="basis-[40%]">
                                    <p className="subtitle-sm text-red">Before</p>
                                    <h5 className="mb-3">
                                        Unclear Hierarchy and Dense Information
                                    </h5>
                                    <ul>
                                        <li>Offer title buried in long blocks of text</li>
                                        <li>Users had to toggle back and forth</li>
                                        <li>Poor grouping of offer info and menu detail screen</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 border p-8 md:p-10 rounded-3xl border-gray-200 shadow-lg">
                                <div className="basis-[60%]">
                                    <img src={project.iteration.after.src} alt={project.iteration.after.alt} className='h-full w-full' />
                                </div>
                                <div className="basis-[40%]">
                                    <p className="subtitle-sm text-green">After</p>
                                    <h5 className="mb-5">
                                        Improved Readability and Visual Grouping
                                    </h5>
                                    <ul>
                                        <li>Clear grouping in tabbed layout: Offer title, price, and eligible items are clearly visible at a glance. </li>
                                        <li>Improved visual hierarchy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className='divider' />

                        <div id='prototype'>
                            <p className='subtitle-sm'>Final Prototype</p>
                            <h3 className=' mb-5'>
                                Try it yourself!
                            </h3>

                            <div className='rounded-3xl overflow-hidden border border-gray-300 shadow-lg'>
                                <iframe
                                    src="https://embed.figma.com/proto/b1qsKrJYgq3JSl2vzSoljY/UIUX-Tim-hortons?page-id=128%3A756&node-id=1256-6914&viewport=1095%2C-674%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1256%3A6914&show-proto-sidebar=1&embed-host=share"
                                    allowFullscreen
                                    className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* reflection */}
                <hr />
                <section id='reflection' className='reflection'>
                    <div className='section-gap'>
                        <h2 className='text-center pb-14 lg:pb-20'> Reflection </h2>

                        <div>
                            <h4 className=''>
                                Keep it simple
                            </h4>

                            <p className=' mb-10'>Even small moments of confusion add up. I learned that clear, straightforward design helps users feel confident — and cutting extra steps goes a long way.</p>


                            <h4>
                                Feedback is everything
                            </h4>
                            <p className=' mb-10'>User testing revealed issues I would’ve missed on my own, like unclear offer info and missing cues. Listening changed how I designed.</p>

                            <h4>
                                Small tweaks, big impact
                            </h4>
                            <p className=''>A few UI improvements — like better layout and clearer labels — made the app feel easier to use without needing a full redesign.</p>
                        </div>
                    </div>
                </section>
            </ProjectLayout>

        </>
    )
}
