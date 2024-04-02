import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Assets from "./components/Assets";
import MarketOverView from "./components/MarketOverView";
import DoughnutChart from "./components/Donut";
import Recent from "./components/Recent";

function App() {
  return (
    <div className="w-screen h-screen bg-[hsl(0,0%,4%)] overflow-x-hidden ">
      <Navbar />
      <div className="md:ml-[350px] ">
        <Header />
        <div className="flex flex-col lg:flex-row w-full h-full">
          <MarketOverView />
          <DoughnutChart />
          <Recent />
        </div>
        <Assets />
      </div>
    </div>
  );
}

export default App;
