import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";

const LoginSc = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    // check validation
    if (Object.values(initialValues).some((x) => x.length === 0)) {
      return alert(`Boş alanları doldurunuz`);
    }

    alert(initialValues.email + " " + initialValues.password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: COLORS.black }}>Tekrar Hoşgeldin ! 👋</Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Haydi giriş yapalım 😊</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>E-Mail</Text>
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
              placeholder="Mail adresinizi giriniz"
              value={initialValues.email}
              onChangeText={(e) => setInitialValues({ ...initialValues, email: e })}
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
              value={initialValues.password}
              onChangeText={(e) => setInitialValues({ ...initialValues, password: e })}
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

        <Button onPress={handleSignIn} title="Giriş Yap" filled style={{ marginTop: 18, marginBottom: 4 }} />

        <View style={{ flexDirection: "col", alignItems: "center", justifyContent: "center", marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Henüz hesabın yok mu ? </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "bold", marginTop: 10 }}>Kayıt Ol</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSc;
