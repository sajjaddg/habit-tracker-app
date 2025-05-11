import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui"
import AnimatedTabBar from "~/components/tab-bar"

export default function MainLayout() {
  return (
    <Tabs>
      <TabSlot />
      <AnimatedTabBar />
      <TabList className="hidden">
        <TabTrigger name="Home" href="/home" />
        <TabTrigger name="Profile" href="/profile" />
        <TabTrigger name="Report" href="/report" />
      </TabList>
    </Tabs>
  )
}
