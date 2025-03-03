import React from "react";
import { Route, Routes } from "react-router-dom";
import BuyCredits from "./pages/BuyCredits";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      {/* all pages padding and background css */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredits />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
};

export default App;
