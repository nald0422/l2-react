import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";

const sign_in = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center justify-center h-[40vh] bg-red-500">
        <Image source={images.duck} className="w-[128px] h-[140px]" />
      </View>
      <ScrollView>
        <View className="w-full justify-center px-6 mt-10 bg-[#FFFFFB]">
          <Text className="text-3xl font-black text-[#0A0908]">Welcome!</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_in;

const styles = StyleSheet.create({});
