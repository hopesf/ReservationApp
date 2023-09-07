import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

const UserScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8ff", marginHorizontal: 12 }}>
      <StatusBar backgroundColor={COLORS.gray} />
      <Text style={{ fontSize: 25, fontWeight: "800" }}>Profilim</Text>

      <View
        style={{
          marginTop: 10,
          backgroundColor: COLORS.white,
          padding: 10,
          borderWidth: 0.5,
          borderColor: "#ccc",
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <Image source={require("../../assets/hero1.jpg")} style={{ width: 90, height: 90, borderRadius: 45, marginRight: 20 }} />
          <View style={{ flex: 1, alignItems: "start", justifyContent: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 5 }}>Selim Geçin</Text>
            <Text style={{ fontSize: 14, fontWeight: "200", marginBottom: 10 }}>coderspoty@gmail.com</Text>
            <Text style={{ fontSize: 14, fontWeight: "300", marginBottom: 5, color: COLORS.primary }}>Profilimi Düzenle </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: COLORS.white,
          padding: 10,
          borderWidth: 0.5,
          borderColor: "#ccc",
          borderRadius: 10,
          height: "auto",
        }}
      >
        <View style={{ marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 5 }}>0</Text>
            <Text style={{ fontSize: 12, fontWeight: "300", marginBottom: 5 }}>Toplam Rezervasyon</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderLeftWidth: 0.5,
              borderRightWidth: 0.5,
              borderColor: "#ccc",
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 5 }}>0</Text>
            <Text style={{ fontSize: 12, fontWeight: "300", marginBottom: 5 }}>Toplam Rezervasyon</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "300", marginBottom: 5 }}>0</Text>
            <Text style={{ fontSize: 12, fontWeight: "300", marginBottom: 5 }}>Toplam Rezervasyon</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: COLORS.white,
          padding: 10,
          borderWidth: 0.5,
          borderColor: "#ccc",
          borderRadius: 10,
          height: "auto",
        }}
      >
        <View style={{ height: 450 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
