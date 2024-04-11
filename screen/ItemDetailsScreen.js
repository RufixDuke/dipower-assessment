import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Constant from "expo-constants";

import { Colors } from "../constant/colors";

const ItemDetailsScreen = () => {
  const { item } = useRoute().params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.url }} style={styles.image} />
      <View style={{ marginTop: 30, gap: 30 }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.desc}>
          This widget is a must-have for any household. It's incredibly
          versatile and can be used for a variety of tasks.
        </Text>
      </View>
    </View>
  );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight + 50,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
  },
  title: {
    fontSize: 25,
    fontFamily: "Medium",
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.SMALLER_TEXT,
  },
  desc: {
    fontSize: 18,
    fontFamily: "Book",
    textAlign: "center",
    color: Colors.LIGHTER_TEXT,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 150,
    overflow: "hidden",
  },
});
