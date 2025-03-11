import React from "react";
import { Route, Routes } from "react-router-dom";
import BuyCredits from "./pages/BuyCredits";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
import UserContextProvider from "./context/UserContextProvider";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <UserContextProvider>
      <div className="flex flex-col px-4 min-h-screen sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50">
        <Navbar />
        <Login/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/buy" element={<BuyCredits />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserContextProvider>
  );
};

export default App;
