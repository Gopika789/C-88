import React, { Component } from 'react',
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    
} from 'react-native'

export default class HomeScreen extends Component{
    render() {
        return( 
            <View style = {StyleSheet.container}>
            <SafeAreaView style = {StyleSheet.droidsafeArea} />
            <View style = {StyleSheet.titleBar}> 
            <Text style = {StyleSheet.titleText}> Stellar </Text>
            <Text style = {StyleSheet.titleText}> App </Text>
            </View>

            <TouchableOpacity style = {styles.routecard}>
            <Text style = {styles.routeText}> Spacecrafts </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.routecard}>
            <Text style = {styles.routeText}> Star Map </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.routecard}>
            <Text style = {styles.routeText}> Daily Pictures </Text>
            </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidsafeArea: {
   marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    routecard: {
    flex: 0.12,
   justifyContent: 'center',
   margin: 10,
   marginLeft: 30,
   marginRight: 30,
   borderRadius: 100,
   backgroundColor: 'white'
    },

    tileBar: {
  flex: 0.5,
  justifyContent: 'center',
  alignItems: 'center'
    },

    titleText: {
   fontSize: 40,
   fontWeight: 'bold',
   color: "white"
    },
    routeText: {
   fontSize: 25,
   fontWeight: 'bold',
   color: "#D11583",
   justifyContent: 'center',
   alignItems: 'center'
    }
})
    


