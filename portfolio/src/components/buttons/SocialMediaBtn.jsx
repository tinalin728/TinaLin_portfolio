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
                        ${type === 'text' ? 'px-4 text-md tracking-[.8px] font-roundo-medium' : 'w-[3rem]'} 
                        border h-[3rem] inline-flex justify-center items-center rounded-lg border-black bg-light-yellow-bg relative z-10 hover:shadow-inner group-hover:text-orange transition-all duration-100 ease-in
                    `}>
                {icon ? (<FontAwesomeIcon icon={icon} className='cursor-pointer ' />) : (text)}
            </a>
            <div className='absolute w-full h-full top-[1px] left-[1px] border-2 border-black rounded-lg group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in'> </div>
        </div>
    )
}

export default SocialMediaBtn
