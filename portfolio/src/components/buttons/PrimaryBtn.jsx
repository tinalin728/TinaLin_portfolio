import React from 'react'
import { Link } from 'react-router-dom';
import waves from '../../assets/images/waves.svg'

function PrimaryBtn({ to, text, icon, href, reverseOrder = false }) {

    const isExternal = href && !to;
    const waveBg = {
        background: `url(${waves})`,
        backgroundSize: '200% 100%',
    }

    const commonClasses = 'group relative inline-flex items-center justify-center   border-2 border-black  rounded-xl shadow-grey overflow-hidden group'

    const btnContent = (
        <div className='relative inline-flex items-center gap-4 px-6 py-4 transition duration-300 ease-in z-10'>{

            reverseOrder ? (
                <>
                    <div>
                        <img src={icon} alt="" width={30} />
                    </div>
                    <span className="font-roundo text-base lg:tracking-[2px]">{text}</span>
                </>

            ) : (
                <>
                    <span className="font-roundo text-base lg:tracking-[2px]">{text}</span>
                    <div className='group-hover:-rotate-[15deg] transition duration-500'>
                        <img src={icon} alt="icon" width={30} />
                    </div>
                </>
            )
        }
        </div>

    )

    const hoverEffect = (
        <div
            className='absolute w-full h-full top-full left-0 group-hover:top-1/2 animation-waves transition-all duration-300 ease-in'
            style={waveBg}
        ></div>
    )
    return (
        isExternal ? (
            <a
                href={href}
                target="_blank"
                className={commonClasses}
            >
                {btnContent}
                {hoverEffect}
            </a>)
            :
            (
                <Link to={to} className={commonClasses}>
                    {btnContent}
                    {hoverEffect}
                </Link>
            )
    )
}

export default PrimaryBtn
