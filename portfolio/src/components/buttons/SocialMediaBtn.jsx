import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMediaBtn({ href, icon, text, type = 'icon' }) {
    return (
        <div className='relative group transition-all duration-100 ease-in cursor-pointer'>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                        ${type === 'text' ? 'px-4 text-base tracking-[.8px] font-roundo-medium lowercase md:text-md' : 'w-[3rem]'} 
                        border h-[3rem] inline-flex justify-center items-center rounded-lg border-black bg-light-yellow-bg relative z-10 hover:shadow-inner group-hover:text-orange transition-all duration-100 ease-in shadow-black
                    `}>
                {icon ? (<FontAwesomeIcon icon={icon} className='cursor-pointer text-lg md:text-xl' />) : (text)}
            </a>

        </div>
    )
}

export default SocialMediaBtn
