import React from "react";
import Svg, { Path } from "react-native-svg";

const CalendarIcon = ({
  width = 24,
  height = 24,
  stroke = "#202025",
  strokeWidth = 1.5,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 2V5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2V5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 9.08984H20.5"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.6954 13.6992H15.7044"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.6954 16.6992H15.7044"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9945 13.6992H12.0035"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9945 16.6992H12.0035"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29358 13.6992H8.30256"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29358 16.6992H8.30256"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarIcon;

