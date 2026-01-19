import React from 'react';
import {
  Svg,
  G,
  Path,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeBlend,
  FeComposite,
  ClipPath,
  Rect,
} from 'react-native-svg';

const ProfileChat = ({ color = 'black', backgroundColor = 'white', ...props }) => (
  <Svg width={50} height={50} viewBox="0 0 50 50" fill="none" {...props}>
    <G filter="url(#filter0_di_319_4050)">
      <Path
        d="M2 23C2 12.5066 10.5066 4 21 4C31.4934 4 40 12.5066 40 23C40 33.4934 31.4934 42 21 42C10.5066 42 2 33.4934 2 23Z"
        fill={backgroundColor} // <-- Changed
      />
      <Path
        d="M21 5C30.9411 5 39 13.0589 39 23C39 32.9411 30.9411 41 21 41C11.0589 41 3 32.9411 3 23C3 13.0589 11.0589 5 21 5Z"
        stroke={color} // <-- Changed
        strokeWidth={2}
      />
    </G>
    <G clipPath="url(#clip0_319_4050)">
      <Path
        d="M27.6663 22.7108C27.6663 26.2329 24.6811 29.0886 20.9997 29.0886C20.5668 29.0892 20.1351 29.0491 19.7099 28.9693C19.4039 28.9118 19.2509 28.8831 19.144 28.8994C19.0372 28.9157 18.8858 28.9962 18.583 29.1573C17.7264 29.6128 16.7276 29.7737 15.7671 29.595C16.1322 29.1459 16.3815 28.6071 16.4915 28.0295C16.5582 27.6762 16.393 27.333 16.1456 27.0817C15.0219 25.9407 14.333 24.4031 14.333 22.7108C14.333 19.1887 17.3182 16.333 20.9997 16.333C24.6811 16.333 27.6663 19.1887 27.6663 22.7108Z"
        stroke={color} // <-- Changed
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        d="M20.9967 23H21.0027M23.6603 23H23.6663M18.333 23H18.339"
        stroke={color} // <-- Changed
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <Filter
        id="filter0_di_319_4050"
        x={0}
        y={0}
        width={50}
        height={50}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dx={4} dy={2} />
        <FeGaussianBlur stdDeviation={3} />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0.282353 0 0 0 0 0.392157 0 0 0 0 0.490196 0 0 0 0.17 0"
        />
        <FeBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_319_4050"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_319_4050"
          result="shape"
        />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dx={-2} dy={-2} />
        <FeGaussianBlur stdDeviation={3} />
        <FeComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0.282353 0 0 0 0 0.392157 0 0 0 0 0.490196 0 0 0 0.12 0"
        />
        <FeBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_319_4050"
        />
      </Filter>
      <ClipPath id="clip0_319_4050">
        <Rect
          width={16}
          height={16}
          fill="white"
          transform="translate(13 15)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ProfileChat;