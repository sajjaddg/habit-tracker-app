import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "~/components/ui/input";

export default function Screen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-20}
    >
      <SafeAreaView className="flex-1 pt-8 px-4 justify-between">
        <View className="gap-48">
          <View className="gap-4 justify-center items-center">
            <Text className="text-center text-[#141C24] text-[36px] leading-[44px] font-ClashBold">
              Get Verification Code
            </Text>
            <Text className="text-[#637083] font-ClashRegular text-[20px] leading-[28px] text-center">
              To continue the registration press the button below to receive the
              verification code
            </Text>
          </View>
          <View className="gap-2">
            <Text className="text-[#344051] font-ClashMedium text-base">
              Verification code
            </Text>
            <Input
              placeholder="enter your verification code"
              keyboardType="numeric"
            />
          </View>
        </View>
        <TouchableOpacity className="py-2.5 items-center px-[22px] self-center gap-2 rounded-[22px] bg-[#141C24]">
          <Text className="text-white font-ClashRegular text-[16px]">
            Verify code
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
