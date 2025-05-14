import { TouchableOpacity, View } from "react-native"
import { Subtitle } from "../ui/app-text"

const SkipButton = ({ onPress }: { onPress?: () => void }) => {
  return (
    <View className="self-end px-4">
      <TouchableOpacity className="px-2 py-1" {...{ onPress }}>
        <Subtitle weight="medium" className="text-[#141C24]">
          skip
        </Subtitle>
      </TouchableOpacity>
    </View>
  )
}

export default SkipButton
