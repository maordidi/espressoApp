import React from 'react';
import { View, Picker, StyleSheet } from "react-native";
import  Style  from './DropDownStyle';


    const DropDown =({data, proprty, handleInput,value, label})  => { 
        console.log(data) 
        const renderOptions = () => {
            return data.map((item, index)=> {
                return <Picker.Item
                key={index} label={item} value={item}/>
            });    
        } 
        return(
        <Picker
        selectedValue={value}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => handleInput(itemValue,proprty)}
        >
        {/* <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
        {renderOptions()}
          </Picker>
            );   
    }

export default DropDown;