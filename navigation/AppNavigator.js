import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ItemsListScreen from "../screen/ItemLists";
import ItemDetailsScreen from "../screen/ItemDetailsScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ItemsListScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ItemsListScreen" component={ItemsListScreen} />
        <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
