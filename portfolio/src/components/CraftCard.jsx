import { useState } from "react";
import { Link } from "react-router-dom";

function CraftCard({ project }) {
    const [scale, setScale] = useState(1);

    const handleMouseMove = () => setScale(1.05);
    const handleMouseOut = () => setScale(1);


    return (
        <>
            <Link
                to={`/crafts/${project.id}`}
                className="relative font-bold leading-normal capitalize w-full h-full box group overflow-hidden transition-all duration-300 rounded-2xl border-2 lg:hover:border-[3px]"
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
            >
                <div className="flex flex-col p-3">
                    <div className="overflow-hidden rounded-lg border border-black border-opacity-55">
                        <img
                            src={project.cover}
                            alt="project"
                            className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out z-0 overflow-hidden"
                            loading="lazy"
                            style={{ transform: `scale(${scale})` }}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, index) => (
                                <div className="inline-block" key={index}>
                                    <span className="font-roundo tracking-[.8px] md:tracking-[1.5px] text-gray-800 bg-darker-bg px-3 py-1 rounded-full text-sm text-nowrap">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-2">
                            <h4>{project.title}</h4>
                            {/* <p className="tracking-wide mb-2">{content}</p> */}
                        </div>
                        <div className="">
                            <button className="inline-block w-fit group tracking-wide font-roundo-medium px-4 border-l border-orange group-hover:text-orange ">
                                Read Now <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-x-150 group-hover:translate-x-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    );
}

export default CraftCard;
