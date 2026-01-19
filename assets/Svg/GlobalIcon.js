import React from 'react';
import Svg, { Path } from 'react-native-svg';

const GlobalIcon = ({
  width = 12,
  height = 12,
  color = '#000000',
  strokeWidth = 1,
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <Path
      d="M6 10.999C8.76142 10.999 11 8.76045 11 5.99902C11 3.2376 8.76142 0.999023 6 0.999023C3.23858 0.999023 1 3.2376 1 5.99902C1 8.76045 3.23858 10.999 6 10.999Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.00029 1.5H4.50029C3.52529 4.42 3.52529 7.58 4.50029 10.5H4.00029"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.5 1.5C8.475 4.42 8.475 7.58 7.5 10.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.5 8V7.5C4.42 8.475 7.58 8.475 10.5 7.5V8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.5 4.50029C4.42 3.52529 7.58 3.52529 10.5 4.50029"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default GlobalIcon;

