import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoryMealsScreen</Text>
            <Button title='Go to MealDetail' onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealsDetail'
                })
            }} />
            <Button title='Go back' onPress={() => {
                props.navigation.pop();
            }} />
        </View>
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
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;


