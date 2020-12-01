import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Register } from "../../containers/Auth/Signup/Register";
import { Login } from "../../containers/Auth/Login/Login";
import { SplashScreen } from "../../containers/Splash/SplashScreen";

//create a stack
const Stack = createStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
