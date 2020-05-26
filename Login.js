import React, { Component } from 'react'
import {Text,View,Image,ActivityIndicator, ImageBackground, TextInput, Button, ScrollView, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import  axios  from 'axios';
import { Dropdown } from 'react-native-material-dropdown';
import * as f from "firebase";
export default class Login extends Component {

  constructor() {
    super();
  //  alert("I am constructor");
  }
    state = {
        email: "",
       password: "",
      };
    componentDidMount() {
        console.disableYellowBox = true;
        
  };
   
render() {
    return (
        <ImageBackground style = {{ width: "100%",height: "100%",}}
        source = { {uri: "https://i.pinimg.com/564x/61/0e/86/610e86b27ec0c35afc8b0b042703dc29.jpg",}} >
      <View  style={{ width: "100%", alignItems: "center", marginTop: 160 }}>
        <Text style={{ fontSize: 30, color:"#ffffff" }}>Login</Text>
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
  onPress={() => axios.post('http://192.168.0.105:80/crud/api/login', {
          email : this.state.email,
          password: this.state.password,
        })
        .then((res) => {
            console.log(res.data);
            if(res.data.status == 'Success'){
                this.props.navigation.navigate("Home",{data:res.data.data});
            }
            else{
              alert("Email or password is incorrect");
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
<Text style = {{ fontWeight:"bold", padding:10,fontSize:15,color:"#ffffff"}} >Login</Text>
</TouchableOpacity>

<View>
<TouchableOpacity  style = {{padding:20,}}  onPress={() =>
                this.props.navigation.navigate("Signup")} >
  <Text style = {{  padding:10,fontSize:20,color:"#ffffff"}} >Don't have an account?
  <Text  style = {{  fontWeight:"bold", padding:10,fontSize:20,color:"#ffffff"}} > Sign up!</Text>
  </Text>
</TouchableOpacity>
</View>
      </View>
      </ImageBackground>
    );
  }
}