import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const ArrowLeft = ({ color, ...props }: SvgProps) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m12.5 16.6-5.433-5.433a1.655 1.655 0 0 1 0-2.333L12.5 3.4"
    />
  </Svg>
)
export default ArrowLeft
