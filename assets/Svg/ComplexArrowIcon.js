import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ComplexArrowIcon = ({
  colors = ['#56BDCC', '#5491F4'], // Default gradient colors from SVG
  start = { x: 0.94, y: 0.18 }, // Adjusted to match SVG gradient direction
  end = { x: 0.52, y: 0.95 }, // Adjusted to match SVG gradient direction
  width = 22,
  height = 22,
  strokeWidth = 1.5,
  borderColor = 'none', // Control the border color
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    {/* Define the linear gradient */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x * 22} // Scale to viewBox units
        y1={start.y * 22}
        x2={end.x * 22}
        y2={end.y * 22}
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

    {/* Main complex path with gradient fill */}
    <Path
      d="M12.1048 2.2193L5.33234 4.4693C0.779844 5.9918 0.779844 8.4743 5.33234 9.9893C6.59729 10.4094 7.58977 11.4018 8.00984 12.6668C9.52484 17.2193 12.0148 17.2193 13.5298 12.6668L15.7873 5.9018C16.7923 2.8643 15.1423 1.2068 12.1048 2.2193Z"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />

    {/* Internal arrow path with gradient fill */}
    <Path
      d="M12.3448 6.2543L9.49484 9.1193C9.38234 9.2318 9.23984 9.2843 9.09734 9.2843C8.95484 9.2843 8.81234 9.2318 8.69984 9.1193C8.48234 8.9018 8.48234 8.5418 8.69984 8.3243L11.5498 5.4593C11.7673 5.2418 12.1273 5.2418 12.3448 5.4593C12.5623 5.6768 12.5623 6.0368 12.3448 6.2543Z"
      fill="url(#gradient)" // Apply gradient to fill
    />
  </Svg>
);

export default ComplexArrowIcon;