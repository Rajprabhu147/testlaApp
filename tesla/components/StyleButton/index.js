import { Text, View, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyleButton = (props) => {
  const { type, content, onPress } = props;
  const backgroundColor = type === "primary" ? "#3a3d41" : "#e4e4e2";
  const textColor = type === "primary" ? "#ffffff" : "#4a4d52";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyleButton;
