import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <RootNavigation />
    </SafeAreaProvider>
  );
}
const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="ScrollScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ApiList" options={{ headerShown: true }} />
    </Stack>
  );
};
