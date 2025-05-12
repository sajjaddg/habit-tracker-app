import Svg, { SvgProps, Path } from "react-native-svg"
const CircleSkipIcon = ({ color, ...props }: SvgProps) => (
  <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.133 6.016v7.975c0 1.634 1.775 2.659 3.192 1.842l3.458-1.992 3.459-2c1.416-.816 1.416-2.858 0-3.675l-3.459-2-3.458-1.991c-1.417-.817-3.192.2-3.192 1.841ZM16.867 15.15V4.85"
    />
  </Svg>
)
export default CircleSkipIcon
