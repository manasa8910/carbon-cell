import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function MarketOverView() {
  const [data, setData] = useState([]);
  const chartContainer = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const resData = await res.json();
      setData(resData.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (chartContainer && chartContainer.current && data.length > 0) {
      const ctx = chartContainer.current.getContext("2d");
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((item) => item.Year),
          datasets: [
            {
              label: "Population (in Millions)",
              data: data.map((item) => item.Population / 1000000),
              borderColor: "#10A25E",
              tension: 0.5,
              fill: false,
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  var label = "";
                  if (context.parsed.y !== null) {
                    label += "Population: " + context.parsed.y.toFixed(2) + "M";
                  }
                  return label;
                },
              },
            },
          },
          interaction: {
            intersect: false,
            mode: "nearest",
            axis: "x",
          },
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
            },
          },
        },
      });

      // Save the chart instance to the ref
      chartRef.current = chart;

      return () => chart.destroy();
    }
  }, [data]);

  return (
    <>
      <div className="md:w-1/2 w-2/3 m-7 bg-[#1A1E1C] p-5 rounded-lg flex flex-col text-white">
        <div className="flex items-center">
          <h2 className="flex-1">Market Overview</h2>
          <p className="text-sm  mx-2">NBST</p>
          <p className="text-sm text-gray-600 mx-2">EFT</p>
          <p className="text-sm text-gray-600 mx-2">WPCT</p>
          <p className="text-sm text-gray-600 mx-2">RET</p>
          <p className="text-sm text-gray-600 mx-2">WET</p>
        </div>
        <div className="border-[1px] border-gray-600 my-2"></div>

        <canvas ref={chartContainer}></canvas>
        <div className="border-[1px] border-gray-600 my-2"></div>
        <div className="flex mt-2 justify-between">
          <p className="inline-block max-sm:text-sm">
            Get in depth charts in Trade
          </p>
          <button className="px-3 py-1 block bg-[#2AB42A] text-black rounded">
            Trade
          </button>
        </div>
      </div>
    </>
  );
}

export default MarketOverView;
