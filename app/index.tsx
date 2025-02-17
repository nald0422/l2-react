import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 bg-[black] items-center w-full">
          <View className="w-full">
            <Image className="w-full h-[70vh]" source={images.landing} />
            <LinearGradient
              colors={["transparent", "black"]}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
          </View>
          <View className="flex-1 gap-10">
            <Text className="text-white text-center text-3xl font-black">
              Discover Endless Possibilities with L2
            </Text>
            <CustomButton
              title="Continue"
              handlePress={() => router.push("/sign_in")}
              containerStyle="bg-primary rounded-[12px] min-h-[24px] justify-center items-center py-5"
              textStyle="font-semibold text-white text-sm"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
}
