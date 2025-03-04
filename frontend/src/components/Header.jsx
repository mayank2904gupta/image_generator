import React from 'react'
import {assets} from "../assets/assets"

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center my-20'>
      <div className='inline-flex  rounded-full border border-gray-500 px-6 py-1.5 gap-2 text-sm text-stone-500 bg-white'>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt=''/>
      </div >
      <div className='max-w-[400px] text-4xl sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'><h1>Turn text to <span className='text-blue-500'>image</span>, in seconds.</h1></div>
      <div className='mx-auto text-center max-w-[500px] mt-5 text-stone-700'>
        <p>Unleash your creativity with AI. Turn your imagination into visual art in seconds — just type, and watch the magic happen.</p>
      </div>
      <button className='flex sm:text-lg text-white bg-black rounded-full px-12 py-2.5 mt-8 gap-2 w-auto items-center'>Generate Images <img src={assets.star_group}  alt="" className='h-6'/></button>
      <div className="flex flex-wrap gap-3 mt-16 items-center justify-center text-center">
      {Array(6).fill(null).map((_, index) => (
        <img src={index%2==0?assets.sample_img_1:assets.sample_img_2} alt='' key={index} width={70} className='rounded hover:scale-105 transition-all duration-300 max-sm:w-10 cursor-pointer'/>
      ))}
      </div>
      <div className='mx-auto text-center max-w-[220px] text-sm text-neutral-600 mt-3'>
        <p>Generated images from imagify</p>
      </div>
    </div>
  )
}

export default Header
