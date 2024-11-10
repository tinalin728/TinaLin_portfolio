import React from 'react'
import dashline from '../assets/images/homepage/dashline.svg'

function PageHero({ header, tagline }) {
    //  mt-[8rem] mb-[11rem]
    const dashlineStyle = {
        backgroundImage: `url(${dashline})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',

    }

    return (
        <section style={dashlineStyle}>
            <div className='max-w-container grid place-items-center '>
                <div className='text-center'>
                    <h2 className='font-craftwork font-extrabold text-orange leading-none'>{header}<span className='text-black'>.</span></h2>

                    <div className='flex justify-center items-center gap-2 md:gap-4 mt-4'>
                        <div className='h-[.5px] w-4 md:w-6 bg-black'></div>
                        <p>{tagline}</p>
                        <div className='h-[.5px] w-4 md:w-6 bg-black'></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PageHero
