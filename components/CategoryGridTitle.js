import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

import COLORS from '../constants/Colors';

const CategoryGridTitle = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
 
    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                onPress={props.onSelect}
                style={{flex:1}}
                >
                <View style={[styles.container, { backgroundColor: props.color}]}> 
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 15,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', 
        elevation: 5,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'red',
        shadowOpacity: 0.20,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        color: COLORS.whiteColor,
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});
