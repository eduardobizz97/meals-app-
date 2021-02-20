import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The MealDetailScreen</Text>
            <Button title='go back to categories' onPress={()=>{
                props.navigation.popToTop();
            }}/>
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

export default MealDetailScreen;