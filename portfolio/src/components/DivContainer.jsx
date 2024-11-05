import React from 'react'

function DivContainer({ children }) {
    return (
        <section className='relative -mt-2 md:-mt-4 bg-light-grey-bg h-full rounded-2xl lg:rounded-[3.5rem] shadow-[0_-10px_14px_-15px_rgba(0,0,0,0.3),0_10px_14px_-15px_rgba(0,0,0,0.3)]'>
            <div className='w-full inline-flex justify-center items-center absolute top-1'>
                <div className='bg-light-grey w-[150px] h-[6px] md:w-[180px] lg:w-[250px] rounded-full mt-2'> </div>
            </div>

            <div className="max-w-container">
                {children}
            </div>
        </section>
    )
}

export default DivContainer
