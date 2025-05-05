import React from "react";
import { FaRegSmile } from "react-icons/fa";
import "./halfCircularProgress.css"; // Adjust path if needed

const HalfCircularProgress = ({
  size = 200,
  strokeWidth = 10,
  progress = 75,
  color = "#0275ff",
  bgColor = "rgba(34, 35, 75,0.6)"
}) => {
  const radius = (size - strokeWidth) / 2;
  const fullCircumference = 2 * Math.PI * radius;
  const halfCircumference = fullCircumference / 2;

  const progressOffset = halfCircumference - (progress / 100) * halfCircumference;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg width={size} height={size / 2}>
        <g transform={`rotate(180, ${size / 2}, ${size / 2})`}>
          {/* Background arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={10}
            strokeDasharray={halfCircumference}
            strokeDashoffset={0}
            strokeLinecap="round"
          />

          {/* Progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={10}
            strokeDasharray={halfCircumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Smile Icon */}
      <div
        className="smile-icon-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // To perfectly center the icon
          fontSize: "30px", // Adjust icon size as needed
          color: "#fff" // Set icon color
        }}
      >
        <FaRegSmile size={20} color="#fff" />
      </div>
    </div>
  );
};

export default HalfCircularProgress;
