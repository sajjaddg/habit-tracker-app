import { memo } from "react"
import { SvgProps } from "react-native-svg"

import ArrowLeftIcon from "./arrow-left-icon"
import ArrowRightIcon from "./arrow-right-icon"
import HomeIcon from "./home-icon"
import ReportIcon from "./report-icon"
import UserIcon from "./user-icon"

const icons = {
  user: UserIcon,
  report: ReportIcon,
  home: HomeIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
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
