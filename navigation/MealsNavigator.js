import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


//Screens
import Categories from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetail from "../screens/MealDetailScreen";
import Favorites from "../screens/FavoritesScreen";
import Filter from "../screens/FiltersScreen";

//Constants
import Colors from "../constants/Colors";

//Custom Components
import DrawerMenu from "../components/DrawerMenu";

//
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Stacks
function MealsStackNavigator() {
    return (
            <Stack.Navigator screenOptions={defaultConfig}>
                <Stack.Screen name="categories" component={Categories} options={{
                    title: "Categories", 
                    headerShown: true,
                    headerLeft: function() {
                        return (
                            <DrawerMenu />
                        );
                    },
                }} />
                <Stack.Screen name="categoryMeals" component={CategoryMeals} />
                <Stack.Screen name="mealDetail" component={MealDetail} options={{
                    title: "Meal Detail",
                }} />
            </Stack.Navigator>
    );
};

function FavStackNavigator() {
    return (
        <Stack.Navigator screenOptions={defaultConfig}>
            <Stack.Screen name="Favorites" component={Favorites} options={{
                headerLeft: function() {
                    return (
                        <DrawerMenu />
                    );
                },
            }}/>
            <Stack.Screen name="mealDetail" component={MealDetail}/>
        </Stack.Navigator>
    );
};

function FilterStackNavigator() {
    return(
        <Stack.Navigator screenOptions={defaultConfig}>
            <Stack.Screen name="filter" component={Filter} options={{
                title: "Filter",
                headerLeft: function() {
                    return (
                        <DrawerMenu />
                    );
                },
            }} />
        </Stack.Navigator>
    );
};

//Tabs
function MealsTabNavigator() {
    return (
            <Tab.Navigator tabBarOptions={tabdeafultConfig}>
                <Tab.Screen name="Meals" component={MealsStackNavigator} options={{
                    tabBarIcon: function(tabInfo) {
                        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.color}/> 
                    },
                }} />
                <Tab.Screen name="Favorites" component={FavStackNavigator} options={{
                    tabBarIcon: function(tabInfo) {
                        return <Ionicons name="ios-star" size={25} color={tabInfo.color}/> 
                    },
                }} />
            </Tab.Navigator>
    );
};

//Drawer
function DrawerNavigator() {
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerType="slide" drawerContentOptions={{
                activeTintColor: Colors.accentA,
                labelStyle: {
                    fontFamily: "roboto-bold",
                },
            }}>
                <Drawer.Screen name="Meals" component={MealsTabNavigator} />
                <Drawer.Screen name="Filter" component={FilterStackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

//Config
const defaultConfig = {
    headerStyle: {
        backgroundColor: Colors.primary,
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center", 
    cardStyle: {
        backgroundColor: "#fff",
    },
    headerTitleStyle: {
        fontFamily: "roboto-bold"
    },
    headerBackTitleStyle: {
        fontFamily: "roboto",
    },
};

const tabdeafultConfig = {
    activeTintColor: Colors.accentB,
    labelStyle: {
        fontFamily: "roboto"
    },

};

//For the sake of not changing the name
const MealsNavigator = DrawerNavigator;
export default MealsNavigator;