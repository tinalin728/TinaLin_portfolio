import React from 'react'

function PageHero({ header, tagline }) {
    return (
        <div className='mt-[8rem] mb-[11rem]'>
            <div className='text-center'>
                <h2 className='font-craftwork font-extrabold text-orange'>{header}<span className='text-black'>.</span></h2>

                <div className='flex justify-center items-center gap-4'>
                    <div className='h-[.5px] w-6 bg-black'></div>
                    <p>{tagline}</p>
                    <div className='h-[.5px] w-6 bg-black'></div>
                </div>
            </div>
        </div>
    )
}

export default PageHero
