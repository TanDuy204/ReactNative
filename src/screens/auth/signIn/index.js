import { Image, Pressable, View , Text} from "react-native"
import{style} from './style'
import AuthHeader from "../../../component/AuthHeader";
import Input from "../../../component/input";
import React, { useState } from "react";
import Checkbox from "../../../component/checkbox";
import Button2 from "../../../component/button2";
import Seperator from "../../../component/seperator";
import GogleLogin from "../../../component/gogleLogin";

const SignUp = () =>{
    const[checked, setCheck] = useState(false)
    const onSignIn = () =>{
        console.log('Test Sign in')
    }
    return(
        <View style={style.container}>
            <Text style={style.header}>Sign In</Text>
            
            <Input lable="Email" placeholer="exmple@gamil.com"/>
            <Input isPassowrd lable="Password" placeholer="******"/>
            <View style={style.checkRow}>
                <Checkbox checked={checked} oncheck={setCheck}></Checkbox>
                <Text style={style.checkText}> I agree with Terms & Privacy</Text>
            </View>
            <Button2 style={style.button} title="Sign Up"></Button2>
            <Seperator text="Or sign up with"></Seperator>
            <GogleLogin></GogleLogin>
            <Text style={style.footerText}>
            Already have an account?
            <Text onPress={onSignIn} style={style.footerText}>
                Sign In
            </Text>
            </Text>
        </View>
    );
};
export default SignUp;