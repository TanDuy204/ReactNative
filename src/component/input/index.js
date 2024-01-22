import { View, Text, TextInput, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import { styles } from './style'

const Input = ({lable, placeholder, isPassowrd}) => {
  const [isPassowrdVisibal, setIsPasswordVisibal] = useState(false);
const onEyePress =() => {
  setIsPasswordVisibal(!isPassowrdVisibal);
}
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder} style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}></TextInput>
        {isPassowrd ? (
          <Pressable onPress={onEyePress}>
            <Image
            style={styles.eye}
            source={
              isPassowrdVisibal
              ? require('../../asseets/icon/eye.png')
              : require('../../asseets/icon/eye_closed.png')
            }
            />
          </Pressable>
        ): null}
      </View>
      
    </View>
  );
};

export default Input;