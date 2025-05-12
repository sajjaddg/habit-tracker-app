import { memo } from "react"
import { SvgProps } from "react-native-svg"

import ArrowLeftIcon from "./arrow-left-icon"
import ArrowRightIcon from "./arrow-right-icon"
import CircleCheckIcon from "./circle-check-icon"
import CircleSkipIcon from "./circle-skip-icon"
import HealthIcon from "./health-icon"
import HomeIcon from "./home-icon"
import PlusIcon from "./plus-icon"
import ProductivityIcon from "./productivity-icon"
import ReadingIcon from "./reading-icon"
import ReportIcon from "./report-icon"
import UserIcon from "./user-icon"

const icons = {
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "circle-skip": CircleSkipIcon,
  "circle-check": CircleCheckIcon,
  health: HealthIcon,
  home: HomeIcon,
  plus: PlusIcon,
  productivity: ProductivityIcon,
  reading: ReadingIcon,
  report: ReportIcon,
  user: UserIcon,
}

export type IconName = keyof typeof icons

interface IconProps extends SvgProps {
  name: IconName
}

const AppIcon = memo(({ name, ...props }: IconProps) => {
  const Icon = icons[name]
  return <Icon {...props} />
})
AppIcon.displayName = "AppIcon"
export default AppIcon
