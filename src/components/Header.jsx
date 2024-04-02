import React from "react";

function Header() {
  return (
    <div className="max-w-[1200px] h-min flex justify-between items-center  text-white m-7">
      <div>
        <p className="text-4xl mr-10">
          Hello, <span className="gradient-text">Brooklyn Simmons</span>👋
        </p>
        <p className="text-2xl pt-2">
          Welcome to <span className="text-green-500">Spot trading !</span>
        </p>
      </div>
      <div className="hidden md:block bg-[#2AB42A] font-semibold px-5  py-3 rounded-md h-min cursor-pointer">
        Start trading
      </div>
    </div>
  );
}

export default Header;
