import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';
import LoginButton from './LoginButton';

function Welcome(props) {
    return (
       <ImageBackground style={styles.background} blurRadius={6} source={require('../assets/bg.jpg')}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/favicon.png')} />
            <Text style={styles.tagline}>Sell 2nd Hand</Text>
        </View>
        <View style={styles.buttonContainer}>
        <LoginButton title="Login" color="primary" onPress={()=>{console.log('login')}}/>
        <LoginButton title="Register" color="secondary" onPress={()=>{console.log('register')}}/>
        </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoContainer: {
        position:'absolute',
        top: 100,
        alignItems:'center',
    },
    logo:{
        width:100,
        height:100
    },
    buttonContainer:{
        width:'100%',
        padding:20,
    },
    registerButton: {
        width: "100%",
        height: 70,
       
    },
    tagline: {
        fontSize:25,
        paddingVertical:20
    }
})
export default Welcome;