import React, { useEffect, useState } from "react";
import { BsSun, BsInfoCircle } from "react-icons/bs";

function Assets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const resData = await res.json();
      setData(Object.values(resData.bpi));
    }
    fetchData();
  }, []);

  const generateShadesOfGreen = (count) => {
    const baseColor = 100; // Initial green color (lighter shade)
    const step = Math.floor((255 - baseColor) / count);
    const shades = [];
    for (let i = 0; i < count; i++) {
      const shadeValue = baseColor + step * i;
      const shade = `rgb(0, ${shadeValue}, 0)`;
      shades.push(shade);
    }
    return shades;
  };

  const shadesOfGreen = generateShadesOfGreen(data.length);

  return (
    <>
      <div className="text-white ml-7">Assets</div>

      <div className="flex flex-col md:flex-row gap-10 m-7">
        {data.map((card, index) => (
          <div
            key={card.code}
            className="w-[270px]  p-5 rounded-lg text-white  bg-[#1A1E1C] flex flex-col gap-3"
          >
            <div className="flex gap-5 items-center text-xl">
              <BsSun
                style={{ backgroundColor: shadesOfGreen[index] }}
                className=" rounded-full w-12 p-[10px] h-full "
              />
              <div>{card.code}</div>
            </div>
            <div className=" text-gray-400">{card.description}</div>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">
                {card.rate}
                <span dangerouslySetInnerHTML={{ __html: card.symbol }}></span>
              </div>
              <div className="text-gray-400">+11.01% ↝ </div>
            </div>
            <div className="flex justify-between items-center">
              <BsInfoCircle
                className="text-2xl font-semibold"
                style={{ color: shadesOfGreen[index] }}
              />

              <div
                style={{ backgroundColor: shadesOfGreen[index] }}
                className="font-semibold px-3 cursor-pointer  py-1 rounded h-min"
              >
                Trade
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Assets;
