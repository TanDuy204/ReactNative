import { Image, Pressable, View,Text,Button } from "react-native";
import React from "react";
import{style} from './style';
import Button2 from "../../../component/button2";

const Splash = ({navigation}) =>{
    return(
        <View style={style.container}>
            <Image
            resizeMode="contain"
            style={style.img}
            source={require('../../../asseets/images/Splash.png')}
             />
             <Text style={style.title}>You'll find</Text>
             <Text style={[style.title, style.innertitle]}>All you need</Text>
             <Text style={style.title}>Here!</Text>

             <Button2 
             onPress={()=>navigation.navigate('SignUp')}
             title="Sign Up"></Button2>

             <Pressable onPress={()=>navigation.navigate('SignIn')}
             title="Sign In">
                <Text style={style.footerText}>Sign In</Text>
             </Pressable>
        </View>
    );
};
export default Splash;