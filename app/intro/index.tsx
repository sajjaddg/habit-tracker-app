import { useRouter } from "expo-router"
import { useCallback, useMemo, useState } from "react"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import IntroItem, { type IIntroItem } from "~/components/intro/intro-item"

const data: IIntroItem[] = [
  {
    title: "Start Your Journey to a Better You",
    description:
      "Welcome to Habit Tracker! Create positive habits, take small steps each day, and experience big changes over time.",
  },
  {
    title: "Big Changes Start with Small Habits",
    description:
      "We're here to help you build positive habits and track your daily progress. Every day, you're one step closer to your goals.",
  },
  {
    title: "Motivation and Moving Forward",
    description: "You've taken the first step. Every day is an opportunity to progress and reach new goals",
  },
]
export default function Screen() {
  const insets = useSafeAreaInsets()
  const router = useRouter()
  const [index, setIndex] = useState(0)

  const activeItem = useMemo(() => data[index], [index])
  const onPressSkip = useCallback(() => setIndex(2), [])
  const onPressNext = useCallback(() => (index === 1 ? onPressSkip() : setIndex((prev) => prev + 1)), [index, onPressSkip])
  const onPressBack = useCallback(() => setIndex((prev) => (prev === 0 ? 0 : prev - 1)), [])
  const onPressLogin = useCallback(() => router.replace("/login"), [])

  return (
    <View className="flex-1 gap-36" style={{ paddingTop: insets.top }}>
      <IntroItem
        {...{
          onPressNext,
          onPressLogin,
          onPressSkip,
          onPressBack,
          ...activeItem,
        }}
        showSkip={index !== data.length - 1}
        index={index}
        isLast={index === data.length - 1}
      />
    </View>
  )
}
