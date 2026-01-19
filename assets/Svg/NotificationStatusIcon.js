import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const NotificationStatusIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 16,
  height = 16,
  strokeWidth = 1.2,
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    {/* Gradient Definition */}
    <Defs>
      <LinearGradient
        id="notificationStatusGradient"
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

    {/* Bell circle */}
    <Path
      d="M12.6665 5.33398C13.7711 5.33398 14.6665 4.43855 14.6665 3.33398C14.6665 2.22941 13.7711 1.33398 12.6665 1.33398C11.5619 1.33398 10.6665 2.22941 10.6665 3.33398C10.6665 4.43855 11.5619 5.33398 12.6665 5.33398Z"
      stroke="url(#notificationStatusGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* First line */}
    <Path
      d="M4.6665 8.66602H7.99984"
      stroke="url(#notificationStatusGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second line */}
    <Path
      d="M4.6665 11.334H10.6665"
      stroke="url(#notificationStatusGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Outer box */}
    <Path
      d="M9.3335 1.33398H6.00016C2.66683 1.33398 1.3335 2.66732 1.3335 6.00065V10.0007C1.3335 13.334 2.66683 14.6673 6.00016 14.6673H10.0002C13.3335 14.6673 14.6668 13.334 14.6668 10.0007V6.66732"
      stroke="url(#notificationStatusGradient)"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default NotificationStatusIcon;
