import React, { useState, useEffect } from 'react'
import SectionContainer from '../components/SectionContainer'
import CraftGrid from '../components/CraftGrid'
import PageHero from '../components/PageHero'

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

            <SectionContainer>
                <CraftGrid crafts={crafts} />
            </SectionContainer>
        </>
    )
}

export default Crafts
