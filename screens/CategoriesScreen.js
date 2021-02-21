import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';

import COLORS from '../constants/Colors';

import { CATEGORIES } from "../data/dummy-data";
import Category from '../models/category';

const WIDTH = Dimensions.get('window').width;

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push(new Category('null'));
        numberOfElementsLastRow++;
    }

    return data;
};
let numOfColumns = 3;

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        if (itemData.item.id === 'null') {

            return <View style={[styles.gridItem, { backgroundColor: itemData.item.color }]} />;

        }
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={()=>{
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };


    return (
        <FlatList
            key={numOfColumns}
            keyExtractor={(item, index) => item.id} //New react apps doesnt need this shit
            data={formatData(CATEGORIES, numOfColumns)}
            renderItem={renderGridItem}
            numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',

    }
    

});

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',


};

export default CategoriesScreen;


