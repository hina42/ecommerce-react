import React, { Component } from 'react'
import {Text,View,Image,ActivityIndicator, ImageBackground, TextInput, Button, ScrollView, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import  axios  from 'axios';
import { Dropdown } from 'react-native-material-dropdown';
import * as f from "firebase";
export default class Signup extends Component {

  constructor() {
    super();
  //  alert("I am constructor");
  }
    state = {
        name: "",
        email: "",
       password: "",
      };
    componentDidMount() {
        console.disableYellowBox = true;
  };
//   addToArray = (item) => {this.addData(item)};
   
render() {
    return (
        <ImageBackground style = {{ width: "100%",height: "100%",}}
        source = { {uri: "https://i.pinimg.com/474x/4e/7b/bc/4e7bbc28c62787ff412cc252c790aba4.jpg",}} >
      <View  style={{ width: "100%", alignItems: "center", marginTop: 150 }}>
        <Text style={{ fontSize: 30, color:"#fff" }}>Sign up</Text>
        <TextInput
          placeholder=" Name"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor:"#ffffff",
            borderRadius: 20,
            paddingLeft: 10,
            marginTop: 30,
            color:'#000000',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
          }}
          onChangeText={(val) => {
            this.setState({
              name: val,
            });
          }}
          value={this.state.name}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder=" Email"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor:"#ffffff",
            borderRadius: 20,
            paddingLeft: 10,
            marginTop: 20,
            color:'#000000',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
          }}
          onChangeText={(val) => {
            this.setState({
              email: val,
            });
          }}
          value={this.state.email}
          placeholderTextColor="gray"
        />
 <TextInput  secureTextEntry={true}
          placeholder=" Password"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor:"#ffffff",
            borderRadius: 20,
            paddingLeft: 10,
            marginTop: 20,
            color:'#000000',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
          }}
          onChangeText={(val) => {
            this.setState({
              password: val,
            });
          }}
          value={this.state.password}
          placeholderTextColor="gray"
        />
<TouchableOpacity
  onPress={() => axios.post('http://192.168.0.105:80/crud/api/signup', {
        name : this.state.name,
          email : this.state.email,
          password: this.state.password,
        })
        .then((res) => {
            console.log(res.data.status);
            if(res.data.status == "Success"){
                this.props.navigation.navigate("Login",{data:this.state.email});
            }
          })
}
style = {{ marginTop:30, height:40, width:200, alignItems:"center",justifyContent:"center", 
borderRadius:20,
backgroundColor:"#1f98de",
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,}}
>
<Text style = {{ fontWeight:"bold", padding:10,fontSize:15,color:"#ffffff"}} >Create account</Text>
</TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}