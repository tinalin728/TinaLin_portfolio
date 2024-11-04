import React from 'react'
import { useParams } from 'react-router-dom'

function CraftDetail() {
    const { id } = useParams();

    return (
        <div>
            <h1>hellow</h1>
        </div>
    )
}

export default CraftDetail
