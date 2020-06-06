import React from 'react';
import { View, FlatList, ScrollView, Text} from 'react-native';
import { Header, Capsule, FlatButton } from '../../components'; 
import { en } from '../../languages/en';                                                                                                                                                                                   
import style from './MainPageStyle';
import { list } from '../../extras/capsuleList';
import espresso from '../../api/espresso';
import axios from 'axios';



class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flagEdit:true,
            list:[]

        }
    }
    componentDidMount() {
        console.log("dd");
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            console.log("ddd1");
            const persons = res.data;
            console.log(res)
            console.log("ddd2");
          })
          
      }
    // async componentDidMount()
    // {
    //     console.log("dd");
    //     await espresso.get('/getCapsules',{
    //     }).then((response)=> {
    //         console.log('fffffffff')
    //         if(response.success==='false'){
    //             alert("cant get data from server");
    //         }
    //         else{
    //             console.log(response.data);
    //             this.setState({list:response.data})
    //             console.log(this.state)  
    //     }
    //     }).catch((error)=> {
    //         console.log("got error while posting data", error);

    //         });
    // }

    handleEditButtonPress = () => {
        this.setState({flagEdit:!this.state.flagEdit});
    }
    render(){
        return(
            <ScrollView contentContainerStyle={style.container}>
                <Header 
                HeadLine={en.headerText}
                />
            <FlatList 
                contentContainerStyle={style.FlatList}
                horizontal
                data={this.state.list}
                renderItem={({item}) => 
                    <Capsule 
                        name={item.name} 
                        color={item.colorName} 
                        numOfCapsules={item.number.toString()} 
                        id={item.id.toString()}
                        disabled_={this.state.flagEdit}
                        navigation={this.props.navigation}
                    /> }
                keyExtractor={item =>item.id}
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