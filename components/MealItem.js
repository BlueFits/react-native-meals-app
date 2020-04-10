import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

//Custom Controllers
import { DefaultText, HeaderText } from "../controllers/TextController";

//Render MealItem
function MealItem(props) {
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <HeaderText numberOfLines={1} style={styles.title}>{props.title}</HeaderText>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,        
        backgroundColor: "lightgrey",
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        overflow: "hidden",
        elevation: 8,
    },
    mealRow: {
        flexDirection: "row",
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },  
    mealHeader: {
        height: "85%",
    },
    mealDetail: {
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%",
        paddingHorizontal: 10,
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingHorizontal: 10,
    },
    title: {
        color: "#fff",
        textAlign: "center",
    }
});

export default MealItem;