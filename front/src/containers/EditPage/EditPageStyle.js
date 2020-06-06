import { StyleSheet } from 'react-native';


export default StyleSheet.create({
<<<<<<< HEAD
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
=======
    arrow:{
        
        alignItems:'flex-end',
        // flex:1, 

    },
    SubContiner:{
        top: 150,
         justifyContent:'center',
        alignItems:'center',
       
        

>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
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
<<<<<<< HEAD
    buttonContainer : {
        flex:.5,
        justifyContent: 'center'
    },
    SaveButtonStyle:{
        backgroundColor:'#db9653',
=======
    SaveButtonStyle:{
        backgroundColor:'#db9653',
        borderRadius:50,
        height:90,
        width:90,
        borderColor:'black',
        borderWidth:3,
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
        justifyContent:'center',
        alignItems:'center',


    },
    SaveButtonTextStyle:{
        fontFamily:'lucida grande',
        fontSize: 20,
    }
});