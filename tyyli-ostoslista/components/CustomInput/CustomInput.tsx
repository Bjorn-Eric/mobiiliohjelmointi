import { View } from "react-native";
import { CustomInputProps } from "./CustomInput.types";
import { useController } from "react-hook-form";
import { Input } from "@rneui/base";

export function CustomInput({
  name,
  formProps,
  label,
  placeholder,
  style,
}: CustomInputProps) {
  const {
    field: { value, onChange },
    fieldState: {},
  } = useController({
    name,
    control: formProps.control,
    defaultValue: "",
  });

  return (
    <View style={style}>
      <Input
        autoCapitalize={"none"}
        autoComplete={"off"}
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}
