import PrimaryCta from "../PrimaryCta"


export default function ProjectIntro({ title, subtitle, timeline, role, process, src, buttonLink, button, icon, iconSize }) {
    return (
        <section className='max-w-container overflow-hidden pt-[8rem] md:pt-[10rem] relative z-10'>
            <div className='flex flex-col gap-10 md:gap-14 lg:gap-20 pb-10 md:pb-14 lg:pb-20 lg:flex-row'>
                <div className='flex-1'>
                    <p className='mb-1'>{subtitle}</p>
                    <h1 className='project-title mb-6'> {title} </h1>
                    <PrimaryCta to={buttonLink} label={button} icon={icon} iconSize={iconSize} />
                </div>

                <div className='flex-1 flex flex-col gap-6'>
                    <div>
                        <p className='uppercase tracking-widest text-sm text-gray-400'> Timeline </p>
                        <p>{timeline}</p>
                    </div>
                    <div className='border-y border-gray-300 py-6'>
                        <p className='uppercase tracking-widest text-sm text-gray-400'> Role </p>
                        <p>{role}</p>
                    </div>
                    <div>
                        <p className='uppercase tracking-widest text-sm text-gray-400'> {process.label} </p>
                        <p>{process.content}</p>
                    </div>
                </div>
            </div>

            <div className='h-full max-h-[800px] shadow-lg rounded-3xl'>
                <img src={src} alt="Project banner" className='w-full h-full max-h-[800px] object-cover object-center rounded-3xl' />
            </div>

        </section>
    )
}
