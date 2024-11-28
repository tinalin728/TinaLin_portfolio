import React, { useState, useEffect, useRef } from 'react'
import { ReactTyped } from "react-typed";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Matter from 'matter-js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import WindowWidth from '../hooks/WindowWidth';

import coffee from '../assets/images/footer/coffee.png'



function Footer() {


    const windowWidth = WindowWidth();

    const mouseConstraintRef = useRef(null)
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [constraints, setConstraints] = useState(null);
    const [scene, setScene] = useState(null);
    const initialDimensions = useRef({ width: 0, height: 0 });
    const [triggered, setTriggered] = useState(false);
    let pillsDropped = false;

    useEffect(() => {
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Events = Matter.Events,
            MouseConstraint = Matter.MouseConstraint,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies;


        // Create the engine
        const engine = Engine.create();
        const world = engine.world;
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Ensure canvas size is set to full screen
        const container = containerRef.current;
        const canvas = canvasRef.current;

        const { width, height } = container.getBoundingClientRect();

        // set inline style to override canvas' inline style
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const pixelRatio = window.devicePixelRatio
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;

        // Create a renderer
        const render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width: width,
                height: height,
                background: "transparent",
                wireframes: false,
                pixelRatio: 2
            },
        });

        setConstraints({ width, height });
        setScene(render);

        // Create ground and walls for collisions
        const ground = Bodies.rectangle((width / 2) + 160, height - 80, width + 320, 160, {
            isStatic: true,
            render: {
                fillStyle: "transparent",
            }
        });
        const wallLeft = Bodies.rectangle(-80, height / 2, 160, height, { isStatic: true });
        const wallRight = Bodies.rectangle(width + 80, height / 2, 160, height, { isStatic: true });
        const roof = Bodies.rectangle((width / 2) + 160, -80, width + 320, 160, { isStatic: true })

        Composite.add(world, [ground, wallLeft, wallRight, roof])

        // Create pills
        const textures = [
            '/public/assets/pills/french.svg',
            '/public/assets/pills/japanese.svg',
            '/public/assets/pills/korean.svg',
            '/public/assets/pills/Icelandic.svg',
            '/public/assets/pills/italian.svg',
            '/public/assets/pills/english.svg',
            '/public/assets/pills/chinese.svg',
            '/public/assets/pills/thai.svg',
            '/public/assets/pills/viet.svg',
            '/public/assets/pills/hindi.svg',
        ];


        const createPills = (textures, canvasWidth) => {
            const screenWidth = window.innerWidth;

            const pillWidth = screenWidth < 768 ? 60 : 100;
            const pillHeight = screenWidth < 768 ? 20 : 30;

            const spread = screenWidth < 768 ? 20 : 40;
            const startX = canvasWidth / 2;

            return textures.map((texture, index) => {
                const offset = (index - textures.length / 2) * spread;
                const x = startX + offset;
                const y = 60 - Math.abs(offset) * 0.3;;
                const width = 100; // Fixed width for pills
                const height = 30; // Fixed height for pills

                return Bodies.rectangle(x, y, width, height, {
                    restitution: 1,
                    friction: 0.2,
                    label: "pill",
                    render: {
                        sprite: {
                            texture: texture,
                            xScale: screenWidth < 768 ? .8 : 1,
                            yScale: screenWidth < 768 ? .8 : 1,
                        },
                    },
                });
            });
        };

        //Create pills using all textures
        const handlePillsDrop = () => {
            if (!pillsDropped) {
                const pillBodies = createPills(textures, width);
                pillBodies.forEach((pill) => Composite.add(world, pill));
                pillsDropped = true;
            }
        };


        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top+=80% bottom",
            onEnter: () => {
                if (!triggered) {
                    setTriggered(true);
                    handlePillsDrop();
                }
            },
            //markers: true
        });

        // add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: .2,
                render: {
                    visible: false
                }
            }
        });
        Composite.add(world, mouseConstraint)

        console.log("Bodies before cleanup:", Composite.allBodies(world).length);


        render.mouse = mouse
        //allows mouse to scroll while being on canvas
        const handleWheel = (event) => {
            event.preventDefault();
            if (!mouseConstraint.body) {
                window.scrollBy(0, event.deltaY);
            }
        };
        if (canvasRef.current) {
            canvasRef.current.addEventListener('wheel', handleWheel);
        }


        const handleResize = () => {
            const { width, height } = container.getBoundingClientRect();
            canvas.width = width * render.options.pixelRatio;
            canvas.height = height * render.options.pixelRatio;

            Render.setSize(render, width, height);
            // Remove non-static bodies (e.g., pills)
            Composite.allBodies(world).forEach((body) => {
                if (!body.isStatic) {
                    Composite.remove(world, body);
                }
            });
            // Recreate dynamic bodies (e.g., pills)
            const pillBodies = createPills(textures, width); // Recreate pills with updated dimensions
            pillBodies.forEach((pill) => Composite.add(world, pill));


            // Update walls and ground
            Matter.Body.setPosition(ground, { x: width / 2, y: height - 70 });
            Matter.Body.setVertices(ground, [
                { x: 0, y: height - 30 },
                { x: width, y: height - 30 },
                { x: width, y: height },
                { x: 0, y: height },
            ]);

            Matter.Body.setPosition(wallLeft, { x: -80, y: height / 2 });
            Matter.Body.setPosition(wallRight, { x: width + 80, y: height / 2 });
            Matter.Body.setPosition(roof, { x: width / 2, y: -80 });

        };

        window.addEventListener("resize", handleResize);
        handleResize();

        // Engine.run(engine);
        Render.run(render);

        // Cleanup on unmount
        return () => {
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
            //Composite.remove(world, body);

            //canvasRef.current.removeEventListener('wheel', handleWheel);
            ScrollTrigger.killAll();
        };
    }, [pillsDropped]);


    return (
        <footer ref={containerRef} className='relative h-full bg-charcoal overflow-hidden'>
            <div >
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                <div ref={wrapperRef} className='h-[90vh] relative max-w-container py-14 lg:py-[5rem]'>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <h2 className='font-craftwork font-extrabold text-light-yellow-bg text-shadow text-stroke text-center footer-header tracking-[5px]'>
                            Say Hello
                        </h2>

                        <p className='text-center font-roundo tracking-normal text-light-yellow-bg md:text-lg'> I would love to hear from you! <br />
                            Feel free to reach out to me about anything and let’s get creative together!</p>


                        <div className='z-10 flex flex-col gap-4 justify-center items-center md:flex-row'>
                            <div className='flex gap-4'>
                                <a href="https://github.com/tinalin728" className='inline-flex justify-center items-center h-[3.5rem] w-[3.5rem] border-2 border-light-yellow-bg  text-light-yellow-bg rounded-full shadow-white hover:shadow-white-hover hover:translate-x-[1%] hover:translate-y-[1%] transition-all duration-500 font-roundo-semibold md:h-[4rem] md:w-[4rem]'> <FontAwesomeIcon icon={faGithub} className='text-[28px] md:text-[30px]' /></a>

                                <a href="https://www.linkedin.com/in/tina-lin-000613b5/" className='inline-flex justify-center items-center h-[3.5rem] w-[3.5rem] border-2 border-light-yellow-bg rounded-full text-light-yellow-bg shadow-white hover:shadow-white-hover hover:translate-x-[1%] hover:translate-y-[1%] transition-all duration-500 font-roundo-semibold md:h-[4rem] md:w-[4rem]'> <FontAwesomeIcon icon={faLinkedinIn} className='text-[28px] md:text-[30px]' /></a>

                                <a href="https://www.linkedin.com/in/tina-lin-000613b5/" className='md:hidden inline-flex justify-center items-center h-[3.5rem] w-[3.5rem] border-2 border-light-yellow-bg rounded-full text-light-yellow-bg shadow-white hover:shadow-white-hover hover:translate-x-[.5%] hover:translate-y-[1%] transition-all duration-500 font-roundo-semibold md:h-[4rem] md:w-[4rem]'> <FontAwesomeIcon icon={faEnvelope} className='text-[28px] md:text-[30px]' /></a>
                            </div>

                            <a href="mailto:yuting.lin728@gmail.com" className='hidden md:inline-block px-5 py-3 border-2 border-white rounded-full text-white shadow-white text-base hover:shadow-white-hover hover:translate-x-[.5%] transition-all duration-500 font-roundo-semibold md:px-6 md:py-4'>
                                yuting.lin728@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-black bg-light-grey-bg'>
                <div className='max-w-container flex flex-col items-center justify-center md:flex-row md:justify-between py-2'>
                    <div className='flex items-center gap-4'>
                        <div><img src={coffee} alt="" width={40} /></div>
                        <span>Made with shots of expresso</span>
                    </div>
                    <div>
                        <span> 2024 Tina Lin</span>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
