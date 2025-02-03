import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function FeatureCraftCard({ title, src, mediaType, skills, id, content, status }) {
    const [scale, setScale] = useState(1);

    const handleMouseMove = () => setScale(1.05);
    const handleMouseOut = () => setScale(1);

    return (
        <>
            <Link
                key={id}
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
                to={`/crafts/${id}`} className="relative font-bold leading-normal capitalize group">
                <div className='w-full flex flex-col p-3 mb-10 border-2 rounded-2xl overflow-hidden lg:flex-row lg:justify-center lg:items-center lg:gap-10 relative lg:mb-12 transition-all duration-400 lg:hover:border-[3px]'>

                    <div className="img-container overflow-hidden rounded-xl border border-black border-opacity-55 lg:basis-[60%]">
                        <div className="relative">
                            <img
                                src={src}
                                alt="project"
                                className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out z-0  overflow-hidden project-img"
                                loading="lazy"
                                style={{ transform: `scale(${scale})` }}
                            />
                        </div>

                    </div>

                    <div className=' p-4 lg:basis-[40%] lg:px-4'>
                        <div className='flex flex-col gap-4 '>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <div className="inline-block" key={index}>
                                        <span className="font-roundo tracking-[.8px] md:tracking-[1.5px] text-gray-800 bg-darker-bg px-3 py-1 rounded-full text-sm text-nowrap">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <h3 className='leading-normal'>
                                {title}
                            </h3>

                        </div>
                        <p className='tracking-normal normal-case'> {content}</p>

                        <button className="block tracking-wide font-roundo-medium mt-4 my-4 px-4 border-l border-orange group group-hover:text-orange">
                            Read Now <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-x-150 group-hover:translate-x-2 ">→</span>
                        </button>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default FeatureCraftCard
