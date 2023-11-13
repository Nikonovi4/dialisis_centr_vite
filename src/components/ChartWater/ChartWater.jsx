/* eslint-disable react/prop-types */
import "./ChartWater.scss";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const ChartWater = ({
  dates,
  val,
  isChartName,
  setChartObject,
  setChartDates,
  setChartValues,
  setChartName,
}) => {
  const data = {
    labels: dates,
    datasets: [
      {
        label: isChartName,
        data: val,
        borderColor: "red",
        lineTension: 0.4,
        borderWidth: 2,
        backgroundColor: "red",
        fill: false,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    redraw: true,
    plugins: {
      legend: {
        labels: {
          boxWidth: 30,
          boxHeight: 2,
        },
      },
    },
  };

  const closeChart = () => {
    setChartObject();
    setChartDates();
    setChartValues();
    setChartName();
  };

  return (
    <div className={isChartName ? "chart" : "chart_invisible"}>
      <Line data={data} options={options} />
      <button className="chart__close-button" onClick={closeChart} />
    </div>
  );
};

export default ChartWater;
