import React, { Component } from "react";
import { View,Text,SafeAreaView,Button,ImageBackground,StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./Home";
import Product from "./Product";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import Cart from "./Cart";
import ProductList from "./ProductList";
import "./config";

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (  
    <NavigationContainer  >
      <Stack.Navigator >
   <Stack.Screen  options={{
    headerTransparent: true,
      headerShown: false,
    headerTitleStyle: {
      color: 'white'
    }

  }}  name="Login" component={Login} />

<Stack.Screen  options={{
    headerTransparent: true,
    headerTitleStyle: {
      color: 'white'
    }
  }}  name="Signup" component={Signup} />
  
        <Stack.Screen  options={{
    headerTransparent: true }}  name="Home" component={Home} />
        <Stack.Screen  options={{headerTransparent: true,
    headerTitleStyle: {
      color: 'white'
    }}}    name="Product" component={Product} />
        <Stack.Screen  name="ProductList" component={ProductList} />
        <Stack.Screen options={{
    headerTransparent: true,
    headerTitleStyle: {
      color: 'white'
    }

  }} name="Profile" component={Profile} />
   <Stack.Screen  name="Cart" component={Cart} />
      </Stack.Navigator>

    </NavigationContainer>
   
    );
}
}

  // state = {
  //   data: [],
  // };

  // AddData = (item) => {
  //   this.setState({
  //     data: [...this.state.data, item],
  //   });
  // };

  // constructor() {
  //   super();
  //   // alert("I am constructor");
  // }

  //lifecycle methods
  // componentDidMount() {
  //   alert("i am component did mount");
  // }

  // render() {
  //   return (
  //     <SafeAreaView
  //       style={{ width: "100%", flex: 1, paddingTop: StatusBar.currentHeight }}
  //     >

        
          /* <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground 
 style={{ width: "100%",
 height: "100%", }}
source={{
              uri:
                "https://wallpapershome.com/images/pages/pic_h/20311.jpg",
            }} >
       <MainText
          heading={"Hello World!"}
          AgeValue={"20"}
      
          DisplayAlert={this.ShowAlert}
          AddToArray={(item) => this.AddData(item)}
        />
        {console.log(this.state)}

        <View style={{ width: "100%", alignItems: "center" }}>
          {this.state.data.map((item) => {
            if (item.Age > 10) {
              return (
                <View style={{ marginTop: 50, marginLeft: 60,marginRight: 60,
                  alignItems: "center",
                 color:'#ffffff', }}>
                  <Text style={{ fontSize: 20,color:'#ffffff', }}>Hello {item.Name}!</Text>
                  <Text style={{  fontSize: 15, color:'#ffffff', }}> You are just {item.Age} but you are awesome!</Text>
                  <Text style={{ fontSize: 22,color:'#ffffff' }}>May the {item.Code} be with you! </Text>
                </View>
                
              );
            
            } return( this.ShowAlert());
          })}
        </View>

       
    </ImageBackground>
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
              }}
            >
              <Text>A</Text>
            </View>
            <View
              style={{
                width: "60%",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
              }}
            >
              <Text style={{ fontSize: 22 }}>My App</Text>
            </View>
            <View
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
                height: 50,
              }}
            >
              <Text>A</Text>
            </View>
          </View>
          <Text>Hello guys i am ali</Text>
          <Button onPress={() => this.ShowAlert()} title="press me" />
          <TouchableOpacity
            onPress={this.ShowAlert}
            style={{ width: 100, height: 40, backgroundColor: "tomato" }}
          ></TouchableOpacity>
          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "red",
              marginTop: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Ali</Text>
          </View>
          <Image
            style={{ width: "100%", height: 300 }}
            source={require("./assets/chick.jpg")}
          />
          <Image
            style={{ width: "100%", height: 300 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2020/02/26/23/28/rabbits-4883006_960_720.jpg",
            }}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              width: Dimensions.get("window").width,
              height: 300,
              marginTop: 50,
            }}
            pagingEnabled={true}
          >
            <Image
              style={{ width: Dimensions.get("window").width, height: 300 }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/02/26/23/28/rabbits-4883006_960_720.jpg",
              }}
            />
            <Image
              style={{ width: Dimensions.get("window").width, height: 300 }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/04/10/21/28/bernese-oberland-5027861_960_720.jpg",
              }}
            />
            <Image
              style={{ width: Dimensions.get("window").width, height: 300 }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2020/04/06/14/15/landscape-5009868_960_720.jpg",
              }}
            />
          </ScrollView>
          <View style={{ width: "100%", marginTop: 20, padding: 10 }}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{"\n"}
              {"\n"} It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
          </View>
        </ScrollView> */
//       </SafeAreaView>
//     );
//   }
