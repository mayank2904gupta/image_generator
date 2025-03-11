import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const PlanCard = ({plan}) => {
    const{user}=useContext(UserContext)
  return (
    <div className='flex flex-col border border-gray-200 drop-shadow-sm px-8 py-12 rounded-lg hover:scale-105 transition-105 duration-500 text-gray-600'>
      <img src={assets.logo_icon} alt="" className='w-8 md:w-6 my-3'/>
      <h1 className='text-2xl md:text-lg font-medium text-gray-700'>{plan.id}</h1>
      <p className= 'text-sm mt-1'>{plan.desc}</p>
      <p className='mt-6'><span className='text-3xl font-medium' >${plan.price}</span>/ {plan.credits} credits</p>
      <button className='text-white bg-zinc-900 rounded-md py-2.5 mt-8  min-w-52 cursor-pointer w-full '>{!user?'Get started':'Purchase'}</button>
    </div>
  )
}

export default PlanCard
