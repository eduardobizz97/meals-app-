import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The FiltersScreen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    console.log(navData);
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
                    
            </HeaderButtons>
        )

    };
    
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;