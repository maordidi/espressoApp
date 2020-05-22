import { StyleSheet } from 'react-native'; 


export default StyleSheet.create({
    container:{
        height:600, 
        alignItems:'center',
    },
    FlatList:{
        flexDirection:'row-reverse',
    },
    EditButtonStyle:{
        backgroundColor:'#db9653',
        borderRadius:50,
        height:90,
        width:90,
        borderColor:'black',
        borderWidth:3,
        justifyContent:'center',
        alignItems:'center',
      
    },
    EditButtonText:{
          fontFamily:'lucida grande',
        fontSize: 20,
    }
  });
  