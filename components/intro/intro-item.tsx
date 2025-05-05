import type { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ArrowRightIcon from "~/assets/icons/arrow-right-icon"
import { cn } from "~/lib/utils"
import SkipButton from "./skip-button"

export type IIntroItem = {
  title: string
  description: string
  index?: number
  image?: string
  showSkip?: boolean
  isLast?: boolean
  onPressLogin?: () => void
  onPressNext?: () => void
  onPressSkip?: () => void
  onPressBack?: () => void
}

const IntroItem: FC<IIntroItem> = ({
  description,
  title,
  index,
  onPressBack,
  onPressNext,
  onPressSkip,
  showSkip = true,
  onPressLogin,
  isLast,
}) => {
  const insets = useSafeAreaInsets()
  return (
    <>
      {showSkip ? <SkipButton onPress={onPressSkip} /> : <View className="h-[30px]" />}
      <View className="z-10 flex-row justify-center">
        <View className="bg-red absolute -top-9 h-[282px] w-[282px] rounded-full bg-red-600" />
      </View>
      <View
        style={{ paddingBottom: insets.bottom }}
        className="flex-1 justify-between rounded-t-[25px] bg-[#E4E7EC] px-4 pt-[170px]"
      >
        <View className="">
          <View className="gap-4">
            <Text className="text-center font-ClashSemibold text-[36px] leading-[44px] text-[#202B37]">{title}</Text>
            <Text className="text-center font-ClashRegular text-[20px] leading-7 text-[#637083]">{description}</Text>
          </View>
          {/*TODO create todo dot :D */}
        </View>
        <Buttons
          isLast={isLast ?? false}
          index={index ?? 0}
          onPressBack={onPressBack}
          onPressNext={onPressNext}
          onPressLogin={onPressLogin}
          onPressAsGuest={() => {}}
        />
      </View>
    </>
  )
}

type IButtons = {
  isLast: boolean
  index: number
  onPressBack?: () => void
  onPressNext?: () => void
  onPressLogin?: () => void
  onPressAsGuest?: () => void
}

const Buttons: FC<IButtons> = ({ index, onPressLogin, onPressBack, onPressAsGuest, isLast, onPressNext }) => {
  if (isLast)
    return (
      <View className="gap-2">
        <TouchableOpacity onPress={onPressLogin} className="rounded-[22px] bg-[#141C24] py-2.5">
          <Text className="text-center font-ClashRegular text-[16px] text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressAsGuest} className="rounded-[22px] border border-[#141C24] py-2.5">
          <Text className="text-center font-ClashRegular text-[16px] text-[#141C24]">Continue as a guest</Text>
        </TouchableOpacity>
      </View>
    )

  return (
    <View className={cn("mt-4 flex-row items-center", index === 0 ? "justify-end" : "justify-between")}>
      <TouchableOpacity
        disabled={index === 0}
        onPress={onPressBack}
        className={cn(
          "flex-row items-center gap-2 rounded-[22px] border border-[#141C24] py-2.5 pe-[23px] ps-[18px]",
          index === 0 ? "hidden" : "flex",
        )}
      >
        <ArrowRightIcon
          color="#141C24"
          width={24}
          height={24}
          style={{
            transform: [{ rotate: "180deg" }],
          }}
        />
        <Text className="font-ClashRegular text-[16px] text-[#141C24]">Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressNext}
        className="flex-row items-center gap-2 self-end rounded-[22px] bg-[#141C24] py-2.5 pe-[18px] ps-[23px]"
      >
        <Text className="font-ClashRegular text-[16px] text-white">Next</Text>
        <ArrowRightIcon color="#fff" width={24} height={24} />
      </TouchableOpacity>
    </View>
  )
}

export default IntroItem
