import { StatusBar, View, ImageBackground, Text, TouchableOpacity} from "react-native"
import { style } from "../Lab5_3/style";


const Lab5_3 = () =>{
    return(
        <View style={style.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
            <ImageBackground 
            source={require('../../asseets/images/Hoian.png')}
            style={style.image}>
                <View style={style.details}>
                    <Text style={style.text}>PHỐ CỔ HỘI AN</Text>
                         
                </View>
            </ImageBackground>
            <View style={style.body}>
                
            </View>
            <View style={style.footer}>

            </View>
        </View>
           );
        };
        export default Lab5_3;