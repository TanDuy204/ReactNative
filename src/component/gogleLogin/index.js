import React from "react";
import { Image, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./style";

const GoogleLogin = () => {
    const handleGoogleLogin = async () => {
        console.log("Log In");
    }

    return (
        <TouchableOpacity
            activeOpacity = {0.6}
            onPress = {handleGoogleLogin}
            style = {styles.container}>
            <Image 
                style = {styles.image}
                source = {require('../../asseets/icon/Gmail.png')}/>
        </TouchableOpacity>
    );
};

export default React.memo(GoogleLogin);