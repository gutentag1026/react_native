import React, { useState } from 'react'
import { FlatList, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import ListItem from './ListItem'
import Screen from '../config/Screen'
import ListItemSeparator from '../config/ListItemSeparator'
import ListItemDeleteAction from '../config/ListItemDeleteAction'

const initialMessages = [
    {
        id:1,
        title:'Wendy',
        description:'sfkjsd ksdflkj',
        image: require('../assets/favicon.png')
    },
    {
        id:2,
        title:'Josh',
        description:'sfkjsd ksdflkj',
        image: require('../assets/favicon.png')
    }
]
export default function Messages() {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message =>{
    setMessages(messages.filter(m=>m.id !== message.id))
  }
  return (
    <Screen>
      <FlatList 
          data={messages}
          keyExtractor={(message)=>message.id.toString()}
          renderItem={({item})=>
                    <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={()=>console.log(item)}
                              renderRightActions={() => <ListItemDeleteAction onPress={()=>handleDelete(item)} />} /> }
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={()=>{
            setMessages([{
              id:2,
              title:'Josh',
              description:'sfkjsd ksdflkj',
              image: require('../assets/favicon.png')
          }])
          }}
      />
    </Screen>
  )
}

// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 //Constans.statusBarHeight
//     }
// })
