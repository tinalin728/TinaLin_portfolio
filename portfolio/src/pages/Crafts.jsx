import React, { useState, useEffect } from 'react'
import PageHero from '../components/PageHero'
import HorizontalScroll from '../components/HorizontalScroll'
import CraftCard from '../components/CraftCard'

import data from './home/data.json';

function Crafts() {
    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        const { crafts } = data;
        setCrafts(crafts);
    }, []);

    return (
        <>
            <PageHero
                header='Crafts'
                tagline='Made With Love & Purpose'
            />

            <section className=' py-10 border-y-2 border-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 border-t-2 border-black bg-light-grey-bg'>
                    {crafts.map((craft) => (
                        <CraftCard
                            key={craft.id}
                            id={craft.id}
                            title={craft.title}
                            img={craft.img}
                            skills={craft.skills}
                            border={`${craft.id === 1 || craft.id === 3 ? 'md:border-r-2' : ''}`}
                        />
                    ))}
                </div>
            </section >

        </>
    )
}

export default Crafts
