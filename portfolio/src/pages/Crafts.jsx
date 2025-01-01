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
        `font-roundo-medium text-base py-1 px-8 transition duration-300 cursor-none ${isActive ? 'bg-charcoal text-white border-t-2 border-x-2' : 'bg-light-yellow-bg text-charcoal border-t-2 border-x-2'
        }`
    const columns = windowWidth < 768 ? 1 : 2;
    const rows = Math.ceil(filteredCrafts.length / columns);

    return (
        <>
            <PageHero
                header='Crafts'
                tagline='Made With Love & Purpose'
            />

            <section className=''>
                {/* <div className='hidden md:block'>
                    <div className='flex  max-w-container'>
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
                </div> */}


                <div className='py-[10rem] bg-darker-bg border-2'>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6  max-w-container">
                        {filteredCrafts.map((craft, index) => {
                            return (
                                <CraftCard
                                    key={craft.id}
                                    id={craft.id}
                                    title={craft.title}
                                    mediaType={craft.media}
                                    src={craft.src}
                                    skills={craft.skills}
                                    content={craft.content}
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
