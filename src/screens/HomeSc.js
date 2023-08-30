import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeSc = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Anasayfa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeSc;
