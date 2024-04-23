import React, {useState} from 'react'
import AppText from '../config/AppText'
import PickerItem from '../config/PickerItem'
import { Button, View, StyleSheet, TouchableWithoutFeedback, Modal,FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles';
import Screen from '../config/Screen';

export default function AppPicker({icon, items, selectedItem, onSelectedItem, placeholder, ...otherProps}) {
    const [modalVisible, setModalVisible] = useState(true)
  return (
    <>
    <TouchableWithoutFeedback>
    <View style={styles.container}>
    { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} /> }
    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
    <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
    </View>
    </TouchableWithoutFeedback>
  
    <Modal visible={modalVisible} animationType="slide">
    <Screen>
    <Button title="Close" onPress={()=>setModalVisible(false)} />
    <FlatList 
      data={items} 
      keyExtractor={(item)=>item.value.toString()} 
      renderItem={({item})=> <PickerItem label={item.label} onPress={()=>{
        setModalVisible(false)
        onSelectedItem(item)
      }
    } />}
    />
    </Screen>
    </Modal>
   
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width:'100%',
        padding:25,
        marginVertical: 10
    },
    icon:{
      marginRight:10
    },
    text:{
        flex:1
    }
})
