import { useState } from "react";
import { Link } from "react-router-dom";

function CraftCard({ title, src, mediaType, skills, id, content, status }) {
    const [scale, setScale] = useState(1);

    const handleMouseMove = () => setScale(1.1);
    const handleMouseOut = () => setScale(1);

    const isLinked = status === "complete"; // Check if the project is complete

    return (
        <>
            {isLinked ? (
                // Clickable card for complete projects
                <Link
                    to={`/crafts/${id}`}
                    className="relative font-bold leading-normal capitalize w-full h-full box group overflow-hidden group transition-all duration-300 rounded-2xl border-2 shadow-md lg:hover:border-4"
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                >
                    <div className="flex flex-col p-3">
                        {/* Media Section */}
                        <div className="overflow-hidden rounded-lg border border-black border-opacity-55">
                            {mediaType === "video" ? (
                                <video
                                    src={src}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out z-0 rounded-lg overflow-hidden"
                                    style={{ transform: `scale(${scale})` }}
                                />
                            ) : (
                                <img
                                    src={src}
                                    alt="project"
                                    className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out z-0 overflow-hidden"
                                    loading="lazy"
                                    style={{ transform: `scale(${scale})` }}
                                />
                            )}

                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <div className="inline-block" key={index}>
                                        <span className="font-roundo tracking-[.8px] md:tracking-[1.5px] text-gray-800 bg-darker-bg px-3 py-1 rounded-full text-sm text-nowrap">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h3 className="transition-all duration-300 ease-in text-brown-800">{title}</h3>
                                {/* <p className="opacity-0 tracking-wide group-hover:opacity-100">{content}</p> */}
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                // Non-clickable card for incomplete projects
                <div
                    className="relative font-bold leading-normal capitalize w-full h-full box group border-2 rounded-xl bg-light-yellow-bg overflow-hidden cursor-not-allowed "
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}
                >
                    <div className="absolute z-10 bg-orange text-white px-6 pt-2 top-20 rotate-90 -right-10 rounded-lg"> <h2>Coming soon</h2> </div>
                    <div className="flex flex-col p-[1rem]">
                        {/* Media Section with Grayscale */}
                        <div className="overflow-hidden border-2 rounded-md">
                            {mediaType === "video" ? (
                                <video
                                    src={src}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out grayscale"
                                    style={{ transform: `scale(${scale})` }}
                                />
                            ) : (
                                <div className="relative">
                                    <img
                                        src={src}
                                        alt="project"
                                        className="relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out grayscale"
                                        loading="lazy"
                                        style={{ transform: `scale(${scale})` }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <div className="inline-block" key={index}>
                                        <span className="font-roundo tracking-[.8px] md:tracking-[1.5px] text-gray-800 bg-darker-bg px-3 py-1 rounded-full text-sm text-nowrap">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h3 className="transition-all duration-300 ease-in">{title}</h3>
                                {/* <p className="tracking-wide">{content}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CraftCard;
