import React from 'react';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const GlobeIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from NotificationIcon
  start = { x: 0, y: 0 }, // Default for gradient
  end = { x: 1, y: 0 }, // Default for gradient
  width = 20,
  height = 20,
  strokeWidth = 1.5, // Match SVG stroke-width
  borderColor = 'none', // Control the border color for background
  innerStrokeColor = '#4FA1E2', // Stroke color for paths from SVG
  useGradientBackground = false, // Toggle for optional gradient background
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    {/* Define the linear gradient (used for background or strokes if multiple colors) */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        gradientUnits="userSpaceOnUse"
      >
        {colors.map((color, index) => (
          <Stop
            key={index}
            offset={index / (colors.length - 1) || 0} // Single color or distributed stops
            stopColor={color}
          />
        ))}
      </LinearGradient>
    </Defs>

    {/* Optional gradient-filled background circle */}
    {useGradientBackground && (
      <Rect
        x="0"
        y="0"
        width="20"
        height="20"
        rx="10"
        fill="url(#gradient)"
        stroke={borderColor}
        strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
      />
    )}

    {/* Circular outline */}
    <Path
      d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* First vertical curve */}
    <Path
      d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second vertical curve */}
    <Path
      d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* First horizontal curve */}
    <Path
      d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Second horizontal curve */}
    <Path
      d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default GlobeIcon;