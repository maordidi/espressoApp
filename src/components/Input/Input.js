import React from 'react';
import { View, Text, TextInput } from 'react-native';
import  Style  from './InputStyle';


const Input = ({value, handleInput, proprty}) => { 

   const onChangeText =(text) =>{
        
    
    }
    return(
        <View >
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => handleInput(text,proprty)}
                value={value}
            />
        </View>
        );   
    }

export default Input;