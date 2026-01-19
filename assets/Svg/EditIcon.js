import React from "react";
import Svg, { Path } from "react-native-svg";

const EditIcon = ({
  width = 19,
  height = 19,
  stroke = "#000",
  strokeWidth = 1.5,
}) => (
  <Svg width={width} height={height} viewBox="0 0 19 19" fill="none">
    <Path
      d="M10.2013 2.77121L3.88503 9.45678C3.64653 9.71066 3.41573 10.2107 3.36957 10.5569L3.08492 13.0496C2.9849 13.9497 3.63115 14.5652 4.52358 14.4113L7.00086 13.9882C7.34706 13.9267 7.83175 13.6728 8.07024 13.4112L14.3865 6.72562C15.479 5.57161 15.9714 4.25604 14.2711 2.64811C12.5786 1.05558 11.2938 1.6172 10.2013 2.77121Z"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.14746 3.88672C9.47828 6.0101 11.2016 7.63341 13.3404 7.84882"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.30811 16.9258H16.1562"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditIcon;

