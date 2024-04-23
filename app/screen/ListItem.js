import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppText from "../config/AppText";
import colors from '../config/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function ListItem({title, subTitle, image, renderRightActions,ImageComponent}) {
  return (
    <GestureHandlerRootView>
   <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light}>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.containerDetail}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
  </Swipeable>
  </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding:20,
        backgroundColor:colors.white
    },
    containerDetail: {
        marginLeft:10,
        justifyContent:'center'
    },
    image: {
         width: 70,
         height: 70,
         borderRadius: 35,
    },
    title: {
        fontWeight:"500"
    },
    subTitle: {
        color: "#6e6969"
    }
})