import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const NotificationIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from SVG
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 24,
  height = 24,
  strokeWidth = 1.5,
  borderColor = 'none', // Control the border color
  innerStrokeColor = 'white', // Prop to control internal line color
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    {/* Define the linear gradient */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
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

    {/* Top part of the bell with gradient fill */}
    <Path
      d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />
    {/* Main bell body with gradient fill */}
    <Path
      d="M12.0209 2C8.34087 2 5.36087 4.98 5.36087 8.66V10.76C5.36087 11.44 5.08087 12.46 4.73087 13.04L3.46087 15.16C2.68087 16.47 3.22087 17.93 4.66087 18.41C9.44087 20 14.6109 20 19.3909 18.41C20.7409 17.96 21.3209 16.38 20.5909 15.16L19.3209 13.04C18.9709 12.46 18.6909 11.43 18.6909 10.76V8.66C18.6809 5 15.6809 2 12.0209 2Z"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />
    {/* Internal vertical line with solid stroke */}
    <Path
      d="M12 6.44043V9.77043"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </Svg>
);

export default NotificationIcon;