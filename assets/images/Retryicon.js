import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Retryicon = ({
  colors = ['#4FA1E2'], // Default solid fill color from SVG
  start = { x: 0, y: 0 }, // Default for gradient (not used if single color)
  end = { x: 1, y: 0 }, // Default for gradient (not used if single color)
  width = 21,
  height = 18,
  strokeWidth = 0, // No stroke in original SVG
  borderColor = 'none', // Control the border color
  opacity = 0.9, // Match SVG opacity
}) => (
  <Svg width={width} height={height} viewBox="0 0 21 18" fill="none">
    {/* Define the linear gradient (used if multiple colors provided) */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        gradientUnits="userSpaceOnUse"
      >
        {colors.map((color, index) => (
          <Stop
            key={index}
            offset={index / (colors.length - 1) || 0} // Single color or distributed stops
            stopColor={color}
          />
        ))}
      </LinearGradient>
    </Defs>

    {/* Clock path */}
    <Path
      d="M11.995 0C7.02 0 3 4.03 3 9H0L3.895 12.895L3.965 13.04L8 9H5C5 5.135 8.135 2 12 2C15.865 2 19 5.135 19 9C19 12.865 15.865 16 12 16C10.065 16 8.32 15.21 7.055 13.945L5.64 15.36C7.265 16.99 9.51 18 11.995 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 11.995 0ZM11 5V10L15.28 12.54L16 11.325L12.5 9.25V5H11Z"
      fill="url(#gradient)"
      fillOpacity={opacity}
      stroke={borderColor}
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />
  </Svg>
);

export default Retryicon;