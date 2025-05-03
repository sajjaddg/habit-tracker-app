import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowRightIcon = ({color,...props}: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
    />
  </Svg>
);
export default ArrowRightIcon;
