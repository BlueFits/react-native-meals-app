import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Switch } from "react-native";

//Custom Components
import SaveIconHeader from "../components/SaveIconHeader";
//Constants
import Colors from "../constants/Colors";
//Controller
import { DefaultText, HeaderText } from "../controllers/TextController";

//Local Components
function FilterSwitch({ label, value, onValueChange  }) {
    return(
        <View style={styles.switchContainer}>
                <DefaultText>{label}</DefaultText>
                <Switch 
                    value={value} 
                    onValueChange={onValueChange} 
                    trackColor={{
                        true: Colors.accentB,
                    }}
                    thumbColor="white"
                />
        </View>
    );
};

export default function Filter({ navigation, route }) {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    //Seatch up useEffect in conjuction with useCallBack
    //useCallback Allows to prevent recreation of a function
    const saveFilters = useCallback(function() {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        console.log(appliedFilters);
        return;
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    //Everytime this compononent re renders the function insde gets called
    useEffect(function() {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    //Page specific rendering
    navigation.setOptions({
        headerRight: function() {
           return(
            <SaveIconHeader onPress={() => route.params.save()} />
           );
        },
    });

    return(
        <View style={styles.screen}>
            <HeaderText style={styles.header}>Available Filters / Restrictions</HeaderText>
            <FilterSwitch 
                label="Gluten-free" 
                value={isGlutenFree} 
                onValueChange={(change) => setIsGlutenFree(change)} 
            />
            <FilterSwitch 
                label="Lactose-free" 
                value={isLactoseFree} 
                onValueChange={(change) => setIsLactoseFree(change)} 
            />
            <FilterSwitch 
                label="Vegan" 
                value={isVegan} 
                onValueChange={(change) => setIsVegan(change)} 
            />
            <FilterSwitch 
                label="Vegetarian" 
                value={isVegetarian} 
                onValueChange={(change) => setIsVegetarian(change)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
    },
    header: {
        padding: 20,
    },
    switchContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        padding: 10,
    },  
});