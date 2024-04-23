
import React from 'react'
import { FlatList, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import ListItem from './ListItem'
import Screen from '../config/Screen'
import colors from '../config/colors'
import Icon from '../config/Icon'
import ListItemSeparator from '../config/ListItemSeparator'

const menuItems = [
    {
        title:"My listings",
        icon: {
            name:"format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title:"My Messages",
        icon: {
            name:"email",
            backgroundColor: colors.secondary
        }
    }
]
export default function Account() {
  return (
    <Screen>
        <View style={styles.container}>
        <ListItem 
            title="Wendy Huang"
            subTitle="sdfsklfsdj sldkfdlsjfldkj"
            image={require("../assets/splash.png")}
        />
        </View>
        <View style={styles.container}>
            <FlatList data={menuItems} keyExtractor={item=>item.title} temSeparatorComponent={ListItemSeparator}
                renderItem={({item}) => 
                    <ListItem 
                        title={item.title} 
                        ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                     /> 
                } />
        </View>
        <ListItem
            title="Log out"
            ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
    </Screen>
  )
}

const styles = {
    screen: {
        backgroundColor:colors.light
    },
    container:{
        marginVertical:20
    }
}
