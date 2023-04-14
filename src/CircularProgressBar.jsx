import React from "react";

export default function CircularProgressBar({ percentage, circleWidth }) {
  const radius = 85;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
        />
      </svg>
    </div>
  );
}
