import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const logout =()=>{
    localStorage.removeItem("token")
    setUser(null)
    setToken("")
  }

  // const generateImage = async (prompt)=>{
  //   try{
  //     const {data} = await axios.post(backendUrl +"/generate-image",{prompt}, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     if (data.success){
  //        getUserCredits()
  //        return data.image_url
  //     }else{
  //       getUserCredits()
  //       if()
  //     }
  //   }catch(error){
  //     toast.error(error.message)
  //   }
  // }

  const getUserCredits = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/credits", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setCredit(data.creditsBalance)
        console.log(data)
      }else {
        toast.error(data.message)
      }
      
    } catch (error){
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    if(token)getUserCredits()
  },[token])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showLogin,
        setShowLogin,
        token,
        setToken,
        backendUrl,
        credit,
        setCredit,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
