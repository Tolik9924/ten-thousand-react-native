import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { savePin } from "../../services/storage";

interface FormData {
  username: string;
  password: string;
}

// name emilys
// password emilyspass

export default function LoginScreen({ navigation }: any) {
  const { control, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: data.username,
        password: data.password,
      });
      dispatch(loginSuccess(res.data.token));

      // Створюємо пін код
      await savePin("1234"); // для тесту, в реалі юзер вводить сам

      navigation.replace("PinCode");
    } catch (error) {
      console.log("ERROR: ", error);
      Alert.alert("Login failed", "Invalid credentials: ");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text>Login</Text>

      <Controller
        control={control}
        name="username"
        rules={{ required: "Username required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Username"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginVertical: 5, padding: 10 }}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: "Password required" }}
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

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
