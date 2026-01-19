import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const PlusIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from SVG
  start = { x: 0.85, y: 0.34 }, // Adjusted to match SVG gradient direction
  end = { x: 0.45, y: 1.2 }, // Adjusted to match SVG gradient direction
  width = 38,
  height = 38,
  strokeWidth = 2.5,
  borderColor = 'none', // Control the border color
  innerStrokeColor = 'white', // Color for the plus sign
}) => (
  <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
    {/* Define the linear gradient */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x * 38} // Scale to viewBox units
        y1={start.y * 38}
        x2={end.x * 38}
        y2={end.y * 38}
        gradientUnits="userSpaceOnUse"
      >
        {colors.map((color, index) => (
          <Stop
            key={index}
            offset={index / (colors.length - 1)} // Distribute stops evenly
            stopColor={color}
          />
        ))}
      </LinearGradient>
    </Defs>

    {/* Circle with gradient fill */}
    <Path
      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />

    {/* Vertical line of the plus sign */}
    <Path
      d="M24 16V32"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Horizontal line of the plus sign */}
    <Path
      d="M16 24H32"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlusIcon;