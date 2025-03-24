import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    const [scale, setScale] = useState(1);

    const handleMouseMove = () => setScale(1.05);
    const handleMouseOut = () => setScale(1);


    return (
        <div className="rounded-2xl border-2 h-full w-full p-4 transition duration-500 group  md:hover:shadow-card md:hover:-translate-y-1">
            <Link
                aria-label={`Go to ${project.id}`}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
                to={`/projects/${project.id}`}>
                <div className="border border-default/20 relative overflow-hidden w-full rounded-xl">
                    <div className="h-[300px] w-full md:h-full">
                        <img
                            src={project.cover}
                            alt={project.title}
                            className="w-full object-cover h-full rounded-xl transition duration-500 ease-in-out overflow-hidden"
                            style={{ transform: `scale(${scale})` }}
                            loading="lazy"
                            fetchpriority="high"
                        />

                    </div>
                    <div className="bg-default/60 backdrop-blur-md absolute left-0 w-full bottom-[-20%] md:group-hover:bottom-0 transition-all ease-in-out duration-500 md:py-2">
                        <p className="text-center text-white uppercase"> Read Now</p>
                    </div>

                </div>

                <div className="">
                    <div className="flex flex-wrap gap-2 mt-3 md:mt-5">
                        {project.skills.map((skill, index) => (
                            <div className="inline-block" key={index}>
                                <span className="text-base px-3 py-[2px] bg-darker-bg text-brown rounded-lg font-patrick tracking-[1.5px] text-nowrap font-bold normal-case">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                    <h3 className="mt-4 mb-6 capitalize text-md md:text-lg font-roundo-medium">{project.title}</h3>
                </div>
            </Link>
        </div>
    );
}
