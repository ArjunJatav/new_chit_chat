import React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddCircleIcon = ({ 
  width = 22, 
  height = 22, 
  color = '#000000', 
  strokeWidth = 1.5 
}) => {
  return (
    <Svg 
      width={width} 
      height={height} 
      viewBox="0 0 22 22" 
      fill="none"
    >
      <Path 
        d="M10.9997 20.1667C16.0413 20.1667 20.1663 16.0417 20.1663 11C20.1663 5.95837 16.0413 1.83337 10.9997 1.83337C5.95801 1.83337 1.83301 5.95837 1.83301 11C1.83301 16.0417 5.95801 20.1667 10.9997 20.1667Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M7.33301 11H14.6663" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M11 14.6667V7.33337" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default AddCircleIcon;

