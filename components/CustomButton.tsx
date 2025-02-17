import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  title: string; //
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` ${containerStyle} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
