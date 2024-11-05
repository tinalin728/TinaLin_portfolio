import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function PrimaryBtn({ to, text, href, bgColor = 'bg-light-grey-bg', onClick }) {


    const commonClasses = `font-roundo text-base uppercase tracking-[2px] border border-black rounded-md px-4 py-2 ${bgColor} z-10
            hover:shadow-inner transition-all duration-100 ease-in cursor-pointer`
    return (
        <div className='relative inline-flex group transition-all duration-100 ease-in cursor-pointer'>
            {href ?
                <a href={href} className={commonClasses} onClick={onClick}> {text}</a> :
                <NavLink to={to} className={({ isActive }) => `${commonClasses} ${isActive ? 'bg-white' : ''}`} onClick={onClick}> {text} </NavLink>
            }
            <div className='absolute w-full h-full top-[2px] left-[2px] border-4 border-black rounded-md group-hover:top-0 group-hover:left-0 transition-all duration-100 ease-in cursor-pointer active:top-0 active:left-0'
            > </div>
        </div>

    )
}

export default PrimaryBtn
