import { UseFormReturn } from "react-hook-form";
import { ViewStyle } from "react-native";

export type CustomInputProps = {
  name: string;
  formProps: UseFormReturn;
  placeholder?: string;
  label?: string;
  style?: ViewStyle;
};
