import React from 'react'
import { Link } from 'react-router-dom';


function PrimaryBtn({ to, text, icon, href, reverseOrder = false }) {

    const isExternal = href && !to;


    const commonClasses = 'group relative inline-flex items-center justify-center border-2 border rounded-full shadow-charcoal overflow-hidden hover:shadow-charcoal-hover hover:translate-x-[.5%] transition-all duration-500 bg-light-yellow-bg'

    const btnContent = (
        <div className='relative inline-flex items-center gap-4 px-6 py-3 transition duration-300 ease-in z-10'>{

            reverseOrder ? (
                <>
                    <div>
                        <img src={icon} alt="" width={30} />
                    </div>
                    <span className="font-roundo-medium text-base lg:tracking-[2px]">{text}</span>
                </>

            ) : (
                <>
                    <span className="font-roundo-medium text-base lg:tracking-[2px]">{text}</span>
                    <div className='group-hover:-rotate-[15deg] transition duration-500'>
                        <img src={icon} alt="icon" width={30} />
                    </div>
                </>
            )
        }
        </div>
    )

    // const hoverEffect = (
    //     <div
    //         className='absolute w-full h-full top-full left-0 group-hover:top-1/2 animation-waves transition-all duration-300 ease-in'
    //         style={waveBg}
    //     ></div>
    // )
    return (
        isExternal ? (
            <a
                href={href}
                target="_blank"
                className={commonClasses}
            >
                {btnContent}
                {/* {hoverEffect} */}
            </a>)
            :
            (
                <Link to={to} className={commonClasses}>
                    {btnContent}
                    {/* {hoverEffect} */}
                </Link>
            )
    )
}

export default PrimaryBtn
