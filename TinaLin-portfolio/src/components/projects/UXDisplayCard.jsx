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
            <div className={`flex flex-col-reverse items-center justify-center gap-10 md:gap-14 lg:gap-16 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${additionalClasses}`}>
                <div className="basis-[55%] flex gap-8">
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
                    <div className="relative flex pb-2">
                        {useIcon ? (
                            <div className="mb-1">
                                <img src={iconImg} alt="check mark icon" className={`${iconSize}`} />
                            </div>
                        ) : (
                            <span className={`${numberClass} font-oliver text-lg inline-block`}>
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
