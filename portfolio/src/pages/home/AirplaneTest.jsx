import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


function AirplaneTest() {
    const pathRef = useRef(null);

    useLayoutEffect(() => {
        const path = pathRef.current;
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: 'power2.inOut',
        });
    }, []);


    //ref={airplaneRef}

    return (
        <div className="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 2702 613" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet" >
                <defs>
                    <mask id="pathMask">
                        {/* Mask the path (White visible, black hidden) */}
                        <path
                            d="M1.17969 612.009C52.4297 545.919 211.99 365.589 446.14 337.589C726.94 304.009 865.41 514.519 1192.06 578.409C1415.71 622.149 1694.21 636.249 1718.59 470.289C1739.12 330.539 1628.04 124.899 2075.85 120.749C2763.99 114.389 2416.76 356.219 2202.11 324.399C2007.92 295.609 2588.78 48.0589 2701.28 1.12891"
                            fill="none"
                            stroke="#F64117"
                            strokeDasharray="20.06 20.06"
                            strokeWidth="5"
                        />
                    </mask>
                </defs>
                <g>
                    {/* Path to be revealed using the mask */}
                    <path
                        ref={pathRef}
                        className="dashline"
                        d="M1.17969 612.009C52.4297 545.919 211.99 365.589 446.14 337.589C726.94 304.009 865.41 514.519 1192.06 578.409C1415.71 622.149 1694.21 636.249 1718.59 470.289C1739.12 330.539 1628.04 124.899 2075.85 120.749C2763.99 114.389 2416.76 356.219 2202.11 324.399C2007.92 295.609 2588.78 48.0589 2701.28 1.12891"
                        stroke="#717171"
                        strokeWidth="5"
                        fill="none"
                        mask="url(#pathMask)"
                        strokeDasharray="20.06 20.06"
                        strokeDashoffset="4170"
                    />
                </g>

            </svg>
        </div>
    );
}

// gsap.to(airplaneRef.current, {
//     motionPath: {
//         path: [
//             { x: '50', y: '-10' }, // Starting from left, lower position
//             { x: '100', y: '10' },  // Curve upward to the middle
//             { x: 300, y: -20 },   // Higher rise
//             { x: 450, y: 0 },     // Small dip again
//             { x: 600, y: -30 },   // Climbing higher
//             { x: 750, y: -10 },   // Gentle curve back down
//             { x: 1000, y: -10 }
//         ],
//         curviness: 1.5,               // Adjust curviness to smoothen the curve
//         autoRotate: true               // Make the airplane follow the path's rotation
//     },
//     duration: 4,
//     ease: 'power2.inOut'
// });

export default AirplaneTest;
