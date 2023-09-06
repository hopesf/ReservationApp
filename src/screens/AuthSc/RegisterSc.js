import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";

const RegisterSc = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        {/* header */}
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: COLORS.black }}>Hesap Oluştur</Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Bugün kolayca randevunu oluştur!</Text>
        </View>
        {/* kullanıcı adı */}
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
            <TextInput placeholder="Kullanıcı adınızı giriniz" placeholderTextColor={COLORS.black} keyboardType="default" style={{ width: "100%" }} />
          </View>
        </View>

        {/* isim */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>İsim</Text>

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
            <TextInput placeholder="Adınızı giriniz" placeholderTextColor={COLORS.black} keyboardType="default" style={{ width: "100%" }} />
          </View>
        </View>

        {/* soyisim */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Soyisim</Text>

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
            <TextInput placeholder="Soyadınızı giriniz" placeholderTextColor={COLORS.black} keyboardType="default" style={{ width: "100%" }} />
          </View>
        </View>

        {/* E-mail */}
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
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ width: "100%" }}
            />
          </View>
        </View>

        {/* telefon no */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Tel No</Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="+90"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{ width: "12%", borderRightWidth: 1, borderLeftColor: COLORS.grey, height: "100%" }}
            />

            <TextInput placeholder="Telefon numaranızı giriniz" placeholderTextColor={COLORS.black} keyboardType="numeric" style={{ width: "80%" }} />
          </View>
        </View>

        {/* şifre */}
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

        {/* sözleşme */}
        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Checkbox style={{ marginRight: 8 }} value={isChecked} onValueChange={setIsChecked} color={isChecked ? COLORS.primary : undefined} />
          <Text>Üyelik sözleşmesini kabul ediyorum</Text>
        </View>

        <Button title="Kayıt Ol" filled style={{ marginTop: 18, marginBottom: 4 }} />

        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Zaten hesabın var mı ?</Text>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: "bold", marginLeft: 6 }}>Giriş Yap</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterSc;
