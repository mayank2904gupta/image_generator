import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser , showLogin , setShowLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
