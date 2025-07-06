import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectNav({ stickyNav }) {
    const [activeSection, setActiveSection] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const navRef = useRef(null);

    // Function to determine if the navigation should be visible
    const checkVisibility = () => {
        const firstSectionId = stickyNav[0]?.id;
        const firstSection = document.querySelector(`#${firstSectionId}`);
        if (firstSection) {
            const firstSectionTop = firstSection.getBoundingClientRect().top;
            return firstSectionTop <= 0;
        }
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            const visible = checkVisibility();
            setIsVisible(visible);

            // Update active section
            const sections = document.querySelectorAll("section");
            let currentSection = "";
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });
            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        // Run the scroll handler immediately on mount
        const initialVisibility = checkVisibility();
        setIsVisible(initialVisibility);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [stickyNav, activeSection]);


    useGSAP(() => {
        const items = navRef.current.querySelectorAll("a");

        if (isVisible && !hasAnimated) {
            // Trigger animation when navigation becomes visible
            gsap.fromTo(
                items,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.2,
                    duration: 0.5,
                    ease: "power2.out",
                    onStart: () => {
                        navRef.current.style.visibility = "visible";
                    },
                }
            );
            setHasAnimated(true); // Mark animation as played
        } else if (!isVisible && hasAnimated) {
            // Reverse animation when navigation becomes hidden
            gsap.to(items, {
                opacity: 0,
                x: -20,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    navRef.current.style.visibility = "hidden"; // Hide after animation
                },
            });
            setHasAnimated(false); // Allow reanimation if necessary
        }
    }, [isVisible, hasAnimated]);

    return (
        <div
            ref={navRef}
            style={{ visibility: hasAnimated ? "visible" : "hidden" }} // Prevent flicker
            className="hidden lg:fixed lg:top-1/2 lg:left-4 xl:left-10 lg:transform lg:-translate-y-1/2 lg:z-50 lg:flex lg:flex-col"
        >
            {stickyNav.map((nav) => (
                <a
                    data-cursor="sticky-nav"
                    key={nav.id}
                    href={`#${nav.id}`}
                    className={`group relative flex items-center w-full pr-10 tracking-wide ${activeSection === nav.id ? "text-orange" : "text-dark-grey"
                        }`}
                >
                    <span
                        className={`indicator w-8 h-1 ${activeSection === nav.id ? "bg-orange" : "bg-dark-grey"
                            } group-hover:w-12 transition-all duration-500`}
                    ></span>
                    <span
                        className={`ml-2 text-sm transition ${activeSection === nav.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                            }`}
                    >
                        {nav.label}
                    </span>
                </a>
            ))}
        </div>
    );
}

export default ProjectNav;
