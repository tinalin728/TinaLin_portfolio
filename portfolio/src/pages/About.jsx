import React from 'react'
import PageHero from '../components/PageHero'
import DivContainer from '../components/DivContainer'
import test from '../assets/images/about/tina.jpg'
import PrimaryBtn from '../components/buttons/PrimaryBtn'

function About() {
    return (
        <>
            <PageHero
                header='About'
                tagline='From Education to Tech Industry'
            />


            <DivContainer>
                <div className='flex flex-col md:flex-row md:gap-12'>
                    <section className='basis-[38%]'>
                        <div className='flex flex-col items-center gap-4 md:gap-6'>
                            <div className='relative'>
                                <div className='relative z-10 w-full  py-[4rem] bg-white border-black border-2  rounded-xl'>
                                    <img src={test} alt="" className='object-cover' />
                                </div>
                                <div className='absolute top-[6px] left-[6px] bg-dark-grey w-full h-full rounded-xl z-0'></div>
                            </div>

                            <div className=''>
                                <PrimaryBtn
                                    text='resume'
                                    href='#'
                                    bgColor='bg-yellow'
                                />
                            </div>
                        </div>
                    </section>

                    <section className='flex-1 pt-0 md:pt-14 lg:pt-[5rem]'>
                        <div className='mb-8'>
                            <div className='relative inline-block'>
                                <h5 className='relative z-10'>Peek Into My Life</h5>
                                <div className='absolute left-0 bottom-2 h-1/3 w-full bg-orange bg-opacity-10'></div>
                            </div>

                            <p>
                                With a background in Linguistics and Education, I’ve always tried to find ways to bring creativity into my professional life, whether through creating interactive curriculums to meet the diverse needs of children or designing engaging materials using natural or recyclable items.
                                What really drew me into the design and tech industry was when I was introduced to <a href="https://lingraphica.com/aac-devices/what-is-an-aac-device/" target='_blank' className='text-base font-roundo tracking-normal md:text-md text-blue-700'>AAC devices</a> as a communication aid for autistic children at work. It showed me how thoughtful design and technology can bridge communication gaps and improve lives, leading me to pursue the New Media Design and Development program at BCIT.
                                Now, as I pursue my path in the design industry, I continue to carry the same values as I’ve held as a teacher- empathy, inclusivity, and connection .
                            </p>
                        </div>

                        <div className='mb-8'>
                            <div className='relative inline-block'>
                                <h5 className='relative z-10'>Skills</h5>
                                <div className='absolute left-0 bottom-2 h-1/3 w-full bg-yellow bg-opacity-90'></div>
                            </div>

                            <div className='grid gap-6'>
                                <div>
                                    <p className='font-roundo-medium'>Programming Language & Library</p>
                                    <p className='tracking-[.8px]'>HTML, CSS, JavaScript, React.js, TailwindCSS</p>
                                </div>
                                <div>
                                    <p className='font-roundo-medium'>Design Software</p>
                                    <p className='tracking-[.8px]'>Photoshop, Illustrator, InDesign, AfterEffects, Figma, Procreate, Wordpress</p>
                                </div>
                                <div>
                                    <p className='font-roundo-medium'>UX Skillsets</p>
                                    <p className='tracking-[.8px]'>User Centered Design, Wireframing,  Interactive Prototyping, Usability Testing, Responsive Design</p>
                                </div>
                                <div>
                                    <p className='font-roundo-medium'>Soft Skills</p>
                                    <p className='tracking-[.8px]'>Communication, Critical Thinking, Problem Solving, Flexibility</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <div className='relative inline-block'>
                                <h5 className='relative z-10'>Me Outside Of Work</h5>
                                <div className='absolute left-0 bottom-2 h-1/3 w-full bg-yellow bg-opacity-90'></div>
                            </div>
                        </div>
                    </section>


                </div>
            </DivContainer >
        </>
    )
}

export default About
