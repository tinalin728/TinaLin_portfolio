import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import SocialMediaBtn from '../components/buttons/SocialMediaBtn'
import coffee from '../assets/images/coffee.png'
import smile from '../assets/images/smile-face.svg'


function Footer() {
    return (
        <footer className='pt-[6rem]'>
            <div className='max-w-container relative'>
                {/* <div className='absolute top-0 right-[10%]'>
                    <img src={smile} alt="" width={90} />
                </div> */}
                <span className='footer-header '> Let's talk about


                    <div className='relative overflow-hidden h-[65px] leading-[65px] md:h-[95px] md:leading-[95px] lg:h-[112px] lg:leading-[112px]'>
                        <span className='relative animation-text md:animation-text-md lg:animation-text-lg text-orange'>
                            Design <br />
                            Code <br />
                            Ideas <br />
                            Collabs <br />
                        </span>
                    </div>

                </span>

                <h5 className='mt-12 max-w-[65rem] font-roundo'> I would love to hear from you! Feel free to reach out to me about anything and let’s get creative together!</h5>

                <div className='text-xl flex gap-4 my-16 flex-wrap'>
                    <SocialMediaBtn
                        href='https://www.linkedin.com/in/tina-lin-000613b5/'
                        icon={faLinkedinIn}
                    />
                    <SocialMediaBtn
                        href='https://github.com/tinalin728'
                        icon={faGithub}
                    />
                    <SocialMediaBtn
                        href='mailto:yuting.lin728@gmail.com'
                        type='text'
                        text='yuting.lin728@gmail.com'
                    />

                </div>

                <div className='h-[1px] w-full bg-dark-grey rounded-full'></div>

                <div className='flex items-center flex-col md:flex-row md:justify-between font-roundo py-4'>
                    <div className='flex items-center gap-2'>
                        <img src={coffee} alt="coffee illustration" width={40} />
                        <span className='text-sm'>Made with shots of expresso</span>
                    </div>
                    <span className='text-sm'>&copy; 2024 Tina Lin</span>
                </div>
            </div >
        </footer >

    )
}

export default Footer
