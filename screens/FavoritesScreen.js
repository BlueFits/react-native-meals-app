import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

//Custom Component
import MealList from "../components/MealList";

//Controllers
import { DefaultText } from "../controllers/TextController";


function FavoritesScreen({ navigation }) {
    const MEALS = useSelector(state => state.mealsReducer.favoriteMeals);

    if (MEALS.length === 0 || !MEALS) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <DefaultText>No favorites found.</DefaultText>
            </View>
        );
    } else {
        return (
            <MealList toDisplay={MEALS} navigation={navigation} />
        );
    }
};

export default FavoritesScreen;