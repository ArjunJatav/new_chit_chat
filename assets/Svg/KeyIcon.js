import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const KeyIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 18,
  height = 18,
  strokeWidth = 1.2,
  strokeColor = '#49B5CA', // Default stroke color
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    {/* Define the linear gradient */}
    <Defs>
      <LinearGradient
        id="keyGradient"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
      >
        {colors.map((color, index) => (
          <Stop
            key={index}
            offset={index / (colors.length - 1)}
            stopColor={color}
          />
        ))}
      </LinearGradient>
    </Defs>

    {/* Key body */}
    <Path
      d="M14.8425 11.1977C13.2975 12.7352 11.085 13.2077 9.14249 12.6002L5.60999 16.1252C5.35499 16.3877 4.85249 16.5452 4.49249 16.4927L2.85749 16.2677C2.31749 16.1927 1.81499 15.6827 1.73249 15.1427L1.50749 13.5077C1.45499 13.1477 1.62749 12.6452 1.87499 12.3902L5.39999 8.86523C4.79999 6.91523 5.26499 4.70273 6.80999 3.16523C9.02249 0.952734 12.615 0.952734 14.835 3.16523C17.055 5.37773 17.055 8.98523 14.8425 11.1977Z"
      stroke="url(#keyGradient)"
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Key handle line */}
    <Path
      d="M5.16748 13.1172L6.89248 14.8422"
      stroke="url(#keyGradient)"
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Keyhole circle */}
    <Path
      d="M10.875 8.25C11.4963 8.25 12 7.74632 12 7.125C12 6.50368 11.4963 6 10.875 6C10.2537 6 9.75 6.50368 9.75 7.125C9.75 7.74632 10.2537 8.25 10.875 8.25Z"
      stroke="url(#keyGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default KeyIcon;
