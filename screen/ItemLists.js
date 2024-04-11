import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constant from "expo-constants";
import ListItem from "../components/ListItem";
import { setItems } from "../src/store/ItemSlice";
import { Colors } from "../constant/colors";
import LoadingIndicator from "../components/LoadingIndicator";
import axios from "axios";

const ItemsListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { items } = useSelector((state) => state.items);

  const fetchItems = () => async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      dispatch(setItems(response?.data));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
      <Text style={{ fontSize: 20, color: "white", marginBottom: 20 }}>
        List of Items
      </Text>
      {error ? (
        renderError()
      ) : (
        <>
          {isLoading && <LoadingIndicator color={"white"} size={"large"} />}
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => dispatch(fetchItems())}
            refreshing={isLoading}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
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
