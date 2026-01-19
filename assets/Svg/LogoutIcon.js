import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const LogoutIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 18,
  height = 18,
  strokeWidth = 1.5,
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    {/* Gradient definition */}
    <Defs>
      <LinearGradient
        id="logoutGradient"
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

    {/* Outer curve */}
    <Path
      d="M10.5 2.32127C10.1573 2.27431 9.80663 2.25 9.45 2.25C5.47355 2.25 2.25 5.27208 2.25 9C2.25 12.728 5.47355 15.75 9.45 15.75C9.80663 15.75 10.1573 15.7257 10.5 15.6788"
      stroke="url(#logoutGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Arrow */}
    <Path
      d="M15.75 9H8.25M15.75 9C15.75 8.47485 14.2543 7.49365 13.875 7.125M15.75 9C15.75 9.52515 14.2543 10.5064 13.875 10.875"
      stroke="url(#logoutGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LogoutIcon;
