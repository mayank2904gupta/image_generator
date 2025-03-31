import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import BuyCredits from "./pages/BuyCredits";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import UserContext from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Testing from "./pages/Testing";

const App = () => {
  const { showLogin, backendUrl } = useContext(UserContext);
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex flex-col px-4 min-h-screen sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50">
        <Navbar />
        {showLogin && <Login />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/buy" element={<BuyCredits />} />
            <Route path="/hello" element={<Testing/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
