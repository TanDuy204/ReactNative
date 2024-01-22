import { Pressable, View ,Image, Text} from "react-native"
import { style } from "../../screens/auth/splash/style"
import React from "react";

const AuthHeader = ({title, onBackPress}) =>{
    return(
        <View style={style.container}>
            <Pressable onBackPress={onBackPress}>
                <Image style={style.iconBack}
                      source={require('../../asseets/icon/icon.png')}>
              </Image>
            </Pressable>
            <Text style={style.title}>{title}</Text>
        </View>
    );

};
export default AuthHeader;