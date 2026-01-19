import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackIcon = ({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 1.5,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 6C15 6 9 10.4189 9 12C9 13.5812 15 18 15 18"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;

