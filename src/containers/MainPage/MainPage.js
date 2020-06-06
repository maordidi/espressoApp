import React from 'react';
import { View, FlatList, ScrollView, Text} from 'react-native';
import { Header, Capsule, FlatButton } from '../../components'; 
import { en } from '../../languages/en';                                                                                                                                                                                   
import style from './MainPageStyle';
import { list } from '../../extras/capsuleList';
<<<<<<< HEAD
import espresso from '../../api/espresso';
import axios from 'axios';


=======
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flagEdit:true,
<<<<<<< HEAD
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

=======

        }
    }
    
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
    handleEditButtonPress = () => {
        this.setState({flagEdit:!this.state.flagEdit});
    }
    render(){
<<<<<<< HEAD
=======
        console.log(this.props);
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
        return(
            <ScrollView contentContainerStyle={style.container}>
                <Header 
                HeadLine={en.headerText}
                />
            <FlatList 
                contentContainerStyle={style.FlatList}
                horizontal
<<<<<<< HEAD
                data={this.state.list}
                renderItem={({item}) => 
                    <Capsule 
                        name={item.name} 
                        color={item.colorName} 
                        numOfCapsules={item.number.toString()} 
                        id={item.id.toString()}
=======
                data={list}
                renderItem={({item}) => 
                    <Capsule 
                        name={item.name} 
                        color={item.color} 
                        numOfCapsules={item.numOfCapsules} 
                        id={item.id}
>>>>>>> 0127fa1d14a7b006e6aa857d2337dd14f1734ae4
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