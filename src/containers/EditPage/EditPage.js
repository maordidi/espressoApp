import React from 'react';
import { View, Text } from 'react-native';
import { en } from '../../languages/en';
import { Input, FlatButton ,DropDown_ } from '../../components';
import style from './EditPageStyle';
import {data } from '../../extras/colors'
import {dataNum} from '../../extras/numOfCapsule'
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
    componentDidMount = () => {
        const { id,name, color, numOfCapsules } = this.props.route.params;
        this.setState({valueId:id});
        this.setState({valueName:name});
        this.setState({valueColor:color});
        this.setState({valueNumOfCapsule:numOfCapsules});
    }
    // UNSAFE_componentWillMount() {
    //     const { id,name, color, numOfCapsules } = this.props.route.params;
    //     this.setState({valueId:id});
    //     this.setState({valueName:name});
    //     this.setState({valueColor:color});
    //     this.setState({valueNumOfCapsule:numOfCapsules});
        
    // }
     handleInput=(newValue,proprty) =>{
        console.log(proprty);
        console.log(newValue);
        this.setState({[proprty]:newValue});
       
     }

     render(){
         return(
            <View style={style.container}>
                <View style={style.arrow}>
                    <FlatButton
                    onPress={()=>this.props.navigation.navigate('MainPage')}
                    disabledStyle={style.ReturnButtonStyle}>
                    </FlatButton>
                </View>
                    <View style={style.SubContainer}>
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
                            <DropDown_
                            value={this.state.valueColor}
                            label={'color'}
                            data={data}
                            proprty={'valueColor'}
                            handleInput={this.handleInput}
                            />
                        </View>
                        <View>
                            <DropDown_
                             label={'put the number of capsule:'}
                             data={dataNum}
                            proprty={'valueNumOfCapsule'}
                            handleInput={this.handleInput} 
                            value={this.state.valueNumOfCapsule}/>
                        </View>
                        <View style={style.buttonContainer}>
                            <FlatButton
                              onPress={()=>console.log('save button pressed!')}
                            disabledStyle={style.SaveButtonStyle}
                            >
                                <Text style={style.SaveButtonTextStyle}>
                                    {en.saveButtonText}
                                </Text>
                            </FlatButton>
                        </View>
                    </View>
            </View>
         );
     }
}

export default EditPage;