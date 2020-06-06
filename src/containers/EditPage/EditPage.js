import React from 'react';
import { View, Text } from 'react-native';
import { en } from '../../languages/en';
<<<<<<< HEAD
import { Input, FlatButton ,DropDown_ } from '../../components';
import style from './EditPageStyle';
import {data } from '../../extras/colors'
import {dataNum} from '../../extras/numOfCapsule'
=======
import { Input, FlatButton ,DropDown } from '../../components';
import style from './EditPageStyle';

>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
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
<<<<<<< HEAD
    componentDidMount = () => {
=======
    componentDidMount() {
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
        const { id,name, color, numOfCapsules } = this.props.route.params;
        this.setState({valueId:id});
        this.setState({valueName:name});
        this.setState({valueColor:color});
        this.setState({valueNumOfCapsule:numOfCapsules});
<<<<<<< HEAD
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
=======
        
    }
     handleInput=(newValue,proprty) =>{
        this.setState({[proprty]:newValue});
     }

     render(){
        
         return(
            <View>
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
                <View style={style.arrow}>
                    <FlatButton
                    onPress={()=>this.props.navigation.navigate('MainPage')}
                    disabledStyle={style.ReturnButtonStyle}>
                    </FlatButton>
<<<<<<< HEAD
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
=======
                    </View>
                    <View style={style.SubContiner}>
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
                        <DropDown/>
                        
                    </View>
                    <View>
                        <Input proprty={'valueNumOfCapsule'}
                        handleInput={this.handleInput} 
                        value={this.state.valueNumOfCapsule}/>
                        
                    </View>
                    <FlatButton
                    //   onPress={()=>this.props.navigation.navigate('MainPage')}
                    disabledStyle={style.SaveButtonStyle}>
                        <Text style={style.SaveButtonTextStyle}>{en.saveButtonText}</Text>
                    </FlatButton>
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
                    </View>
            </View>
         );
     }
}

export default EditPage;