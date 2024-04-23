import React from 'react'
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors'
import AppText from '../config/AppText';
export default function ViewImage() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color='white' size={30} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name="trash-can-outline" color='white' size={30} />
        </View>
        <Image resizeMode="contain" style={styles.image} source={require("../assets/bg.jpg")} />
    </View>
  )}

  const styles = StyleSheet.create({
    closeIcon: {
        position:'absolute',
        left: 30,
        top: 40
    },
    deleteIcon: {
        position:'absolute',
        right: 30,
        top: 40
    },
    container:{
        backgroundColor:colors.black,
        flex:1,
        justifyContent:'flex-end',
    },
    image:{
        width:'100%',
        height:'88%'
    }
  })