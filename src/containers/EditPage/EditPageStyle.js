import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    arrow:{
        
        alignItems:'flex-end',
        // flex:1, 

    },
    SubContiner:{
        top: 150,
         justifyContent:'center',
        alignItems:'center',
       
        

    },
    ReturnButtonStyle:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 50,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red', 
        transform: [
        {rotate: '-90deg'}
        ]
    },
    SaveButtonStyle:{
        backgroundColor:'#db9653',
        borderRadius:50,
        height:90,
        width:90,
        borderColor:'black',
        borderWidth:3,
        justifyContent:'center',
        alignItems:'center',


    },
    SaveButtonTextStyle:{
        fontFamily:'lucida grande',
        fontSize: 20,
    }
});