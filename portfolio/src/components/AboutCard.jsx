function AboutCard({ header, icon, content, width, translate }) {


    return (
        <div className={`relative flex flex-col gap-8 justify-center p-6 bg-white rounded-xl border-2 border-black max-w-[330px] h-[400px] hover:scale-[1.01] transition-all duration-500 shadow-card ${translate}`}>
            <div className='mx-auto py-2'>
                <img src={icon} alt="" width={width} />
            </div>
            <div className='text-center'>
                <h4 className="pb-2">{header}</h4>
                <p>{content}</p>
            </div>
        </div >
    )
}

export default AboutCard
