import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../../constants";
import { StatusBar } from "expo-status-bar";

const UserSc = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.gray} />
      <View style={{ width: "100%" }}>
        <Image source={images.cover} resizeMode="cover" style={{ height: 228, width: "100%" }} />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={images.profile}
          resizeMode="cover"
          style={{ height: 155, width: 155, borderRadius: 999, borderColor: COLORS.primary, borderWidth: 2, marginTop: -90 }}
        />

        <Text style={{ ...FONTS.h3, color: COLORS.primary, marginVertical: 8 }}>Selim Geçin</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigate}
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Profili Düzenle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSc;
