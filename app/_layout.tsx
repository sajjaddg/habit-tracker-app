import "~/global.css"

import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native"
import { PortalHost } from "@rn-primitives/portal"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { Platform } from "react-native"
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar"
import { NAV_THEME } from "~/lib/constants"
import { useColorScheme } from "~/lib/useColorScheme"

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
  fonts: {
    regular: {
      fontFamily: "ClashGroteskRegular",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "ClashGroteskMedium",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "ClashGroteskSemibold",
      fontWeight: "600",
    },
    heavy: {
      fontFamily: "ClashGroteskBold",
      fontWeight: "700",
    },
  },
}
// const DARK_THEME: Theme = {
//   ...DarkTheme,
//   colors: NAV_THEME.dark,
//   fonts: {
//     regular: {
//       fontFamily: "ClashGroteskRegular",
//       fontWeight: "400",
//     },
//     medium: {
//       fontFamily: "ClashGroteskMedium",
//       fontWeight: "500",
//     },
//     bold: {
//       fontFamily: "ClashGroteskSemibold",
//       fontWeight: "600",
//     },
//     heavy: {
//       fontFamily: "ClashGroteskBold",
//       fontWeight: "700",
//     },
//   },
// }

export { ErrorBoundary } from "expo-router"

export default function RootLayout() {
  const hasMounted = React.useRef(false)
  const { colorScheme } = useColorScheme()
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)

  const [fontsLoaded] = useFonts({
    ClashGroteskRegular: require("../assets/fonts/ClashGrotesk-Regular.otf"),
    ClashGroteskMedium: require("../assets/fonts/ClashGrotesk-Medium.otf"),
    ClashGroteskSemibold: require("../assets/fonts/ClashGrotesk-Semibold.otf"),
    ClashGroteskBold: require("../assets/fonts/ClashGrotesk-Bold.otf"),
    ClashGrotesklight: require("../assets/fonts/ClashGrotesk-Light.otf"),
  })

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return
    }

    if (Platform.OS === "web") {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add("bg-background")
    }
    setAndroidNavigationBar(colorScheme)
    setIsColorSchemeLoaded(true)
    hasMounted.current = true
  }, [])

  if (!isColorSchemeLoaded || !fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider value={LIGHT_THEME}>
      <StatusBar style={"dark"} />
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </ThemeProvider>
  )
}

const useIsomorphicLayoutEffect = Platform.OS === "web" && typeof window === "undefined" ? React.useEffect : React.useLayoutEffect
