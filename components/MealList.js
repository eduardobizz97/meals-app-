import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MealItem from './MealItem';



const MealList = props => {

    const renderItem = (itemData) => {
        return (
            <MealItem
                itemData={itemData}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealsDetail',
                        params: {
                            item: itemData.item
                        }
                    })
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItem}
                style={{ width: '100%' }}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
});
