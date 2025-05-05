import { Text, TouchableOpacity, View } from "react-native"

const SkipButton = ({ onPress }: { onPress?: () => void }) => {
  return (
    <View className="self-end px-4">
      <TouchableOpacity className="px-2 py-1" {...{ onPress }}>
        <Text className="rounded font-ClashMedium text-[20px] text-[#141C24]">skip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SkipButton
