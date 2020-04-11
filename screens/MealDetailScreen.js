import React, { useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

//Actions Redux
import { toggleFavorite } from "../store/actions/meals";

//Cutom Components
import MealDetailRendering from "../components/MealDetailRendering";

//Controllers
import { DefaultText } from "../controllers/TextController";

//Header Configuration
import HeaderButton from "../components/HeaderButton";

function MealDetail({ navigation, route }) {
    //Extract from props
    const { mealId } = route.params;
    //Hooks
    const MEALS = useSelector(state => state.mealsReducer.meals);
    const currentMealIsFavorite = useSelector(state => state.mealsReducer.favoriteMeals.some(meal => meal.id === mealId));
    const dispatch = useDispatch();
    //Logics
    const selectedId = MEALS.find((data) => data.id === mealId );    
    //Custom Validation Very Choppy Experience
    function longTitleHandler(title) {
        console.log("longTitleHandler running...");
        let titleProcess = title.split(" ");
        let newTitle = [];
        if (titleProcess.length > 4) {
            for (let i = 0; i < 4; i++) {
                newTitle.push(titleProcess[i]);
            }
            return newTitle.join(" ") + "...";
        } else {
            return title;
        }
    };
    
    /* My Solution
    function favoriteIconHandler() {
        const favMeals = useSelector(state => state.mealsReducer.favoriteMeals);
        const indexCheck = favMeals.findIndex((meal) => meal.id === mealId);
        console.log("favIconHandler running...");
        if (indexCheck >= 0) {
            return "ios-star";
        } else {
            return "ios-star-outline";
        }
    };
    */

    //Custom navigation Set Options
    navigation.setOptions({
        title: longTitleHandler(selectedId.title),
        headerRight: function() {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Favorite" 
                        iconName={currentMealIsFavorite ? "ios-star": "ios-star-outline"}
                        onPress={function() {
                            dispatch(toggleFavorite(mealId));
                            console.log("dispatch successfully ran");
                        }} 
                    />
                </HeaderButtons>
            );
        },  
    });
    //Render
    return (  
        <ScrollView style={styles.screen}>
                <View style={styles.headerBanner}>
                    <Image resizeMode="cover" style={styles.headerImage} source={{uri: selectedId.imageUrl}}/>
                    <View style={styles.headerDetails}>
                        <DefaultText>{selectedId.duration}m</DefaultText>
                        <DefaultText>{selectedId.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{selectedId.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
                <MealDetailRendering title="Ingredients" data={selectedId.ingredients}/>
                <MealDetailRendering title="Steps" data={selectedId.steps}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headerBanner: {
        width: "100%",
    },
    headerImage: {
        height: 180,
    },
    headerDetails: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        padding: 8,
    },
});

export default MealDetail;