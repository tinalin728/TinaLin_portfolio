import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import figma from '../../public/assets/about/figma.svg'

function CraftCard({ title, img, skills, id, craftHeaderRef }) {

    const [scale, setScale] = useState(1);

    const handleMouseMove = (e) => {

        setScale(1.1);
    }

    const handleMouseOut = () => {
        setScale(1)
    }



    return (
        <>
            <Link to={`/crafts/${id} `}
                className='relative font-bold leading-normal capitalize w-full h-full box group border-2 rounded-xl bg-light-yellow-bg'
                onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>

                <div className="flex flex-col p-[1rem]" >
                    <div className='overflow-hidden border-2 rounded-xl' >
                        <img src={img} alt="project"
                            className='relative object-cover max-w-full min-h-[250px] md:h-auto transition duration-500 ease-in-out'
                            style={{ transform: `scale(${scale})` }}
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

                        <div className="block absolute right-0 md:bottom-4">
                            <div className="bg-charcoal w-fit text-white px-4 rounded-l-xl group-hover:bg-orange transition duration-500">
                                <p className="text-sm py-1 lg:text-base">
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
