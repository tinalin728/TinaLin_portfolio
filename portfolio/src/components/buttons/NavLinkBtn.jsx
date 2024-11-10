import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavLinkBtn({ to, text, href, bgColor = 'bg-light-grey-bg', onClick }) {

    const commonClasses = `${`px-4 py-2 rounded-md border border-black shadow-black hover:shadow-black-hover hover:${bgColor}  z-10  transition-all duration-100 ease-in cursor-pointer`}`

    return (
        <li className={`inline-flex group transition-all duration-100 ease-in cursor-pointer ${bgColor}`} >
            {
                href ?
                    <a href={href} className={commonClasses} onClick={onClick}> {text}</a>
                    :
                    <NavLink to={to} className={({ isActive }) => `${commonClasses} ${isActive ? 'bg-white' : ''}`} onClick={onClick}> {text} </NavLink>
            }
        </li >

    )
}

export default NavLinkBtn
