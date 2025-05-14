import { Link } from "expo-router"
import { useState } from "react"
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { H4, P, Subtitle } from "~/components/ui/app-text"
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
            <H4 weight="bold" className="max-w-[237px] text-center text-[#141C24]">
              Welcome to Habit Tracker
            </H4>
            <Subtitle className="text-center text-[#637083]">
              To get started, login or create a new account. A verification code will be sent to you.
            </Subtitle>
          </View>
          <View className="gap-2">
            <P size="m" weight="medium" className="text-[#344051]">
              Email
            </P>
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
            <Subtitle className="text-white">Get started</Subtitle>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
