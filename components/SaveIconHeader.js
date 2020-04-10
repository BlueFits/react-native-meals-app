import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

//Constants
import HeaderButton from "./HeaderButton";


function SaveIconHeader(props) {
    return(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Save" 
                        iconName="ios-save" 
                        onPress={props.onPress}
                    />
        </HeaderButtons>
    );
};

export default SaveIconHeader;