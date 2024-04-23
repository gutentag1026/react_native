import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

export default function AppText({children, style}) {
  return <Text style={[style, styles.text]}>{children}</Text>
}

const styles = StyleSheet.create({
    text:{
        color:'#000'
    },
    ...Platform.select({
        ios:{
            fontSize:18,
        },
        android:{
            fontSize:20,
        }
    })
})
