import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "~/components/ui/input";

export default function Screen() {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-20}
    >
      <SafeAreaView className="flex-1 pt-8 px-4 justify-between">
        <View className="gap-28">
          <View className="gap-4 justify-center items-center">
            <Text className="text-center text-[#141C24] max-w-[237px] text-[36px] leading-[44px] font-ClashBold">
              Welcome to Habit Tracker
            </Text>
            <Text className="text-[#637083] font-ClashRegular text-[20px] leading-[28px] text-center">
              To get started, login or create a new account. A verification code
              will be sent to you.
            </Text>
          </View>
          <View className="gap-2">
            <Text className="text-[#344051] font-ClashMedium text-base">
              Email
            </Text>
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
          <TouchableOpacity className="py-2.5 items-center px-[22px] self-center gap-2 rounded-[22px] bg-[#141C24]">
            <Text className="text-white font-ClashRegular text-[16px]">
              Get started
            </Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
