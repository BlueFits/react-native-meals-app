import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useNavigation } from "@react-navigation/native";

//Constants
import HeaderButton from "./HeaderButton";


function DrawerMenu() {
    const navigation = useNavigation();
    return(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Menu" 
                        iconName="ios-menu" 
                        onPress={function() {
                            navigation.toggleDrawer();
                        }}
                    />
        </HeaderButtons>
    );
};

export default DrawerMenu;