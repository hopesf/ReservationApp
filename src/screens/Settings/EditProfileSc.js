import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants";

export default function EditProfileSc() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 12, flexDirection: "row", justifyContent: "center", marginVertical: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
        </TouchableOpacity>

        <Text style={{ ...FONTS.h3 }}>Profili Düzenle</Text>
      </View>
      <View style={{ marginHorizontal: 12 }}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}
