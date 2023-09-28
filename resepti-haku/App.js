import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeSearchScreen from "./screens/RecipeSearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import RecipeDetailsScreen from "./screens/RecepieScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={RecipeSearchScreen}
          options={{ title: "Search for recipes", headerShown: true }}
        />
        <Stack.Screen
          name="Details"
          component={RecipeDetailsScreen}
          options={{ title: "Recipe details", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
