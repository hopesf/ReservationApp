import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const LoginSc = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Örneğin, kullanıcı adı ve şifre kontrolü yapalım
    if (username === "selim" && password === "123") {
      navigation.replace("Home");
    } else {
      Alert.alert("Hata", "Geçersiz kullanıcı adı veya şifre!");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giriş Yap</Text>
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput style={styles.input} placeholder="Şifre" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.replace("Register")}>
        <Text style={styles.registerButtonText}>Kayıt Ol</Text>
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
  registerButton: {
    marginTop: 10,
  },
  registerButtonText: {
    color: "blue",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default LoginSc;
