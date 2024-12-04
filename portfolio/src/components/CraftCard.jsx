import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import figma from '../../public/assets/about/figma.svg'

function CraftCard({ title, img, skills, id, craftHeaderRef }) {

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {

        setScale(1.1);
    }

    const handleMouseOut = () => {
        setScale(1)
    }

    // self-stretch shrink-0 h-auto (img)


    return (
        <>
            <Link to={`/crafts/${id} `}
                className={`relative font-bold leading-normal capitalize w-full h-full box group border-2 rounded-xl bg-light-yellow-bg`}
                onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                {/* 
                <span className="absolute block bg-black transform duration-500 ease-in-out top-0 left-0 w-full h-[2.2px] origin-left scale-x-0 group-hover:scale-x-100 z-10  rounded-lg"></span>
                <span className="absolute block bg-black transform duration-500 ease-in-out top-0 right-0 w-[2.2px] h-full origin-top scale-y-0 group-hover:scale-y-100 "></span>
                <span className="absolute block bg-black transform duration-500 ease-in-out bottom-0 right-0 w-full h-[2.2px] origin-right scale-x-0 group-hover:scale-x-100 "></span>
                <span className="absolute block bg-black transform duration-500 ease-in-out left-0 top-0 w-[2.2px] h-full origin-bottom scale-y-0 group-hover:scale-y-100 "></span> */}

                {/* p-[1.5rem] lg:p-[2rem]  */}
                <div className="z-10 relative p-[1rem]" >
                    <div className='overflow-hidden border-2 rounded-xl' >
                        <img src={img} alt="project"
                            className='relative object-cover max-w-full h-auto transition duration-500 ease-in-out'
                            style={{ transform: `scale(${scale}) translate(-${position.x}%, -${position.y}%)` }}
                        />
                    </div>

                    <div className='px-2 pt-6 py-10'>
                        <h3 className='transition-all duration-300 ease-in'>{title}</h3>

                        <div className='flex flex-wrap gap-2 py-2'>
                            {skills.map((skill, index) => (
                                <div className='inline-block' key={index}>
                                    <span className='font-roundo tracking-[.8px] md:tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm text-nowrap group-hover:border-orange group-hover:text-orange'>{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className="absolute right-0">
                            <div className="bg-charcoal w-fit text-white px-4 rounded-l-xl group-hover:bg-orange transition duration-500">
                                <p className="text-sm md:text-base">
                                    Read Me
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </>

    )
}

export default CraftCard
