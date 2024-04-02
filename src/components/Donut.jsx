import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const DonutChart = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);
  const data = [27, 50, 5, 35];
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const ctx = chartRef.current.getContext("2d");

    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["USDT", "NBST", "EFT", "WET"],
        datasets: [
          {
            //label: "Donut Chart",
            data: data,
            backgroundColor: ["#006b05", "#00b22a", "#90ec7c", "#c2ffc3"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: {
            position: "bottom", // Display legend below the chart
          },
        },
      },
    });

    // Clean up on unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]); // Only re-run the effect if chartInstance changes

  return (
    <div className="rounded w-[300px] lg:w-[250px] m-auto my-7 md:ml-7 lg:ml-0  p-5 bg-[rgb(26,30,28)] text-white">
      <h2 className="text-center">Wallet Balance</h2>
      <div className="border-[1px] border-gray-600 mb-2 md:mb-0 mt-2"></div>
      <div>
        <canvas ref={chartRef} className="" />
      </div>
      <div className="border-[1px] border-gray-600 mb-4"></div>
      <div className="bg-[#2AB42A]  mx-5 px-3 py-1  text-center rounded">
        Manage Wallet
      </div>
    </div>
  );
};

export default DonutChart;

//        labels: ["USDT", "NBST", "EFT", "WET"],
//            data: [25, 25, 25, 25],
