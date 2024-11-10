import React, { useState, useEffect } from 'react'
import CraftGrid from '../components/CraftGrid'
import PageHero from '../components/PageHero'
import HorizontalScroll from '../components/HorizontalScroll'

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
                tagline='Pieces Woven With Love and Purpose'
            />
            <section className='bg-light-grey-bg rounded-[50px] lg:rounded-[70px] shadow-sm'>
                <div className="max-w-container">
                    <CraftGrid crafts={crafts} />
                </div >
            </section>

        </>
    )
}

export default Crafts
