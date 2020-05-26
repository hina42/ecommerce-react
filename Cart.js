import React, { Component } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, View,Image,ScrollView,TouchableOpacity,Dimensions, ImageBackground, TextInput, Button } from "react-native";

export default class Cart extends Component {
    state = {
        Details: []
    };
    componentDidMount() {
        const Data = this.props.route.params.data; 
        this.props.navigation.setOptions({
            headerRight:()=><Ionicons name="ios-cart" size={32} style={{marginRight:20}} color="black" />});
            
            
          this.setState({Details: [...this.state.Details,Data]});
          console.log(this.state.Details);
    }
    

    render() {
        return ( 
            <ImageBackground style = {
                {  width: "100%", height: "100%",  } } source = {  {   uri: "https://i.pinimg.com/564x/1e/86/3f/1e863f231a276cf37c99645a7206c005.jpg", } } >

<ScrollView  style = {{ width:Dimensions.get('window').width}} >
    {
        this.state.Details.map((item)=>{
    return(

        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Product",{data:item})}>
        <View style={{ margin: 20 }}>
        <Image style = {{width:200, height:200,borderRadius:20}} source={{ uri:item.image}}/>
        <View style = {{position:"absolute", padding:6, margin:10, backgroundColor:"#f23f63", borderRadius:50 }}>
        <FontAwesome name="heart" color="white" size = {20} ></FontAwesome>
        </View>
        <Text style = {{fontWeight:"bold", fontSize:20,marginTop:10,alignSelf:"center"}} >{item.name}</Text>
      <Text style = {{alignSelf:"center"}} > ${item.price}</Text>
    </View>
     </TouchableOpacity>
    );})
    
    }</ScrollView>
       
            </ImageBackground>
        );
    }
}