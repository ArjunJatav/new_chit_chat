import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarIcon = ({
  strokeColor = '#47B8C6', // Default stroke color from SVG
  width = 21,
  height = 21,
  strokeWidth = 1.5, // Default for main paths
  dotStrokeWidth = 2, // Default for dot paths
}) => (
  <Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
    {/* Left vertical line at top */}
    <Path
      d="M7 1.75V4.375"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Right vertical line at top */}
    <Path
      d="M14 1.75V4.375"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Horizontal line */}
    <Path
      d="M3.0625 7.95312H17.9375"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Rounded rectangle */}
    <Path
      d="M18.375 7.4375V14.875C18.375 17.5 17.0625 19.25 14 19.25H7C3.9375 19.25 2.625 17.5 2.625 14.875V7.4375C2.625 4.8125 3.9375 3.0625 7 3.0625H14C17.0625 3.0625 18.375 4.8125 18.375 7.4375Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Top row dots */}
    <Path
      d="M13.7335 11.9883H13.7413"
      stroke={strokeColor}
      strokeWidth={dotStrokeWidth}
cale="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.4952 11.9883H10.5031"
      stroke={strokeColor}
      strokeWidth={dotStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.25691 11.9883H7.26477"
      stroke={strokeColor}
      strokeWidth={dotStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bottom row dots */}
    <Path
      d="M13.7335 14.6133H13.7413"
      stroke={strokeColor}
      strokeWidth={dotStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.4952 14.6133H10.5031"
      stroke={strokeColor}
      strokeWidth={dotStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.25691 14.6133H7.26477"
      stroke={strokeColor}
      strokeWidth={dotStrokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CalendarIcon;