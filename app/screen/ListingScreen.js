
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Screen from '../config/Screen'
import Card from './Card'
import colors from '../config/colors'

export default function ListingScreen() {
  const listings = [
    {
        id: 1,
        title:"BV shoes",
        price: 1500,
        image: require('../assets/bg.jpg')
    },
    {
        id: 2,
        title:"BV serpanti watch",
        price: 15000000,
        image: require('../assets/bg.jpg')
    }
  ]
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item})=> <Card title={item.title} subTitle={"$" + item.price} image={item.image} />}        />
    </Screen>
  )
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,
        color: colors.light
    }
})