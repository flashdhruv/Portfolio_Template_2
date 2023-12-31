import React from 'react'
import Githubicon from '/public/github-icon.svg'
import linkedInIcon from '/public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-64'>
            <div className='text-center mb-4 '>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] max-w-md'>
                I&apos;m currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you.
                </p>
            </div>
            <div className='socials flex flex-row gap-2'>
                <div className='text-center'>
                    <Link href="github.com">
                        <Image src={Githubicon} alt='github icon'/>
                    </Link>
                </div>
                <div className='text-center'>
                    <Link href="linkedin.com">
                        <Image src={linkedInIcon} alt='linkedin Icon' />
                    </Link>
                </div>
            </div>
    </div>

  )
}

export default EmailSection