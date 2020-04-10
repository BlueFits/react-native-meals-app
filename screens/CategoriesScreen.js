import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback } from "react-native";

//Custom Components
import GridItems from "../components/GridItems";

import { CATEGORIES } from "../data/dummy-data"; 

function Categories({ navigation }) {
    return (
        <GridItems navigation={navigation} CATEGORIES={CATEGORIES} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Categories;