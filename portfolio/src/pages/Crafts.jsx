import React, { useState, useEffect } from 'react'
import PageHero from '../components/PageHero'
import HorizontalScroll from '../components/HorizontalScroll'
import CraftCard from '../components/CraftCard'

import data from '../data/generalData.json';

function Crafts() {
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
        `py-1 px-4 rounded-full shadow-charcoal border-2 hover:shadow-charcoal-hover transition duration-300 ${isActive ? 'bg-charcoal shadow-none text-white' : 'bg-white text-charcoal'
        }`


    return (
        <>
            <PageHero
                header='Crafts'
                tagline='Made With Love & Purpose'
            />

            <section className=' border-black'>
                <div className='hidden md:block'>
                    <div className='max-w-container flex gap-4 mb-8'>
                        <button
                            className={filterClasses(filter === 'all')}
                            onClick={() => setFilter('all')}
                        >All </button>

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

                <div className='grid grid-cols-1 md:grid-cols-2 border-y-2 border-black bg-light-grey-bg mb-8'>
                    {filteredCrafts.map((craft, index) => {
                        const columns = 2;
                        const isLastRow = index >= filteredCrafts.length - (filteredCrafts.length % columns || columns);

                        return (
                            <CraftCard
                                key={craft.id}
                                id={craft.id}
                                title={craft.title}
                                img={craft.img}
                                skills={craft.skills}
                                border={`${!isLastRow ? 'border-b-2' : ''
                                    } ${index % columns === 0 ? 'md:border-r-2' : ''}`}
                            />
                        );
                    }
                    )}
                </div>
            </section >

        </>
    )
}

export default Crafts
