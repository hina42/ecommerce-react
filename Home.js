import React, { Component } from "react";
import {Text,View,Image,SearchBar, ActivityIndicator, ImageBackground, TextInput, Button, ScrollView, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from 'react-native-material-dropdown';
import  axios  from 'axios';
import * as f from "firebase";
export default class Home extends Component {
    state = {
        filterValue:"All",
        prd: [],
        cat: [],
        search: '',
    isLoading: true,
    };
    componentDidMount() {
         const Data = this.props.route.params.data; 
        if(Data !== null){
      //  alert("welcome");
        }
        else{
          alert("you are not login in");
         this.props.navigation.navigate("Login");
        }
        console.disableYellowBox = true;
        axios
          .get("http://192.168.0.105:80/crud/api/product")
          .then((res) => {
           // console.log(res.data);
            this.setState({
              prd: res.data,
              isLoading: false,
            });
          });

          axios
          .get("http://192.168.0.105:80/crud/api/category")
          .then((res) => {
            this.setState({
              cat: res.data,
              isLoading: false,
            });
          });
        this.props.navigation.setOptions({ 
        headerRight:()=><TouchableOpacity onPress={ () => this.props.navigation.navigate("Profile",{data:Data.id})}>
          <Image style = {{width:60, height:60,borderRadius:50, marginRight:20,}}
         source={{ uri:Data.image}}/></TouchableOpacity>,
        headerLeft:()=><Ionicons name="ios-options" size={40} style={{marginLeft:20}} color="black" />});
    }



prd = [];
 filter = [{ label:"All", value:"All",},
     { label:"below 300", value:300,},
 { label:"below 7000", value:7000,}];
    render() {
        return ( 
        <ImageBackground style = {{ width: "100%",height: "100%",}}
            source = { {uri: "https://i.pinimg.com/564x/1e/86/3f/1e863f231a276cf37c99645a7206c005.jpg",}} >
<ScrollView style={{width:"100%",marginTop:"20%", marginLeft:5,flex:1}} >
<TextInput
placeholder=" Search..."
          style={{
            width: "90%",
            height: 60,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white", 
            backgroundColor:"#ffffff",
            borderRadius: 20,
            padding: 10, 
            fontSize:20,
            alignSelf:"center",
            margin: 20, 
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
              search: val,
            });
          }}
          value={this.state.search}
          placeholderTextColor="gray"
        />
<Text  style = {{
              padding:10,
              fontSize:30,
              fontWeight:"bold",
              color:"black",         
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
              }}>Categories</Text>

<ScrollView horizontal  style = {{ width:Dimensions.get('window').width,}}>
    {
        this.state.cat.map((item)=>{
    return( 
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("ProductList",{data:item})} >
        {this.state.isLoading ? (
      <ActivityIndicator style={{ marginTop: 20, padding:20 }} size="large" />
    ) : (
     
        <View style={{ margin: 10, }}>
            <Image style = {{width:250, height:400,borderRadius:10}} source={{ uri:item.image}}/>
            <Text style = {{
              position:"absolute",
              marginTop:350,
              fontSize:25,
              color:"white",
              alignSelf:"center",
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
              }} >{item.name}</Text>
        </View>
    )}
     </TouchableOpacity>
       ); })  }
</ScrollView>
    <View  style = {{ 
         width: "100%",
         flexDirection:"row",
         margin:20,
         justifyContent:'space-between',
         alignItems:"center"}}>
    <Text style = {{fontWeight:"bold", fontSize:30}} >Top Products</Text>
    <View style = {{width:"50%", marginTop:10}}>
<Dropdown
    onChangeText={(val)=> this.setState({filterValue:val})}
        label='Filter'
        data={this.filter}
        pickerStyle={{marginTop:50}}
        dropdownOffset={{top:0}}
        dropdownMargins={{min:20}}
        value={this.state.filterValue}
      /></View>
</View  >

<ScrollView horizontal  style = {{ width:Dimensions.get('window').width}} >
    {
        this.state.prd.map((item)=>{
          
if(item.price < this.state.filterValue){ 
    return(
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Product",{data:item})}>
        {this.state.isLoading ? (
      <ActivityIndicator style={{ marginTop: 20 }} size="large" />
    ) : (
     
        <View style={{ margin: 20 }}>
            <Image style = {{width:200, height:200,borderRadius:20}} source={{ uri:item.image}}/>
            <View style = {{position:"absolute", padding:6, margin:10, backgroundColor:"#f23f63", borderRadius:50 }}>
            <FontAwesome name="heart" color="white" size = {20} ></FontAwesome>
            </View>
            <Text style = {{fontWeight:"bold", fontSize:20,marginTop:10,alignSelf:"center"}} >{item.name}</Text>
          <Text style = {{alignSelf:"center"}} > ${item.price}</Text>
        </View>
      
    )}
     </TouchableOpacity>
       );
 }
if(this.state.filterValue == "All"){ 
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
         
       );
 }

     })

        
    }
</ScrollView>
<View style = {{
  width:"100%",
  height:70,
  backgroundColor: '#000000',
  borderTopEndRadius:20,
  borderTopStartRadius:20,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center"
}}>
 <View style = {{padding:10}} ><FontAwesome name="facebook" color="white" size = {40} ></FontAwesome></View>
 <View style = {{padding:10}}><FontAwesome name="instagram" color="white" size = {40} ></FontAwesome></View>
 <View style = {{padding:10}}><FontAwesome name="twitter" color="white" size = {40} ></FontAwesome></View>

</View>
</ScrollView>


            </ImageBackground>
        );
    }
} 


// f.database().ref("products").push().set(
//     {
//         Name:"Metalic Jacket",
//         Price:560,
//         Description:"Waterproof, fire-resisstant, 50% polyester travel jacket",
//         Image:"https://images.thenorthface.com/is/image/TheNorthFaceBrand/the-approach-protecting-the-arctic-refuge-kit-deslauriers-image-d?wid=1380"
//     }
// );