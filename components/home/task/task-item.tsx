import { useRouter } from "expo-router"
import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { PieChart, pieDataItem } from "react-native-gifted-charts"
import AppIcon from "~/assets/icons"
import { CategoryItemProps } from "../category/category-item"

const TaskItem = () => {
  const pieData: pieDataItem[] = [
    { value: 25, color: "#141C24" },
    { value: 75, color: "#F2F4F7" },
  ]
  return (
    <Pressable className="flex-row items-center gap-3 rounded-2xl bg-white py-4 pe-3 ps-2">
      <View className="h-[64px] w-[64px]">
        <PieChart
          donut
          radius={32}
          innerRadius={24}
          data={pieData}
          centerLabelComponent={() => {
            return <Text className="font-ClashRegular text-sm text-[#637083]">25%</Text>
          }}
        />
      </View>
      <View className="flex-1 gap-1">
        <View className="flex-row items-center justify-between">
          <CategoryButton title="Reading" icon="reading" id={"1"} />
          <View className="flex-row items-center gap-2">
            <Text className="font-ClashRegular text-sm text-[#637083]">2/10 Pages</Text>
            <TouchableOpacity className="h-[32px] w-[32px] items-center justify-center rounded-full bg-[#141C24]">
              <AppIcon width={20} height={20} name="plus" color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="font-ClashMedium text-lg text-[#141C24]">Read 20 pages</Text>
      </View>
    </Pressable>
  )
}

const CategoryButton = ({ title, icon, id }: CategoryItemProps) => {
  const router = useRouter()
  const onPress = () => {
    router.setParams({ category: id })
  }
  return (
    <TouchableOpacity
      className="min-w-[58px] flex-row items-center justify-center gap-2 rounded-full bg-[#F2F4F7] px-2 py-[6px]"
      {...{ onPress }}
    >
      {icon ? <AppIcon width={20} height={20} name={icon} color="#202B37" /> : null}
      <Text className="font-ClashRegular text-sm text-[#202B37]">{title}</Text>
    </TouchableOpacity>
  )
}

export default TaskItem
