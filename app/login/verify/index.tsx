import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Input } from "~/components/ui/input"

export default function Screen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-20}
    >
      <SafeAreaView className="flex-1 justify-between px-4 pt-8">
        <View className="gap-48">
          <View className="items-center justify-center gap-4">
            <Text className="text-center font-ClashBold text-[36px] leading-[44px] text-[#141C24]">Get Verification Code</Text>
            <Text className="text-center font-ClashRegular text-[20px] leading-[28px] text-[#637083]">
              To continue the registration press the button below to receive the verification code
            </Text>
          </View>
          <View className="gap-2">
            <Text className="font-ClashMedium text-base text-[#344051]">Verification code</Text>
            <Input placeholder="enter your verification code" keyboardType="numeric" />
          </View>
        </View>
        <TouchableOpacity className="items-center gap-2 self-center rounded-[22px] bg-[#141C24] px-[22px] py-2.5">
          <Text className="font-ClashRegular text-[16px] text-white">Verify code</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
