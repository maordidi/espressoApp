import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex:1,
    },
    arrow:{
        alignItems:'flex-end',
        flex:0.2, 
    },
    SubContainer:{
        flex:1,
        marginHorizontal: 30
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
    buttonContainer : {
        flex:.5,
        justifyContent: 'center'
    },
    SaveButtonStyle:{
        backgroundColor:'#db9653',
        justifyContent:'center',
        alignItems:'center',


    },
    SaveButtonTextStyle:{
        fontFamily:'lucida grande',
        fontSize: 20,
    }
});