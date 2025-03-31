import { useCallback, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const login = useCallback((user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("userData", JSON.stringify({ user, token }));
    console.log("user logged in ", { user, token });
  }, []);

  const logout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      login(storedData.user, storedData.token);
    }
  }, []);

  // 🔹 Generate Image
  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/generate-image",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      getUserCredits();
      if (data.success) return data.image_url;
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
      navigate("/buy");
    }
  };

  // 🔹 Fetch User Credits
  const getUserCredits = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/user/credits", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setCredit(data.creditsBalance);
        console.log(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) getUserCredits();
  }, [token]);

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
        logout,
        generateImage,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
