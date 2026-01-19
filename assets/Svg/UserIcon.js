import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const UserIcon= ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 20,
  height = 17,
  strokeWidth = 1.2,
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 17" fill="none">
    {/* Define the gradient */}
    <Defs>
      <LinearGradient
        id="userRemoveGradient"
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

    {/* Head */}
    <Path
      d="M12.7118 8.32008C14.7332 8.32008 16.3718 6.68142 16.3718 4.66004C16.3718 2.63866 14.7332 1 12.7118 1C10.6904 1 9.05176 2.63866 9.05176 4.66004C9.05176 6.68142 10.6904 8.32008 12.7118 8.32008Z"
      stroke="url(#userRemoveGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Body */}
    <Path
      d="M18.9997 15.6397C18.9997 12.8068 16.1815 10.5156 12.7118 10.5156C9.24206 10.5156 6.42383 12.8068 6.42383 15.6397"
      stroke="url(#userRemoveGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Remove horizontal line */}
    <Path
      d="M5.39205 8.32227H1"
      stroke="url(#userRemoveGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Remove vertical line */}
    <Path
      d="M3.19629 10.517V6.125"
      stroke="url(#userRemoveGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default UserIcon;
