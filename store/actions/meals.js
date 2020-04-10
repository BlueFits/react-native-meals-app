//Unique Identifier
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

//Action Creator Pattern
export const toggleFavorite = function(id) {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id,
    };
};