import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='relative'>
      <div className='w-full h-[400px] sm:h-[400px] lg:h-[625px] mt-14'>
        <Image
        src="/image/HeroSection.jpg"
        alt="HeroSection"
        fill={true} 
        className='object-cover'/>
      </div>
      <div className='relative container'>
        <div className='justify-center items-center absolute w-[200px] sm:w-[400px] lg:w-[600px] h-[155px] sm:h-[255px] lg:h-[370px] text-white bg-blue-400 -top-24 sm:-top-32 lg:-top-60 left-2 lg:left-20 sm:p-10 p-4 flex flex-col gap-8'>
          <div className='lg:text-6xl sm:text-5xl text-xl font-semibold'>
          <h1 className='lg:leading-[75px]'>Aplikasi Enkripsi Dekripsi Algoritma RC4</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
