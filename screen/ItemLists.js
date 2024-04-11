import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Constant from "expo-constants";
import axios from "axios";

import ListItem from "../components/ListItem";
import { setItems } from "../src/store/ItemSlice";
import { Colors } from "../constant/colors";
import LoadingIndicator from "../components/LoadingIndicator";

const ItemsListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { items } = useSelector((state) => state.items);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const filteredData = response?.data?.map((item) => ({
        id: item?.id,
        title: item?.title,
        url: item?.url,
        thumbnailUrl: item?.thumbnailUrl,
      }));
      dispatch(setItems(filteredData));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchItems();
    }, [])
  );

  const handleItemPress = (item) => {
    navigation.navigate("ItemDetailsScreen", { item });
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} onPress={handleItemPress} />
  );

  const renderError = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Error fetching items: {error}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: "white",
          marginBottom: 20,
          fontFamily: "Bold",
        }}
      >
        List of Items
      </Text>
      {isLoading && <LoadingIndicator color={"white"} size={"small"} />}
      {error ? (
        renderError()
      ) : items.length > 0 ? (
        <>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => fetchItems()}
            refreshing={isLoading}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : null}
    </View>
  );
};

export default ItemsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight + 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.PRIMARY,
  },
  errorContainer: {
    padding: 10,
  },
  errorText: {
    color: Colors.LIGHTER_TEXT,
    fontFamily: "Book",
    fontSize: 16,
    textAlign: "center",
  },
});
