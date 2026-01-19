import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const HouseIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from SVG
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 24,
  height = 24,
  strokeWidth = 1.5,
  innerStrokeColor = 'white', // Prop to control internal line color
  borderColor = 'none', // New prop to control the border color
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

    {/* Main house path with gradient fill */}
    <Path
      d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth} // Apply strokeWidth only if borderColor is set
    />
    {/* Internal vertical line with solid stroke */}
    <Path
      d="M12 17.99V14.99"
      stroke={innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HouseIcon;