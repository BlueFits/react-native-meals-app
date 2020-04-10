import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, FlatList } from "react-native";

//Custom Controllers
import { HeaderText } from "../controllers/TextController";

function GridItems(props) {
    //Props
    const { navigation, CATEGORIES } = props;
    //Custom Methods
    const renderGridItem = (itemData) => {
        return (
            <View style={{...styles.gridContainer, backgroundColor: itemData.item.color}}>
                <TouchableNativeFeedback 
                    onPress={() => navigation.navigate("categoryMeals", {
                        categoryId: itemData.item.id,
                })}>
                    <View style={styles.gridItem}>
                        <HeaderText>{itemData.item.title}</HeaderText>
                    </View>
                </TouchableNativeFeedback>
            </View>
            );
    };
    return (
            <FlatList 
                data={CATEGORIES} 
                renderItem={renderGridItem} 
                numColumns={2} 
            />
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius: 10,
        elevation: 8,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        overflow: "hidden",
    },
    gridItem: {
        width: "100%",
        height: "100%",
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        textAlign: "right",
    },
});

export default GridItems;