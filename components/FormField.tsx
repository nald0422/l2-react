import { View, Text } from "react-native";
import React from "react";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: () => void;
  otherStyles?: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}: FormFieldProps) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">
        {title}
      </Text>
      <View>
         
      </View>
    </View>
  );
};

export default FormField;
