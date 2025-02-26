import React, { useState, useEffect, useRef } from 'react'
import SocialIcon from '../components/buttons/SocialIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Matter from 'matter-js'
import { ReactLenis, useLenis } from 'lenis/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import WindowWidth from '../hooks/WindowWidth';

import coffee from '../../public/assets/icons/coffee-white.png'
import { useGSAP } from '@gsap/react';

import mail from "../../public/assets/icons/mail.svg"
import github from "../../public/assets/icons/github.svg"
import linkedin from "../../public/assets/icons/linkedin.svg"

function Footer() {

    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [constraints, setConstraints] = useState(null);
    const [scene, setScene] = useState(null);
    const initialDimensions = useRef({ width: 0, height: 0 });
    const [triggered, setTriggered] = useState(false);
    const [pillsDropped, setPillsDropped] = useState(false);
    const scrollTriggerRef = useRef(null);

    // const engineRef = useRef(null); // Store Matter.js engine persistently



    // useEffect(() => {
    //     const Engine = Matter.Engine,
    //         Render = Matter.Render,
    //         Runner = Matter.Runner,
    //         MouseConstraint = Matter.MouseConstraint,
    //         Composite = Matter.Composite,
    //         Mouse = Matter.Mouse,
    //         Bodies = Matter.Bodies;

    //     // Create the engine
    //     const engine = Engine.create();
    //     // engine.timing.timeScale = 0.9;
    //     const world = engine.world;
    //     const runner = Runner.create();
    //     Runner.run(runner, engine);


    //     // Ensure canvas size is set to full screen
    //     const container = wrapperRef.current;
    //     const canvas = canvasRef.current;

    //     canvas.style.opacity = "0.7";

    //     const { width, height } = container.getBoundingClientRect();

    //     // set inline style to override canvas' inline style
    //     canvas.style.width = `${width}px`;
    //     canvas.style.height = `${height}px`;
    //     const pixelRatio = window.devicePixelRatio
    //     canvas.width = width * pixelRatio;
    //     canvas.height = height * pixelRatio;


    //     // Create a renderer
    //     const render = Render.create({
    //         canvas: canvas,
    //         engine: engine,
    //         options: {
    //             width: width,
    //             height: height,
    //             background: "transparent",
    //             wireframes: false,
    //             pixelRatio: 2
    //         },
    //     });

    //     setConstraints({ width, height });
    //     setScene(render);

    //     // Create ground and walls for collisions
    //     const ground = Bodies.rectangle((width / 2) + 160, height - 5, width + 320, 160, {
    //         isStatic: true,
    //         render: {
    //             fillStyle: "transparent",
    //         }
    //     });
    //     const wallLeft = Bodies.rectangle(-80, height / 2, 60, height, { isStatic: true });
    //     const wallRight = Bodies.rectangle(width + 80, height / 2, 160, height, { isStatic: true });
    //     const roof = Bodies.rectangle((width / 2) + 160, -80, width + 320, 160, { isStatic: true })

    //     Composite.add(world, [ground, wallLeft, wallRight, roof])


    //     const textures = [
    //         { texture: "/assets/pills/cup.svg", baseWidth: 200, baseHeight: 220, scale: 1.3 },
    //         // { texture: "/assets/pills/tele.svg", baseWidth: 220, baseHeight: 160, scale: 1.1 },
    //         { texture: "/assets/pills/croissant.svg", baseWidth: 120, baseHeight: 120, scale: 1 },
    //         { texture: "/assets/pills/paintbrush.svg", baseWidth: 100, baseHeight: 100, scale: 1 },
    //         { texture: "/assets/pills/react2.svg", baseWidth: 100, baseHeight: 100, scale: 1 },
    //         { texture: "/assets/pills/world.svg", baseWidth: 200, baseHeight: 180, scale: 1.4 }
    //     ];


    //     const texturePaths = Object.keys(textures); // Extract file paths
    //     // console.log("Extracted Texture Paths:", texturePaths);

    //     const preloadImages = (textures, callback) => {
    //         let loadedCount = 0;
    //         const total = textures.length;
    //         const loadedTextures = [];

    //         if (!Array.isArray(textures) || total === 0) {
    //             console.error("No textures to preload.");
    //             callback([]);
    //             return;
    //         }

    //         // console.log("🔄 Preloading Images:", textures.map(t => t.texture)); // Debugging

    //         textures.forEach((textureObj) => {
    //             const img = new Image();
    //             img.src = textureObj.texture;

    //             img.onload = () => {
    //                 // console.log(" Loaded Image:", textureObj.texture, "Size:", img.naturalWidth, img.naturalHeight);
    //                 loadedTextures.push({
    //                     ...textureObj, // Keep all original properties

    //                 });

    //                 loadedCount++;
    //                 if (loadedCount === total) {
    //                     // console.log("All images preloaded:", loadedTextures);
    //                     callback(loadedTextures);
    //                 }
    //             };

    //             img.onerror = (error) => {
    //                 console.error(` Failed to load image: ${textureObj.texture}`, error);
    //                 loadedCount++;
    //                 if (loadedCount === total) {
    //                     callback(loadedTextures);
    //                 }
    //             };
    //         });
    //     };

    //     // let startPositions = [];

    //     const createPills = (textures, canvasWidth) => {
    //         const screenWidth = window.innerWidth;
    //         const startX = 10;
    //         const spread = 100;
    //         const canvasHeight = containerRef.current.getBoundingClientRect().height;
    //         const centerY = canvasHeight / 2;

    //         // Custom starting positions (relative to screen size)
    //         const startPositions = [
    //             { x: canvasWidth * 0.1, y: centerY }, // Coffee
    //             { x: canvasWidth * 0.4, y: centerY + 20 }, // Phone
    //             { x: canvasWidth * 0.20, y: centerY - 10 }, // Croissant
    //             { x: canvasWidth * 0.7, y: centerY }, // Paintbrush
    //             { x: canvasWidth * 0.9, y: centerY - 30 }, // Atom
    //             { x: canvasWidth * 0.8, y: centerY - 20 }, // Earth
    //         ];

    //         return textures.map((textureObj, index) => {
    //             // console.log("textureObj", textureObj)
    //             const { texture, baseWidth, baseHeight, scale } = textureObj;

    //             let adjustedScale;
    //             if (screenWidth > 1560) {
    //                 adjustedScale = scale * 1.1;
    //             } else if (screenWidth > 1320) {
    //                 adjustedScale = scale;
    //             } else if (screenWidth > 1024) {
    //                 adjustedScale = scale * 0.80;
    //             } else if (screenWidth > 768) {
    //                 adjustedScale = scale * 0.7;
    //             } else if (screenWidth > 440) {
    //                 adjustedScale = scale * 0.5;
    //             } else {
    //                 adjustedScale = scale * 0.45;
    //             }

    //             let adjustedBaseWidth, adjustedBaseHeight;
    //             if (screenWidth > 1560) {
    //                 adjustedBaseWidth = baseWidth * 1.1;
    //                 adjustedBaseHeight = baseHeight * 1.1;
    //             } else if (screenWidth > 1320) {
    //                 adjustedBaseWidth = baseWidth;
    //                 adjustedBaseHeight = baseHeight;
    //             } else if (screenWidth > 1024) {
    //                 adjustedBaseWidth = baseWidth * 0.9;
    //                 adjustedBaseHeight = baseHeight * 0.9;
    //             } else if (screenWidth > 768) {
    //                 adjustedBaseWidth = baseWidth * 0.75;
    //                 adjustedBaseHeight = baseHeight * 0.75;
    //             } else if (screenWidth > 440) {
    //                 adjustedBaseWidth = baseWidth * 0.5;
    //                 adjustedBaseHeight = baseHeight * 0.5;
    //             } else {
    //                 adjustedBaseWidth = baseWidth * 0.3;
    //                 adjustedBaseHeight = baseHeight * 0.4;
    //             }

    //             // let x = startPositions[index]?.x || startX + index * spread + Math.random() * 150 - 10;
    //             let x = startPositions[index]?.x || startX + index * spread;

    //             let y = startPositions[index]?.y || centerY;

    //             return Bodies.rectangle(x, y, adjustedBaseWidth, adjustedBaseHeight, {
    //                 restitution: 0.8,
    //                 friction: 0.5,
    //                 label: "illustration",
    //                 isStatic: false,
    //                 render: {
    //                     sprite: {
    //                         texture: texture,
    //                         xScale: adjustedScale, // Use EXACT scale you set
    //                         yScale: adjustedScale, // No adjustments needed
    //                     },
    //                 },
    //             });
    //         });
    //     };


    //     //Create pills using all textures
    //     const handlePillsDrop = () => {
    //         const clearDynamicBodies = (world) => {
    //             Composite.allBodies(world).forEach((body) => {
    //                 if (!body.isStatic) {
    //                     Composite.remove(world, body);
    //                 }
    //             });
    //             //console.log("Cleared dynamic bodies");
    //         };
    //         clearDynamicBodies(world);

    //         if (!pillsDropped) {
    //             if (!Array.isArray(textures) || textures.length === 0) {
    //                 // console.error("Textures are not valid or ready:", textures);
    //                 return;
    //             }
    //             const pillBodies = createPills(textures, width);
    //             pillBodies.forEach((pill) => Composite.add(world, pill));
    //             setPillsDropped(true);
    //             // console.log("Pills dropped successfully");
    //         } else {
    //             console.log("Pills already dropped, skipping");
    //         }
    //     };
    //     canvas.style.opacity = "1";

    //     let timeoutId;
    //     scrollTriggerRef.current = ScrollTrigger.create({
    //         trigger: containerRef.current,
    //         start: "top 50%",
    //         end: "bottom top",
    //         scrub: 1,
    //         onEnter: () => {
    //             if (!pillsDropped) {
    //                 timeoutId = setTimeout(() => {
    //                     handlePillsDrop();
    //                     setPillsDropped(true);
    //                 }, 300);
    //             }
    //         },
    //         onLeaveBack: () => {
    //             setTimeout(() => {
    //                 setPillsDropped(false);
    //             }, 300);
    //         },
    //     });

    //     // console.log("Scroll Trigger Activated: ", pillsDropped);



    //     // add mouse control
    //     const mouse = Mouse.create(render.canvas);
    //     const mouseConstraint = MouseConstraint.create(engine, {
    //         mouse: mouse,
    //         constraint: {
    //             stiffness: .2,
    //             render: {
    //                 visible: false
    //             }
    //         }
    //     });
    //     Composite.add(world, mouseConstraint)


    //     render.mouse = mouse

    //     //allows mouse to scroll while being on canvas
    //     const handleWheel = (event) => {
    //         event.preventDefault();
    //         if (!mouseConstraint.body) {
    //             window.scrollBy(0, event.deltaY);
    //         }
    //     };

    //     const touchStartRef = { current: 0 };
    //     const handleTouchStart = (event) => {
    //         touchStartRef.current = event.touches[0].clientY;
    //     };

    //     // Handle touch move for mobile scrolling
    //     const handleTouchMove = (event) => {
    //         if (!mouseConstraint.body) {
    //             const touch = event.touches[0];
    //             const deltaY = touch.clientY - touchStartRef.current;
    //             window.scrollBy(0, -deltaY); // Adjust scroll position
    //             touchStartRef.current = touch.clientY; // Update reference
    //         }
    //     };

    //     // handle resize
    //     const handleResize = () => {
    //         if (!containerRef.current) return;
    //         const { width, height } = container.getBoundingClientRect();
    //         if (!canvasRef.current) return;

    //         // adjust canvas size
    //         canvas.width = width * render.options.pixelRatio;
    //         canvas.height = height * render.options.pixelRatio;
    //         Render.setSize(render, width, height);

    //         // Remove non-static bodies (e.g., pills)
    //         Composite.allBodies(world).forEach((body) => {
    //             if (!body.isStatic) {
    //                 Composite.remove(world, body);
    //             }
    //         });

    //         // Recreate dynamic bodies 
    //         preloadImages(textures, (loadedTextures) => {
    //             //console.log("Preload complete. Recreating pills...");

    //             const pillBodies = createPills(loadedTextures, width);
    //             pillBodies.forEach((pill) => Composite.add(world, pill));
    //         });

    //         // Update walls and ground
    //         Matter.Body.setPosition(ground, { x: width / 2, y: height - 5 });
    //         Matter.Body.setVertices(ground, [
    //             { x: 0, y: height - 30 },
    //             { x: width, y: height - 30 },
    //             { x: width, y: height },
    //             { x: 0, y: height },
    //         ]);

    //         Matter.Body.setPosition(wallLeft, { x: -28, y: height / 2 });
    //         Matter.Body.setPosition(wallRight, { x: width + 82, y: height / 2 });
    //         Matter.Body.setPosition(roof, { x: width / 2, y: -80 });
    //         //console.log("Right Wall:", wallRight.position, wallRight.vertices);
    //     };

    //     window.addEventListener("resize", handleResize);
    //     handleResize();


    //     canvas.addEventListener("wheel", handleWheel); // For desktop
    //     canvas.addEventListener("touchstart", handleTouchStart);
    //     canvas.addEventListener("touchmove", handleTouchMove);

    //     // Engine.run(engine);
    //     Render.run(render);

    //     // Cleanup on unmount
    //     return () => {
    //         Matter.Render.stop(render);
    //         Matter.Engine.clear(engine);
    //         //Composite.remove(world, body);
    //         canvas.removeEventListener("wheel", handleWheel);
    //         canvas.removeEventListener("touchstart", handleTouchStart);
    //         canvas.removeEventListener("touchmove", handleTouchMove);
    //         if (scrollTriggerRef.current) {
    //             scrollTriggerRef.current.kill();
    //         }
    //     };


    // }, [triggered]);

    return (
        <footer id='footer' ref={containerRef} className='relative h-full overflow-hidden border-t-2 bg-charcoal'>
            <div ref={wrapperRef} className='max-w-container relative w-full  overflow-hidden h-[60vh] '>
                {/* <div className="absolute top-0 left-0 w-full h-full z-10">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div> */}
                <div className='relative py-20 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center gap-3 md:gap-6 lg:gap-8'>
                        {/* <h2 className='font-craftwork font-extrabold text-light-yellow-bg text-shadow text-stroke text-center footer-header tracking-[5px]'>
                            Say Hello
                        </h2> */}
                        <div className='text-center text-primary'>
                            <h2 className='sub-header  md:mx-0 md:tracking-wider'>
                                Send a <span className='font-patrick text-orange'>friendly</span>
                                <br />Hello ☻
                            </h2>
                        </div>

                        {/* <p className='text-center font-roundo tracking-normal  text-md md:text-lg relative z-0'> I would love to hear from you! <br />
                            Feel free to reach out to me about anything and let’s get creative together!</p> */}


                        {/* <div className='z-10 flex flex-col gap-4 justify-center items-center md:flex-row'>
                            <div className='flex gap-4'>
                                <SocialIcon
                                    href='https://github.com/tinalin728'
                                    icon={faGithub}
                                    additionalClasses='border-light-yellow-bg  shadow-white hover:shadow-white-hover'
                                />
                                <SocialIcon
                                    href='https://www.linkedin.com/in/tina-lin-000613b5/'
                                    icon={faLinkedinIn}
                                    additionalClasses='border-light-yellow-bg  text-light-yellow-bg shadow-white hover:shadow-white-hover'
                                />
                                <SocialIcon
                                    href="mailto:contact@tinalin.ca"
                                    icon={faEnvelope}
                                    additionalClasses='md:hidden border-light-yellow-bg text-light-yellow-bg shadow-white hover:shadow-white-hover'
                                />
                            </div>

                            <a href="mailto:contact@tinalin.ca" className='hidden md:inline-block px-5 py-[.55rem] border-2 border-white rounded-full text-white shadow-white text-base hover:shadow-white-hover hover:translate-x-[.5%] transition-all duration-500 font-roundo-semibold tracking-[3px] uppercase '>
                                contact@tinalin.ca
                            </a>
                        </div> */}

                        <div className='flex gap-6 mt-4 items-center'>
                            <a href='https://github.com/tinalin728' target='_blank'>
                                <img src={github} alt="github icon" className='w-[58px] hover:rotate-3 hover:scale-[.98] transition-all duration-200' />
                            </a>

                            <a href='https://www.linkedin.com/in/tina-lin-000613b5/' target='_blank'>
                                <img src={linkedin} alt="linkedin icon" className='w-[58px] hover:-rotate-3 hover:scale-[.98] transition-all duration-200' />
                            </a>
                            <a href='mailto:contact@tinalin.ca'>
                                <img src={mail} alt="email icon" className='w-[58px] hover:rotate-3 hover:scale-[.98] transition-all duration-200' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' border-t border-primary mt-10'>
                <div className='max-w-container flex flex-col items-center justify-center md:flex-row md:justify-between py-3'>
                    <div className='flex items-center gap-3'>
                        <div><img src={coffee} alt="" className='w-[35px]' /></div>
                        <span className='text-base tracking-widest text-primary  font-patrick'>Made with shots of espresso</span>
                    </div>
                    <div>
                        <span className='text-base tracking-widest font-patrick text-primary '> &copy; 2024 Tina Lin</span>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
