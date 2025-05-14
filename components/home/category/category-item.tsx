import { FC } from "react"
import { TouchableOpacity } from "react-native"
import AppIcon, { IconName } from "~/assets/icons"
import { P } from "~/components/ui/app-text"
import { cn } from "~/lib/utils"

export type CategoryItemProps = {
  id: string
  title: string
  icon?: IconName
  isActive?: boolean
  onPress?: () => void
}

const CategoryItem: FC<CategoryItemProps> = ({ icon, isActive, onPress, title }) => {
  return (
    <TouchableOpacity
      className={cn(
        "min-w-[58px] flex-row items-center justify-center gap-2 rounded-full p-2.5",
        isActive ? "bg-[#141C24]" : "bg-white",
      )}
      {...{ onPress }}
    >
      {icon ? <AppIcon width={20} height={20} name={icon} color={isActive ? "#fff" : "#202B37"} /> : null}
      <P size="sm" className={cn("text-[#202B37]", isActive && "text-white")}>
        {title}
      </P>
    </TouchableOpacity>
  )
}

export default CategoryItem
