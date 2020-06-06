import React from 'react';
import { View, Text } from 'react-native';
import  Style  from './HeaderStyle';


const Header = ({HeadLine}) => { 
    return(
        <View style={Style.container}>
            <Text style={Style.text}>{ HeadLine}</Text>
        </View>
        );   
    }

export default Header;