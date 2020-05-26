import React, { Component } from "react";
import { Ionicons } from '@expo/vector-icons';
import  axios  from 'axios';
import { Text,ScrollView, View,Image,Dimensions,TouchableOpacity, ImageBackground,ActivityIndicator, TextInput, Button } from "react-native";

export default class ProductList extends Component {
    state = {
        prd: []
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
              console.log(res.data);
              this.setState({prd:res.data.data});
            })
    }
    

    render() {
        return ( 
        <ImageBackground style = {
                {  width: "100%", height: "100%",  } } source = {  {   uri: "https://i.pinimg.com/564x/1e/86/3f/1e863f231a276cf37c99645a7206c005.jpg", } } >
<ScrollView   style = {{ width:Dimensions.get('window').width,}}>
    {
        this.state.prd.map((item)=>{
    return( 
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Product",{data:item})} >
        {this.state.isLoading ? (
      <ActivityIndicator style={{ marginTop: 20, padding:20 }} size="large" />
    ) : (
     
        <View style={{  }}>
            <Image style = {{width:Dimensions.get('window').width, height:250}} source={{ uri:item.image}}/>
           <View style = {{
               backgroundColor: '#00000050', 
               marginTop:190,
               padding:10,
               width:"100%",
               position:"absolute",
              }}><Text style style = {{
                 fontSize:30,  
                 color:"white",
                 textAlign:"left",
                 }}>{item.name}</Text>
                 
                 </View>
        </View>
    )}
     </TouchableOpacity>
       ); })  }
</ScrollView>
            </ImageBackground>
        );
    }
}