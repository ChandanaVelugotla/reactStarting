import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValuePoints = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalValue = Math.max(...dataValuePoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
