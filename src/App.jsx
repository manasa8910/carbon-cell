import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Assets from "./components/Assets";
import MarketOverView from "./components/MarketOverView";

function App() {
  return (
    <div className="w-screen h-screen bg-[hsl(0,0%,4%)] overflow-x-hidden ">
      <Navbar />
      <div className="md:ml-[380px] ">
        <Header />
        <MarketOverView />
        <Assets />
      </div>
    </div>
  );
}

export default App;
