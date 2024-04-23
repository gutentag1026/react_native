import React from 'react'
import { Platform, TextInput, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

export default function AppTextInput({icon, ...otherProps}) {
  return (
   <View style={styles.container}>
    { icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} /> }
    <TextInput style={defaultStyles.textInput}  {...otherProps}  keyboardType="numeric"/>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
        backgroundColor:colors.light
    },
    icon: {
        marginRight: 10
    }
})
