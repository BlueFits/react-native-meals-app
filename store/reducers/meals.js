import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

function mealsReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(function(meal) {
                return meal.id === action.mealId;
            });
            /*
            //Returns -1 in all cases FIGUREOUT
            const existingIndex = indexOfWorkAround(action.mealId);
            */
            //Copy the favorite meals in order to avoid mutation
            const favMealsUpdated = [...state.favoriteMeals];
            //Find the meal in the meals data
            const mealToAdd = state.meals.find(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                favMealsUpdated.splice(existingIndex, 1);
                return { ...state, favoriteMeals: favMealsUpdated };
            } else {
                return { ...state, favoriteMeals: favMealsUpdated.concat(mealToAdd) };
            }
            return state;
        default: 
            return state;
    };

};

export default mealsReducer;