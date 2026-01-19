import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Hash = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 10,
  height = 12,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 10 12"
    fill="none"
  >
    <Defs>
      <LinearGradient
        id="hashGradient"
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

    <Path
      d="M1.79688 12L3.82812 0.625H5.17969L3.14062 12H1.79688ZM4.78125 12L6.82031 0.625H8.17188L6.13281 12H4.78125ZM9.28906 5.14062H1.15625V3.875H9.28906V5.14062ZM8.69531 8.79688H0.570312V7.53125H8.69531V8.79688Z"
      fill="url(#hashGradient)"
    />
  </Svg>
);

export default Hash;
