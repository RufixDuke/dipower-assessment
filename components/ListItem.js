import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Colors } from "../constant/colors";

const ListItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={() => onPress(item)} style={styles.item}>
      <Image source={{ uri: item?.thumbnailUrl }} style={styles.image} />
      <View style={{ gap: 5, width: "95%" }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}>
          This widget is a must-have for any household. It's incredibly
          versatile and can be used for a variety of tasks.
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: Colors.SECONDARY,
    marginBottom: 15,
    borderRadius: 12,
    gap: 10,
    height: Dimensions.get("window").height / 7,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 100,
    overflow: "hidden",
  },
  title: {
    color: Colors.SMALLER_TEXT,
    width: "85%",
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "Medium",
  },
  description: {
    color: Colors.LIGHTER_TEXT,
    width: "90%",
    fontFamily: "Book",
  },
});

export default ListItem;
