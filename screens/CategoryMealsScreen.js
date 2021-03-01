import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    

    return (
        
        <MealList 
            listData={displayedMeals} 
            navigation={props.navigation}
        />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCatergory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCatergory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    
});

export default CategoryMealsScreen;


