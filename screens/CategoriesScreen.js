import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals' });
                }}
                style={[styles.gridItem, { backgroundColor: itemData.item.color }]}>
                <View >
                    <Text style={{ color: COLORS.whiteColor }}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <FlatList
            keyExtractor={(item, index) => item.id} //New react apps doesnt need this shit
            data={formatData(CATEGORIES, numOfColumns)}
            renderItem={renderGridItem}
            numColumns={numOfColumns} />
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
        alignItems: 'center'
    }
});

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: COLORS.primaryColor
    },
    headerTintColor: COLORS.whiteColor,
    headerTitleStyle: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontWeight: 'bold',
    },
};

export default CategoriesScreen;


