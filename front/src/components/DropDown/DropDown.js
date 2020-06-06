import React from 'react';
import { View } from 'react-native';
import  Style  from './DropDownStyle';
import { Dropdown } from 'react-native-material-dropdown';

        const DropDown =({})  => { 

            const data = [{
                value: 'green',
              }, {
                value: 'red',
              }, {
                value: 'gold',
              }];

    return(
        <View >
             <Dropdown
        label='color'
        data={data}
        />
        </View>
        );   
    }

export default DropDown;