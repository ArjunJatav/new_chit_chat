import React from 'react';
import Svg, { Rect, Path, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeBlend, FeComposite, G } from 'react-native-svg';

const SendIcon = ({
  width = 52,
  height = 52,
  backgroundColor = '#000000',
  strokeColor = '#FFFFFF',
  strokeWidth = 1.5,
}) => (
  <Svg width={width} height={height} viewBox="0 0 56 56" fill="none">
    <Defs>
      <Filter
        id="filter0_di"
        x="0"
        y="0"
        width="64"
        height="64"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dx="4" dy="2" />
        <FeGaussianBlur stdDeviation="3" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0.282353 0 0 0 0 0.392157 0 0 0 0 0.490196 0 0 0 0.17 0"
        />
        <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dx="-2" dy="-2" />
        <FeGaussianBlur stdDeviation="3" />
        <FeComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0.282353 0 0 0 0 0.392157 0 0 0 0 0.490196 0 0 0 0.12 0"
        />
        <FeBlend mode="normal" in2="shape" result="effect2_innerShadow" />
      </Filter>
    </Defs>
    
    {/* Background circle with shadow */}
    <G filter="url(#filter0_di)">
      <Rect x="2" y="2" width="52" height="52" rx="26" fill={backgroundColor} />
    </G>
    
    {/* Arrow/Send path */}
    <Path
      d="M23.4324 24.3604L31.8635 21.5501C35.647 20.2889 37.7027 22.3544 36.4514 26.138L33.6411 34.569C31.7543 40.2394 28.6559 40.2394 26.7691 34.569L25.9349 32.0665L23.4324 31.2324C17.7621 29.3456 17.7621 26.2571 23.4324 24.3604Z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Diagonal line with opacity */}
    <Path
      opacity="0.34"
      d="M26.1211 31.6393L29.6762 28.0742"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SendIcon;

