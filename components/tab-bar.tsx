import { Link, LinkProps, usePathname } from "expo-router"
import { FC, useEffect } from "react"
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native"
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated"
import AppIcon, { IconName } from "~/assets/icons"
import { P } from "./ui/app-text"

const AnimatedTabBar = () => {
  const pathname = usePathname()

  const getTabIndex = (path: string) => {
    if (path.includes("/home")) return 0
    if (path.includes("/profile")) return 1
    if (path.includes("/report")) return 2
    return 0
  }

  const activeTab = getTabIndex(pathname)

  return (
    <View className="absolute bottom-8 self-center">
      <View className="w-full flex-row items-center rounded-full bg-[#141C24] py-1">
        <TabItem icon="home" title="Home" href="/home" isActive={activeTab === 0} />
        <TabItem href="/report" icon="report" title="Report" isActive={activeTab === 2} />
        <TabItem href="/profile" icon="user" title="Profile" isActive={activeTab === 1} />
      </View>
    </View>
  )
}

type TabItemProps = {
  title: string
  icon: IconName
  isActive: boolean
} & LinkProps

const TabItem: FC<TabItemProps> = ({ title, icon, isActive, href, ...props }) => {
  const width = useSharedValue(isActive ? 44 : 0)
  const opacity = useSharedValue(isActive ? 1 : 0)

  useEffect(() => {
    if (isActive) {
      width.value = withTiming(44, {
        duration: 200,
        easing: Easing.elastic(0.8),
      })
      opacity.value = withDelay(
        80,
        withTiming(1, {
          duration: 150,
          easing: Easing.ease,
        }),
      )
    } else {
      opacity.value = withTiming(0, {
        duration: 120,
        easing: Easing.ease,
      })
      width.value = withDelay(
        100,
        withTiming(0, {
          duration: 180,
          easing: Easing.out(Easing.cubic),
        }),
      )
    }
  }, [isActive])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    width: interpolate(width.value, [0, 44], [0, 44]),
  }))

  // Cast props to TouchableOpacityProps to avoid type errors
  const touchableProps = props as unknown as TouchableOpacityProps

  return (
    <Link asChild {...{ href }}>
      <TouchableOpacity className="h-11 flex-row items-center justify-center gap-2 overflow-hidden px-2.5" {...touchableProps}>
        <AppIcon name={icon} color={isActive ? "white" : "#97A1AF"} width={24} height={24} />
        <Animated.View style={[animatedStyle]}>
          <P size="m" className="text-white">
            {title}
          </P>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  )
}

export default AnimatedTabBar
