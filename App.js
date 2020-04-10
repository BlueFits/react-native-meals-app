import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//Redux dependencies
import mealsReducer from "./store/reducers/meals";
const rootReducer = combineReducers({
  mealsReducer,
});
const store = createStore(rootReducer);

//Navigation
import MealsNavigator from "./navigation/MealsNavigator";
//Faster Performance by providing primitives to represent screens instead of plain <View>
enableScreens();
//-Required Functions
function fetchFonts() {
  return Font.loadAsync({
    "roboto": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

//-Exported function-
export default function App() {
  let [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  } else {
    return (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    );
  }
}
