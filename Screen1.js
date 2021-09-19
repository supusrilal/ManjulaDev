import React,{Component} from "react";
import { View, TextInput, Button } from "react-native";


export default class Screen1 extends Component{

    constructor(props){

        super(props);
        this.state = {name:''};
    }

render()
{
    return(
        <View style={{flex: 1,padding: 10, justifyContent: 'center'}}>
            <TextInput
            placeholder = "Enter Name"
            style={{borderBottomWidth: 1, borderBottomColor: '#ADD8E6', marginBottom: 20}}
            onChangeText={name=>this.setState({name })}
            />

            <Button
            title= "Send"
            onPress={()=>this.props.navigation.navigate('Screen2',{P1:this.state.name})} 
            />

        </View>
    );
}


}