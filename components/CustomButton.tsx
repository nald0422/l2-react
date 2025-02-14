import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  title: string; //
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` ${containerStyle}`}
    >
      <Text className={`${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
