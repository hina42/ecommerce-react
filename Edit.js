import React, { Component } from 'react'
import {Text,View,Image,ActivityIndicator, ImageBackground, TextInput, Button, ScrollView, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from 'react-native-material-dropdown';
import * as f from "firebase";
export default class Edit extends Component {
    state = {
        Data: [],
        updateId: "",
        updateDetails: {},
      };
    componentDidMount() {
        console.disableYellowBox = true;
        // this.props.navigation.setOptions({ 
        //     headerRight:()=><Ionicons name="md-contact" size={32} style={{marginRight:20}} color="white" />,
        //     headerLeft:()=><Ionicons name="ios-options" size={32} style={{marginLeft:20}} color="white" />});
    
// f.database().ref("posts").push().set(
//     {
//         name:"",
//         text:"",
//     }
// );
}
render() {
    return (
        <ImageBackground style = {{ width: "100%",height: "100%",}}
        source = { {uri: "https://i.pinimg.com/originals/4c/7f/b9/4c7fb955edfbaa6d84894475af9965a4.jpg",}} >

      {/* <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
 <Text>Hello</Text>    
      </View> */}
      </ImageBackground>
    );
  }
}