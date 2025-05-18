// app/_layout.tsx
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { OrderProvider } from "../contexts/OrderContext";

// Keep the splash screen visible while fonts are loading
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Medium": Roboto_500Medium,
    "Roboto-Bold": Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen once fonts are loaded or if there's an error
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If fonts aren't loaded and there's no error, show nothing while waiting
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // If there's a font loading error, display an error message
  if (fontError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error loading fonts</Text>
      </View>
    );
  }

  return (
    <OrderProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)/welcome" options={{ animation: "fade" }} />
        <Stack.Screen
          name="(auth)/signup"
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="(auth)/login"
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen name="(main)" options={{ animation: "fade" }} />
      </Stack>
    </OrderProvider>
  );
}
