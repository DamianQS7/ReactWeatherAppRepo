import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, bodyText, iconColor, bodyTextStyle } = props;
  const { textTheme, container } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} style={{}} />
      <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
