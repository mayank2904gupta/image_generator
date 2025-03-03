import React from "react";
import {Route,Routes} from "react-router-dom"
import BuyCredits from "./pages/BuyCredits";
import Home from "./pages/Home";
import Result from "./pages/Result";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/buy" element={<BuyCredits/>} />
      </Routes>
    </div>
  );
};

export default App;
