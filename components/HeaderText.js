import React from "react";
import { Text, StyleSheet} from "react-native";

function HeaderText(props) {
    return (<Text style={{...styles.text, ...props.style}} numberOfLines={props.numberOfLines || 1} >{props.children}</Text>);
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "roboto-bold",
        fontSize: 18,
    },
});

export default HeaderText;