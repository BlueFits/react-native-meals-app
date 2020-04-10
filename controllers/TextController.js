import React from "react";
import { Text, StyleSheet } from "react-native";

export function DefaultText({ children, style }) {
    //Styles
    const styles=StyleSheet.create({
        text: {
            fontFamily: "roboto",
        },
    });
    //Render
    return(
        <Text style={{...styles.text, ...style}}>{children}</Text>  
    );
};

export function HeaderText(props) {
    //Styles
    const styles = StyleSheet.create({
        text: {
            fontFamily: "roboto-bold",
            fontSize: 18,
        },
    });
    //Render
    return (<Text style={{...styles.text, ...props.style}} numberOfLines={props.numberOfLines || 1} >
            {props.children}
        </Text>
        );
};