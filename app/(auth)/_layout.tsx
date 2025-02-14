import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
      <>
        <Stack>
          <Stack.Screen name="sign_in" options={{ headerShown: false }} />
          <Stack.Screen name="sign_up" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="dark"></StatusBar>
      </>
  );
};

export default AuthLayout;
