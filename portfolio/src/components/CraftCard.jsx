import { useState } from "react"
import { Link } from "react-router-dom"

function CraftCard({ title, img, skills, id, border }) {

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {

        setScale(1.1);
    }

    const handleMouseOut = () => {
        setScale(1)
    }


    return (
        <>
            <Link to={`/crafts/${id} `}
                className={`relative font-bold leading-normal capitalize cursor-pointer border-b-2 border-black ${border} w-full h-full inline-block overflow-hidden group`}
                onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>

                <span className="absolute block bg-black transform duration-500 ease-in-out top-0 left-0 w-full h-[2.2px] origin-left scale-x-0 group-hover:scale-x-100 "></span>
                <span className="absolute block bg-black transform duration-500 ease-in-out top-0 right-0 w-[2.2px] h-full origin-top scale-y-0 group-hover:scale-y-100 "></span>
                <span className="absolute block bg-black transform duration-500 ease-in-out bottom-0 right-0 w-full h-[2.2px] origin-right scale-x-0 group-hover:scale-x-100 "></span>
                <span className="absolute block bg-black transform duration-500 ease-in-out left-0 top-0 w-[2.2px] h-full origin-bottom scale-y-0 group-hover:scale-y-100 "></span>

                <div className="p-[2rem] lg:p-[3rem] z-10 relative" >
                    <div className='overflow-hidden' >
                        <img src={img} alt="" className='relative self-stretch shrink-0 h-auto object-cover max-w-full transition duration-500 ease-in-out'
                            style={{ transform: `scale(${scale}) translate(-${position.x}%, -${position.y}%)` }}
                        />
                    </div>

                    <div className='text-end mt-4'>
                        <h4 className='transition-all duration-300 ease-in'>{title}</h4>

                        <div className='flex flex-wrap justify-end gap-2 py-2'>
                            {skills.map((skill, index) => (
                                <div className='inline-block' key={index}>
                                    <span className='font-roundo tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm text-nowrap group-hover:border-orange group-hover:text-orange'>{skill}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* 736 */}

            </Link>

        </>

    )
}

export default CraftCard
