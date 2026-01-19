import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const FacebookIcon = ({
  colors = ['#55A9DF'], // Default solid fill color from SVG
  start = { x: 0, y: 0 }, // Default for gradient (not used if single color)
  end = { x: 1, y: 0 }, // Default for gradient (not used if single color)
  width = 10,
  height = 18,
  strokeWidth = 0, // No stroke in original SVG
  borderColor = 'none', // Control the border color
}) => (
  <Svg width={width} height={height} viewBox="0 0 10 18" fill="none">
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

    {/* Facebook logo path */}
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5214 17.6249V9.61836H9.48463L9.88165 6.41509H6.5122V4.45901C6.5122 3.55197 6.78608 2.9342 8.19807 2.9342H9.99902V0.132534C9.13254 0.0474417 8.26162 0.00640573 7.39023 0.00961511C6.79541 -0.0296484 6.19847 0.0516497 5.64145 0.247784C5.08444 0.443919 4.58089 0.750121 4.16629 1.14482C3.75168 1.53952 3.4361 2.01312 3.24176 2.53227C3.04742 3.05142 2.97906 3.60349 3.04148 4.1496V6.41615H0V9.61942H3.04378V17.6249H6.52255H6.5214Z"
      fill="url(#gradient)" // Apply gradient or solid fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />
  </Svg>
);

export default FacebookIcon;