import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const AddGallery = ({
  colors = ['#000000', '#FFFFFF', '#CCCCCC'], // Default gradient colors
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 22,
  height = 22,
  strokeWidth = 1.5, // Control the thickness of the "stroke"
}) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    {/* Define the linear gradient */}
    <Defs>
      <LinearGradient
        id="gradient"
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
      >
        {colors.map((color, index) => (
          <Stop
            key={index}
            offset={index / (colors.length - 1)} // Distribute stops evenly
            stopColor={color}
          />
        ))}
      </LinearGradient>
    </Defs>

    {/* Circle path with gradient stroke simulated via fill */}
    <Path
      d="M10.9997 20.1668C16.0413 20.1668 20.1663 16.0418 20.1663 11.0002C20.1663 5.9585 16.0413 1.8335 10.9997 1.8335C5.95801 1.8335 1.83301 5.9585 1.83301 11.0002C1.83301 16.0418 5.95801 20.1668 10.9997 20.1668Z"
      stroke="url(#gradient)" // Apply gradient to stroke
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Horizontal line with gradient stroke simulated via fill */}
    <Path
      d="M7.33301 11H14.6663"
      stroke="url(#gradient)" // Apply gradient to stroke
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vertical line with gradient stroke simulated via fill */}
    <Path
      d="M11 14.6668V7.3335"
      stroke="url(#gradient)" // Apply gradient to stroke
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AddGallery;