import React, { useState, useEffect } from 'react'
import PageHero from '../components/PageHero'
import WindowWidth from '../hooks/WindowWidth';
import CraftCard from '../components/CraftCard'

import data from '../data/generalData.json';

function Crafts() {

    const windowWidth = WindowWidth();

    const [crafts, setCrafts] = useState([])
    useEffect(() => {
        const { crafts } = data;
        setCrafts(crafts);
    }, []);

    const [filter, setFilter] = useState('all');
    const filteredCrafts = crafts.filter((craft) => {
        const normalizedType = craft.type.toLowerCase().trim(); // Normalize type
        const normalizedFilter = filter.toLowerCase().trim(); // Normalize filter
        console.log(`Filtering Craft - Type: "${normalizedType}", Filter: "${normalizedFilter}"`);
        if (normalizedFilter === 'all') return true;
        return normalizedType === normalizedFilter;
    });


    const filterClasses = (isActive) =>
        `font-roundo-medium text-base py-1 px-8 rounded-t-xl border-t-2 border-x-2 transition duration-300 ${isActive ? 'bg-charcoal text-white' : 'bg-light-yellow-bg text-charcoal'
        }`
    const columns = windowWidth < 768 ? 1 : 2;
    const rows = Math.ceil(filteredCrafts.length / columns);

    return (
        <>
            <PageHero
                header='Crafts'
                tagline='Made With Love & Purpose'
            />

            <section className='pb-10'>
                <div className='hidden md:block'>
                    <div className='ml-10 flex'>
                        <button
                            className={filterClasses(filter === 'all')}
                            onClick={() => setFilter('all')}
                        > All </button>

                        <button
                            className={filterClasses(filter === 'UXUI')}
                            onClick={() => setFilter('UXUI')}
                        >UXUI Design</button>

                        <button
                            className={filterClasses(filter === 'coding')}
                            onClick={() => setFilter('coding')}
                        >Front-End </button>
                    </div>
                </div>
                <div className='py-10 border-2  bg-light-grey-bg'>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 bg-light-yellow-bg">
                        {/* top bottom border */}
                        <div className='hidden md:block md:absolute md:w-full md:h-[2px] md:bg-charcoal md:top-0 z-0'></div>
                        <div className='hidden md:block md:absolute md:w-full md:h-[2px] md:bg-charcoal md:bottom-0 z-0'></div>

                        {/* horizontal middle border */}
                        {rows > 1 && (
                            <div className="hidden md:block md:absolute md:w-full md:h-[2px] md:bg-charcoal md:top-1/2 z-0 md:-translate-y-1/2"></div>
                        )}
                        {/* vertical border */}
                        <div className='hidden md:block md:absolute md:h-full md:w-[2px] md:bg-charcoal md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 z-0'></div>

                        {filteredCrafts.map((craft, index) => {
                            return (
                                <CraftCard
                                    key={craft.id}
                                    id={craft.id}
                                    title={craft.title}
                                    img={craft.img}
                                    skills={craft.skills}
                                />
                            );
                        })}
                    </div>
                </div>
            </section >

        </>
    )
}

export default Crafts
