import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

//Custom Component
import MealItem from "../components/MealItem"

function MealList(props) {

    const { toDisplay, navigation } = props;

    return (
        <View style={styles.list}>
            <FlatList 
            data={toDisplay} 
            renderItem={function(data) {
                return <MealItem 
                            title={data.item.title} 
                            onSelectMeal={function() {
                                navigation.navigate("mealDetail", {
                                    mealId: data.item.id,
                                });
                            }} 
                            duration={data.item.duration}
                            complexity={data.item.complexity}
                            affordability={data.item.affordability}
                            image={data.item.imageUrl}
                        />
            }}
            style={{width: "100%", paddingTop: 15,}}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default MealList;