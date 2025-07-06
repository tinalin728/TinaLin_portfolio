import React from 'react';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard';

export default function ProjectLayout({ sections, children, currentId, projectData }) {
    const currentIndex = projectData.findIndex(p => p.id === currentId);
    const total = projectData.length;

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const prev = projectData[prevIndex];
    const next = projectData[nextIndex];

    return (
        <>
            <div className='max-w-container relative md:flex md:justify-around md:gap-10 lg:gap-14 xl:gap-20 pb-14 lg:pb-20'>
                <Sidebar sections={sections} />

                <div className='flex-1'>
                    {children}
                </div>

            </div>
            <div className="pb-14 lg:pb-20">
                <div className='max-w-container'>
                    <div className='flex items-center justify-center gap-4 mb-10'>
                        <hr className='flex-1 w-full' />
                        <h2 className="flex-1 text-center font-golften heading">Other Crafts</h2>
                        <hr className='flex-1 w-full' />
                    </div>

                    <div className="grid md: grid-cols-2 gap-8 flex-wrap">
                        {prev && <ProjectCard project={prev} />}
                        {next && <ProjectCard project={next} />}
                    </div>
                </div>
            </div>
        </>
    );
}
