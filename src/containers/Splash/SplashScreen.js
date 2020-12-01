import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text>Splash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "teal",
  },
});
