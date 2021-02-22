import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import FavoriteScreen from '../screens/FavoriteScreen';

import COLORS from '../constants/Colors';

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

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: COLORS.thirdColor
        }
    },
    Favorites: {
        screen: FavoriteScreen, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },

            tabBarColor: COLORS.favColor,
        
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig,{

        activeTintColor: COLORS.fourthColor,
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeBackgroundColor: COLORS.thirdColor,
            activeTintColor: COLORS.whiteColor
        }
    });



export default createAppContainer(MealsFavTabNavigator);

