import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/tabscreens/home";
import Details from "../../screens/tabscreens/details";

const Stack = createNativeStackNavigator();

console.warn(Stack)

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
