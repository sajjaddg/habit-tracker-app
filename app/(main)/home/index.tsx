import dayjs from "dayjs"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import WeekCalendar from "~/components/week-calendar"

export default function Screen() {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  return (
    <SafeAreaView className="flex-1 bg-[#F2F4F7] px-4 pt-4">
      <WeekCalendar {...{ selectedDate, onSelectDate: setSelectedDate }} />
    </SafeAreaView>
  )
}
