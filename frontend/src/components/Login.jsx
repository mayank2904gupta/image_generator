import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
    const [state,setState]=useState('Sign up')
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-xs bg-black/30 flex justify-center items-center">
      <form className="bg-white relative p-10 rounded-xl tex-slate-500">
        <h1 className="text-2xl font-medium text-center text-neutral-700 ">{state}</h1>
        <p className="text-sm ">Welcome back! Please sign in to continue</p>
        {state!=='Login' && <div className="border border-gray-300 gap-2 px-6 py-2 flex items-center rounded-full mt-5">
            <img src={assets.email_icon} alt="" />
          <input type="text" placeholder="Full Name" required className="outline-none text-sm"/>
        </div>}
        <div className="border border-gray-300 gap-2 px-6 py-2 flex items-center rounded-full mt-5">
            <img src={assets.email_icon} alt="" />
          <input type="email" placeholder="Email id" required className="outline-none text-sm"/>
        </div>
        <div className="border border-gray-300 gap-2 px-6 py-2 flex items-center rounded-full mt-4">
            <img src={assets.lock_icon} alt="" />
          <input type="password" placeholder="Password" required className="outline-none text-sm"/>
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot password?</p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer">{state === 'Login' ? "Login":"Create Account"}</button>
        {state=='Login' && <p className="text-sm text-center text-stone-500 mt-5">Don't have an account?<span onClick={()=>setState('Sign up')}  className="text-blue-600 cursor-pointer underline">Sign up</span></p>}

        {state!=='Login' && <p className="text-sm text-center text-stone-500 mt-5">Already have an account?<span onClick={()=>setState('Login')} className="text-blue-600 cursor-pointer underline ">Login</span></p>}

        <img src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer"/>
      </form>
    </div>
  );
};

export default Login;
