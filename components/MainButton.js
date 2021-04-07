import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const MainButton = props => {
    return <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        margin: 10,
        width: 350
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'zig',
    },
});

export default MainButton;