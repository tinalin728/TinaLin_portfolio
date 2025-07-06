import { useEffect, useState } from "react";
import ProjectCard from '../components/ProjectCard'
import { projectData } from "../data/projectData";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Project() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a small delay before showing the content
        const timer = setTimeout(() => setLoading(false), 400); // Adjust duration for natural effect
        return () => clearTimeout(timer);
    }, []);

    useGSAP(() => {
        if (loading) return;

        // Animate the title
        gsap.from("#project-title", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Animate the grid after title
        gsap.from("#project-grid", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
        });
    }, [loading]);

    return (
        loading ? <div className="h-screen"></div> : (
            <>
                <section
                    className='max-w-container pb-20 pt-30'>
                    <div id="project-title" className="flex gap-1 mb-5">
                        <h1 className=''> Crafts </h1>
                        <span>(5)</span>
                    </div>
                    <div id="project-grid" className='grid gap-6 md:grid-cols-2'>
                        {projectData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

            </>
        )
    )
}
