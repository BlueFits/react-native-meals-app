//Unique Identifier to avoid mispelling
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

//Action Creator Pattern
export const toggleFavorite = function(id) {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id,
    };
};

export const setFilters = function(filterSettings) {
    return {
        type: SET_FILTERS,
        filters: filterSettings,
    };
};