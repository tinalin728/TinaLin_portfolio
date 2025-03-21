import { useState, useEffect } from "react";

const Sidebar = ({ sections }) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        currentSection = section.id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <div className="hidden md:block md:sticky md:top-10 md:h-fit md:py-24 md:pr-4 md:pb-[25rem]">
            <ul className="flex flex-col">
                {sections.map((section) => {
                    const isProblems = section.label.toLowerCase() === "problems";
                    const isSolutions = section.label.toLowerCase() === "solutions";

                    return (
                        <li key={section.id} className="flex items-center gap-[5px] sidebar">
                            {/* Bullet Point */}
                            <span
                                className={`w-4 h-[3px] transition-all duration-500 ${activeSection === section.id ? "bg-orange ml-2" : "bg-transparent"
                                    }`}
                            />

                            {/* Sidebar Link */}
                            <a
                                href={`#${section.id}`}
                                className={`sidebar normal-case text-[16px] tracking-wider text-dark-grey hover:text-black transition-all duration-300 text-nowrap 
                                ${activeSection === section.id
                                        ? isProblems
                                            ? "text-orange font-medium"
                                            : isSolutions
                                                ? "text-orange font-medium"
                                                : "text-orange font-medium"
                                        : isProblems
                                            ? "text-tiny text-red-500"
                                            : isSolutions
                                                ? "text-green-700"
                                                : "text-grey"
                                    }`}
                            >
                                {isProblems ? "Problems*" : isSolutions ? "Solutions*" : section.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;


