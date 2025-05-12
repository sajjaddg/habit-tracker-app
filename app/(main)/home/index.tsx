import dayjs from "dayjs"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CategoryItemProps } from "~/components/home/category/category-item"
import CategoryList from "~/components/home/category/category-list"
import TaskItem from "~/components/home/task/task-item"
import WeekCalendar from "~/components/week-calendar"

const categories: CategoryItemProps[] = [
  {
    id: "0",
    title: "All",
  },
  {
    id: "1",
    title: "Reading",
    icon: "reading",
  },
  {
    id: "2",
    title: "Health & Fitness",
    icon: "health",
  },
  {
    id: "3",
    title: "Productivity",
    icon: "productivity",
  },
  {
    id: "4",
    title: "Reading",
    icon: "reading",
  },
  {
    id: "5",
    title: "Health & Fitness",
    icon: "health",
  },
  {
    id: "6",
    title: "Productivity",
    icon: "productivity",
  },
]

export default function Screen() {
  const { category } = useLocalSearchParams<{ category?: string }>()
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState(dayjs())

  const onPressCategory = (id: string) => {
    router.setParams({ category: id })
  }

  return (
    <SafeAreaView className="flex-1 gap-8 bg-[#F2F4F7] pt-4">
      <View className="px-4">
        <WeekCalendar {...{ selectedDate, onSelectDate: setSelectedDate }} />
      </View>
      <View className="gap-4">
        <Text className="px-4 font-ClashMedium text-xl">Today</Text>
        <CategoryList activeCategoryId={category ?? "0"} onPressCategory={onPressCategory} data={categories} />
      </View>
      <View className="px-4">
        <TaskItem />
      </View>
    </SafeAreaView>
  )
}
