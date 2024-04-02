import React from "react";

function Recent() {
  return (
    <div className="rounded w-[300px] lg:w-[350px] my-7 m-auto md:ml-7   p-5 bg-[rgb(26,30,28)] text-white">
      <h2 className="text-center">In Recent Posts</h2>
      <div className="border-[1px] border-gray-600 my-4"></div>
      <img src="/recent.png" className="w-[300px]" alt="" />

      <div className="border-[1px] border-gray-600 my-4"></div>
      <div className="bg-[#2AB42A]  mx-5 px-3 py-1  text-center rounded">
        Follow us on x
      </div>
    </div>
  );
}

export default Recent;
