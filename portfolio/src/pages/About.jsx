import React from 'react'
import PrimaryBtn from '../components/buttons/PrimaryBtn'
import PageHero from '../components/PageHero'

// images
import profilePic from '../../public/assets/about/tina.jpg'
import iconHeart from '../../public/assets/about/icon-heart.svg'
import iconSave from '../../public/assets/about/icon-save.svg'
import iconShare from '../../public/assets/about/icon-share.svg'
import iconComment from '../../public/assets/about/icon-comment.svg'
import iconDownload from '../../public/assets/about/icon-download.svg'
import hobbies from '../../public/assets/about/hobbies.png'
import ps from '../../public/assets/about/ps.svg'
import ai from '../../public/assets/about/ai.svg'
import id from '../../public/assets/about/id.svg'
import ae from '../../public/assets/about/ae.svg'
import dn from '../../public/assets/about/dn.svg'
import figma from '../../public/assets/about/figma.svg'
import wordpress from '../../public/assets/about/wordpress.svg'
import checker from '../../public/assets/about/checker.svg'
import orangeChecker from '../../public/assets/about/orangeChecker.svg'
import greyChecker from '../../public/assets/about/greyChecker.svg'
import grainbg from '../../public/assets/about/grain.png'



function About() {

    const coding = ["HTML", "CSS", "JS", "REACT", "TAILWINDCSS", "JQUERY"];
    const design = [ps, ai, id, ae, dn, figma, wordpress]
    const ux = ['User Centered Design', 'Wireframing', 'Interactive Prototyping', 'Usability Testing', 'Responsive Design']
    const softSkills = ['Communication', 'Critical Thinking', 'Problem Solving', 'Flexibility', 'Empathy']

    const checkerBg = {
        backgroundImage: `url(${checker})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }
    const greyCheckerBg = {
        backgroundImage: `url(${greyChecker})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }
    const orangeCheckerBg = {
        backgroundImage: `url(${orangeChecker})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }
    const grain = {
        backgroundImage: `url(${grainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundOpacity: '.1'
    }


    return (
        <>
            <PageHero
                header='About'
                tagline='From Education to Tech'
            />

            <div className='bg-darker-bg border-2 py-[10rem]'>
                <div className='max-w-container'>
                    {/* image */}
                    <section className='flex flex-col lg:flex-row gap-16 items-center justify-center'>
                        <div className='basis-[30%]'>
                            <div className='flex flex-col items-center gap-[6rem] -mt-20 mb-10'>
                                <div className='relative pt-14 max-w-[350px]'>
                                    <div className="absolute top-[62%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[101%] h-[115%] bg-light-yellow-bg border-2 rounded-xl z-[1]"></div>
                                    <div className="absolute top-[60%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[101%] h-[115%] bg-light-yellow-bg border-2 rounded-xl z-[1]"></div>

                                    <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[115%] bg-light-yellow-bg border-2 rounded-xl z-[1]"></div>


                                    <div className='relative z-10 mx-auto mb-4'>
                                        <img src={profilePic} alt="" className='object-cover w-[90%] mx-auto border-2 rounded-md' />
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
                            </div>
                        </div>

                        <div className='basis-[70%]'>
                            <div className='py-2 mb-2 text-orange border-b border-black border-dashed'>
                                <h3>Peek Into My Life</h3>
                            </div>
                            <p className='indent-4 mb-2 font-roundo-medium text-[20px]'>Hi I'm Tina!</p>
                            <p className='indent-4 mb-2'>
                                With a background in Linguistics and Education, I’ve always tried to find ways to bring creativity into my professional life, whether through creating interactive curriculums to meet the diverse needs of children or designing engaging materials using everyday items.
                            </p>
                            <p className='indent-4'>
                                What really drew me into the design and tech industry was when I was introduced to
                                <a href="https://lingraphica.com/aac-devices/what-is-an-aac-device/" target='_blank' className='text-base font-roundo tracking-normal md:text-[18px] capitalize text-orange mx-2'>AAC devices</a>

                                as a communication aid for autistic children at work. It showed me how thoughtful design and technology can bridge communication gaps and improve lives, which then led me to pursue the New Media Design and Development program at BCIT. Nevertheless, I continue to carry the same values as I’ve held as a teacher- empathy, inclusivity, and connection.
                            </p>
                            <div className='mt-10'>
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

                    <section className='py-20 lg:py-[10rem] flex flex-col items-center justify-center lg:flex-row gap-10 relative'>
                        <div className='lg:flex-1 w-full'>
                            <div className='py-2 mb-2 border-b border-black border-dashed'>
                                <h3 className='text-orange'>Skills</h3>
                            </div>

                            <div className='grid gap-10'>
                                <div>
                                    <p className='font-roundo-medium text-md'>UX Skillsets</p>
                                    <ul className='grid md:grid-cols-2 gap-x-6 px-4 py-2'>
                                        {ux.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-disc'> {item}</li>
                                        ))}
                                    </ul>
                                    <p className=''></p>
                                </div>
                                <div>
                                    <p className='font-roundo-medium text-md'>Soft Skills</p>
                                    <ul className='grid md:grid-cols-2 gap-x-6 px-4 py-2'>
                                        {softSkills.map((item, index) => (
                                            <li key={index} className='font-roundo tracking-[.8px] list-disc'> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className='font-roundo-medium pb-2 text-md'>Programming Language & Library</p>
                                    <div className='flex gap-2 flex-wrap '>
                                        {coding.map((item, index) => (
                                            <div key={index} className='px-4 bg-charcoal rounded-full'><p className='text-white'>{item}</p></div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className='font-roundo-medium pb-2 text-md'>Design Software</p>
                                    <div className='flex flex-wrap gap-4'>
                                        {design.map((item, index) => (
                                            <div key={index} className=''>
                                                <img src={item} alt="" width={55} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <div className="relative flex flex-col justify-center items-end">
                                <div
                                    className="card bg-white w-[300px] h-[400px] p-4 rounded-xl border-2 relative overflow-hidden hover:z-10 hover:scale-105 hover:translate-y-2 transition-transform duration-300 ease-in">
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-blue border-b-2">
                                        <div className="flex justify-between items-center">
                                            <p className="font-roundo-medium mt-1"> Hidden Talent </p>
                                            <div className='h-3 w-3 border-2 rounded-full bg-light-yellow-bg'></div>
                                        </div>
                                    </div>

                                    <p className="italic leading-normal text-lg bg-light-yellow-bg py-8 px-10 border-2 rounded-md mt-14" style={greyCheckerBg}>
                                        I can manage a group of 3-5 years old, turning chaos and tantrums into giggles and fun <span className='not-italic'>&#128520; &#128520; &#128520; </span>
                                    </p>
                                </div>

                                <div
                                    className="card bg-white  flex flex-col justify-center items-center p-4 w-[300px] h-[400px] rounded-xl border-2 relative overflow-hidden mr-0 md:mr-[6rem] -mt-[20rem] hover:z-10 hover:scale-105 hover:translate-y-2 transition-transform duration-300 ease-in"
                                >
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-yellow border-b-2">
                                        <div className='flex justify-between items-center'>
                                            <p className="font-roundo-medium mt-1">Core Value</p>
                                            <div className='h-3 w-3 border-2 rounded-full bg-orange'></div>
                                        </div>
                                    </div>

                                    <p className="italic leading-normal text-lg bg-light-yellow-bg p-8 border-2 rounded-md mt-10" style={orangeCheckerBg}>
                                        I value creating inclusive spaces where everyone feels heard and connected, with a touch of warmth and creativity
                                    </p>
                                </div>

                                <div
                                    className="card bg-white flex flex-col justify-center items-center p-4 w-[300px] h-[400px] rounded-xl border-2 relative overflow-hidden mr-0 md:mr-[12rem] -mt-[20rem] hover:z-10 hover:scale-105 hover:translate-y-2 transition-transform duration-300 ease-in"
                                >
                                    <div className="absolute top-0 left-0 w-full px-4 py-2 bg-orange border-b-2">
                                        <div className='flex justify-between items-center'>
                                            <p className="font-roundo-medium mt-1">Fun Fact About Me</p>

                                            <div className='h-3 w-3 border-2 rounded-full bg-yellow'></div>
                                        </div>
                                    </div>
                                    <p className="italic leading-normal text-lg bg-light-yellow-bg p-8 mt-10 border-2 rounded-md" style={checkerBg}>
                                        I spent a year in Korea teaching little kiddos while immersing myself in K-pop, kimchi, and karaoke adventures.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section >

                    <section className=''>
                        <div className='flex flex-col-reverse items-center lg:flex-row gap-16 relative'>
                            <div className='basis-[40%] relative overflow-hidden w-full md:w-[80%] bg-white rounded-xl'>
                                <div className='h-14 w-full absolute top-0 border-2 bg-charcoal rounded-t-xl z-10 text-white flex items-center justify-between px-6'>
                                    <p className=''>
                                        My Currents
                                    </p>
                                    <div className='flex gap-2 items-center md:gap-4'>
                                        <div className='w-3 md:w-4 h-[2px] bg-light-yellow-bg'></div>
                                        <div className='h-3 w-3 md:h-4 md:w-4 rounded-full bg-yellow'></div>
                                        <div class="relative w-5 h-5">
                                            <div class="absolute top-1/2 left-0 w-full h-[3px] bg-blue rotate-45 origin-center"></div>
                                            <div class="absolute top-1/2 left-0 w-full h-[3px] bg-blue -rotate-45 origin-center"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-14 pb-4 px-8 relative border-2 rounded-xl' style={grain}>
                                    <img src={hobbies} alt="hobbies" />
                                </div>
                            </div>

                            <div className='basis-[60%] w-full'>
                                <div className='py-2 mb-8 border-b border-black border-dashed text-orange'>
                                    <h3>I Also Like</h3>
                                </div>
                                <div className='basis-[60%]'>
                                    <ul className='list-disc px-4 '>
                                        <li>I love hanging out with my 3-year-old niece. She's my doodle inspiration. We spend hours building epic block towers (that she loves to knock down, of course) and laughing along to Peppa Pig episodes. Honestly, she keeps me young and creative </li>

                                        <li>I'm working hard to stay healthy by making yoga and Pilates a regular habit. I've been practicing the crow pose for months. I will nail it eventually. </li>
                                        <li>Yes, I bead. I love hands-on crafts. There’s something so satisfying about turning tiny, colorful beads into something beautiful and unique. It’s my go-to when I need to unplug and create with my hands </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >

        </>
    )
}

export default About
