import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';







const MealDetailScreen = props => {
    const { id, categoryIds, imageUrl, title, steps } = props.navigation.getParam('item');
    console.log(props.navigation.getParam('item'))
    return (
        <ScrollView>
            <Image source={{uri: imageUrl}} style={styles.image}/>
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
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const item = navigationData.navigation.getParam('item');
    return {
        headerTitle: item.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='favorite'
                    iconName='ios-star'
                    onPress={() => {
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

    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 3
    }


});

export default MealDetailScreen;