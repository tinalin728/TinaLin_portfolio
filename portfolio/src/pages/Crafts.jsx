import React, { useState, useEffect } from 'react'
import CraftGrid from '../components/CraftGrid'
import PageHero from '../components/PageHero'
import DivContainer from '../components/DivContainer'

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

            <DivContainer>
                <section>
                    <CraftGrid crafts={crafts} />
                </section>
            </DivContainer>
        </>
    )
}

export default Crafts
