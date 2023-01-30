import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyleButton from "../StyleButton";
const CartItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyleButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyleButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CartItem;
