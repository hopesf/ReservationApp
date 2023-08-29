import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const ProfileScreen = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Bilgileriniz kaydedildi!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profil</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Kullanıcı Adı:</Text>
        {isEditing ? (
          <TextInput style={styles.input} value={username} onChangeText={(text) => setUsername(text)} />
        ) : (
          <Text style={styles.value}>{username}</Text>
        )}
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>E-posta:</Text>
        {isEditing ? (
          <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
        ) : (
          <Text style={styles.value}>{email}</Text>
        )}
      </View>
      {isEditing ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.editButtonText}>Düzenle</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileInfo: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;
