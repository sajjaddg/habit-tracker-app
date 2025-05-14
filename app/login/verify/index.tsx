import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { H4, P, Subtitle } from "~/components/ui/app-text"
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
            <H4 weight="bold" className="text-center text-[#141C24]">
              Get Verification Code
            </H4>
            <Subtitle className="text-center text-[#637083]">
              To continue the registration press the button below to receive the verification code
            </Subtitle>
          </View>
          <View className="gap-2">
            <P weight="medium" size="m" className="text-[#344051]">
              Verification code
            </P>
            <Input placeholder="enter your verification code" keyboardType="numeric" />
          </View>
        </View>
        <TouchableOpacity className="items-center gap-2 self-center rounded-[22px] bg-[#141C24] px-[22px] py-2.5">
          <Subtitle className="text-white">Verify code</Subtitle>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
