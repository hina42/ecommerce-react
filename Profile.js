import React, { Component } from "react";
import {Text,View,Image,SearchBar, ActivityIndicator, ImageBackground, TextInput, Button, ScrollView, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from 'react-native-material-dropdown';
import  axios  from 'axios';
import * as f from "firebase";
export default class Profile extends Component {
    state = {
        user: [],
    isLoading: true,
    };
    componentDidMount() {
         const Data = this.props.route.params.data; 
         axios
         .post("http://192.168.0.105:80/crud/api/user",{id:Data})
         .then((res) => {
          // console.log(res.data);
           this.setState({
             user: res.data.data,
             isLoading: false,
           });
         });
        console.disableYellowBox = true;
        this.props.navigation.setOptions({ title:this.state.name,
            headerRight:()=><Ionicons name="ios-cart" size={32} style={{marginRight:20}} color="white" />});
    }
    render() {
        return ( 
        <ImageBackground style = {{ width: "100%",height: "100%",}}
            source = { {uri:this.state.user.image,}} >
<ScrollView style={{width:"100%",flex:1}} >
    <View style = {{borderRadius:10,marginTop:420, alignSelf:"center", width:"90%",padding:20, backgroundColor:"white", height:300}}>
        <Image style = {{alignSelf:"center", width:80, height:80,borderRadius:100, margin:10,}}
         source={{ uri:this.state.user.image}}/>
       <Text style = {{alignSelf:"center",fontSize:30,fontWeight:"bold", padding:1,}} >{this.state.user.name}</Text>
         <Text  style = {{alignSelf:"center",fontSize:20,padding:1, }}>{this.state.user.email}</Text>
         <Text  style = {{alignSelf:"center",textAlign:"center",fontSize:15,margin:5,color:"grey",}}>{this.state.user.about}</Text>
    </View> 
</ScrollView>
            </ImageBackground>
        );
    }
} 
