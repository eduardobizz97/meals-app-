import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';





const MealDetailScreen = props => {
    const { id, categoryIds, title, steps } = props.navigation.getParam('item');
    return (

        <View style={styles.screen}>
            <View style={styles.detailContainer}>
                <View style={styles.detailRow}>
                    <Text>{title}</Text>
                </View>
                <View style={styles.detailRow}>
                    {steps.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>{`${index + 1}.- ${item}`}</Text>
                            </View>
                        );
                    })}
                </View>
                
            </View>
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const item = navigationData.navigation.getParam('item');
    return {
        headerTitle: item.title,
        headerRight: () => 
        <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
            <Item 
                title='favorite' 
                iconName='ios-star' 
                onPress={()=>{
                    console.log('Mark as favorite')
                }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    detailContainer: {
        flex: 1,
    },
    detailRow: {
       
    }
    

});

export default MealDetailScreen;