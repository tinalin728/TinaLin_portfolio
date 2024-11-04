import tape from '../assets/images/tape.svg'

function AboutCard({ header, icon, content }) {


    return (
        <div className='relative flex flex-col gap-4 justify-center items-center p-8 bg-white rounded-xl shadow-md border-2 border-black'>
            <div><img src={tape} alt="" className='w-[125px] absolute -top-[8%] left-1/2 -translate-x-1/2 rotate-[10deg]' /></div>
            <div className='p-6'>
                <img src={icon} alt="" width={150} />
            </div>

            <h5 className=''>{header}</h5>
            <p className='text-center pb-6'>{content}</p>
        </div>
    )
}

export default AboutCard
