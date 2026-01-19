import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Welcome = ({
  colors = ['#48B8C7'], // Default stroke color from SVG
  start = { x: 0, y: 0 }, // Default for gradient (not used if single color)
  end = { x: 1, y: 0 }, // Default for gradient (not used if single color)
  width = 15,
  height = 15,
  strokeWidth = 1.2, // Match SVG stroke-width
  borderColor = 'none', // Control the border color (not used here)
  innerStrokeColor = '#48B8C7', // Stroke color for paths
}) => (
  <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
    {/* Define the linear gradient for strokes (used if multiple colors provided) */}
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

    {/* Semicircle */}
    <Path
      d="M11.5625 7.5C11.5625 5.25625 9.74375 3.4375 7.5 3.4375C5.25625 3.4375 3.4375 5.25625 3.4375 7.5"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Markers (diagonal lines, vertical line, horizontal lines) */}
    <Path
      d="M3.11874 3.11874L3.03749 3.03749M11.8813 3.11874L11.9625 3.03749L11.8813 3.11874ZM7.5 1.29999V1.25V1.29999ZM1.30001 7.5H1.25H1.30001ZM13.75 7.5H13.7H13.75Z"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* First horizontal bar */}
    <Path
      d="M2.5 9.375H12.5"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second horizontal bar */}
    <Path
      d="M3.75 11.25H11.25"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Third horizontal bar */}
    <Path
      d="M5.625 13.125H9.375"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Welcome;