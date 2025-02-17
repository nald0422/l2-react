import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: () => void;
  otherStyles?: string;
  showLabel?: boolean;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  showLabel,
  ...props
}: FormFieldProps) => {

  // State
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`gap-2 ${otherStyles}`} {...props}>
      {showLabel ? (
        <Text className="text-base text-[#0A0908] font-black">{title}</Text>
      ) : null}
      <View className="w-full h-[48px] border border-[#C5C6CC] rounded-xl px-2 py-1 flex-row items-center">
        <TextInput
          className="flex-1 text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#8F9098"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="h-6 w-6 mr-2"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
