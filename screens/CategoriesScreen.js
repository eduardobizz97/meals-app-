import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Text>The CategoriesScreen</Text>
            <Button title='Go to meals' onPress={() => { 
                props.navigation.navigate({routeName: 'CategoryMeals'});
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

export default CategoriesScreen;


