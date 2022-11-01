
import React from "react";
import {
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Platform,
  LogBox,
} from "react-native";
import RootNavigation from "./navigations";
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function () {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        showHideTransition={"none"}
        hidden={false}
      />
    <RootNavigation/>

      
    </>
  );
}