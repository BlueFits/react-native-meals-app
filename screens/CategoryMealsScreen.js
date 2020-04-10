import React from "react";
import { useSelector } from "react-redux";

//Custom Component
import MealList from "../components/MealList";

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

    return (
        <MealList toDisplay={toDisplay} navigation={navigation} />
    );
};

export default CategoryMeals;5