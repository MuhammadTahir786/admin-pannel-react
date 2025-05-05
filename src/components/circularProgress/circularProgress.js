import React from 'react';
import './circularProgress.css'; // Adjust path if needed
const CircularProgressBar = ({ progress = 50 }) => {
  const size = 150; // Size of SVG
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* SVG Circle */}
        <svg width={size} height={size}>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            stroke="#3b82f6"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>

        {/* Text content centered in circle */}
        <div 
         className='progress-text-container'
        >
          <p className="circular-progress-text">Safety</p>
          <p className="circular-progress-value">{progress}%</p>
          <p className="circular-progress-text">Total Score</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
