import React from 'react'
import Screen from '../config/Screen'
import { StyleSheet, Image } from 'react-native'

export default function Login() {
  return (
   <Screen>
    <Image 
        style={styles.logo}
        source={require("../assets/icon.png")}
    />
   </Screen>
  )
}

const styles= StyleSheet.create({
    logo:{
        width:80,
        height:80,
        marginTop: 50,
        marginBottom:20,
        alignSelf:'center'
    }
})