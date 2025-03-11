import React from 'react'
import { testimonialsData } from '../assets/assets'
import TestimonialCard from '../cards/TestimonialCard'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <h1 className='text-3xl font-medium'>Customer Testimonials</h1>
      <p className='text-sm text-stone-500 mt-2'>What Our Users Are Saying</p>
      <div className='flex flex-col md:flex-row gap-6 p-16 items-center'>
      {testimonialsData.map((testimonial,index)=>(
        <TestimonialCard key={index} testimonial={testimonial}/>
      ))}
      </div>
    </div>
  )
}

export default Testimonials
