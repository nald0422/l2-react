import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { router, Link } from "expo-router";

const sign_up = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmed_password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 5000);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] justify-center px-8 bg-[#FFFFFB]">
          <Text className="text-3xl font-black text-[#0A0908]">Register</Text>
          <Text className="text-[#8F9098] mt-2">
            Create an account to get started
          </Text>
          <View>
            <FormField
              title="Name"
              placeholder="Enter Name"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
              showLabel={true}
            />
            <FormField
              title="Email"
              placeholder="Enter Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
              showLabel={true}
            />
            <FormField
              title="Password"
              placeholder="Create a password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              showLabel={true}
            />
            <FormField
              title="Password"
              placeholder="Confirm Password"
              value={form.confirmed_password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-5"
            />
            <CustomButton
              title="Submit"
              handlePress={submit}
              containerStyle="bg-primary rounded-2xl min-h-[24px] justify-center items-center py-5 mt-[55px]"
              textStyle="font-semibold text-white text-sm"
              isLoading={isSubmitting}
            />
            {/* <View className="flex-row items-center justify-center gap-2 mt-5">
              <Text className="text-[#8F9098]">No account?</Text>
              <Link href="/sign_up" className="font-bold text-primary">
                Register
              </Link>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_up;
