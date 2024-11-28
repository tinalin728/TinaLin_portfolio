import React, { useState, useEffect } from 'react'
import PageHero from '../components/PageHero'
import HorizontalScroll from '../components/HorizontalScroll'
import CraftCard from '../components/CraftCard'

function Crafts() {
    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const { crafts } = data;
                setCrafts(crafts);
            });
    }, [])

    return (
        <>
            <PageHero
                header='Crafts'
                tagline='Made With Love & Purpose'
            />

            <section className=' py-10 border-y border-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 border-t border-black bg-light-grey-bg'>
                    {crafts.map((craft) => (
                        <CraftCard
                            key={craft.id}
                            id={craft.id}
                            title={craft.title}
                            img={craft.img}
                            skills={craft.skills}
                            border={`${craft.id === 1 || craft.id === 3 ? 'md:border-r' : ''}`}
                        />
                    ))}
                </div>
            </section >

        </>
    )
}

export default Crafts
