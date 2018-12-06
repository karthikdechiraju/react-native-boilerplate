import { View, Text } from "react-native";
import Styles from './styles';
import React from 'react'

const view = () => {
    return(
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextStyle}>Hello world</Text>
        </View>
    )
}

export default view;