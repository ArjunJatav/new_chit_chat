import React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ArrowIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from SVG
  start = { x: 0.85, y: 0.34 }, // Adjusted to match SVG gradient direction
  end = { x: 0.45, y: 1.2 }, // Adjusted to match SVG gradient direction
  width = 35,
  height = 35,
  strokeWidth = 1.5,
  borderColor = 'none', // Control the border color
  innerStrokeColor = 'white', // Color for the internal paths
  diagonalOpacity = 0.34, // Opacity for the diagonal line
}) => (
  <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
    {/* Define the linear gradient */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x * 35} // Scale to viewBox units
        y1={start.y * 35}
        x2={end.x * 35}
        y2={end.y * 35}
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

    {/* Rounded square with gradient fill */}
    <Rect
      width="48"
      height="48"
      rx="24"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />

    {/* Rotated rectangular path with white stroke */}
    <Path
      d="M19.7835 18.7935L27.566 16.1993C31.0585 15.0351 32.956 16.9418 31.801 20.4343L29.2069 28.2168C27.4652 33.451 24.6052 33.451 22.8635 28.2168L22.0935 25.9068L19.7835 25.1368C14.5494 23.3951 14.5494 20.5443 19.7835 18.7935Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Diagonal line with reduced opacity */}
    <Path
      d="M22.2676 25.5125L25.5492 22.2217"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={diagonalOpacity}
    />
  </Svg>
);

export default ArrowIcon;