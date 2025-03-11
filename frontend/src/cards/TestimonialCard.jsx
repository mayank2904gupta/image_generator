import React from 'react'
import { assets } from '../assets/assets'

const TestimonialCard = ({testimonial}) => {
  return (
    <div className='flex flex-col border border-gray-200 shadow rounded-lg items-center p-5 bg-white/20 hover:scale-[1.02] cursor-pointer transition-all duration-200'>
      <img src={testimonial.image} alt="" className='mt-5 p-2 w-14' />
      <h1 className='text-xl font-medium'>{testimonial.name}</h1>
      <h1 className='text-sm'>{testimonial.role}</h1>
      <div className='flex gap-1 my-3'>{Array(testimonial.stars).fill(null).map((_,index)=>(
        <img key={index} src={assets.rating_star} alt=''/>
      ))}</div>
      <p className='text-sm text-stone-500 text-center px-10 py-5'>{testimonial.text}</p>
    </div>
  )
}

export default TestimonialCard
