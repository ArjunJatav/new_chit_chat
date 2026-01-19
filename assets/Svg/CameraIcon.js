import React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const CameraIcon = ({
  colors = ['#56BDCC', '#5491F4'], // Default gradient colors from SVG
  start = { x: 1.06, y: 0.09 }, // Adjusted to match SVG gradient direction
  end = { x: 0.53, y: 1.08 }, // Adjusted to match SVG gradient direction
  width = 38,
  height = 38,
  strokeWidth = 1.2, // Default for internal paths
  borderStrokeWidth = 2, // Default for circle border
  borderColor = 'white', // Default border color for circle
  innerStrokeColor = 'white', // Color for internal paths
}) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
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

    {/* Main circle with gradient fill and border */}
    <Circle
      cx="16"
      cy="16"
      r="15"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Border color
      strokeWidth={borderColor === 'none' ? 0 : borderStrokeWidth}
    />

    {/* Rectangular path with rounded corners */}
    <Path
      d="M19.7824 12.7837H18.2936L17.7974 11.2949H13.8273L13.3311 12.7837H11.8423C11.4474 12.7837 11.0688 12.9405 10.7896 13.2197C10.5104 13.4989 10.3535 13.8776 10.3535 14.2725V19.7313C10.3535 20.1261 10.5104 20.5048 10.7896 20.784C11.0688 21.0632 11.4474 21.2201 11.8423 21.2201H19.7824C20.1772 21.2201 20.5559 21.0632 20.8351 20.784C21.1143 20.5048 21.2712 20.1261 21.2712 19.7313V14.2725C21.2712 13.8776 21.1143 13.4989 20.8351 13.2197C20.5559 12.9405 20.1772 12.7837 19.7824 12.7837Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Inner circle */}
    <Path
      d="M15.8112 19.2357C16.9075 19.2357 17.7962 18.347 17.7962 17.2507C17.7962 16.1544 16.9075 15.2656 15.8112 15.2656C14.7149 15.2656 13.8262 16.1544 13.8262 17.2507C13.8262 18.347 14.7149 19.2357 15.8112 19.2357Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Short horizontal line */}
    <Path
      d="M15.3164 13.2812H16.3089"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CameraIcon;