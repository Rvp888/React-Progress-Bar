import React from 'react';

export default function CircularProgressBar({ percentage, circleWidth }) {
  return (
    <div>
      <svg width={circleWidth} height={circleWidth} ></svg>
    </div>
  )
}
