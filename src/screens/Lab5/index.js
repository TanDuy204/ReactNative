import { StatusBar, View, ImageBackground, Text, TouchableOpacity} from "react-native"
import { style } from "../Lab5/style";


const Lab5 = () =>{
    return(
        <View style={style.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0"/>
            <ImageBackground 
            source={require('../../asseets/images/Hoian.png')}
            style={style.image}>
                <View style={style.details}>
                    <Text style={style.text}>
                        <Text style={style.fistLine}>Discover {'\n'}</Text>
                        <Text style={style.secondLine}>world with us</Text>
                    </Text>
                    <Text style={style.textStyle}>Discover world white us</Text>
                    <TouchableOpacity style={style.button}>
                         <Text style={style.buttonText}>Get Stated</Text>
                    </TouchableOpacity>
                </View>
                     </ImageBackground>
               
        </View>
           );
        };
        export default Lab5;


















 