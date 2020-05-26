import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default class MainText extends Component {
  state = {
    Name: "Hina",
    Age: this.props.AgeValue,
   Code: "code"
  };
  render() {
    return (
      <View style={{ width: "100%", alignItems: "center", marginTop: 100 }}>
        <Text style={{ fontSize: 30, color:"#ffffff" }}>{this.props.heading}</Text>
        <TextInput
          placeholder="Name"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor:"#ffffff",
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 30,
            color:'#000000'
          }}
          onChangeText={(val) => {
            this.setState({
              Name: val,
            });
          }}
          value={this.state.Name}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Age"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor:"#ffffff",
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 20,
            color:'#000000'
          }}
          onChangeText={(val) => {
            this.setState({
              Age: val,
            });
          }}
          value={this.state.Age}
          placeholderTextColor="gray"
        />
 <TextInput
          placeholder="Code"
          style={{
            width: "80%",
            height: 40,
            borderStyle: "solid",
            borderWidth: 0.5,
            borderColor: "white",
            backgroundColor:"#ffffff",
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 20,
            color:'#000000'
          }}
          onChangeText={(val) => {
            this.setState({
              Code: val,
            });
          }}
          value={this.state.Code}
          placeholderTextColor="gray"
        />
        <Button
          title="press me"
          onPress={() => this.props.AddToArray(this.state)}
        />

<View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text style={{ fontSize: 22,color:'#ffffff' }}>May the {this.state.Code} be with you! </Text>
          </View>
      </View>

      
    );
  }
}