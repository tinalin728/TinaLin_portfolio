import React from 'react'

function designLayout({ craft }) {
    return (
        <>
            <div className='py-14 content-w'>
                <img src={craft.featImg.src} alt={craft.featImg.alt} />
            </div >

            {/* <section className='py-14'>
                <div className='flex py-14 border-t-2 border-light-grey border-dashed'>
                    <div className='flex-1 '>
                        <h2>{craft.start.header}</h2>
                        <p>{craft.start.content}</p>
                    </div>
                    <div className='flex-1'>
                        <img src={craft.start.image.src} alt={craft.start.image.alt} className='' />
                    </div>
                </div>

            </section> */}

            <section className='content-w'>
                <div className='flex flex-col items-center gap-10 md:flex-row'>
                    <div className='flex-1'>
                        <h2>{craft.color.header}</h2>
                        <p className='pb-6'> {craft.color.content}</p>
                    </div>
                    <div className='flex-1'>
                        <img src={craft.color.image.src} alt={craft.color.image.alt} />
                    </div>
                </div>

            </section >

            <section className='py-14 content-w'>
                <div className=''>
                    <div className='basis-1/3'>
                        <h2>Logo Design</h2>
                        <p className='pb-6'> {craft.logo.content}</p>
                    </div>
                    <div className='basis-2/3'>
                        <div className='flex flex-col justify-center items-center py-14 mb-10'>
                            <p className='pb-8'>Primary Logo</p>
                            <img src={craft.logo.image.src} alt={craft.logo.image.alt} className='w-1/2 lg:w-1/3' />
                        </div>
                        <div className='flex flex-col justify-center items-center py-14'>
                            <p className='text-center pb-6'>secondary logo</p>
                            <img src={craft.logo.imageSec.src} alt={craft.logo.imageSec.alt} />
                        </div>
                    </div>
                </div>
            </section>


            <section className='content-w'>
                <h2>Typography</h2>
                <p dangerouslySetInnerHTML={{ __html: craft.font.content }} className='mb-10' />

                <div className='flex flex-col gap-10 md:flex-row'>
                    {craft.font.images.map((img, index) => (
                        <img src={img.src} alt={img.alt} className='w-1/2' />
                    ))}
                </div>
            </section>


            <section className='py-14 content-w'>
                <h2 className='mb-6'>Mockups</h2>

                <div className=''>
                    {craft.mockup.image.map((img, index) => (
                        <img src={img.src} alt={img.alt} className='mt-6' />
                    ))}
                </div>

            </section>
        </>
    )
}

export default designLayout
