import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const FacebookLoginIcon = ({
  width = 60,
  height = 60,
  fillColor = '#000',
}) => (
  <Svg width={width} height={height} viewBox="0 0 29 29" fill="none">
    <Defs>
      <ClipPath id="clip0_1417_56024">
        <Rect width="29" height="29" fill="white"/>
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_1417_56024)">
      <Path 
        d="M14.5 0.804688C6.9375 0.804688 0.75 6.97844 0.75 14.5822C0.75 21.4572 5.7825 27.1635 12.355 28.1947V18.5697H8.8625V14.5822H12.355V11.5434C12.355 8.09219 14.4038 6.19469 17.5525 6.19469C19.0513 6.19469 20.6188 6.45594 20.6188 6.45594V9.85219H18.8862C17.1812 9.85219 16.645 10.9109 16.645 11.9972V14.5822H20.4675L19.8488 18.5697H16.645V28.1947C19.885 27.6829 22.8355 26.0298 24.9636 23.5335C27.0917 21.0373 28.2574 17.8624 28.25 14.5822C28.25 6.97844 22.0625 0.804688 14.5 0.804688Z" 
        fill={fillColor}
      />
    </G>
  </Svg>
);

export default FacebookLoginIcon;

