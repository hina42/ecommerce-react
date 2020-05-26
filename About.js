import React, { Component } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, ImageBackground, TextInput, Button } from "react-native";

export default class About extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({ 
            headerRight:()=><Ionicons name="ios-cart" size={32} style={{marginRight:20}} color="black" />});
    }
    

    render() {
        return ( 
        <ImageBackground style = {
                {
                    width: "100%",
                    height: "100%",
                }
            }
            source = {
                {
                    uri: "https://image.freepik.com/free-vector/white-elegant-texture-wallpaper_23-2148421854.jpg",
                }
            } >
<Text>I am About</Text>
{/* <Button title="Home" onPress={ () => this.props.navigation.navigate("Home")} /> */}
            </ImageBackground>
        );
    }
}