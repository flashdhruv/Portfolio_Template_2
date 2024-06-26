"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'

const HeroSection = () => {
    const handleDownload = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
        const resumeUrl = 'public/resume/ResumeNovember.pdf';
        
        window.open(resumeUrl, '_blank');
        };
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400'>
                        Hello, I&apos;m {""}
                    </span>
                    
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Dhruv',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            1000,
                            'Software Engineer',
                            1000,
                            'Tech Enthusiast',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                {/* <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod     tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                <div>
                    {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-200 text-white'>Hire Me</button> */}
                    <a href='/resume/ResumeNovember.pdf' target="_blank" rel="noopener noreferrer">
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                    src='/images/hero-image-male.png'
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection