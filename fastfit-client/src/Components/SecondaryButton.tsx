import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";

// Define the types for the props
interface SecondaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;  // Optional style for the button container
  textStyle?: StyleProp<TextStyle>; // Optional style for the text
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={[styles.buttonContainer, style]}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1e232c",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Urbanist-SemiBold",
    color: "#1e232c",
    textAlign: "center",
  },
});

export default SecondaryButton;