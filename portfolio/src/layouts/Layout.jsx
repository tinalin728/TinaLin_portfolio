import React from 'react'
import { Outlet, useLocation, matchPath } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from "react-helmet";


function Layout() {
    const location = useLocation();
    const isCraftDetails = matchPath('/crafts/:id', location.pathname)

    const pageTitles = {
        '/': "Tina Lin UX/UI Designer & Front-End Developer",
        '/about': "About Tina Lin - UX/UI Designer & Front-End Developer",
        '/projects': "Crafts- Tina Lin's Portfolio, UX/UI Designer & Front-End Developer"
    };

    const defaultTitle = "Tina Lin's Portfolio - UX/UI Designer & Front-End Developer";
    const currentTitle = pageTitles[location.pathname] || defaultTitle;

    return (
        <>
            <Helmet>
                <title>{currentTitle}</title>
                <meta
                    name="description"
                    content="Tina Lin is a UX/UI designer and front-end developer creating intuitive and user-centered designs with modern web technologies."
                />
                <meta
                    name="keywords"
                    content="Tina Lin, UX/UI Designer, Web Designer, Front-End Developer, Web Development, UX/UI Design, React, GSAP, Portfolio"
                />
                <meta name="author" content="Tina Lin" />
                <meta property="og:title" content={currentTitle} />
                <meta
                    property="og:description"
                    content="Explore Tina Lin's portfolio featuring innovative product designs and cutting-edge web development projects."
                />
                <meta property="og:url" content={`https://www.tinalin.ca${location.pathname}`} />
                <meta property="og:type" content="website" />
            </Helmet>

            <Navbar />
            <main>
                <Outlet />
            </main>

            {!isCraftDetails && <Footer />}
        </>
    )
}

export default Layout
