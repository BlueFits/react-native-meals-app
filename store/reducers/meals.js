import { MEALS } from "../../data/dummy-data"
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

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
        case SET_FILTERS: 
            const appliedFilters = action.filters;
            //Filter will store if the true is returned and will not store it if a false is passed
            const updatedFiltered = state.meals.filter(meal => {
                //if the filter is false it will automatically not run
                //We only want it to be removed if the filter is true, but the meal is not true
                //Therefore this is the perfect solution
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                } else if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                } else if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                } else if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                } else {
                    return true;
                }
            });
            console.log("Number of meals: " + updatedFiltered.length);
            return {...state, filteredMeals: updatedFiltered};
        default: 
            return state;
    };

};

export default mealsReducer;