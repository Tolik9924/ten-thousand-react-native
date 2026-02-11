import { deletePin } from "@/src/services/storage";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

export default function SettingsScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [name, setName] = useState(user.name || "");
  const [photo, setPhoto] = useState(user.photo || "");
  const { t, i18n } = useTranslation();

  const handleLogout = async () => {
    dispatch(logout());
    await deletePin();
    navigation.replace("AuthStack");
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{t("settings")}</Text>

      <TouchableOpacity onPress={pickImage}>
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        ) : (
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#ccc",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{t("addPhoto")}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder={t("name")}
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <Text>{t("language")}</Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Button title="EN" onPress={() => changeLanguage("en")} />
        <View style={{ width: 10 }} />
        <Button title="AR" onPress={() => changeLanguage("ar")} />
      </View>

      <Button title={t("logout")} color="red" onPress={handleLogout} />
    </View>
  );
}
