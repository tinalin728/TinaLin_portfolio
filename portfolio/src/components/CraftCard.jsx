
import { Link } from "react-router-dom"
function CraftCard({ title, img, skills, id }) {


    return (
        <>
            <Link to={`/crafts/${id}`} className='group font-aleo tracking-[1px] text-md font-bold leading-normal capitalize border-2 rounded-xl bg-white border-black shadow-card'>

                <div className='bg-off-white rounded-t-xl group-hover:bg-yellow-light transition-all duration-300 ease-in'>
                    <img src={img} alt="" className='group-hover:scale-105 transition-all duration-300 ease-in' />
                </div>

                <div className='flex flex-col justify-center items-center gap-1 px-4  md:py-6'>
                    <span className='text-center pb-2 border-b border-black border-dashed w-full group-hover:text-orange transition-all duration-300 ease-in'>{title}</span>

                    <div className='flex flex-wrap gap-2 py-2'>
                        {skills.map((skill, index) => (
                            <div className='inline-block' key={index}>
                                <span className='font-roundo tracking-[1.5px] text-dark-grey px-2 py-1 border border-dark-grey rounded-full text-sm text-nowrap '>{skill}</span>
                            </div>
                        ))}

                    </div>
                </div>


            </Link>
        </>

    )
}

export default CraftCard
