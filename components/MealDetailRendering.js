import React from "react";
import { View, FlatList, Dimensions, StyleSheet, Text } from "react-native";

import { HeaderText, DefaultText } from "../controllers/TextController"

//Dimensions
const device = Dimensions.get("window");

function MealDetailRendering(props) {
    return(
        <View style={styles.container}>
            <HeaderText style={styles.header}>{props.title}</HeaderText>
            {props.data.map(data => 
                <View style={styles.textContainer}>
                    <DefaultText style={styles.text}>{data}</DefaultText>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: "center", width: "100%"},
    header: { padding: 9},
    textContainer: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "90%",
        padding: 9,
        marginVertical: 10,
    },
    text: {

    },
});

export default MealDetailRendering;