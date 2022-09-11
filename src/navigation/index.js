import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import User from "../pages/user";
// import BottomAppStack from "./bottomAppStack";
import Login from "./loginStack";

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
      <Tab.Screen name="user" component={User} />
    </NavigationContainer>
  );
}

export default Navigators;
