import React from 'react';

export default function ProjectBanner({ project }) {
    return (
        <>
            <section className='max-w-container py-[3rem] z-10 bg-primary relative'>
                <div className='relative h-full flex flex-col items-center justify-between gap-8 md:flex-row'>
                    <div className='flex-1'>
                        <h4 className='text-orange font-patrick text-center mb-2 md:text-left tracking-wide'>{project.banner.subHeader}</h4>
                        <h1 className='text-wrap text-center md:text-left capitalize'>{project.banner.header}</h1>
                    </div>

                    <div className='flex-1'>
                        <img
                            src={project.banner.image.src}
                            alt={project.banner.image.altText}
                            loading="lazy"
                            className={`${project.banner.image.classes}`}
                        />
                    </div>
                </div>
            </section>
            <section id="overview" className='pt-4 max-w-container z-10 relative bg-primary'>
                <div className='border-2 bg-darker-bg rounded-2xl py-14 px-8 lg:py-20 lg:px-9' >
                    <div className='flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-between'>
                        <div className='flex-1'>
                            <p className='font-roundo-medium text-orange uppercase tracking-wider underline underline-offset-[4px]'>Role</p>
                            <ul>
                                {project.overview.role.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>
                        <div className='flex-1'>
                            <p className='font-roundo-medium text-orange uppercase tracking-wider underline underline-offset-[4px]'>Project Timeline</p>
                            <p>{project.overview.duration}</p>
                        </div>
                        <div className='flex-1'>
                            <p className='font-roundo-medium text-orange uppercase tracking-wider underline underline-offset-[4px]'>{project.overview.user.title}</p>
                            <p>{project.overview.user.content}</p>
                        </div>
                        <div className='flex-1'>
                            <p className='font-roundo-medium text-orange uppercase tracking-wider underline underline-offset-[4px]'>{project.overview.process.header}</p>
                            <p>{project.overview.process.content}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
