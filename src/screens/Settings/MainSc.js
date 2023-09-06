import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const MainSettingsSc = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const navigateToSupport = () => {
    console.log("Support function");
  };

  const navigateToTermsAndPolicies = () => {
    console.log("Terms and Policies function");
  };

  const navigateToReportProblem = () => {
    console.log("Report a problem");
  };

  const logout = () => {
    signOut(auth);
  };

  const accountItems = [{ icon: "person-outline", text: "Profili Düzenle", action: navigateToEditProfile }];

  const supportItems = [
    { icon: "help-outline", text: "Yardım", action: navigateToSupport },
    { icon: "info-outline", text: "Kullanım Şartları ve Gizlilik Politikası", action: navigateToTermsAndPolicies },
  ];

  const actionsItems = [
    { icon: "outlined-flag", text: "Bir Sorun Bildir", action: navigateToReportProblem },
    { icon: "logout", text: "Oturumu Kapat", action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 12, flexDirection: "row", justifyContent: "center", marginVertical: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Ayarlar</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Account Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Hesap</Text>
          <View style={{ borderRadius: 12, backgrounColor: COLORS.gray }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Support and About settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Gizlilik & Destek </Text>
          <View style={{ borderRadius: 12, backgrounColor: COLORS.gray }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Actions</Text>
          <View style={{ borderRadius: 12, backgrounColor: COLORS.gray }}>
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainSettingsSc;
