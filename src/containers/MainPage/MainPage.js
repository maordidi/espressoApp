import React from 'react';
import { View, FlatList, ScrollView, Text} from 'react-native';
import { Header, Capsule, FlatButton } from '../../components'; 
import { en } from '../../languages/en';                                                                                                                                                                                   
import style from './MainPageStyle';
import { list } from '../../extras/capsuleList';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flagEdit:true,

        }
    }
    
    handleEditButtonPress = () => {
        this.setState({flagEdit:!this.state.flagEdit});
    }
    render(){
        console.log(this.props);
        return(
            <ScrollView contentContainerStyle={style.container}>
                <Header 
                HeadLine={en.headerText}
                />
            <FlatList 
                contentContainerStyle={style.FlatList}
                horizontal
                data={list}
                renderItem={({item}) => 
                    <Capsule 
                        name={item.name} 
                        color={item.color} 
                        numOfCapsules={item.numOfCapsules} 
                        id={item.id}
                        disabled_={this.state.flagEdit}
                        navigation={this.props.navigation}
                    /> }
                keyExtractor={item =>item.id.toString()}
            />
            <View>
                <FlatButton 
                    onPress={this.handleEditButtonPress} 
                    disabledStyle={style.EditButtonStyle}
                    >
                    <Text style={style.EditButtonText}>{en.EditButtonText}</Text>
                </FlatButton>
            </View>
            </ScrollView>

        );
    }
}

export default MainPage;