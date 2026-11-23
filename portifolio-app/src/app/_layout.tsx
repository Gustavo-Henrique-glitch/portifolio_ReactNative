import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { InstrumentSerif_400Regular } from "@expo-google-fonts/instrument-serif";
import { useFonts } from "expo-font";

import { cores } from "@/theme/tokens";

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontesCarregadas, erroNasFontes] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    InstrumentSerif_400Regular,
  });

  useEffect(() => {
    if (fontesCarregadas || erroNasFontes) {
      void SplashScreen.hideAsync();
    }
  }, [fontesCarregadas, erroNasFontes]);

  if (!fontesCarregadas && !erroNasFontes) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: cores.papel },
        }}
      />
    </SafeAreaProvider>
  );
}
