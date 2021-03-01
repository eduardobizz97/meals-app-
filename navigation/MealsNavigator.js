import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { StyleSheet,Platform, Text, View } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';

import COLORS from '../constants/Colors';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { color } from 'react-native-reanimated';

const TabBarComponent = (props) => <BottomTabBar {...props} />;

const labelStyle = {
    fontSize: 15,
    fontFamily: 'open-sans'
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealsDetail: MealDetailScreen

    }, {
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.thirdColor : '',
            borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
            borderBottomColor: Platform.OS === 'android' ? COLORS.primaryColor : COLORS.thirdColor

        },
        headerTintColor: Platform.OS === 'android' ? COLORS.whiteColor : COLORS.thirdColor,
        headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'open-sans',
            fontWeight: 'bold',
        },
    }
});

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoriteScreen,
        MealDetail: MealDetailScreen
    }, {
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.favColor : '',
            borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
            borderBottomColor: Platform.OS === 'android' ? COLORS.primaryColor : COLORS.favColor

        },
        headerTintColor: Platform.OS === 'android' ? COLORS.whiteColor : COLORS.favColor,
        
        headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'open-sans',
            fontWeight: 'bold',
        },
    }
}



);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {


            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: COLORS.thirdColor
        },

    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {

            tabBarIcon: (tabInfo) => {
                let favColor = tabInfo.tintColor;
                if (Platform.OS !== 'android') {
                    favColor = COLORS.favColor;
                }
                return <Ionicons name='ios-star' size={25} color={tabInfo.focused ? favColor : tabInfo.tintColor} />
            },

            tabBarColor: COLORS.favColor,
            
            


        }
    }

};



const MealsFavTabNavigator = Platform.OS === 'android'

    ? createMaterialBottomTabNavigator(tabScreenConfig, {

        activeTintColor: COLORS.fourthColor,
        shifting: true,
        labeled: false,
        barStyle: {
            backgroundColor: COLORS.thirdColor
        }

    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeBackgroundColor: COLORS.whiteColor,
            activeTintColor: COLORS.thirdColor,
            showLabel: false,
            labelStyle: labelStyle
             
        }
        
    });

    const FilterNavigator = createStackNavigator({
        Filters : FiltersScreen
    });
const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filter: FilterNavigator
});


export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 15,
        fontFamily: 'open-sans'
    }

  });

