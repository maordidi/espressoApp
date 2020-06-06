import React from 'react';
import { View, Text } from 'react-native';
import  Style  from './CapsuleStyle';
import  FlatButton  from '../FlatButton';

const Capsule = ({name,color,id,numOfCapsules,disabled_,navigation }) => { 

    const renderBars = () => {
        var myCapsule=[];
        for(let i=0;i<numOfCapsules;i++)
            myCapsule.push(<View></View>)

        return myCapsule.map((item,index) => (
            <View key={index} style={[Style.bar, {backgroundColor:color}]}></View>
        ));
        
    }
   
    return(
            <View style={Style.MainContainer}>
                <Text style={Style.idText}>{id}</Text>
                <FlatButton 
                    disabledStyle={Style.CapsuleEnabledStyle}
                    disabled={disabled_} 
                    onPress={()=>navigation.navigate('EditPage',{
                        id:id,name:name,color:color,numOfCapsules:numOfCapsules
                    })}
                    Style={Style.container}>
                    {renderBars()}
                </FlatButton>
                <Text style={Style.nameStyle}>{name}</Text>
            </View>
        );   
    }

export default Capsule;

