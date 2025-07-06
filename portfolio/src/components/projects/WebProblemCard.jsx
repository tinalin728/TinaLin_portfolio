import React from 'react'

export default function WebProblemCard({ icon, title, description, image, caption, reverse = false }) {
    return (
        <div className={`flex flex-col gap-10 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-14 lg:mb-20`}>
            <div className='basis-[40%]'>
                <div className=''>
                    <img src={icon} alt="" width={35} className='' />
                    <h4 className='mb-5'>{title}</h4>
                </div>
                <p>{description}</p>
            </div>

            <div className="basis-[60%] max-h-[500px] overflow-hidden p-2 rounded-3xl border border-gray-300 shadow-lg">
                <div>
                    <div className="rounded-2xl h-[300px] md:h-[400px] xl:h-[400px] overflow-y-auto">
                        <img src={image.src} alt={image.alt} className="w-full object-cover" />
                    </div>
                </div>
                <p className='text-center caption mt-2'>{caption}</p>
            </div>
        </div>
    )
}
