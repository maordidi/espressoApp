import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        // justifyContent:'left',
        alignItems:'flex-end',
        flex:1, 

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
});