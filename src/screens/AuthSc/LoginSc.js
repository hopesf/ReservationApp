import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";

const LoginSc = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: COLORS.black }}>Tekrar Hoşgeldin ! 👋</Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Merhaba seni özledik!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Kullanıcı Adı</Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Kullanıcı adınızı giriniz"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: "100%" }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Şifre</Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Şifrenizi giriniz"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{ width: "100%" }}
            />

            <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={{ position: "absolute", right: 12 }}>
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Checkbox style={{ marginRight: 8 }} value={isChecked} onValueChange={setIsChecked} color={isChecked ? COLORS.primary : undefined} />
          <Text>Beni Hatırla</Text>
        </View>

        <Button title="Giriş Yap" filled style={{ marginTop: 18, marginBottom: 4 }} />

        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Henüz hesabın yok mu ? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "bold", marginLeft: 6 }}>Kayıt Ol</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSc;
