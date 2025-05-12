import Svg, { SvgProps, Path } from "react-native-svg"
const PlusIcon = ({ color, ...props }: SvgProps) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="M5 10h10M10 15V5" />
  </Svg>
)
export default PlusIcon
