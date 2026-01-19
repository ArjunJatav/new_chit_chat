import React from 'react';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const AllUser = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from SVG
  start = { x: 0.936, y: 0.539 }, // Normalized from x1="23.4" y1="13.4766" x2="10.2212" y2="24.138"
  end = { x: 0.409, y: 0.966 }, // Normalized for gradient direction
  width = 25,
  height = 25,
  strokeWidth = 1.1, // Match SVG stroke-width
  borderColor = 'none', // Control the border color
  innerStrokeColor = 'white', // Color for the internal lines
}) => (
  <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
    {/* Define the linear gradient */}
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
            offset={index / (colors.length - 1)} // Distribute stops evenly
            stopColor={color}
          />
        ))}
      </LinearGradient>
    </Defs>

    {/* Background rounded rectangle with gradient fill */}
    <Rect
      x="0"
      y="0"
      width="25"
      height="25"
      rx="6"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />

    {/* First face head */}
    <Path
      d="M10.5793 11.4351C10.5293 11.4301 10.4693 11.4301 10.4143 11.4351C9.2243 11.3951 8.2793 10.4201 8.2793 9.22006C8.2793 7.99506 9.2693 7.00006 10.4993 7.00006C11.7243 7.00006 12.7193 7.99506 12.7193 9.22006C12.7143 10.4201 11.7693 11.3951 10.5793 11.4351Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second face head */}
    <Path
      d="M14.2056 7.99994C15.1756 7.99994 15.9556 8.78494 15.9556 9.74994C15.9556 10.6949 15.2056 11.4649 14.2706 11.4999C14.2306 11.4949 14.1856 11.4949 14.1406 11.4999"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* First face body */}
    <Path
      d="M8.07938 13.2799C6.86937 14.0899 6.86937 15.4099 8.07938 16.2149C9.45438 17.1349 11.7094 17.1349 13.0844 16.2149C14.2944 15.4049 14.2944 14.0849 13.0844 13.2799C11.7144 12.3649 9.45938 12.3649 8.07938 13.2799Z"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second face body */}
    <Path
      d="M15.1699 16.0001C15.5299 15.9251 15.8699 15.7801 16.1499 15.5651C16.9299 14.9801 16.9299 14.0151 16.1499 13.4301C15.8749 13.2201 15.5399 13.0801 15.1849 13.0001"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AllUser;