import React, { Component } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, View,Image,TouchableOpacity,Dimensions, ImageBackground, TextInput, Button } from "react-native";

export default class Product extends Component {
    state = {
        Details: {}
    };
    componentDidMount() {
        const Data = this.props.route.params.data; 
        this.props.navigation.setOptions({ title:Data.name,
            headerRight:()=><Ionicons name="ios-cart" size={32} style={{marginRight:20}} color="white" />});
            
          //  console.log(Data);
          this.setState({
              Details:Data
          });
    }
    

    render() {
        return ( 
            <ImageBackground style = {
                {  width: "100%", height: "100%",  } } source = {  {   uri: "https://i.pinimg.com/564x/1e/86/3f/1e863f231a276cf37c99645a7206c005.jpg", } } >

 <ImageBackground style = {
                 {  width: "100%", height: 400,  } } source = {  {   uri: this.state.Details.image, } } ></ImageBackground>
            
            <View  style = {{width:Dimensions.get('window').width, marginTop:300, borderRadius:30,padding:20,backgroundColor:"white", position:"absolute"}}>
            <View style = {{ flexDirection:"row",justifyContent:"space-between"}}>
            <Text style = {{fontSize:40,}} >{this.state.Details.name}</Text>
            <TouchableOpacity style = {{ 
                alignSelf:"auto",
                backgroundColor:"#f23f63", 
                padding:20,
                borderRadius:100}} 
                onPress={ () => this.props.navigation.navigate("ProductList")}>
                    <FontAwesome name="heart"  color="white" size = {20}></FontAwesome></TouchableOpacity>
                    </View>
             <Text style = {{ fontSize:20,padding:1,fontWeight:"bold",}} > ${this.state.Details.price}</Text>
             <Text style = {{ fontSize:20,padding:1,fontWeight:"bold",}} ><FontAwesome name="star"  color="#ffd000" size = {20}></FontAwesome> {this.state.Details.rating}</Text>
            <Text style = {{ padding:10,fontSize:20,}} >{this.state.Details.desc}</Text>
            <TouchableOpacity  onPress={ () => this.props.navigation.navigate("Cart",{data:this.state.Details})}
            style = {{  marginTop:30, height:50, width:"80%", alignSelf:"center", 
            borderRadius:20,
            backgroundColor:"tomato",
            shadowColor: "#000",
            shadowOffset: { 
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            
            elevation: 11,}}
            >
            <Text style = {{ fontWeight:"bold",alignSelf:"center", padding:10,fontSize:20,color:"#ffffff"}} >Buy now</Text>
            </TouchableOpacity>
              </View>
       
            </ImageBackground>
        );
    }
}