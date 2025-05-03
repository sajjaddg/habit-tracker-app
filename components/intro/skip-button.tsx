import { Text, TouchableOpacity, View } from "react-native";

const SkipButton = ({ onPress }: { onPress?: () => void }) => {
  return (
    <View className="self-end px-4">
      <TouchableOpacity className="py-1 px-2" {...{ onPress }}>
        <Text className="font-ClashMedium text-[20px] text-[#141C24] rounded">
          skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkipButton;
