import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeInactiveIcon = ({
  width = 24,
  height = 24,
  strokeWidth = 1.5,
  strokeColor = '#918899', // Default color from original SVG
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    {/* House outline */}
    <Path
      d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Door line */}
    <Path
      d="M12 17.99V14.99"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeInactiveIcon;

