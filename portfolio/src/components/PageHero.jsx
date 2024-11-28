import React from 'react'

function PageHero({ header, tagline }) {

    return (
        <section className='bg-light-yellow-bg min-h-[70vh] p-0 relative'>
            <div className='max-w-container min-h-[70vh] grid place-items-center'>
                <div className=''>
                    <h2 className='sub-header font-craftwork font-extrabold text-light-yellow-bg leading-normal tracking-[5px] uppercase text-stroke text-shadow'>
                        {header}
                    </h2>
                </div>
                <div className='absolute top-[35%] left-1/2 md:left-[35%] -translate-x-1/2 -translate-y-1/2 py-2 px-4 bg-charcoal w-fit md:-rotate-6'>
                    <p className='font-roundo-light tracking-widest uppercase text-white text-sm md:text-base text-nowrap'>{tagline}</p>
                </div>
            </div>
        </section>
    )
}

export default PageHero
