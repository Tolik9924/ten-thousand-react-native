import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { validatePassword } from "../../utils/validation";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterScreen({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    Alert.alert("Registered!", JSON.stringify(data));
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text>Register</Text>

      <Controller
        control={control}
        name="name"
        rules={{ required: "Name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Name"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginVertical: 5, padding: 10 }}
          />
        )}
      />
      {errors.name && (
        <Text style={{ color: "red" }}>{errors.name.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ borderWidth: 1, marginVertical: 5, padding: 10 }}
          />
        )}
      />
      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password required",
          validate: (value) =>
            validatePassword(value) ||
            "Password must be 8-64 chars, include upper/lower/special",
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            value={value}
            onChangeText={onChange}
            secureTextEntry
            style={{ borderWidth: 1, marginVertical: 5, padding: 10 }}
          />
        )}
      />
      {errors.password && (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      )}

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
