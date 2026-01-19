import React from 'react';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const LocationPinIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from SVG
  start = { x: 0.936, y: 0.539 }, // Normalized from x1="32.76" y1="18.8672" x2="14.3096" y2="33.7931"
  end = { x: 0.409, y: 0.966 }, // Normalized for gradient direction
  width = 35,
  height = 35,
  strokeWidth = 1.5,
  borderColor = 'none', // Control the border color
  innerStrokeColor = 'white', // Color for the internal lines
}) => (
  <Svg width={width} height={height} viewBox="0 0 35 35" fill="none">
    {/* Define the linear gradients */}
    <Defs>
      <LinearGradient
        id="gradient0"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
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
      <LinearGradient
        id="gradient1"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
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

    {/* Outer circle with gradient fill and 0.3 opacity */}
    <Rect
      x="0"
      y="0"
      width="35"
      height="35"
      rx="17.5"
      fill="url(#gradient0)"
      fillOpacity="0.3"
      stroke={borderColor}
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />

    {/* Inner circle with gradient fill */}
    <Rect
      x="6"
      y="6"
      width="23.8"
      height="23.8"
      rx="11.9"
      fill="url(#gradient1)"
      stroke={borderColor}
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />

    {/* Internal small circle */}
    <Path
      d="M17.5003 18.3941C18.5772 18.3941 19.4503 17.5211 19.4503 16.4441C19.4503 15.3672 18.5772 14.4941 17.5003 14.4941C16.4233 14.4941 15.5503 15.3672 15.5503 16.4441C15.5503 17.5211 16.4233 18.3941 17.5003 18.3941Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
    />

    {/* Internal bell-like shape */}
    <Path
      d="M12.2621 15.3063C13.4933 9.89375 21.5121 9.9 22.7371 15.3125C23.4558 18.4875 21.4808 21.175 19.7496 22.8375C18.4933 24.05 16.5058 24.05 15.2433 22.8375C13.5183 21.175 11.5433 18.4813 12.2621 15.3063Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </Svg>
);

export default LocationPinIcon;