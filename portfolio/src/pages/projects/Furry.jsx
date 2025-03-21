import React from 'react'
import ProjectBanner from '../../components/ProjectBanner'
import { projectData } from '../../data/projectData'
import BackToTop from '../../components/BackToTop';
import Sidebar from '../../components/Sidebar';
import PrototypeCta from '../../components/PrototypeCta';

// images
import branding from '../../../public/assets/furry/branding.png'
import action from '../../../public/assets/furry/action.png'
import mess from '../../../public/assets/furry/mess.png'
import inconsistent from '../../../public/assets/furry/inconsistent.png'
import home from '../../../public/assets/furry/home.jpg'
import competitor from '../../../public/assets/furry/competitor.png'
import moodboard from '../../../public/assets/furry/moodboard.webp'
import system from '../../../public/assets/furry/system.jpg'
import sitemap from '../../../public/assets/furry/sitemap.png'
import lowfi from '../../../public/assets/furry/low-fi.png'
import soya from '../../../public/assets/furry/soya.png'
import redesign from '../../../public/assets/furry/redesign.png'
import redesign2 from '../../../public/assets/furry/redesign2.png'
import intro from '../../../public/assets/furry/intro.png'


const project = projectData[2]


export default function Furry() {

    const sections = [
        { id: "brief", label: "Client Brief" },
        { id: "research", label: "Research" },
        { id: "design", label: "Design" },
        { id: "delivery", label: "Final Delivery" },
        { id: "reflection", label: "Reflection" },
    ];

    const teamMembers = [
        { name: "Suin", link: "https://www.linkedin.com/in/suink/" },
        { name: "Kritika", link: "https://www.linkedin.com/in/kritikabhunwal/" },
        { name: "Yungi", link: "https://www.linkedin.com/in/yungi-cho-717439234/" }
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
                                    <h4 className='mb-10 text-dark font-patrick italic tracking-wider'> <span> <a
                                        href="https://www.furrytalespet.ca/" target="_blank"
                                        rel="noopener noreferrer"
                                        className='normal-case underline underline-offset-2 font-patrick tracking-wider text-md md:text-lg text-blue-gray-500'>Furrytales Pet</a>
                                    </span> is a Canadian small business that specializes in handcrafted dehydrated and freshly baked pet treats.
                                    </h4>
                                    <div className='mb-10'>
                                        <p>
                                            This is my first Hackathon experience. I teamed up with{" "}
                                            {teamMembers.map((member, index) => (
                                                <span key={index} className='font-normal'>
                                                    <a
                                                        href={member.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='normal-case tracking-normal font-normal'
                                                    >
                                                        {member.name}
                                                    </a>
                                                    {index < teamMembers.length - 2 ? ", " : ""}
                                                    {index === teamMembers.length - 2 ? ", and " : ""}
                                                </span>
                                            ))}
                                            . It was an exciting challenge that pushed us to think fast, collaborate effectively, and create a solid redesign in just three days!
                                        </p>

                                    </div>
                                    <p className='uppercase tracking-wider underline underline-offset-[4px] font-roundo-medium text-orange'>The Challenge</p>

                                    <p className='mb-10'>
                                        Redesign a functional and visually engaging website in just 72 hours, based on the client’s brief and business goals.
                                    </p>

                                    <PrototypeCta inPageLink="View Prototype" scrollToId='prototype' />
                                </div>

                                <div className='flex-1 w-full h-full mx-auto'>
                                    <div className='w-full rounded-2xl overflow-hidden border border-light-grey/20 p-2 mx-auto'>
                                        <img
                                            src={intro}
                                            alt="furrytales"
                                            loading='lazy'
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='brief' className='pb-0'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Client Brief</h2>
                            <div className='content-gap'>
                                <h3>Product Goals:</h3>
                                <ul className='list-disc'>
                                    <li>⤏ Focus on the pages: Our story/mission, Contact Us, FAQs</li>
                                    <li>⤏ Improve the Pop up designs (Email subscription/Discount Pop Ups)</li>
                                    <li>⤏ Site organization: categorize different products clearly</li>
                                    <li>⤏ A product review section, or a page with pictures of our ambassadors and their testimonies.</li>
                                    <li>⤏ Easy to navigate</li>
                                    <li>⤏ Warm and friendly, wants a stronger brand identity</li>
                                </ul>

                            </div>
                        </div>
                    </section>
                    <section id='research' className='pb-0'>
                        <div>
                            <div className='section-gap border-t-2 border-light-grey border-dashed'>
                                <h2>Research & Strategy</h2>
                                <div className='content-gap'>
                                    <h3> Defining Current UX Issues</h3>
                                    <p> Before redesigning the website, we conducted an in-depth analysis of its existing structure to understand the client’s strengths and areas for improvement. We identified 4 key pain points:</p>

                                    <div className='mt-10 flex flex-col lg:flex-row gap-10'>
                                        <div className='flex-1'>
                                            <div className='flex flex-col gap-4'>
                                                <div className="bg-white/70 p-2 rounded-2xl shadow-md flex-1" >
                                                    <div className='bg-white p-4 border border-gray-400 rounded-xl h-full'>
                                                        <img src={branding} alt="icon" width={50} />
                                                        <p className="mt-2 text-[20px] font-roundo-medium text-orange border-b border-dashed border-gray-400 pb-2">
                                                            Lack of brand identity
                                                        </p>
                                                        <p className="mt-4">
                                                            The site lacks a strong brand presence. Inconsistent design makes it forgettable.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-white/70 p-2 rounded-2xl shadow-md flex-1" >
                                                    <div className='bg-white p-4 border border-gray-400 rounded-xl'>
                                                        <img src={mess} alt="icon" width={50} />
                                                        <p className="mt-2 text-[20px] font-roundo-medium text-orange border-b border-dashed border-gray-400 pb-2">
                                                            Disorganized Information Architecture
                                                        </p>
                                                        <p className="mt-4">
                                                            The navigation structure and product categories are confusing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-4 mt-6'>
                                                <div className="flex-1 bg-white/70 p-2 rounded-2xl shadow-md h-full" >
                                                    <div className='bg-white p-4 border border-gray-400 rounded-xl'>
                                                        <img src={action} alt="icon" width={50} />
                                                        <p className="mt-2 text-[20px] font-roundo-medium text-orange border-b border-dashed border-gray-400 pb-2">
                                                            Weak Visual Hierarchy & Call-to-Action Placement
                                                        </p>
                                                        <p className="mt-4">
                                                            Important actions blend in. CTAs and key info don’t stand out enough.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex-1 bg-white/70 p-2 rounded-2xl shadow-md h-full" >
                                                    <div className='bg-white p-4 border border-gray-400 rounded-xl'>
                                                        <img src={inconsistent} alt="icon" width={50} />
                                                        <p className="mt-2 text-[20px] font-roundo-medium text-orange border-b border-dashed border-gray-400 pb-2">
                                                            Inconsistent Experience Across Pages
                                                        </p>
                                                        <p className="mt-4">
                                                            Layout and navigation change across pages, making the site feel disconnected.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex-1 rounded-2xl overflow-hidden bg-white/60 p-2 shadow-md'>
                                            <img src={home} alt="homepage" className='border border-light-grey/50 rounded-xl h-full w-full object-cover' />
                                        </div>
                                    </div>
                                </div>

                                <div className='content-gap flex flex-col gap-10 lg:flex-row'>
                                    <div className='lg:basis-1/3'>
                                        <h3> Competitor Analysis & Moodboard</h3>
                                        <p>
                                            We checked out the competitors our client likes and created a moodboard for inspiration. We also reviewed the company’s social media to better understand the client’s preferences.
                                        </p>
                                    </div>

                                    <div className='lg:basis-2/3'>

                                        <div className='rounded-2xl overflow-hidden bg-white/60 p-2 shadow-md'>
                                            <img src={moodboard} alt="Design system" className=' border border-light-grey/50 rounded-xl' />
                                        </div>
                                        <div className='mt-10 rounded-2xl overflow-hidden bg-white/60 p-2 shadow-md'>
                                            <img src={competitor} alt="competitor analysis" className=' border border-light-grey/50 rounded-xl' />
                                        </div>
                                    </div>
                                </div>
                                <div className='content-gap'>
                                    <h3 className='md:mb-4'>Client Meeting & Redesign Direction</h3>
                                    <div className='flex flex-col gap-10 lg:flex-row-reverse'>
                                        <div className='basis-[55%]'>
                                            <p>
                                                By the end of Day 1, we spoke directly with the client and learned that she was open to improvements that could boost brand awareness. She also preferred an
                                                <span className='text-orange'> organic, friendly, and warm aesthetic </span>, which shaped our design and branding choices moving forward.
                                            </p>
                                            <p className='mt-4'>Since Soya, the client’s pet, is at the heart of the brand, we decided to weave her personality into the website through warm, playful visuals and friendly, engaging language. This makes the brand feel <span>more personal, inviting, and memorable—building stronger connections with users</span>. We prioritized key pages for the redesign:</p>

                                            <ul className='mt-4'>
                                                <li><span>1️⃣ Homepage  </span> – Establishes brand identity and directs users to key actions.</li>
                                                <li><span>2️⃣ About Page </span> – Strengthens storytelling and builds trust.</li>
                                                <li><span>3️⃣ Product Page  </span> –  Improves organization for easier product discovery.</li>
                                                <li><span>4️⃣ Contact Pages  </span> – Ensures accessibility and clear communication.</li>
                                                <li><span>5️⃣ FAQs  </span> –  Provides structured and easy-to-find answers for users. Combine with shipping info.</li>
                                            </ul>
                                        </div>

                                        <div className='basis-[45%] p-2 bg-white/60 rounded-2xl h-fit shadow-md'>
                                            <div className='rounded-xl border border-light-grey/50 bg-white p-6'>
                                                <img src={soya} alt="soya" />
                                            </div>
                                            <p className='text-center font-patrick text-dark-grey'> Soya as brand identity </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section id='design'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Design</h2>
                            <div className='content-gap'>
                                <h3>Information Architecture</h3>
                                <p className=''>
                                    Our redesigned sitemap organizes key pages—Home, Our Story, Product Categories, FAQs, and Contact Us—into a clear, intuitive structure. This improves navigation, making it easier for users to find what they need while addressing previous usability issues.
                                </p>

                                <div className='mt-10'>
                                    <img src={sitemap} alt="sitemap" />
                                </div>
                            </div>
                            <div className='content-gap'>
                                <h3>Low-fi Wireframes</h3>
                                <p className=''>
                                    We created low-fidelity wireframes to map out content structure, layout, and user flow before refining the visual design. These wireframes focus on <span>clear navigation, better product organization, and improved usability </span>  across key pages like <span>Home, Our Story, Product Categories, FAQs, and Contact Us. </span>

                                    This step allowed us to validate the structure early and ensure a seamless user experience before moving into high-fidelity designs.
                                </p>

                                <div className='mt-10'>
                                    <img src={lowfi} alt="low-fi wireframes" />
                                </div>
                            </div>

                            <div className='content-gap'>
                                <div className='flex flex-col gap-10 lg:flex-row'>
                                    <div className='basis-1/3'>
                                        <h3>Design System</h3>
                                        <p >
                                            We then finalized the colors and typography, creating a design system to ensure consistency, clarity, and a cohesive look across all UI elements. </p>

                                        <p className='mt-5'>
                                            Brown and cream bring a natural, handmade feel, pink accents add a playful touch, and green and yellow introduce freshness—coming together to craft a warm and inviting visual identity.
                                        </p>

                                    </div>

                                    <div className='basis-2/3 rounded-2xl overflow-hidden bg-white/60 p-2 shadow-md'>
                                        <img src={system} alt="Design system" className=' border border-light-grey/50 rounded-xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='delivery'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Final Delivery</h2>

                            <div className='content-gap'>
                                <h3>Iteration & Refinement</h3>
                                <p> Unlike other contestants, our group was unfortunate not to be paired with a mentor. Therefore, instead, we sought guidance from our instructors, using their feedback to refine our approach and push our design further. </p>

                                <h4 className='text-[24px] font-patrick mt-6 text-orange'>Key Insights:</h4>
                                <ul >
                                    <li><span>🐾 Product filters</span>: Filter types could be clearer </li>
                                    <li><span>🐾 Line Height</span>: Header's line height could be closer</li>
                                    <li><span>🐾 Icons on homepage</span>: Icons should be more cohesive</li>
                                </ul>
                            </div>

                            <div className='content-gap'>
                                <h3>Final Handoff</h3>

                                <div className=''>
                                    <div className=''>
                                        <img src={redesign} alt="redesign" />
                                    </div>
                                    <div className='mt-10'>
                                        <img src={redesign2} alt="redesign" />
                                    </div>
                                </div>
                            </div>

                            <div id='prototype' className='content-gap'>
                                <h3>🐾 Try it yourself! </h3>

                                <iframe
                                    src="https://embed.figma.com/proto/0XZFxXzgway1yDoCsUPLXT/FurryTales-Pet?page-id=0%3A1&node-id=122-2783&viewport=471%2C-506%2C0.31&scaling=scale-down&content-scaling=fixed&starting-point-node-id=122%3A2783&embed-host=share" allowfullscreen
                                    className='w-full min-h-[400px] md:min-h-[750px] lg:min-h-[900px]'
                                ></iframe>

                            </div>
                        </div>
                    </section>

                    <section id='reflection'>
                        <div className='section-gap border-t-2 border-light-grey border-dashed'>
                            <h2>Reflection</h2>
                            <div className='content-gap'>
                                <p>Participating in this 3-day hackathon was both a challenge and a valuable learning experience. Unlike other teams, we didn’t have a mentor, but we adapted by seeking feedback from our teacher and relying on our own problem-solving skills.
                                </p>
                                <p className='mt-4'>Through this process, we learned to prioritize efficiently, make quick design decisions, and collaborate under time constraints. Our focus on clear navigation, strong visual hierarchy, and brand identity shaped a solution that felt both functional and visually engaging.
                                </p>
                                <p className='mt-4'>Looking back, we’re proud of what we accomplished in such a short time. Given more time, we would iterate further on user testing and interactions, but this experience reinforced our ability to think critically, design with purpose, and work as a team under pressure. </p>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}
