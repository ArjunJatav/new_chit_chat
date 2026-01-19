import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({
  width = 129,
  height = 129,
  stroke = '#292D32',
  strokeWidth = 7,
}) => (
  <Svg width={width} height={height} viewBox="0 0 129 129" fill="none">
    <Path
      d="M65.3598 58.4262C64.8223 58.3725 64.1773 58.3725 63.586 58.4262C50.7935 57.9962 40.6348 47.515 40.6348 34.615C40.6348 21.4463 51.2773 10.75 64.4998 10.75C77.6685 10.75 88.3648 21.4463 88.3648 34.615C88.311 47.515 78.1523 57.9962 65.3598 58.4262Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M38.4846 78.26C25.4771 86.9675 25.4771 101.157 38.4846 109.811C53.2659 119.701 77.5071 119.701 92.2884 109.811C105.296 101.104 105.296 86.9138 92.2884 78.26C77.5609 68.4238 53.3196 68.4238 38.4846 78.26Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileIcon;

