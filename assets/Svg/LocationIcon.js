import React from 'react';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const LocationIcon = ({
  colors = ['#47B8C6', '#5491F4', '#2C62BC'], // Default gradient colors from NotificationIcon
  start = { x: 0, y: 0 }, // Default for gradient
  end = { x: 1, y: 0 }, // Default for gradient
  width = 18,
  height = 18,
  strokeWidth = 1.5, // Match SVG stroke-width
  borderColor = 'none', // Control the border color for background
  innerStrokeColor = '#4FA1E2', // Stroke color for paths from SVG
  useGradientBackground = false, // Toggle for optional gradient background
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
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
        width="18"
        height="18"
        rx="9"
        fill="url(#gradient)"
        stroke={borderColor}
        strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
      />
    )}

    {/* Small circle */}
    <Path
      d="M9.00016 10.0726C10.2925 10.0726 11.3402 9.02492 11.3402 7.73258C11.3402 6.44023 10.2925 5.39258 9.00016 5.39258C7.70781 5.39258 6.66016 6.44023 6.66016 7.73258C6.66016 9.02492 7.70781 10.0726 9.00016 10.0726Z"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
    />

    {/* Pin-like shape */}
    <Path
      d="M2.71429 6.3675C4.19179 -0.127498 13.8143 -0.119998 15.2843 6.375C16.1468 10.185 13.7768 13.41 11.6993 15.405C10.1918 16.86 7.80679 16.86 6.29179 15.405C4.22179 13.41 1.85179 10.1775 2.71429 6.3675Z"
      stroke={colors.length > 1 ? 'url(#gradient)' : innerStrokeColor}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </Svg>
);

export default LocationIcon;