import React from "react";
import { Text, TouchableOpacity } from "react-native"
import{styles} from './style'

const Button2 = ({title, onPress, style}) =>{
    return(
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={[styles.textContent]}>{title}</Text>
        </TouchableOpacity>
    );
};
export default React.memo(Button2);