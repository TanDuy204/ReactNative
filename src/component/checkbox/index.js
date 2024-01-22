import { Image, TouchableOpacity, View } from "react-native"
import {style} from './style'
import React from "react";
const Checkbox = ({checked, oncheck} ) =>{
    return(
        <TouchableOpacity 
        activeOpacity={1}
        onPress={()=> oncheck(!checked)}
        style={style.container}>
            {checked? (
                <View style={style.innerContainer}>
                    <Image style={style.checkIcon}
                    source={require('../../asseets/icon/check.png')}>

                    </Image>
                </View>
            ):null

            }
        </TouchableOpacity>
    );
};
export default React.memo(Checkbox);