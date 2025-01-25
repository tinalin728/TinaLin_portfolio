import React from 'react'
import Lottie from "lottie-react";

import wireframe from '../../../public/assets/corevault/wireframe.png'
import design from '../../../public/assets/corevault/design.png'
import lottieEx from '../../../public/assets/corevault/heroAnimation.json'
import lottieEx2 from '../../../public/assets/corevault/expense.json'

function CoreVault() {
    return (
        <>
            <section className=''>
                <div className=''>
                    <div className='py-10 border-b-2 border-light-grey border-dashed content-w'>
                        <h1>Design</h1>
                    </div>
                    <div className='pt-10 content-w'>
                        <div>
                            <h2> Wireframes </h2>

                            <p className='mb-4'>
                                I've always wanted to experiment with design trends like claymorphism and neomorphism, so I took this project as the perfect opportunity.  Inspired by fintech platforms like Revolut and Wise, I aimed for a minimal yet functional design that clearly presents features and pricing.
                            </p>
                            <p> I created simple wireframes to outline the landing page structure, focusing on key elements like features, pricing, and CTAs. This helped ensure a clear and intuitive user flow before diving into the visual design.
                            </p>
                        </div>
                    </div>
                    <div className=' bg-white mt-10 bg-opacity-20 '>
                        <div className='max-w-container max-w-[85rem] py-10'>
                            <img src={wireframe} alt="wireframe" className='object-cover' />
                        </div>
                    </div>

                    <div className='content-w mt-20'>
                        <h2 className=''> Visual Design  </h2>

                        <p className='mb-4'>
                            I created a simple design system to ensure consistency across the CoreVault platform. It includes a cohesive color palette, typography, and UI components that align with the brand's clean and professional aesthetic. This system helped streamline the design process and maintain visual harmony throughout the project </p>
                    </div>

                    <div className=' bg-white mt-10 bg-opacity-20 '>
                        <div className='max-w-container max-w-[40rem] py-10'>
                            <img src={design} alt="design" className='object-cover' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='content-w'>
                <div className='content-gap'>
                    <div className='py-10 border-b-2 border-light-grey border-dashed'>
                        <h1>Turning Design into Life</h1>
                    </div>

                    <div className='mt-10 flex items-center flex-col lg:flex-row'>
                        <div className='flex-1'>
                            <h2>Discovery of Lottie</h2>

                            <p className='mb-4'>
                                Once the design was finalized, I brought it to life using React and TailwindCSS. The component-based approach in React made it easy to build a scalable and maintainable structure, while TailwindCSS helped me implement the design system efficiently. While exploring animation options, I discovered Lottie, which was a game-changer! I was pleased by how effortlessly Lottie allowed me to integrate high-quality animations into my project using lightweight JSON files. The ease of implementation with the lottie-react library made it simple to add dynamic elements without affecting performance. Using Lottie’s scroll-based triggers, I could create engaging, responsive animations that enhanced the user experience while maintaining a smooth development process.

                            </p>
                        </div>
                        <div className='relative flex-1 flex lg:flex-col'>
                            <Lottie animationData={lottieEx} className='mix-blend-luminosity opacity-85 -translate-y-10' />
                            <Lottie animationData={lottieEx2} className='mix-blend-luminosity opacity-85 lg:absolute lg:-bottom-20 lg:left-0 lg:translate-x-[30%] lg:translate-y-2  ' />

                        </div>

                    </div>
                    <div className='content-gap'>
                        <h2>Using GSAP for Animations</h2>

                        <p className='mb-4'>
                            Besides Lottie, I also used GSAP and its ScrollTrigger feature to enhance interactivity with smooth transitions and dynamic effects. GSAP’s powerful animation tools allowed me to create engaging micro-interactions and seamless page transitions, making the user experience more fluid and enjoyable.
                        </p>
                    </div>
                </div>
            </section>

            <section>

            </section>
        </>
    )
}

export default CoreVault
