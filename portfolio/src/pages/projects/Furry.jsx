import { useState } from 'react'
import { projectData } from '../../data/projectData'
import ProjectIntro from '../../components/projects/ProjectIntro';
import ProjectLayout from '../../components/projects/ProjectLayout';
import ProjectSectionLayout from '../../components/projects/ProjectSectionLayout';
import CustomTabs from '../../components/projects/CustomTabs';

import action from '../../../public/assets/furry/action.png'
import branding from '../../../public/assets/furry/branding.png'
import mess from '../../../public/assets/furry/mess.png'
import WebProblemCard from '../../components/projects/WebProblemCard';
import { ArrowDown } from 'lucide-react';

const project = projectData[3];

export default function Furry() {
    const sections = [
        { id: "overview", label: "Overview" },
        { id: "solutions", label: "Solutions", parentId: "overview" },
        { id: "research", label: "Discover" },
        { id: "problems", label: "Problems", parentId: "research" },
        { id: "design", label: "Design" },
        { id: "deliver", label: "Deliver" },
        { id: "reflection", label: "Reflection" },
    ];

    // tabs
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* intro */}
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
                <ProjectSectionLayout id="overview" title="Overview">
                    <div className='flex flex-col md:flex-row gap-14 pb-14 lg:pb-20'>
                        <div className='flex-1'>
                            <p className='subtitle-sm'> The Challenge </p>
                            <h3 className='mb-5'>Buying natural treats shouldn't feel unnatural online. </h3>

                            <p>
                                As part of the Flui Hackathon, my team (3 other members) and I were challenged to redesign the website for  <a href="https://www.furrytalespet.ca/" className='font-normal text-base 3xl:text-md 4xl:text-lg underline underline-offset-2  text-[#754b37] hover:text-[#A99076] transition duration-300'>Furrytales Pet</a>, a small business known for its handcrafted, natural pet treats. While their products were full of heart, the original site didn’t reflect that same warmth or care. In just 72 hours, we set out to create a fresh, user-friendly experience that felt as personal and thoughtful as the brand itself.

                            </p>
                        </div>
                        <div className='flex-1 rounded-3xl shadow-lg overflow-hidden'>
                            <img src={project.overview.intro.src} alt="furrytales pet product" />
                        </div>
                    </div>

                    <hr className='divider' />

                    <div id="solution">
                        <p className='subtitle-sm'> The Solution</p>

                        <h3 className='mb-10 lg:max-w-[60%]'> Redesigned a warmer, clearer shopping experience that finally feels like the brand. </h3>

                        <div id='prototype' className='rounded-3xl overflow-hidden border border-gray-300 shadow-lg'>
                            <iframe
                                src="https://embed.figma.com/proto/0XZFxXzgway1yDoCsUPLXT/FurryTales-Pet?page-id=0%3A1&node-id=122-2783&p=f&viewport=-400%2C6%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=122%3A2783&embed-host=share"
                                allowFullscreen
                                className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
                            ></iframe>
                        </div>

                    </div>
                </ProjectSectionLayout>

                <hr className='' />

                <ProjectSectionLayout id="research" title="Discover">
                    <div className='flex flex-col lg:flex-row lg:gap-10 xl:gap:14 pb-14 lg:pb-20'>
                        <div className='basis-[60%]'>
                            <p className='subtitle-sm'>client brief</p>

                            <h3 className='mb-5'>
                                What the client asked for
                            </h3>

                            <p>
                                On Day 1, we received a brief from the client outlining what mattered most to them. They wanted the site to feel warm, friendly, and easier to use—while better reflecting their brand and story.
                            </p>
                            <p className='mt-5'> Here is what they asked for:</p>
                            <ul>
                                <li> Focus on key pages: About/Story, Contact, FAQs</li>
                                <li> Improve pop-up designs</li>
                                <li> Organize products into clear categories</li>
                                <li>Make the site easier to navigate</li>
                                <li>Add a review or testimonial section with photos</li>
                                <li> Strengthen overall brand identity with a friendly tone</li>
                            </ul>
                        </div>

                        <div className='basis-[40%]'>
                            <img src={project.research.brief.src} alt="" />
                        </div>
                    </div>

                    <hr className='divider' />

                    <div className='lg:max-w-[75%] mb-10'>
                        <p className='subtitle-sm'>Current Website Analysis</p>
                        <h3 className=' mb-5'>
                            Defining current UX challenges
                        </h3>

                        <p>
                            We started by analyzing the existing website to understand what was working and where it needed improvement. From that, we identified 3 key pain points:
                        </p>
                    </div>

                    <div id="problems">
                        <WebProblemCard
                            icon={branding}
                            title={project.research.problems.issue1.title}
                            description={project.research.problems.issue1.description}
                            image={project.research.problems.issue1.image}
                            caption="Homepage (Scroll to see)"
                            reverse
                        />
                        <WebProblemCard
                            icon={mess}
                            title={project.research.problems.issue2.title}
                            description={project.research.problems.issue2.description}
                            image={project.research.problems.issue2.image}
                            caption="Product Listing Page (Scroll to see)"
                        />
                        <WebProblemCard
                            icon={action}
                            title={project.research.problems.issue3.title}
                            description={project.research.problems.issue3.description}
                            image={project.research.problems.issue3.image}
                            caption="About Page (Scroll to see)"
                            reverse
                        />
                    </div>

                    <hr className='divider' />
                    <div>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-10 xl:items-start mb-10'>
                            <div className='basis-2/3'>
                                <p className='subtitle-sm'>Competitor Analysis / Client Meeting</p>

                                <h3 className='mb-5'>
                                    Discovery & Direction
                                </h3>

                                <p className='mb-5'>
                                    We began by analyzing competitors and crafting a moodboard to capture the client’s visual preferences, soft tones, organic textures, and a warm, inviting feel.
                                </p>
                                <p className=''>
                                    In our kickoff meeting, the client shared her brand story and <span className='font-medium'>emphasized a desire for an organic, friendly aesthetic.</span> Her dog, Soya, was central to that story—representing warmth and personality—which helped guide our visual tone and early redesign decisions.
                                </p>
                            </div>
                            <div className='hidden md:block md:basis-1/3'>
                                <img src={project.research.direction.soya.src}
                                    alt="Soya, owner\'s dog" />
                            </div>
                        </div>

                        <CustomTabs
                            value={value}
                            handleChange={handleChange}
                            tabData={project.research.direction.tabData}
                            mainColor="#F3F1ED"
                            selectedTextColor="#754B37"
                        />
                    </div>
                </ProjectSectionLayout>

                <hr className='' />

                <ProjectSectionLayout id="design" title="Design">
                    <div className=' pb-14 lg:pb-20'>
                        <p className='subtitle-sm'>Sitemap</p>
                        <h3 className='mb-5'>Redesigning Information Architecture</h3>

                        <p className='mb-10'>We reorganized the sitemap to group key pages — Home, Our Story, Product Categories, FAQs, and Contact — into a more intuitive structure. This streamlined navigation helps users find what they need faster while addressing past usability challenges.</p>

                        <div className='border p-8 border-gray-200 rounded-3xl shadow-lg'>
                            <img src={project.design.sitemap.src} alt="sitemap redesign" />
                        </div>
                    </div>

                    <hr className='divider' />

                    <div className=' pb-14 lg:pb-20'>
                        <p className='subtitle-sm'>Low-Fi Wireframes</p>
                        <h3 className='mb-5'>Visualizing the flow</h3>
                        <p className='mb-10'>
                            We used low-fidelity wireframes to map out structure and flow, <span className='font-medium'>focusing on clear navigation, product organization, and usability. </span> This allowed us to test key pages including Home, Our Story, Product Categories, FAQs, Contact Us - and refine the experience before moving into high-fidelity designs.
                        </p>
                        <div className='border p-8 border-gray-200 rounded-3xl shadow-lg'>
                            <img src={project.design.lowFi.src} alt="low-fi wireframes" />
                        </div>
                    </div>

                    <hr className='divider' />

                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex-1'>
                            <p className='subtitle-sm'>Design System</p>
                            <h3 className='mb-5'>Bringing out brand personality</h3>
                            <p className='mb-5'>
                                We established a consistent design system by finalizing colors and typography—ensuring clarity and cohesion across all UI elements.
                            </p>
                            <p>
                                The warm brown and cream tones evoke a natural, handmade feel, while playful pinks add charm. Fresh accents of green and yellow bring balance, resulting in a visual identity that feels both welcoming and vibrant.
                            </p>
                        </div>


                        <div className="flex-1 max-h-[450px] overflow-hidden p-2 rounded-3xl border border-gray-300 shadow-lg">
                            <div>
                                <div className="rounded-2xl h-[380px] overflow-y-auto">
                                    <img src={project.design.system.src} alt="" className="w-full" />
                                </div>
                            </div>
                            <p className='text-center caption mt-2'>Design system (scroll to see)</p>
                        </div>
                    </div>
                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="deliver" title="Deliver">
                    <div className='pb-14 lg:pb-20'>
                        <p className='subtitle-sm'>User Feedback</p>
                        <h3 className='mb-5'>Design Refinement</h3>

                        <p className='mb-10'>Unlike other teams, we weren’t assigned a mentor. Instead, we proactively sought feedback from our instructors to refine our direction and strengthen the final design.</p>

                        <div className='border border-gray-300 rounded-3xl shadow-lg p-10 mb-10'>
                            <p className='subtitle-sm text-[#754B37]'>Feedback #1</p>
                            <h4 className='mb-5'> Imbalanced Hero</h4>
                            <p className='mb-10'> The title-image pairing felt mismatched, and inconsistent logo colors were slightly off and distracting. Icons could also be more consistent across the page</p>

                            <div>
                                <img src={project.iteration.hero.src} alt="iteration" className='w-full h-full' />
                            </div>
                        </div>

                        <div className='border border-gray-300 rounded-3xl shadow-lg p-10 flex flex-col items-center lg:min-h-[500px] md:flex-row'>
                            <div className='flex-1'>
                                <p className='subtitle-sm text-[#754B37]'>Feedback #2</p>
                                <h4 className='mb-5'>Product Filter Confusion</h4>
                                <p className='mb-10'> The filter made it easy to find suitable treats, but grouping by age was a bit confusing. Since different breeds age differently, using simpler categories like Young, Adult, and Senior might make things easier to navigate.</p>
                            </div>

                            <div className='flex-1 md:pl-6'>
                                <img src={project.iteration.filter.src} alt="iteration filter" className='w-full h-full mx-auto' />
                            </div>
                        </div>
                    </div>

                    <hr className='divider' />

                    <div className=''>
                        <h3 className='mb-10'>Final Deliverables</h3>

                        <div className='rounded-3xl overflow-hidden shadow-lg border border-gray-200 mb-8'>
                            <video
                                src={project.deliverable.final.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='flex gap-8 mb-8'>
                            <div className='flex-1 rounded-3xl pt-10 px-6 max-h-[550px] overflow-hidden bg-[#F3F1ED] border border-gray-200'>
                                <img src={project.deliverable.home.src} alt="home-page improved" />
                            </div>

                            <div className='flex-1 rounded-3xl px-14 max-h-[550px] overflow-hidden bg-[#F3F1ED] border border-gray-200'>
                                <img src={project.deliverable.about.src} alt="about-page improved" />
                            </div>
                        </div>

                        <div className='shadow-lg rounded-3xl overflow-hidden mb-8'>
                            <img src={project.deliverable.products.src} alt="shop and product detail page" />
                        </div>

                        <div className='rounded-3xl overflow-hidden shadow-lg border border-gray-200'>
                            <video
                                src={project.deliverable.pages.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>

                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="reflection" title="Reflection">
                    <p className='mb-5'>Participating in this 3-day hackathon was both a challenge and a great learning experience. Unlike other teams, we didn’t have a mentor, but we made it work by leaning on each other, asking for feedback from our teacher, and solving problems as a team.
                    </p>
                    <p className='mb-5'>
                        Along the way, we learned how to prioritize quickly, make fast design decisions, and stay aligned under pressure. We focused on clear navigation, strong visual hierarchy, and branding to create something that was not just functional but also visually appealing.
                    </p>
                    <p>
                        Looking back, we’re really proud of how much we accomplished in such a short time. With more time, we would have explored user testing and refined interactions further—but this experience pushed us to think critically, design with intention, and collaborate effectively under pressure.
                    </p>

                </ProjectSectionLayout>

            </ProjectLayout>

        </>
    )
}
