import React from 'react'
import PageHero from '../components/PageHero'
import DivContainer from '../components/DivContainer'
import test from '../assets/images/about/tina.jpg'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import iconHeart from '../assets/images/about/icon-heart.svg'
import iconSave from '../assets/images/about/icon-save.svg'
import iconShare from '../assets/images/about/icon-share.svg'
import iconComment from '../assets/images/about/icon-comment.svg'
import iconDownload from '../assets/images/about/icon-download.svg'


function About() {


    return (
        <>
            <PageHero
                header='About'
                tagline='From Education to Tech Industry'
            />


            <div className=' bg-light-grey-bg rounded-[50px] lg:rounded-[70px] shadow-sm'>
                <div className='max-w-container flex flex-col md:flex-row md:gap-6'>
                    {/* image */}
                    <section className='basis-[38%]'>
                        <div className='flex flex-col items-center gap-[6rem]'>
                            <div className='relative pt-14 w-[380px]'>
                                <div className='relative z-10 mx-auto translate-y-1 before:content-[""] before:w-[101%] before:h-[140%] before:absolute before:top-[55%] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:-z-[1] before:rounded-lg before:border-2 before:border-black'>
                                    <img src={test} alt="" className='object-cover w-[90%] mx-auto border-2 border-black rounded-lg -translate-y-4' />
                                </div>
                                <div className='flex justify-between items-center px-6'>
                                    <div className='flex gap-6 z-20 relative w-[28px]'>
                                        <img src={iconHeart} alt="like icon" />
                                        <img src={iconComment} alt="comment icon" />
                                        <img src={iconShare} alt="share icon" />
                                    </div>

                                    <div className='relative z-20 w-[25px]'>
                                        <img src={iconSave} alt="save icon" />
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <PrimaryBtn
                                    text='resume'
                                    href='#'
                                    bgColor='bg-yellow'
                                    icon={iconDownload}
                                    reverseOrder='true'
                                />
                            </div>
                        </div>
                    </section>

                    <section className='flex-1'>
                        <div className='mb-12'>
                            <div className='py-2 mb-2 border-b border-black border-dashed'>
                                <h4>Peek Into My Life</h4>
                            </div>
                            <p>
                                With a background in Linguistics and Education, I’ve always tried to find ways to bring creativity into my professional life, whether through creating interactive curriculums to meet the diverse needs of children or designing engaging materials using natural or recyclable items.
                                What really drew me into the design and tech industry was when I was introduced to
                                <a href="https://lingraphica.com/aac-devices/what-is-an-aac-device/" target='_blank' className='text-base font-roundo tracking-normal md:text-[18px] capitalize text-blue-700 mx-2'>AAC devices</a>

                                as a communication aid for autistic children at work. It showed me how thoughtful design and technology can bridge communication gaps and improve lives, leading me to pursue the New Media Design and Development program at BCIT.
                                Now, as I pursue my path in the design industry, I continue to carry the same values as I’ve held as a teacher- empathy, inclusivity, and connection .
                            </p>
                        </div>

                        <div className='mb-12'>
                            <div className='py-2 mb-2 border-b border-black border-dashed'>
                                <h4>Skills</h4>
                            </div>

                            <div className='grid gap-8'>
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
                        <div>
                            <div className='py-2 mb-2 border-b border-black border-dashed'>
                                <h4>Me Outside of Work</h4>
                            </div>

                            <div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default About
