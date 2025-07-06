import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`} className="md:pb-5 lg:pb-10">
            <div className="relative z-20 w-full h-full overflow-hidden group">
                <div className="overflow-hidden md:group-hover:rounded-3xl relative transition-all duration-300">
                    {/* Base image */}
                    <img
                        src={project.cover}
                        alt={project.title}
                        className="scale-112 w-full h-full object-cover transition-transform duration-500 ease-in-out md:md:group-hover:scale-100"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-md transition-opacity duration-500 ease-in-out opacity-0 md:group-hover:opacity-100 z-10" />

                    <div className="z-20 absolute inset-0 rounded-2xl transition-all duration-500 ease-in-out opacity-0 scale-[0.5] md:group-hover:opacity-100 md:group-hover:scale-[0.65]">
                        <img
                            src={project.coverHover}
                            alt={project.title}
                            className=" w-full h-full object-contain"
                        />
                    </div>
                </div>


                <div className='mt-3 flex flex-col lg:justify-between lg:items-center lg:flex-row'>
                    <h5>{project.title}</h5>
                    <p className='text-sm capitalize tracking-wide font-normal text-gray-500'>{project.category}</p>
                </div>
            </div>
        </Link>
    );
}
