import React from 'react';
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

const AppleIcon = ({
  colors = ['#55A9DF'], // Default solid fill color from SVG
  start = { x: 0, y: 0 }, // Default for gradient (not used if single color)
  end = { x: 1, y: 0 }, // Default for gradient (not used if single color)
  width = 87,
  height = 91,
  strokeWidth = 0, // No stroke in original SVG
  borderColor = 'none', // Control the border color
}) => (
  <Svg width={width} height={height} viewBox="0 0 87 91" fill="none">
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

    {/* Group for main shape */}
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.3047 48.3618C50.8701 47.4993 51.081 47.0585 51.5122 46.0906C48.3306 44.8831 47.8226 40.3502 50.966 38.6156C50.0076 37.4081 48.6564 36.7085 47.3818 36.7085C46.4618 36.7085 45.8293 36.9481 45.2639 37.1685C44.7847 37.3506 44.3535 37.5135 43.8168 37.5135C43.2418 37.5135 42.7339 37.3314 42.1972 37.1398C41.6126 36.9289 40.9993 36.7085 40.2326 36.7085C38.8047 36.7085 37.281 37.5806 36.3131 39.0756C34.9522 41.1839 35.1918 45.1322 37.3864 48.5056C38.1722 49.7131 39.2264 51.0643 40.5968 51.0835C41.1718 51.0931 41.5456 50.9206 41.9576 50.7385C42.4272 50.5277 42.9351 50.2977 43.8264 50.2977C44.7176 50.2881 45.216 50.5277 45.6856 50.7385C46.0881 50.9206 46.4522 51.0931 47.0176 51.0835C48.4072 51.0643 49.5189 49.5693 50.3047 48.3618Z"
        fill="url(#gradient)"
        stroke={borderColor}
        strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
      />
    </G>

    {/* Group for inner shape */}
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.1799 31.9165C47.3333 32.9707 46.902 34.0153 46.3366 34.7436C45.7328 35.5294 44.6787 36.1427 43.6628 36.1044C43.4808 35.0886 43.9503 34.044 44.5253 33.3444C45.1674 32.5777 46.2503 31.9836 47.1799 31.9165Z"
        fill="url(#gradient)"
        stroke={borderColor}
        strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
      />
    </G>
  </Svg>
);

export default AppleIcon;