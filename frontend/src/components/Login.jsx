import React, { useContext, useEffect, useState} from "react";
import { assets } from "../assets/assets";
import UserContext from "../context/UserContext";
import * as motion from "motion/react-client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, setToken, backendUrl, setUser } =
    useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Backend URL from .env:", backendUrl);
  }, [backendUrl]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/user/login", {
          email,
          password,
        });
  
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
  
          // Store full user data in localStorage
          localStorage.setItem(
            "userData",
            JSON.stringify({ user: data.user, token: data.token })
          );
  
          toast.success(data.message);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/user/register", {
          name,
          email,
          password,
        });
  
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
  
          // Store full user data in localStorage
          localStorage.setItem(
            "userData",
            JSON.stringify({ user: data.user, token: data.token })
          );
  
          setTimeout(() => {
            toast.success(data.message);
          }, 100);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Signup/Login Error:", error);
      toast.error(error.message);
    }
  };
  

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-xs bg-black/30 flex justify-center items-center"
    >
      <form
        onSubmit={onSubmitHandler}
        className="bg-white relative p-10 rounded-xl tex-slate-500"
      >
        <h1 className="text-2xl font-medium text-center text-neutral-700 ">
          {state}
        </h1>
        <p className="text-sm ">Welcome back! Please sign in to continue</p>
        {state !== "Login" && (
          <div className="border border-gray-300 gap-2 px-6 py-2 flex items-center rounded-full mt-5">
            <img src={assets.email_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm"
            />
          </div>
        )}
        <div className="border border-gray-300 gap-2 px-6 py-2 flex items-center rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email id"
            required
            className="outline-none text-sm"
          />
        </div>
        <div className="border border-gray-300 gap-2 px-6 py-2 flex items-center rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm"
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer">
          {state === "Login" ? "Login" : "Create Account"}
        </button>
        {state == "Login" && (
          <p className="text-sm text-center text-stone-500 mt-5">
            Don't have an account?
            <span
              onClick={() => setState("Sign up")}
              className="text-blue-600 cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        )}

        {state !== "Login" && (
          <p className="text-sm text-center text-stone-500 mt-5">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer underline "
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => {
            setShowLogin(false);
          }}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </form>
      <ToastContainer position="top-center" />
    </motion.div>
  );
};

export default Login;
