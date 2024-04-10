import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constant from "expo-constants";
import ListItem from "../components/ListItem";
import { fetchItems } from "../src/store/ItemSlice";
import { Colors } from "../constant/colors";
import LoadingIndicator from "../components/LoadingIndicator";

const ItemsListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { items, isLoading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

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
