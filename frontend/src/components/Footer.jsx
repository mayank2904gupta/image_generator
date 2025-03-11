import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-3 mt-20 flex items-center gap-4 justify-between '>
        <div className='flex items-center gap-2'>
        <Link to="/">
        <img src={assets.logo} alt="logo" className='h-8'/>
      </Link>
      <p className='text-stone-400 text-sm flex-1 pl-5 ml-5 border-l border-stone-500'>Copyright @imagify | All right reserved. </p>
      </div>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt=""  width={35}/>
        <img src=
        {assets.instagram_icon} alt="" width={35} />
        <img src={assets.twitter_icon} alt="" width={35} />
      </div>
    </div>
  )
}

export default Footer
