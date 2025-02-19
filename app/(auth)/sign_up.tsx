import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router, Link } from "expo-router";
import apiService from "../../services/apiService";

interface ApiResponse {
  success: boolean;
  message?: string;
}


const sign_up = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    confirmed_password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (form.password !== form.confirmed_password) {
      setError("Passwords do not match");
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
        setError(response.message || "Sign up failed");
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
        <View className="w-full min-h-[85vh] justify-center px-8 bg-[#FFFFFB]">
          <Text className="text-3xl font-black text-[#0A0908]">Register</Text>
          <Text className="text-[#8F9098] mt-2">
            Create an account to get started
          </Text>

          {error && (
            <View className="mt-4 p-2 bg-red-100 rounded">
              <Text className="text-red-600">{error}</Text>
            </View>
          )}
          <View>
            <FormField
              title="Name"
              placeholder="Enter Name"
              value={form.name}
              handleChangeText={(e: string) => setForm({ ...form, name: e })}
              otherStyles="mt-7"
              showLabel={true}
            />
            <FormField
              title="Email"
              placeholder="Enter Email"
              value={form.email}
              handleChangeText={(e: string) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
              showLabel={true}
            />
            <FormField
              title="Password"
              placeholder="Create a password"
              value={form.password}
              handleChangeText={(e: string) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              showLabel={true}
            />
            <FormField
              title="Password"
              placeholder="Confirm Password"
              value={form.confirmed_password}
              handleChangeText={(e: string) => setForm({ ...form, confirmed_password: e })}
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
