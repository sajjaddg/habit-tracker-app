import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SkipButton from "./skip-button";
import ArrowRightIcon from "~/assets/icons/arrow-right-icon";
import { cn } from "~/lib/utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type IIntroItem = {
  title: string;
  description: string;
  index?: number;
  image?: string;
  showSkip?: boolean;
  isLast?: boolean;
  onPressLogin?: () => void;
  onPressNext?: () => void;
  onPressSkip?: () => void;
  onPressBack?: () => void;
};

const IntroItem: FC<IIntroItem> = ({
  description,
  title,
  index,
  onPressBack,
  onPressNext,
  onPressSkip,
  showSkip = true,
  onPressLogin,
  isLast,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      {showSkip ? (
        <SkipButton onPress={onPressSkip} />
      ) : (
        <View className="h-[30px]" />
      )}
      <View className="flex-row justify-center z-10">
        <View className="w-[282px] h-[282px] absolute -top-9 rounded-full bg-red bg-red-600" />
      </View>
      <View
        style={{ paddingBottom: insets.bottom }}
        className="bg-[#E4E7EC] px-4 pt-[170px] justify-between flex-1 rounded-t-[25px]"
      >
        <View className="">
          <View className="gap-4">
            <Text className="font-ClashSemibold leading-[44px] text-center text-[36px] text-[#202B37]">
              {title}
            </Text>
            <Text className="font-ClashRegular text-center leading-7 text-[20px] text-[#637083]">
              {description}
            </Text>
          </View>
          {/*TODO create todo dot :D */}
        </View>
        <Buttons
          isLast={isLast ?? false}
          index={index ?? 0}
          onPressBack={onPressBack}
          onPressNext={onPressNext}
          onPressLogin={onPressLogin}
          onPressAsGuest={() => {}}
        />
      </View>
    </>
  );
};

type IButtons = {
  isLast: boolean;
  index: number;
  onPressBack?: () => void;
  onPressNext?: () => void;
  onPressLogin?: () => void;
  onPressAsGuest?: () => void;
};

const Buttons: FC<IButtons> = ({
  index,
  onPressLogin,
  onPressBack,
  onPressAsGuest,
  isLast,
  onPressNext,
}) => {
  if (isLast)
    return (
      <View className="gap-2">
        <TouchableOpacity
          onPress={onPressLogin}
          className="py-2.5 rounded-[22px] bg-[#141C24]"
        >
          <Text className="text-white text-center font-ClashRegular text-[16px]">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressAsGuest}
          className="py-2.5 rounded-[22px] border border-[#141C24]"
        >
          <Text className="text-[#141C24] text-center font-ClashRegular text-[16px]">
            Continue as a guest
          </Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <View
      className={cn(
        "flex-row items-center mt-4",
        index === 0 ? "justify-end" : "justify-between"
      )}
    >
      <TouchableOpacity
        disabled={index === 0}
        onPress={onPressBack}
        className={cn(
          "py-2.5 flex-row items-center gap-2 ps-[18px] pe-[23px] rounded-[22px] border border-[#141C24]",
          index === 0 ? "hidden" : "flex"
        )}
      >
        <ArrowRightIcon
          color="#141C24"
          width={24}
          height={24}
          style={{
            transform: [{ rotate: "180deg" }],
          }}
        />
        <Text className="text-[#141C24] font-ClashRegular text-[16px]">
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressNext}
        className="py-2.5 flex-row self-end items-center gap-2 ps-[23px] pe-[18px] rounded-[22px] bg-[#141C24]"
      >
        <Text className="text-white font-ClashRegular text-[16px]">Next</Text>
        <ArrowRightIcon color="#fff" width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default IntroItem;
