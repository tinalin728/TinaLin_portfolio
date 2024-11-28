import React from 'react'
import { Outlet, useLocation, matchPath } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
    const location = useLocation();
    const isCraftDetails = matchPath('/crafts/:id', location.pathname)

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>

            {!isCraftDetails && <Footer />}
        </>
    )
}

export default Layout
