import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Bu kısımda kayıt işlemleri yapılabilir

    // Örneğin, kullanıcı adı ve şifre kontrolleri yapalım
    if (username && password && password === confirmPassword) {
      Alert.alert("Başarılı", "Kayıt işlemi tamamlandı!");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      navigation.navigate("Login");
    } else {
      Alert.alert("Hata", "Lütfen geçerli bilgiler girin!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kayıt Ol</Text>
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput style={styles.input} placeholder="Şifre" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
      <TextInput
        style={styles.input}
        placeholder="Şifreyi Onayla"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  registerButton: {
    marginTop: 10,
  },
  registerButtonText: {
    color: "blue",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "blue",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default RegisterScreen;
