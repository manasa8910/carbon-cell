import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { CgOrganisation } from "react-icons/cg";
import { GrCube } from "react-icons/gr";
import { LuArrowDownUp } from "react-icons/lu";
import { PiHourglass } from "react-icons/pi";
import { PiWalletLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <GiHamburgerMenu
        onClick={handleMenuClick}
        className="md:hidden cursor-pointer absolute top-0 right-0 text-white m-10  text-4xl z-20"
      />
      <div
        className={` md:block w-screen md:w-[380px] h-screen fixed z-10 top-0 transition-all duration-200 
      bg-[#1A1E1C] md:left-0 rounded-r-2xl text-white ${
        isOpen ? "right-0" : "-right-full"
      } `}
      >
        <div className=" flex flex-col gap-5 mx-5">
          <img src="/logo.png" className="w-[200px]  pt-5" alt="logo" />
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search"
              className=" w-full font-bold rounded-md py-2 px-4 pl-10  focus:outline-none placeholder-white focus:border-blue-500 bg-[#333333]"
            />
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2  text-xl" />
          </div>

          {/* Navigation Tabs */}
          <div className="ml-7 text-lg flex flex-col gap-4 mt-4">
            <div
              className={`flex gap-5 items-center cursor-pointer ${
                activeTab === "Home" ? "text-green-500" : ""
              }`}
              onClick={() => handleTabClick("Home")}
            >
              <LuHome />
              <p>Home</p>
            </div>
            <div
              className={`flex gap-5 items-center cursor-pointer ${
                activeTab === "Organisation" ? "text-green-500" : ""
              }`}
              onClick={() => handleTabClick("Organisation")}
            >
              <CgOrganisation />
              <p>Organisation</p>
            </div>{" "}
            <div
              className={`flex gap-5 items-center cursor-pointer ${
                activeTab === "Assets" ? "text-green-500" : ""
              }`}
              onClick={() => handleTabClick("Assets")}
            >
              <GrCube />
              <p>Assets</p>
            </div>{" "}
            <div
              className={`flex gap-5 items-center cursor-pointer ${
                activeTab === "Trade" ? "text-green-500" : ""
              }`}
              onClick={() => handleTabClick("Trade")}
            >
              <LuArrowDownUp />
              <p>Trade</p>
            </div>{" "}
            <div
              className={`flex gap-5 items-center cursor-pointer ${
                activeTab === "History" ? "text-green-500" : ""
              }`}
              onClick={() => handleTabClick("History")}
            >
              <PiHourglass />
              <p>History</p>
            </div>
            <div
              className={`flex gap-5 items-center cursor-pointer ${
                activeTab === "Wallet" ? "text-green-500" : ""
              }`}
              onClick={() => handleTabClick("Wallet")}
            >
              <PiWalletLight />
              <p>Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
