import { StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The CategoriesScreen</Text>
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


