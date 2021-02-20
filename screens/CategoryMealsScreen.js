import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;


