import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { router, Link } from "expo-router";
import apiService from "../../services/apiService";

interface ApiResponse {
  success: boolean;
  message?: string;
}

const sign_in = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      setError("An error occurred during sign up");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await apiService.post<ApiResponse>("/auth/signup", {
        email: form.email,
        password: form.password,
      });

      if (response.success) {
        router.replace("/home");
      } else {
        setError(response.message || "Sign in failed");
      }
    } catch (err) {
      setError("An error occurred during sign up");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center h-[35vh] bg-blue-300">
          <Image source={images.duck} className="w-[128px] h-[140px]" />
        </View>
        <View className="w-full justify-center px-8 mt-10 bg-[#FFFFFB]">
          <Text className="text-3xl font-black text-[#0A0908]">Welcome!</Text>
          <View>
            <FormField
              title="Email"
              placeholder="Enter Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              // keyboardType="email-address"
            />
            <FormField
              title="Password"
              placeholder="Enter Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Login"
              handlePress={submit}
              containerStyle="bg-primary rounded-2xl min-h-[24px] justify-center items-center py-5 mt-[55px]"
              textStyle="font-semibold text-white text-sm"
              isLoading={isSubmitting}
            />
            <View className="flex-row items-center justify-center gap-2 mt-5">
              <Text className="text-[#8F9098] font-">No account?</Text>
              <Link href="/sign_up" className="font-bold text-primary">
                Register
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_in;
