import { View, Text, Pressable, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// other imports
import { createUser, updateUserUid } from "../../api";
import { auth } from "../../config/firebase";
import COLORS from "../../constants/colors";
import Button from "../../components/Button";
import { useGlobal } from "../../context/GlobalContext";

const RegisterSc = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const { setLoading } = useGlobal();

  const [initialFormState, setInitialFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    areaCode: "+90",
    phone: "",
    password: "",
  });

  const handleRegisterBtn = async () => {
    if (Object.values(initialFormState).some((x) => x.length === 0)) {
      return alert(`Boş alanları doldurunuz`);
    }

    try {
      setLoading(true);
      const { data } = await createUser({
        firstName: initialFormState.firstName,
        lastName: initialFormState.lastName,
        email: initialFormState.email,
        phone: initialFormState.phone,
      });

      if (data) {
        const { user } = await createUserWithEmailAndPassword(auth, initialFormState.email, initialFormState.password);
        if (user.uid) {
          // update user db
          const { data: sonuc } = await updateUserUid({ userUid: user.uid, email: initialFormState.email });
          setLoading(false);
          alert(sonuc ? `Kayıt başarılı` : "Kayıt başarısız");
        }
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      alert(errorMessage, errorCode);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        {/* header */}
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: COLORS.black }}>Hesap Oluştur</Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Bugün kolayca randevunu oluştur!</Text>
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
            <TextInput
              value={initialFormState.firstName}
              onChangeText={(e) => setInitialFormState({ ...initialFormState, firstName: e })}
              placeholder="Adınızı giriniz"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{ width: "100%" }}
            />
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
            <TextInput
              value={initialFormState.lastName}
              onChangeText={(e) => setInitialFormState({ ...initialFormState, lastName: e })}
              placeholder="Soyadınızı giriniz"
              placeholderTextColor={COLORS.black}
              keyboardType="default"
              style={{ width: "100%" }}
            />
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
              onChangeText={(e) => setInitialFormState({ ...initialFormState, email: e })}
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
              value={initialFormState.phoneStart}
              onChangeText={(e) => setInitialFormState({ ...initialFormState, areaCode: e })}
              placeholderTextColor={COLORS.black}
              maxLength={3}
              keyboardType="numeric"
              style={{ width: "12%", borderRightWidth: 1, borderLeftColor: COLORS.grey, height: "100%" }}
            />

            <TextInput
              value={initialFormState.phone}
              maxLength={10}
              onChangeText={(e) => setInitialFormState({ ...initialFormState, phone: e })}
              placeholder="Telefon numaranızı giriniz"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{ width: "80%" }}
            />
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
              value={initialFormState.password}
              onChangeText={(e) => setInitialFormState({ ...initialFormState, password: e })}
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

        <Button onPress={handleRegisterBtn} title="Kayıt Ol" filled style={{ marginTop: 12, marginBottom: 4 }} />

        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 12 }}>
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
