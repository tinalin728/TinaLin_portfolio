import React from 'react'
import checkmark from "../../../public/assets/icons/checklist.png"

export default function UXDisplayCard({
    number,
    numberClass,
    title,
    description,
    additionalClasses,
    images = [],
    videoClass,
    imgClass,
    reverse = false,
    useIcon = false,
    iconImg,
    iconSize
}) {
    return (
        <>
            <div className={`flex flex-col-reverse justify-center gap-8 md:gap-14 md:items-center lg:gap-16 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${additionalClasses}`}>
                <div className="basis-[55%] flex gap-4 md:gap-6 lg:gap-8">
                    {images.map((media, index) => (
                        <div key={index} className='w-full h-full mx-auto'>
                            {media.type === "video" ? (
                                <video
                                    src={media.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={`w-full h-full ${videoClass}`}
                                />
                            ) : (
                                <img
                                    src={media.src}
                                    alt={media.alt || `Screen ${index + 1}`}
                                    className={`w-full h-full object-cover ${imgClass}`}
                                />
                            )}
                        </div>
                    ))}

                </div>

                <div className="basis-[45%]">
                    <div className="relative flex items-center">
                        {useIcon ? (
                            <div className="mb-1">
                                <img src={iconImg} alt="check mark icon" className={`${iconSize}`} />
                            </div>
                        ) : (
                            <span className={`${numberClass} font-oliver text-lg inline-block xl:text-xl`}>
                                {number < 10 ? `0${number}.` : `${number}.`}
                            </span>
                        )}
                        <h4>{title}</h4>

                    </div>

                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>
        </>
    )
}
