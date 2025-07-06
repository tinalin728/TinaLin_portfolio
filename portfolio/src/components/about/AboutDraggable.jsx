import React from 'react'
import { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';
import {
    DndContext,
    useDraggable,
    useSensor,
    useSensors,
    PointerSensor,
} from '@dnd-kit/core';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import coffee from "../../../public/assets/about/coffee.jpg"
import jellycat from "../../../public/assets/about/jellycat.jpg"
import preschool from "../../../public/assets/about/preschool.jpg"
import capybara from "../../../public/assets/about/capybara.jpg"
import pokemon from "../../../public/assets/about/pokemon.jpg"
import eggy from "../../../public/assets/about/eggy.jpg"

import logo from '../../../public/assets/outline_logo.svg'


export default function AboutDraggable() {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 1025);
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const containerRef = useRef(null);
    const cardRefs = useRef([]);


    const aboutMe = [
        { img: jellycat, text: "Collecting JellyCat" },
        { img: coffee, text: "I love dark roast coffee. No cream, no sugar" },
        { img: pokemon, text: "Pokemon TCGP is my only game" },
        { img: eggy, text: "Hanging out with my niece" },
        { img: preschool, text: "I teach kids" },
        { img: capybara, text: "I love Capybara" },
    ];

    const customSpread = [
        { x: -500, y: -80 },
        { x: -300, y: 230 },
        { x: -50, y: -180 },
        { x: -10, y: 230 },
        { x: 500, y: -50 },
        { x: 500, y: 200 },
    ];


    const sensors = useSensors(useSensor(PointerSensor));

    const [positions, setPositions] = useState(() =>
        aboutMe.reduce((acc, _, i) => {
            const x = i === 0 ? 0 : i * -80;
            const y = [10, -200, 0, 180, -100][i % 5];
            acc[i] = { x, y };
            return acc;
        }, {}) // ← no `as Record<number, { x, y }>` needed
    );



    const DraggableCard = React.forwardRef(({ item, index, position, rotation }, ref) => {
        const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: index });

        const x = (position?.x || 0) + (transform?.x || 0);
        const y = (position?.y || 0) + (transform?.y || 0);

        return (
            <div
                ref={(el) => {
                    setNodeRef(el);
                    if (typeof ref === 'function') {
                        ref(el);
                    } else if (ref) {
                        ref.current = el;
                    }
                }}
                {...attributes}
                {...listeners}
                style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.3s ease',
                    zIndex: 10 - index,
                }}
                className="card w-[320px] p-3 bg-white shadow-md cursor-grab active:cursor-grabbing rounded-lg border border-gray-200"
            >
                <div className="h-[250px] overflow-hidden rounded-md">
                    <img
                        src={item.img}
                        alt="card visual"
                        className="object-cover h-full w-full"
                    />
                </div>
                <p className="mt-2 text-center leading-[1.5] whitespace-pre-line font-inter italic font-medium text-sm tracking-wide">
                    {item.text}
                </p>
            </div>
        );
    });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const cardWidth = 320;
        const cardHeight = 400;

        const centerX = (containerRect.width - cardWidth) / 2;
        const centerY = (containerRect.height - cardHeight) / 2;

        // Start positions stacked
        const stackedPositions = aboutMe.reduce((acc, _, i) => {
            acc[i] = {
                x: centerX,
                y: centerY,
            };
            return acc;
        }, {});

        setPositions(stackedPositions);
    }, []);

    useGSAP(() => {
        if (!isDesktop) return;

        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const cardWidth = 320;
        const cardHeight = 400;

        const centerX = (containerRect.width - cardWidth) / 2;
        const centerY = (containerRect.height - cardHeight) / 2;

        const newPositions = {};

        aboutMe.forEach((_, i) => {
            const offset = customSpread[i];
            const finalX = centerX + offset.x;
            const finalY = centerY + offset.y;

            newPositions[i] = { x: centerX, y: centerY };

            gsap.fromTo(
                newPositions[i],
                { x: centerX, y: centerY },
                {
                    x: finalX,
                    y: finalY,
                    duration: 1.5,
                    ease: 'power3.out',
                    onUpdate: () => {
                        setPositions((prev) => ({
                            ...prev,
                            [i]: { x: newPositions[i].x, y: newPositions[i].y },
                        }));
                    },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        toggleActions: 'restart none reverse none',
                        markers: false,
                    },
                }
            );

        });
    }, []);

    const handleDragEnd = ({ active, delta }) => {
        const draggedId = parseInt(active.id, 10);

        if (isDesktop) {
            setPositions((prev) => {
                const { x, y } = prev[draggedId] || { x: 0, y: 0 };
                return {
                    ...prev,
                    [draggedId]: {
                        x: x + delta.x,
                        y: y + delta.y,
                    },
                };
            });
            return;
        }

        const threshold = 120;
        if (Math.abs(delta.x) > threshold) {
            const card = cardRefs.current[draggedId];
            const direction = delta.x > 0 ? 1 : -1;

            gsap.to(card, {
                x: direction * 1000,
                rotate: direction * 45,
                duration: 0.6,
                ease: 'power2.in',
                onComplete: () => {
                    setPositions((prev) => ({
                        ...prev,
                        [draggedId]: {
                            x: -9999,
                            y: -9999,
                        },
                    }));
                },
            });
        } else {
            setPositions((prev) => {
                const { x, y } = prev[draggedId] || { x: 0, y: 0 };
                return {
                    ...prev,
                    [draggedId]: {
                        x: x + delta.x,
                        y: y + delta.y,
                    },
                };
            });
        }
    };



    return (
        <>
            <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
            >
                <section className="relative w-full h-screen overflow-visible py-20 max-w-container">
                    <div ref={containerRef} className="relative h-full w-full"

                    >
                        <h2 className="font-golften heading italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Pieces about me.</h2>
                        <p className='text-gray-400 font-canela italic absolute top-[42%] left-[70%] -translate-x-1/2 -translate-y-1/2 inline-block rotate-14 tracking-wider'>Drag and drop</p>
                        <div className="absolute inset-0 z-20">
                            {aboutMe.map((item, i) => {
                                const rotation = [-20, 10, 0, -15, -20, 2][i % 6];
                                const pos = positions[i];

                                return (
                                    <DraggableCard
                                        key={i}
                                        ref={(el) => (cardRefs.current[i] = el)}
                                        index={i}
                                        item={item}
                                        position={pos}
                                        rotation={rotation}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </DndContext>
        </>
    )
}
