
import { Link } from "react-router-dom"
function CraftCard({ title, img, skills, id }) {


    return (
        <>
            <Link to={`/crafts/${id}`} className='groups'>
                <div className='flex flex-col gap-1 mb-2 md:flex-row md:items-center md:justify-between md:mb-4'>
                    <h5 className='group-hover:text-orange transition-all duration-300 ease-in'>{title}</h5>
                    <div className='flex gap-2 mb-2 lg:mb-0'>
                        {skills.map((skill, index) => (
                            <div className='inline-block' key={index}>
                                <span className='font-roundo tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm text-nowrap '>{skill}</span>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='bg-off-white rounded-xl  shadow-lg group-hover:border-2 group-hover:border-black  group-hover:bg-light-grey transition-all duration-300 ease-in'>
                    <img src={img} alt="" className='group-hover:scale-95 transition-all duration-300 ease-in' />
                </div>
            </Link>
        </>

    )
}

export default CraftCard
