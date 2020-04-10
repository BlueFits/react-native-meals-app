import React from "react";
import { useSelector } from "react-redux";

//Custom Component
import MealList from "../components/MealList";


function FavoritesScreen({ navigation }) {
    const MEALS = useSelector(state => state.mealsReducer.favoriteMeals);
    return (
        <MealList toDisplay={MEALS} navigation={navigation} />
    );
};

export default FavoritesScreen;