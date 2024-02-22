import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./Style";

const AddUser=()=>{
   const[name,setName] = useState('');
   const[birthday,setBirthday] = useState('');
   const saveData = async()=>{
    console.warn("call add")
    const url = 'https://65d40200522627d50109be7c.mockapi.io/users';
    let result = await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,birthday}),
    });
    result = await result.json();
    if(result){
        console.warn("add success");
    }
   }

    return(
        <View style={style.modelContent}>
            <TextInput style ={style.input} placeholder="Enter name" value={name } onChangeText={text=>setName(text)}>

            </TextInput>
            <TextInput style ={style.input} placeholder="Enter birthday" value={name } onChangeText={text=>setBirthday(text)}>

            </TextInput>
            <View style={style.buttonGroup}>
                <TouchableOpacity style={style.button} onPress={saveData}>
                    <Text style={style.buttonText}>
                            add new
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};
export default AddUser;