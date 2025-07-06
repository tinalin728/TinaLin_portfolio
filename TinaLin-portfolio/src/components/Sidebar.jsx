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
                        currentSection = section.parentId || section.id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <div className="hidden lg:block lg:sticky lg:top-10 lg:w-fit  lg:h-fit lg:py-24 lg:pb-[25rem]">
            <ul className="flex flex-col gap-[10px]">
                {sections.map((section) => {
                    const isProblems = section.label.toLowerCase() === "problems";
                    const isSolutions = section.label.toLowerCase() === "solutions";
                    const isActive = activeSection === (section.parentId || section.id);
                    const isChild = section.parentId !== undefined;

                    return (
                        <li key={section.id} className={`flex items-center ${isChild ? "mt-[-10px]" : ""}`}
                        >
                            {/* Bullet Point */}
                            <span
                                className={`w-3 h-[3px] transition-all duration-500 ${activeSection === section.id ? "bg-gray-800 mr-[8px]" : "bg-transparent"
                                    }`}
                            />

                            {/* Sidebar Link */}
                            <a
                                href={`#${section.id}`}
                                className={`font-inter transition-all duration-300 text-base hover:text-black text-nowrap 
                                    ${isProblems
                                        ? "text-red-500 text-sm"
                                        : isSolutions
                                            ? "text-green-700 text-sm"
                                            : isActive
                                                ? "text-gray-800 font-medium"
                                                : "text-gray-500"
                                    }`}

                            >
                                {isProblems ? "↠ Challenges" : isSolutions ? "↠ Solutions" : section.label}
                            </a>

                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;


