import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-30 sm:w-32 lg:w-40 " />
      </Link>
      {user ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="bg-blue-100 rounded-full cursor-pointer text-sm px-5 py-1.5 sm:px-6 sm:py-2 flex  items-center gap-2 hover:scale-105 transition-all duration-700">
            <img src={assets.credit_star} alt="credit" className="w-5" />
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              Credits left: 4
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden pl-4">Hi! Mayank</p>
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="profile_icon"
              className="w-8 sm:w-10 drop-shadow"
            />
            <div className="absolute hidden rounded group-hover:block top-0 right-0 z-10 pt-12 text-black">
              <ul className="bg-white p-1 text-sm m-0 rounded-md list-none border">
                <li className="px-2 py-1 pr-10 cursor-pointer ">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 sm:gap-5 ">
          <p className="cursor-pointer" onClick={()=>{navigate('/buy')}}>Pricing</p>
          <button className="bg-zinc-800 text-white rounded-full px-7 py-2 sm:px-10 text-sm cursor-pointer">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
