import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const HashtagIcon = ({
  colors = ['#2980B9', '#6DD5FA', '#AEDFFF'], // Default gradient colors from SVG
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  width = 24,
  height = 24,
  strokeWidth = 2,
  borderColor = 'none', // Control the border color
  strokeColor = '#fff', // Dynamic stroke color with white as default
}) => (
  <Svg width={width} height={height} viewBox="0 0 155 155" fill="none">
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

    {/* Main circular background with gradient fill */}
    <Path
      d="M72.5 100C87.6878 100 100 87.6878 100 72.5C100 57.3122 87.6878 45 72.5 45C57.3122 45 45 57.3122 45 72.5C45 87.6878 57.3122 100 72.5 100Z"
      fill="url(#gradient)" // Apply gradient to fill
      stroke={borderColor} // Optional border color
      strokeWidth={borderColor === 'none' ? 0 : strokeWidth}
    />
    {/* Hashtag lines with dynamic stroke */}
    <Path
      d="M71.1654 64.75L69.332 81.25"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M76.6654 64.75L74.832 81.25"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M65.207 70.25H81.707"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M64.293 75.75H80.793"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HashtagIcon;