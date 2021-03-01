import React, { useRef } from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomTabBar = props => {


    console.log('[customtab]',props)
    return (
        
        <TouchableOpacity {...props} >
            <Ionicons
                name='ios-star'
                size={25}
                color={props.info.style} />
        </TouchableOpacity>

    );
};

export default CustomTabBar;

const styles = StyleSheet.create({});