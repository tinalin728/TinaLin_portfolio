import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SocialIcon({ href, icon, additionalClasses = '', mail = false }) {
    return (
        <a
            href={mail ? `mailto:${href}` : href}
            className={`inline-flex justify-center items-center h-[3.4rem] w-[3.4rem] border-2 rounded-full hover:translate-x-[1%] hover:translate-y-[1%] transition-all duration-300 font-roundo-semibold ${additionalClasses}`}
            target={mail ? '_self' : '_blank'}
            rel='noopener noreferrer'
        >
            <FontAwesomeIcon icon={icon} className='text-[30px]' />
        </a>
    )
}

export default SocialIcon
