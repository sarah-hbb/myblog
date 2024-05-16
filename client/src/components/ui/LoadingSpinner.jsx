import { PiSpinnerGapThin } from "react-icons/pi";

import React from "react";

const LoadingSpinner = ({ size, className }) => {
  return (
    <PiSpinnerGapThin
      className={`${className} ${
        size === "small" ? "text-2xl" : "text-6xl"
      }  text-cyan-800 animate-spin self-center`}
    />
  );
};

export default LoadingSpinner;
