import { StyleSheet } from 'react-native'; 


export default StyleSheet.create({
    MainContainer:{
        flex: 1,
        top:50,
        alignItems: 'center',


    },
    container:{
         backgroundColor:'grey',
        borderColor:'black',
        borderWidth:5,
        padding:2,
        marginTop: 30,
        height: 300,
        width: 70,
        flexDirection:'column-reverse',
        alignItems: 'center',
        marginRight:10,
       
    },
    text:{
        // fontFamily:'lucida grande',
        // fontSize: 20,
    },
    bar:{
        // backgroundColor:'black',
        borderRadius:50,
        height: 20,
        width: 50,
        marginTop:1,
        marginBottom:1
    },
    idStyle:{
        fontFamily:'lucida grande',
        fontSize: 10,
        flex:.01,
        paddingRight: 7
   
    },
    idText:{

    },
    CapsuleEnabledStyle:{
        backgroundColor:'green',
        borderColor:'black',
        borderWidth:5,
        padding:2,
        marginTop: 30,
        height: 300,
        width: 70,
        flexDirection:'column-reverse',
        alignItems: 'center',
        marginRight:10,
    }
  });
  