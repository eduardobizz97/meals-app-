import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList';
import Colors from '../constants/Colors';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        
        <MealList 
            listData={favMeals} 
            navigation={props.navigation}/>
    );
};

FavoriteScreen.navigationOptions = navData => {
    console.log(navData);
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    iconColor={Colors.favColor}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
                    
            </HeaderButtons>
        )

    };
    
};

const styles = StyleSheet.create({
    
});

export default FavoriteScreen;