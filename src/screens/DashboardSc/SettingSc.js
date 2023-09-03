import { View, Text } from "react-native";
import React from "react";

const SettingSc = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        SettingSc
      </Text>
    </View>
  );
};

export default SettingSc;
