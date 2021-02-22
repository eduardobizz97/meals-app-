import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import COLORS from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen    
    },
    MealsDetail: MealDetailScreen

},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.thirdColor: '',
            borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
            borderBottomColor: Platform.OS === 'android' ? COLORS.primaryColor : COLORS.thirdColor
    
        },
        headerTintColor: Platform.OS === 'android' ? COLORS.whiteColor : COLORS.thirdColor,
        headerTitleStyle: {
            textAlign: 'center',
            fontFamily: 'open-sans',
            fontWeight: 'bold',
        },
    }
});

export default createAppContainer(MealsNavigator);