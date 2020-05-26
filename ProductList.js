import React, { Component } from "react";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import  axios  from 'axios';
import { Dropdown } from 'react-native-material-dropdown';
import { Text,ScrollView, View,Image,Dimensions,TouchableOpacity, ImageBackground,ActivityIndicator, TextInput, Button } from "react-native";

export default class ProductList extends Component {
    state = {
        filterValue:"All",
        prd: [],
    };
    componentDidMount() {
         const Data = this.props.route.params.data; 
       
        this.props.navigation.setOptions({ title:Data.name,
            headerRight:()=><Ionicons name="ios-cart" size={32} style={{marginRight:20}} color="black" />});
            
         //  console.log(Data.id);
           axios.post('http://192.168.0.105:80/crud/api/prdbycat', {
            id : Data.id,
          })
          .then((res) => {
             // console.log(res.data);
              this.setState({prd:res.data.data});
            }); 
    }
    filter = [{ label:"All", value:"All",},
    { label:"below 300", value:300,},
{ label:"below 7000", value:7000,}]; 

    render() {
        return ( 
        <ImageBackground style = {
                {  width: "100%", height: "100%",  } } source = {  {   uri: "https://i.pinimg.com/564x/1e/86/3f/1e863f231a276cf37c99645a7206c005.jpg", } } >
 <View  style = {{ 
         width: "100%",
         flexDirection:"row",
         margin:20,
         justifyContent:'space-between',
         alignItems:"center"}}>
    <Text style = {{fontWeight:"bold", fontSize:30}} >Products</Text>
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

<ScrollView  style = {{ width:Dimensions.get('window').width,}} >
    {
        this.state.prd.map((item)=>{
          
if(item.price < this.state.filterValue){ 
    return(
        <TouchableOpacity  style={{ width:"100%"}} onPress={ () => this.props.navigation.navigate("Product",{id:this.props.route.params.id,data:item})}>
            <View style={{margin:10,}}>
            <Image style = {{width:150, height:150,borderRadius:20}} source={{ uri:item.image}}/>
            <View style = {{position:"absolute", padding:6, margin:10, backgroundColor:"#f23f63", borderRadius:50 }}>
            <FontAwesome name="heart" color="white" size = {20} ></FontAwesome>
            </View>
        </View>
        <View style = {{position:"absolute" ,marginLeft:200, marginTop:30,}}>
        <Text style = {{padding:1, fontWeight:"bold", fontSize:20}} >{item.name}</Text>
          <Text style = {{padding:1}} > ${item.price}</Text>
          <Text style = {{padding:1}} ><FontAwesome name="star" color="#ffd000" size = {20} ></FontAwesome> {item.rating}</Text>
          </View>
          </TouchableOpacity>
       );
 }
if(this.state.filterValue == "All"){ 
    return(
        <TouchableOpacity  style={{ width:"100%"}} onPress={ () => this.props.navigation.navigate("Product",{id:this.props.route.params.id,data:item})}>
            <View style={{margin:10,}}>
            <Image style = {{width:150, height:150,borderRadius:20}} source={{ uri:item.image}}/>
            <View style = {{position:"absolute", padding:6, margin:10, backgroundColor:"#f23f63", borderRadius:50 }}>
            <FontAwesome name="heart" color="white" size = {20} ></FontAwesome>
            </View>
        </View>
        <View style = {{position:"absolute" ,marginLeft:180, marginTop:20,}}>
        <Text style = {{padding:1, fontWeight:"bold", fontSize:30}} >{item.name}</Text>
          <Text style = {{padding:1}} > ${item.price}</Text>
          <Text style = {{padding:1}} ><FontAwesome name="star" color="#ffd000" size = {20} ></FontAwesome> {item.rating}</Text>
          </View>
          </TouchableOpacity>
         
       );
 }

     })

        
    }
</ScrollView>
            </ImageBackground>
        );
    }
}