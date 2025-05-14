import dayjs from "dayjs"
import React, { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import Animated, { SlideInRight, SlideInLeft, SlideOutLeft, SlideOutRight } from "react-native-reanimated"
import ArrowLeft from "~/assets/icons/arrow-left-icon"
import { cn } from "~/lib/utils"
import { Caption, P } from "./ui/app-text"

interface WeekCalendarProps {
  selectedDate: dayjs.Dayjs
  onSelectDate: (date: dayjs.Dayjs) => void
}

export default function WeekCalendar({ selectedDate, onSelectDate }: WeekCalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    const today = dayjs()
    return today.subtract((today.day() + 1) % 7, "days")
  })
  const [navigationDirection, setNavigationDirection] = useState<"next" | "prev">("next")

  const weekDays = Array.from({ length: 7 }, (_, i) => currentDate.add(i, "day"))
  const allDaysSameMonth = weekDays.every((day) => day.month() === currentDate.month())

  // Title month logic
  const titleMonth = allDaysSameMonth ? currentDate.format("MMMM") : selectedDate.format("MMMM")

  const handleNext = () => {
    setNavigationDirection("next")
    setCurrentDate((prev) => prev.add(7, "days"))
  }

  const handlePrevious = () => {
    setNavigationDirection("prev")
    setCurrentDate((prev) => prev.subtract(7, "days"))
  }

  const handleDayPress = (day: dayjs.Dayjs) => {
    onSelectDate(day)
    const weekStart = day.subtract((day.day() + 1) % 7, "days")
    if (!weekStart.isSame(currentDate, "day")) {
      const direction = day.isAfter(currentDate) ? "next" : "prev"
      setNavigationDirection(direction)
      setCurrentDate(weekStart)
    }
  }

  return (
    <View className="justify-center gap-4">
      <P size="m" weight="medium" className="text-center text-[#141C24]">
        {titleMonth}
      </P>

      <View className="flex-row justify-center gap-[2.4rem]">
        {["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"].map((label) => (
          <Caption weight="medium" key={label} className="text-[#97A1AF]">
            {label}
          </Caption>
        ))}
      </View>

      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={handlePrevious} className="h-[30px] w-[30px] items-center justify-center">
          <ArrowLeft color="#637083" width={20} height={20} />
        </TouchableOpacity>

        <View className="flex-1 overflow-hidden">
          <Animated.View
            className="flex-row justify-center gap-4"
            key={currentDate.format("YYYY-MM-DD")}
            entering={navigationDirection === "next" ? SlideInRight : SlideInLeft}
            exiting={navigationDirection === "next" ? SlideOutLeft : SlideOutRight}
          >
            {weekDays.map((day, index) => {
              const isSelected = day.isSame(selectedDate, "day")
              const isTitleMonth = allDaysSameMonth ? day.month() === currentDate.month() : day.month() === selectedDate.month()

              return (
                <TouchableOpacity
                  key={`${day.format("YYYY-MM-DD")}-${index}`}
                  onPress={() => handleDayPress(day)}
                  className={cn(
                    "h-[32px] w-[32px] items-center justify-center rounded-full",
                    isSelected ? "bg-[#CED2DA]" : "bg-white",
                    !isTitleMonth && "opacity-50",
                  )}
                >
                  <P size="sm" className="text-[#141C24]">
                    {day.date()}
                  </P>
                </TouchableOpacity>
              )
            })}
          </Animated.View>
        </View>

        <TouchableOpacity onPress={handleNext} className="h-[30px] w-[30px] rotate-180 items-center justify-center">
          <ArrowLeft color="#637083" width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
