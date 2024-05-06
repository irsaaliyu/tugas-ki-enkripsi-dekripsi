import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center lg:my-32 my-16'>
      <div className='flex flex-row lg:gap-20'>
        <div className='lg:w-[350px] sm:w-[300px] w-[150px] mt-20'>
          <p className='lg:text-3xl sm:text-xl text-xs lg:mt-0 sm:-mt-10 -mt-20'>
          &quot;Technology breeds crime and we are constantly trying to develop technology to stay one step ahead of the person trying to use it negatively.&quot; — Frank Abagnale

          </p>
        </div>
        <div className='relative lg:w-[528px] lg:h-[564px] sm:w-[328px] sm:h-[364px] w-[124px] h-[142px] rounded-md'>
          <Image
          src="/image/foto4.jpg"
          alt="About"
          fill={true}
          className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default About
