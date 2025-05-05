import { Link } from "expo-router"
import { useState } from "react"
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Input } from "~/components/ui/input"

export default function Screen() {
  const [email, setEmail] = useState("")
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-20}
    >
      <SafeAreaView className="flex-1 justify-between px-4 pt-8">
        <View className="gap-28">
          <View className="items-center justify-center gap-4">
            <Text className="max-w-[237px] text-center font-ClashBold text-[36px] leading-[44px] text-[#141C24]">
              Welcome to Habit Tracker
            </Text>
            <Text className="text-center font-ClashRegular text-[20px] leading-[28px] text-[#637083]">
              To get started, login or create a new account. A verification code will be sent to you.
            </Text>
          </View>
          <View className="gap-2">
            <Text className="font-ClashMedium text-base text-[#344051]">Email</Text>
            <Input
              placeholder="enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              aria-labelledby="Email"
              aria-errormessage="inputError"
            />
          </View>
        </View>
        <Link asChild href="/login/verify">
          <TouchableOpacity className="items-center gap-2 self-center rounded-[22px] bg-[#141C24] px-[22px] py-2.5">
            <Text className="font-ClashRegular text-[16px] text-white">Get started</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
