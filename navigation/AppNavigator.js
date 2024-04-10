import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemsListScreen from "../screen/ItemLists";
import ItemDetailsScreen from "../screen/ItemDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ItemsListScreen" component={ItemsListScreen} />
        <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
