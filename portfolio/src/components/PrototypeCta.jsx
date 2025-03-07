import React from 'react'
import browse from '../../public/assets/icons/browse.svg'

export default function PrototypeCta({ inPageLink, scrollToId, webLink }) {
    return (
        <div className='mt-10 rounded-full border-2 px-4 py-1 group w-fit shadow-button hover:shadow-none hover:translate-y-[2px] transition-all duration-150 ease-in-out'>
            {inPageLink ? (
                <div className='flex gap-1 items-center justify-center'>
                    <a href="#prototype"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className='relative z-10 h-full group-hover:text-black normal-case tracking-normal'>
                        {inPageLink}
                    </a>
                    <div className='-rotate-90 text-xl'>⇜</div>
                </div>
            ) : (
                webLink && webLink.link && (
                    <div className='flex gap-1 items-center justify-center'>
                        <a href={webLink.link} target='__blank' rel="noopener noreferrer"
                            className='relative z-10 h-full group-hover:text-black normal-case'>
                            {webLink.text}
                        </a>
                        <div><img src={browse} alt="browse icon" width={22} /></div>
                    </div>
                )
            )}
        </div>
    )
}
