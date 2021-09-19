import React,{Component} from "react";
import { View, Text } from "react-native";


export default class Screen1 extends Component{

render()
{
    return(
        <View style={{flex: 1,padding: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 20 }}>
                Name is {this.props.navigation.state.params.P1}
            </Text>
        </View>
    );
}


}