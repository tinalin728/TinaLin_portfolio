import React, { useEffect, useRef } from 'react'
import Matter from 'matter-js'

function Skills() {
    const programWrapperRef = useRef(null);
    const programCanvasRef = useRef(null);
    const designWrapperRef = useRef(null);
    const designCanvasRef = useRef(null);

    // const programLang = [
    //     '/assets/pills/program1.svg',
    //     '/assets/pills/program2.svg',
    //     '/assets/pills/program3.svg',
    //     '/assets/pills/program4.svg',
    //     '/assets/pills/program5.svg',
    //     '/assets/pills/program6.svg',
    //     '/assets/pills/program7.svg',
    // ];

    // const designTools = [
    //     '/assets/pills/ae.svg',
    //     '/assets/about/ai.svg',
    //     '/assets/about/dn.svg',
    //     '/assets/about/ps.svg',
    //     '/assets/about/figma.svg',
    //     '/assets/about/id.svg',
    //     '/assets/about/wordpress.svg',

    // ];

    // // Function to set up Matter.js environment for a given container and canvas
    // const setupMatterScene = (containerRef, canvasRef, imageList) => {
    //     if (!containerRef.current || !canvasRef.current) return;

    //     const Engine = Matter.Engine,
    //         Render = Matter.Render,
    //         Runner = Matter.Runner,
    //         Composite = Matter.Composite,
    //         Bodies = Matter.Bodies;

    //     const engine = Engine.create();
    //     const world = engine.world;
    //     const runner = Runner.create();
    //     Runner.run(runner, engine);

    //     const container = containerRef.current;
    //     const canvas = canvasRef.current;

    //     canvas.style.opacity = "0"; // Initially hidden
    //     const { width, height } = container.getBoundingClientRect();

    //     // Set canvas size
    //     const pixelRatio = window.devicePixelRatio || 1;
    //     canvas.width = width * pixelRatio;
    //     canvas.height = height * pixelRatio;
    //     canvas.style.width = `${width}px`;
    //     canvas.style.height = `${height}px`;

    //     // Create renderer
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

    //     // Create boundaries
    //     const ground = Bodies.rectangle(width / 2, height, width, 20, {
    //         isStatic: true, render: { fillStyle: 'transparent', lineWidth: 0 }
    //     });
    //     const wallLeft = Bodies.rectangle(0, height / 2, 20, height, {
    //         isStatic: true, render: { fillStyle: 'transparent', lineWidth: 0 }
    //     });
    //     const wallRight = Bodies.rectangle(width, height / 2, 20, height, {
    //         isStatic: true, render: { fillStyle: 'transparent', lineWidth: 0 }
    //     });
    //     const roof = Bodies.rectangle(width / 2, 0, width, 20, {
    //         isStatic: true, render: { fillStyle: 'transparent', lineWidth: 0 }
    //     });

    //     Composite.add(world, [ground, wallLeft, wallRight, roof]);

    //     // Create pills using images
    //     const createPills = () => {
    //         const pills = imageList.map((imgSrc, index) => {
    //             return Bodies.circle(
    //                 (index + 1) * (width / (imageList.length + 1)) + Math.random() * 10 - 50,  // Keep spread settings
    //                 Math.random() * height * 0.2,  // Maintain original height settings
    //                 42,  // Maintain original radius
    //                 {
    //                     restitution: 0.7,
    //                     density: 1,
    //                     friction: 0.3,
    //                     render: {
    //                         sprite: {
    //                             texture: imgSrc,
    //                             xScale: 1,
    //                             yScale: 1
    //                         }
    //                     }
    //                 }
    //             );
    //         });
    //         Composite.add(world, pills);
    //     };

    //     console.log("Design Tool Images:", designTools);

    //     createPills();
    //     Render.run(render);

    //     // Reveal the canvas once shapes are added
    //     canvas.style.opacity = "1";

    //     // Cleanup on unmount
    //     return () => {
    //         Matter.Render.stop(render);
    //         Matter.Engine.clear(engine);
    //         Composite.clear(world);
    //     };
    // };

    // useEffect(() => {
    //     setupMatterScene(programWrapperRef, programCanvasRef, programLang);
    //     setupMatterScene(designWrapperRef, designCanvasRef, designTools);
    // }, []);

    return (
        <div className='my-[10rem]'>
            <div className='flex gap-8 justify-center flex-wrap'>
                {/* Programming Tools Section */}
                <div ref={programWrapperRef} className='relative min-h-[380px] border-2 max-w-[380px] w-full rounded-2xl overflow-hidden'>
                    <h3 className='text-center py-4'> Programming Tools</h3>
                    <div className='absolute inset-0 w-full h-full'>
                        <canvas ref={programCanvasRef} className="w-full h-full" />
                    </div>
                </div>

                {/* Design Software Section */}
                <div ref={designWrapperRef} className='min-h-[380px] border-2 max-w-[380px] w-full rounded-2xl relative'>
                    <h3 className='text-center py-4'> Design Software </h3>
                    <div className='absolute inset-0 w-full h-full'>
                        <canvas ref={designCanvasRef} className="w-full h-full" />
                    </div>
                </div>

                {/* UX Skillsets Section (Static without Matter.js) */}
                <div className='min-h-[380px] border-2 max-w-[380px] w-full rounded-2xl'>
                    <h3 className='text-center py-4'> UX Skillsets</h3>
                </div>
            </div>
        </div>
    );
}

export default Skills;
