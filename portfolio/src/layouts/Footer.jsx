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

import HorizontalScroll from '../components/HorizontalScroll';

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
    const engineRef = useRef(null); // Store Matter.js engine persistently

    useLenis(() => {
        // if (engineRef.current) {
        //     Matter.Engine.update(engineRef.current);
        // }
        ScrollTrigger.update();
    });


    useEffect(() => {
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            MouseConstraint = Matter.MouseConstraint,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            Bodies = Matter.Bodies;

        // Create the engine
        const engine = Engine.create();
        const world = engine.world;
        const runner = Runner.create();
        Runner.run(runner, engine);


        // Ensure canvas size is set to full screen
        const container = wrapperRef.current;
        const canvas = canvasRef.current;

        canvas.style.opacity = "0.7";

        const { width, height } = container.getBoundingClientRect();

        // set inline style to override canvas' inline style
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const pixelRatio = window.devicePixelRatio
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;

        console.log('Device Pixel Ratio:', window.devicePixelRatio);

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
        const ground = Bodies.rectangle((width / 2) + 160, height - 5, width + 320, 160, {
            isStatic: true,
            render: {
                fillStyle: "transparent",
            }
        });
        const wallLeft = Bodies.rectangle(-80, height / 2, 60, height, { isStatic: true });
        const wallRight = Bodies.rectangle(width + 80, height / 2, 160, height, { isStatic: true });
        const roof = Bodies.rectangle((width / 2) + 160, -80, width + 320, 160, { isStatic: true })

        Composite.add(world, [ground, wallLeft, wallRight, roof])

        // store images
        // const textures = [
        //     // '/assets/pills/react.svg',
        //     '/assets/pills/tailwind.svg',
        //     '/assets/pills/text.svg',
        //     // '/assets/pills/text-7.svg',
        //     // '/assets/pills/text-8.svg',
        //     // '/assets/pills/text-3.svg',
        //     // '/assets/pills/text-9.svg',
        //     // '/assets/pills/text-16.svg',
        //     // '/assets/pills/text-6.svg',
        //     // '/assets/pills/text-10.svg',
        //     // '/assets/pills/text-5.svg',
        //     // '/assets/pills/text-4.svg',
        //     // '/assets/pills/text-11.svg',
        //     // '/assets/pills/text-12.svg',
        //     // '/assets/pills/text-2.svg',
        //     // '/assets/pills/text-14.svg',
        //     // '/assets/pills/text-13.svg',
        //     // '/assets/pills/white-logo.svg',
        //     // '/assets/pills/text-15.svg',
        // ];



        //preload images
        // const preloadImages = (textures, callback) => {
        //     //console.log("Textures after preloading:", textures);

        //     let loadedCount = 0;
        //     const total = textures.length;
        //     const loadedTextures = [];

        //     if (!Array.isArray(textures) || total === 0) {
        //         console.error("No textures to preload.");
        //         callback([]); // Trigger the callback even if there are no textures
        //         return;
        //     }

        //     textures.forEach((texture) => {
        //         const img = new Image();
        //         img.src = texture;
        //         img.onload = () => {
        //             loadedTextures.push({
        //                 texture,
        //                 width: img.naturalWidth,  // Get original width
        //                 height: img.naturalHeight // Get original height
        //             });

        //             loadedCount++;
        //             if (loadedCount === total) {
        //                 //console.log("Preloading complete:", loadedTextures);
        //                 callback(loadedTextures); // Pass the loaded textures
        //             }
        //         };

        //         img.onerror = () => {
        //             console.error(`Failed to load image: ${texture}`);
        //             loadedCount++;
        //             if (loadedCount === total) {
        //                 //console.log("Preloading complete with errors:", loadedTextures);
        //                 callback(loadedTextures); // Pass the loaded textures, even if some failed
        //             }
        //         };
        //     });
        // };

        // create pills
        // const createPills = (textures, canvasWidth) => {
        //     const screenWidth = window.innerWidth;

        //     // Adjust pill dimensions based on screen size
        //     const pillWidth = screenWidth > 1920 ? 120 : screenWidth > 1440 ? 120 : screenWidth < 768 ? 60 : 100;
        //     const pillHeight = screenWidth > 1920 ? 55 : screenWidth > 1440 ? 50 : screenWidth < 768 ? 20 : 30;
        //     const spread = Math.min(screenWidth / textures.length * 1.2, screenWidth > 1920 ? 100 : screenWidth > 1440 ? 80 : 50);

        //     // Calculate the starting point to center the pills
        //     const startX = canvasWidth / 2 - ((textures.length - 1) * spread) / 2; // Center pills
        //     const centerY = 450; // Drop from this height

        //     // Create pills from textures
        //     const pills = textures.map((texture, index) => {
        //         // Slightly stagger the x positions to make them not perfectly inline
        //         const x = startX + index * spread + Math.random() * 150 - 10;
        //         const y = centerY + Math.random() * 50 - 10; // Slight random vertical offset for variation

        //         return Bodies.rectangle(x, y, pillWidth, pillHeight, {
        //             restitution: .2,
        //             // density: .5,
        //             friction: .8,
        //             label: "pill",
        //             render: {
        //                 sprite: {
        //                     texture: texture,
        //                     xScale: screenWidth > 1920 ? 1.2 : screenWidth > 1440 ? 1.1 : screenWidth < 768 ? 0.8 : 1,
        //                     yScale: screenWidth > 1920 ? 1.2 : screenWidth > 1440 ? 1.2 : screenWidth < 768 ? 0.8 : 1,
        //                 },
        //             },
        //         });
        //     });

        //     return pills;
        // };

        const textures = [
            { texture: "/assets/pills/cup.svg", baseWidth: 200, baseHeight: 240, scale: 1.5 },
            { texture: "/assets/pills/tele.svg", baseWidth: 220, baseHeight: 190, scale: 1.4 },
            { texture: "/assets/pills/croissant.svg", baseWidth: 120, baseHeight: 120, scale: 1 },
            { texture: "/assets/pills/paintbrush.svg", baseWidth: 100, baseHeight: 100, scale: 1 },
            { texture: "/assets/pills/react.svg", baseWidth: 100, baseHeight: 100, scale: 1 },
            { texture: "/assets/pills/world.svg", baseWidth: 200, baseHeight: 180, scale: 1.5 }
        ];


        const texturePaths = Object.keys(textures); // Extract file paths
        console.log("Extracted Texture Paths:", texturePaths);

        const preloadImages = (textures, callback) => {
            let loadedCount = 0;
            const total = textures.length;
            const loadedTextures = [];

            if (!Array.isArray(textures) || total === 0) {
                console.error("No textures to preload.");
                callback([]);
                return;
            }

            console.log("🔄 Preloading Images:", textures.map(t => t.texture)); // Debugging

            textures.forEach((textureObj) => {
                const img = new Image();
                img.src = textureObj.texture;

                img.onload = () => {
                    console.log(" Loaded Image:", textureObj.texture, "Size:", img.naturalWidth, img.naturalHeight);
                    loadedTextures.push({
                        ...textureObj, // Keep all original properties

                    });

                    loadedCount++;
                    if (loadedCount === total) {
                        console.log("All images preloaded:", loadedTextures);
                        callback(loadedTextures);
                    }
                };

                img.onerror = (error) => {
                    console.error(` Failed to load image: ${textureObj.texture}`, error);
                    loadedCount++;
                    if (loadedCount === total) {
                        callback(loadedTextures);
                    }
                };
            });
        };

        const createPills = (textures, canvasWidth) => {
            const screenWidth = window.innerWidth;

            // Custom starting positions (relative to screen size)
            const startPositions = [
                { x: canvasWidth * 0.1, y: 480 }, // Coffee
                { x: canvasWidth * 0.4, y: 500 }, // Phone
                { x: canvasWidth * 0.20, y: 485 }, // Croissant
                { x: canvasWidth * 0.7, y: 480 }, // Paintbrush
                { x: canvasWidth * 0.9, y: 420 }, // Atom
                { x: canvasWidth * 0.8, y: 450 }, // Earth
            ];

            return textures.map((textureObj, index) => {
                console.log("textureObj", textureObj)
                const { texture, baseWidth, baseHeight, scale } = textureObj;

                let adjustedScale;
                if (screenWidth > 1560) {
                    adjustedScale = scale * 1.1;
                } else if (screenWidth > 1320) {
                    adjustedScale = scale;
                } else if (screenWidth > 1024) {
                    adjustedScale = scale * 0.85; // Reduce to 90% for large screens
                } else if (screenWidth > 768) {
                    adjustedScale = scale * 0.7; // Reduce to 75% for medium screens
                } else if (screenWidth > 440) {
                    adjustedScale = scale * 0.5; // Reduce to 75% for medium screens
                } else {
                    adjustedScale = scale * 0.45; // Reduce to 50% for small screens
                }

                let adjustedBaseWidth, adjustedBaseHeight;
                if (screenWidth > 1560) {
                    adjustedBaseWidth = baseWidth * 1.2;
                    adjustedBaseHeight = baseHeight * 1.2;
                } else if (screenWidth > 1320) {
                    adjustedBaseWidth = baseWidth;
                    adjustedBaseHeight = baseHeight;
                } else if (screenWidth > 1024) {
                    adjustedBaseWidth = baseWidth * 0.9;
                    adjustedBaseHeight = baseHeight * 0.9;
                } else if (screenWidth > 768) {
                    adjustedBaseWidth = baseWidth * 0.75;
                    adjustedBaseHeight = baseHeight * 0.75;
                } else if (screenWidth > 768) {
                    adjustedBaseWidth = baseWidth * 0.5;
                    adjustedBaseHeight = baseHeight * 0.5;
                } else {
                    adjustedBaseWidth = baseWidth * 0.3;
                    adjustedBaseHeight = baseHeight * 0.4;
                }

                // Use predefined positions, or default to center if out of bounds
                let x = startPositions[index]?.x || startX + index * spread + Math.random() * 150 - 10;
                let y = startPositions[index]?.y || centerY + Math.random() * 50 - 10;


                return Bodies.rectangle(x, y, adjustedBaseWidth, adjustedBaseHeight, {
                    restitution: 0.8,
                    friction: 0.5,
                    label: "illustration",
                    isStatic: false,
                    render: {
                        sprite: {
                            texture: texture,
                            xScale: adjustedScale, // Use EXACT scale you set
                            yScale: adjustedScale, // No adjustments needed
                        },
                    },
                });
            });
        };



        //Create pills using all textures
        const handlePillsDrop = () => {
            const clearDynamicBodies = (world) => {
                Composite.allBodies(world).forEach((body) => {
                    if (!body.isStatic) {
                        Composite.remove(world, body);
                    }
                });
                //console.log("Cleared dynamic bodies");
            };
            clearDynamicBodies(world);

            if (!pillsDropped) {
                if (!Array.isArray(textures) || textures.length === 0) {
                    console.error("Textures are not valid or ready:", textures);
                    return;
                }
                const pillBodies = createPills(textures, width);
                pillBodies.forEach((pill) => Composite.add(world, pill));
                pillsDropped = true;
                console.log("Pills dropped successfully");
            } else {
                console.log("Pills already dropped, skipping");
            }
        };
        canvas.style.opacity = "1";


        //since using Lenis can be in conflict with scroll trigger, using scrollProxy tells scrolltrigger to correctly tract the scroll position
        //connects scrolltrigger to Lenis by overriding how scrolltrigger calculates
        // ScrollTrigger.scrollerProxy(containerRef.current, {
        //     //Lenis's scrollTop value is used instead of the browser's default.
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             containerRef.current.scrollTop = value;
        //         }
        //         //Returns the custom scroll container's dimensions and position relative to the viewport.
        //         return containerRef.current.scrollTop;
        //     },
        //     getBoundingClientRect() {
        //         return {
        //             top: 0,
        //             left: 0,
        //             width: window.innerWidth,
        //             height: window.innerHeight,
        //         };
        //     },
        //     //Specifies whether the container uses transform or fixed positioning for smooth scrolling.
        //     pinType: containerRef.current.style.transform ? "transform" : "fixed",
        // });

        // let timeoutId;

        // if (containerRef.current) {
        //     ScrollTrigger.create({
        //         trigger: containerRef.current,
        //         start: "top bottom",
        //         end: "bottom top",
        //         scrub: true,
        //         onEnter: () => {
        //             if (!triggered) {
        //                 timeoutId = setTimeout(() => {
        //                     setTriggered(true);
        //                     handlePillsDrop();
        //                 }, 300);
        //             }
        //         },
        //         onLeaveBack: () => {
        //             setTriggered(false);
        //             pillsDropped = false;
        //             Composite.allBodies(world).forEach((body) => {
        //                 if (!body.isStatic) {
        //                     Composite.remove(world, body);
        //                 }
        //             });
        //         },
        //         // markers: true,
        //     });
        // }
        // ScrollTrigger.scrollerProxy(containerRef.current, {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             containerRef.current.scrollTop = value;
        //         }
        //         return containerRef.current.scrollTop;
        //     },
        //     getBoundingClientRect() {
        //         return {
        //             top: 0,
        //             left: 0,
        //             width: window.innerWidth,
        //             height: window.innerHeight,
        //         };
        //     },
        //     pinType: containerRef.current.style.transform ? "transform" : "fixed",
        // });

        let timeoutId;

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom top",
            duration: .5,
            scrub: 1,
            onEnter: () => {
                if (!pillsDropped) {
                    timeoutId = setTimeout(() => {
                        handlePillsDrop();
                        pillsDropped = true;
                    }, 300);
                }
            },
            onLeaveBack: () => {
                setTimeout(() => {
                    pillsDropped = false;
                    // Composite.allBodies(world).forEach((body) => {
                    //     if (!body.isStatic) {
                    //         Composite.remove(world, body);
                    //     }
                    // });
                }, 300);
            },
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


        render.mouse = mouse

        //allows mouse to scroll while being on canvas
        const handleWheel = (event) => {
            event.preventDefault();
            if (!mouseConstraint.body) {
                window.scrollBy(0, event.deltaY);
            }
        };

        const touchStartRef = { current: 0 };
        const handleTouchStart = (event) => {
            touchStartRef.current = event.touches[0].clientY;
        };

        // Handle touch move for mobile scrolling
        const handleTouchMove = (event) => {
            if (!mouseConstraint.body) { // Only scroll if not dragging a Matter.js body
                event.preventDefault(); // Prevent default browser behavior

                const touch = event.touches[0];
                const deltaY = touch.clientY - touchStartRef.current;

                // Smooth out the scrolling behavior
                if (!isScrolling) {
                    isScrolling = true;
                    requestAnimationFrame(() => {
                        window.scrollBy({ top: -deltaY, behavior: "smooth" });
                        isScrolling = false;
                    });
                }

                // Prevent tiny movements from causing unnecessary updates
                if (Math.abs(deltaY) > 2) {
                    touchStartRef.current = touch.clientY;
                }

                lastDeltaY = deltaY; // Store last movement
            }
        };


        // handle resize
        const handleResize = () => {
            const { width, height } = container.getBoundingClientRect();

            // adjust canvas size
            canvas.width = width * render.options.pixelRatio;
            canvas.height = height * render.options.pixelRatio;
            Render.setSize(render, width, height);

            // Remove non-static bodies (e.g., pills)
            Composite.allBodies(world).forEach((body) => {
                if (!body.isStatic) {
                    Composite.remove(world, body);
                }
            });

            // Recreate dynamic bodies 
            preloadImages(textures, (loadedTextures) => {
                //console.log("Preload complete. Recreating pills...");

                const pillBodies = createPills(loadedTextures, width);
                pillBodies.forEach((pill) => Composite.add(world, pill));
            });

            // Update walls and ground
            Matter.Body.setPosition(ground, { x: width / 2, y: height - 5 });
            Matter.Body.setVertices(ground, [
                { x: 0, y: height - 30 },
                { x: width, y: height - 30 },
                { x: width, y: height },
                { x: 0, y: height },
            ]);

            Matter.Body.setPosition(wallLeft, { x: -28, y: height / 2 });
            Matter.Body.setPosition(wallRight, { x: width + 82, y: height / 2 });
            Matter.Body.setPosition(roof, { x: width / 2, y: -80 });
            //console.log("Right Wall:", wallRight.position, wallRight.vertices);
        };


        window.addEventListener("resize", handleResize);
        handleResize();


        canvas.addEventListener("wheel", handleWheel); // For desktop
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchmove", handleTouchMove);

        // Engine.run(engine);
        Render.run(render);

        // Cleanup on unmount
        return () => {
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
            //Composite.remove(world, body);
            canvas.removeEventListener("wheel", handleWheel);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchmove", handleTouchMove);
            ScrollTrigger.killAll();
        };


    }, [triggered]);

    return (
        <footer id='footer' ref={containerRef} className='relative h-full overflow-hidden'>
            <div ref={wrapperRef} className='relative w-full bg-charcoal overflow-hidden mt-10'>
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>
                <div className='h-[90vh] md:h-[85vh] relative max-w-container py-10 lg:py-[6rem]'>
                    <div className='flex flex-col justify-center items-center gap-3 md:gap-6 lg:gap-8'>
                        {/* <h2 className='font-craftwork font-extrabold text-light-yellow-bg text-shadow text-stroke text-center footer-header tracking-[5px]'>
                            Say Hello
                        </h2> */}
                        <div className='text-center'>
                            <h1 className='sub-header text-wrap leading-tight md:leading-normal -mx-[2px] md:mx-0 md:tracking-wider'>
                                Say Hello !
                            </h1>
                        </div>

                        <p className='text-center font-roundo tracking-normal text-light-yellow-bg text-md md:text-lg relative z-0'> I would love to hear from you! <br />
                            Feel free to reach out to me about anything and let’s get creative together!</p>


                        <div className='z-10 flex flex-col gap-4 justify-center items-center md:flex-row'>
                            <div className='flex gap-4'>
                                <SocialIcon
                                    href='https://github.com/tinalin728'
                                    icon={faGithub}
                                    additionalClasses='border-light-yellow-bg text-light-yellow-bg shadow-white hover:shadow-white-hover'
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
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-charcoal border-t border-white'>
                <div className='max-w-container flex flex-col items-center justify-center md:flex-row md:justify-between py-2'>
                    <div className='flex items-center gap-4'>
                        <div><img src={coffee} alt="" className='w-[35px] md:w-[40px]' /></div>
                        <span className='text-sm uppercase tracking-wider font-roundo text-white'>Made with shots of espresso</span>
                    </div>
                    <div>
                        <span className='text-sm tracking-wider uppercase font-roundo text-white'> &copy; 2024 Tina Lin</span>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
