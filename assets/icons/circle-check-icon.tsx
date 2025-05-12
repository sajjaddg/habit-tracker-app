import Svg, { SvgProps, Path } from "react-native-svg"
const CircleCheckIcon = ({ color, ...props }: SvgProps) => (
  <Svg fill="none" viewBox="0 0 20 20" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 18.334c4.583 0 8.333-3.75 8.333-8.334 0-4.583-3.75-8.333-8.333-8.333S1.667 5.417 1.667 10c0 4.584 3.75 8.334 8.333 8.334Z"
    />
    <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6.458 10 2.359 2.358 4.725-4.716" />
  </Svg>
)
export default CircleCheckIcon
