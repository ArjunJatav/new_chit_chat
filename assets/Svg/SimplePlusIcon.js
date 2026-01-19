import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SimplePlusIcon = ({
  strokeColor = '#49B9C7', // Default stroke color from SVG
  width = 38,
  height = 38,
  strokeWidth = 1.5,
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    {/* Circle outline */}
    <Path
      d="M10.9999 20.1666C16.0416 20.1666 20.1666 16.0416 20.1666 10.9999C20.1666 5.95825 16.0416 1.83325 10.9999 1.83325C5.95825 1.83325 1.83325 5.95825 1.83325 10.9999C1.83325 16.0416 5.95825 20.1666 10.9999 20.1666Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Horizontal line of the plus sign */}
    <Path
      d="M7.33325 11H14.6666"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Vertical line of the plus sign */}
    <Path
      d="M11 14.6666V7.33325"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SimplePlusIcon;