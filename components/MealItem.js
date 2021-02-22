import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

import COLORS from '../constants/Colors';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal} style={styles.mealContainer}>
                <View style={[styles.mealRow, styles.mealHeader]}>

                    <ImageBackground
                        source={{ uri: props.itemData.item.imageUrl }}
                        style={styles.bgImage}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.itemData.item.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={[styles.mealRow, styles.mealDetail]}>
                    <Text>{props.itemData.item.duration}</Text>
                    <Text>{props.itemData.item.complexity}</Text>
                    <Text>{props.itemData.item.affordability}</Text>
                </View>
            </TouchableOpacity >
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 250,
        width: "100%",
        backgroundColor: Colors.fourthColor,
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    mealContainer:{
        flex:1
    },
    mealRow: {
        flexDirection: "row",
    },
    mealHeader: {
        height: '80%',
    },
    mealDetail: {
        height: '20%',
        paddingHorizontal: 15,
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "white",
        textAlign: "center",
    },
});

export default MealItem;