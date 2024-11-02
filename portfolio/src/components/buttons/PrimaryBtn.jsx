import React from 'react'

function PrimaryBtn({ text, href }) {
    return (
        <div>
            <div className='relative inline-flex group transition-all duration-100 ease-in'>
                <a href={href} className='font-roundo text-3xl uppercase lg:tracking-[2px] lg:text-base border border-black rounded-md px-4 py-2 bg-yellow z-10
                hover:shadow-inner transition-all duration-100 ease-in
                '> {text}</a>
                <div className='absolute w-full h-full top-[2px] left-[2px] border-4 border-black rounded-md group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in'> </div>
            </div>
        </div>
    )
}

export default PrimaryBtn
