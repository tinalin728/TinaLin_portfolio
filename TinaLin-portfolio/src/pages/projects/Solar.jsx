import { useState } from 'react'
import { projectData } from '../../data/projectData'
import ProjectIntro from '../../components/projects/ProjectIntro';
import ProjectLayout from '../../components/projects/ProjectLayout';
import ProjectSectionLayout from '../../components/projects/ProjectSectionLayout';

import experience from '../../../public/assets/solar/experience.mp4'
import { Globe } from 'lucide-react';

const project = projectData[2]

export default function Solar() {
    const sections = [
        { id: "overview", label: "Overview" },
        { id: "design", label: "Design & Planning" },
        { id: "development", label: "Development" },
        { id: "reflection", label: "Reflection" },
    ];

    return (
        <>
            <ProjectIntro
                title={project.intro.title}
                subtitle={project.intro.subtitle}
                timeline={project.intro.timeline}
                role={project.intro.role}
                process={project.intro.process}
                src={project.intro.src}
                buttonLink="https://solarsystem.tinalin.ca/"
                button="View Website"
                icon={Globe}
                iconSize='20'
            />
            <ProjectLayout sections={sections} currentId={project.id} projectData={projectData} >
                <ProjectSectionLayout id="overview" title="Overview">
                    <div className='flex flex-col md:flex-row gap-14 pb-14 lg:pb-10'>
                        <div className='basis-[60%]'>
                            <p className='subtitle-sm'> The Challenge </p>
                            <h3 className='mb-5'>Make learning about space feel exciting, not textbook-boring.
                            </h3>

                            <p >

                                I set out to bring the solar system to life through interactive 3D visuals and smooth transitions, <span className='font-medium'> not just for show, but to create an engaging tool for educational purposes</span>. Whether it’s for curious students or casual learners, I wanted users to explore space in a way that feels hands-on, intuitive, and memorable — more like a space journey than a static webpage.
                            </p>
                        </div>
                        <div className='basis-[40%]'>
                            <img src={project.overview.src} alt="planet" />
                        </div>
                    </div>

                    <hr className='divider' />

                    <div id="solution" >
                        <div className='lg:max-w-[66%] mb-10'>
                            <p className='subtitle-sm'> The solution</p>
                            <h3 className='mb-5'>Web experience more like a space journey than a static webpage.
                            </h3>
                        </div>

                        <div className=' rounded-3xl overflow-hidden shadow-md'>
                            <video
                                src={experience}
                                autoPlay
                                loop
                                playsInline
                                muted
                                className='w-full h-full'
                            />
                        </div>
                    </div>

                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="design" title="Design & Planning">
                    <div className='flex flex-col lg:flex-row lg:gap-10'>
                        <div className='flex-1'>
                            <p className='subtitle-sm'></p>
                            <h3 className='mb-5'> Visual Exploration & Concept</h3>

                            <p className='mb-5'>
                                Inspired by space documentaries and sci-fi interfaces, I envisioned the project as more than just a scroll page. I wanted it to feel like a space expedition. I drew inspiration from spaceship dashboards and HUD (heads-up display) systems to guide the UI direction. The goal was to create a visually engaging, educational experience that felt immersive yet intuitive.
                            </p>
                        </div>

                        <div className='flex-1 border border-gray-300 shadow-md p-2 rounded-3xl w-fit'>
                            <img src={project.inspo.src} alt="inspiration" className='rounded-2xl w-full h-full object-cover' />
                        </div>
                    </div>

                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="development" title="Development">
                    <div className='flex flex-col lg:flex-row-reverse lg:items-center lg:gap-10 pb-14 lg:pb-20'>
                        <div className='flex-1'>
                            <h3 className='mb-5'>Scroll-driven animations with GSAP</h3>

                            <p className='mb-5'>
                                I used GSAP for scroll-based animations. Each planet scales up and animates into focus as the user scrolls, creating a smooth transition that mimics space travel. Modals provide structured information and fun facts, and scroll behavior is carefully managed to pause during modal interaction.
                            </p>
                        </div>

                        <div className='flex-1 border border-gray-300 shadow-md p-2 rounded-3xl w-fit'>
                            <video
                                src={project.scroll.src}
                                autoPlay
                                loop
                                playsInline
                                muted
                                className='rounded-2xl w-full h-full'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-10 pb-14 lg:pb-20'>
                        <div className='flex-1'>
                            <h3 className='mb-5'>3D planet models with model viewer</h3>

                            <p className='mb-5'>
                                I used  <code>{`<model-viewer>`}</code>  to display realistic 3D models of each planet. This allowed users to freely rotate and zoom in on planets while maintaining performance and accessibility.
                            </p>
                        </div>

                        <div className='flex-1 border border-gray-300 shadow-md p-2 rounded-3xl w-fit'>
                            <video
                                src={project.model.src}
                                autoPlay
                                loop
                                playsInline
                                muted
                                className='rounded-2xl w-full h-full'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row-reverse lg:items-center lg:gap-10 '>
                        <div className='flex-1'>
                            <h3 className='mb-5'>Immersive Space Experience</h3>

                            <p className="mb-5">
                                I implemented a real-time starfield using the HTML5 <code>{`<canvas>`}</code> element.
                                Thousands of stars animate smoothly across the screen using <code>requestAnimationFrame</code>, giving users the feeling of traveling through space.
                            </p>
                            <p className="mb-5">
                                I also added a sound toggle that plays ambient space audio. It’s subtle but impactful, enhancing the atmosphere without distracting from the visuals.
                                The toggle is placed within the HUD, allowing users to turn the sound on or off at any time.
                            </p>
                        </div>

                        <div className='flex-1 border border-gray-300 shadow-md p-2 rounded-3xl w-fit'>
                            <video
                                src={project.sound.src}
                                autoPlay
                                loop
                                playsInline
                                muted
                                className='rounded-2xl w-full h-full'
                            />
                        </div>
                    </div>
                </ProjectSectionLayout>

                <hr />

                <ProjectSectionLayout id="reflection" title="Reflection">
                    <h3 className='mb-5'>Designing with Joy!</h3>
                    <p className='mb-2'> This project was one of the most fun and creatively fulfilling experiences I’ve had. I really enjoyed exploring UI design through a unique lens, blending space themes with interactive visuals. It pushed me to think beyond functionality and focus on crafting an experience that feels immersive and educational. From experimenting with scroll-based transitions to fine-tuning sound feedback, every detail was a chance to elevate the user journey.
                    </p>

                </ProjectSectionLayout>

            </ProjectLayout>
        </>
    )
}
