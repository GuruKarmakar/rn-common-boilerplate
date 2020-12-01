import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
import { AuthStack } from "./stacks/AuthStack";
import { Home } from "../containers/Home/Home";

export const Routes = () => {
  const { login, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => {
        if (user) {
          login();
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <NavigationContainer>{user ? <Home /> : <AuthStack />}</NavigationContainer>
  );
};
