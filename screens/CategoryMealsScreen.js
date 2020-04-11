import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

//Custom Component
import MealList from "../components/MealList";

//Controllers
import { DefaultText } from "../controllers/TextController";

//data
import { CATEGORIES } from "../data/dummy-data";

function CategoryMeals({ navigation, route }) {
    let { categoryId } = route.params;
    //Redux hook
    const MEALS = useSelector(state => state.mealsReducer.filteredMeals);

    let selectedCategory = CATEGORIES.find(data => data.id === categoryId);
    let toDisplay = MEALS.filter(function(data) {
        return ((data.categoryIds.indexOf(categoryId)) >= 0);
    });

    navigation.setOptions({
        title: selectedCategory.title,
    });

    if (!toDisplay.length) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <DefaultText>No matching filters here :(</DefaultText>
            </View>
        );
    } else {
        return (
            <MealList toDisplay={toDisplay} navigation={navigation} />
        );
    }
};

export default CategoryMeals;5