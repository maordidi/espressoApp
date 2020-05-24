import React from 'react';
import { View, Text } from 'react-native';
import { en } from '../../languages/en';
import { Input, FlatButton } from '../../components';
import style from './EditPageStyle';

class EditPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            valueId:'',
            valueName:'',
            valueColor:'',
            valueNumOfCapsule:'',
        }
    }
    componentDidMount() {
        const { id,name, color, numOfCapsules } = this.props.route.params;
        this.setState({valueId:id});
        this.setState({valueName:name});
        this.setState({valueColor:color});
        this.setState({valueNumOfCapsule:numOfCapsules});
        
    }
     handleInput=(newValue,proprty) =>{
        this.setState({[proprty]:newValue});
     }

     render(){
        
         return(
          <View style={style.container}>
               {/* <Text>Return</Text>  */}
              <FlatButton
              onPress={()=>this.props.navigation.navigate('MainPage')}
              disabledStyle={style.ReturnButtonStyle}>
              </FlatButton>
            <View>
                <Input proprty={'valueId'}
                handleInput={this.handleInput} 
                value={this.state.valueId}/>
                
            </View>
            <View>
                <Input proprty={'valueName'}
                handleInput={this.handleInput} 
                value={this.state.valueName}/>
                
            </View>
            <View>
                <Input proprty={'valueColor'}
                handleInput={this.handleInput} 
                value={this.state.valueColor}/>
                
            </View>
            <View>
                <Input proprty={'valueNumOfCapsule'}
                handleInput={this.handleInput} 
                value={this.state.valueNumOfCapsule}/>
                
            </View>
          </View>
         );
     }
}

export default EditPage;