import React, {useState} from 'react'
import Screen from './app/config/Screen';
import Welcome from './app/screen/Welcome'; 
import ViewImage from './app/screen/ViewImage';
import Card from './app/screen/Card';
import Messages from './app/screen/Messages';
import Icon from './app/config/Icon';
import ListItem from './app/screen/ListItem';
import Account from './app/screen/Account';
import ListingScreen from './app/screen/ListingScreen'
import AppTextInput from './app/screen/AppTextInput'
import AppPicker from './app/screen/AppPicker'
import Login from './app/screen/Login'
import LoginButton from './app/screen/LoginButton'

export default function App() {
  // const categories =[
  //   {id:1, value:'furniture', label:'Furniture'},
  //   {id:2, value:'clothing', label:'Clothing'},
  //   {id:3, value:'cameras', label:'Cameras'}
  // ]
  // <AppPicker icon="apps" 
  //     items={categories} 
  //     selectedItem={category}
  //     onSelectedItem={item => setCategory(item)}
  //     placeholder="Categories"
  //  />
  //     <AppTextInput icon="email" placeholder="Email" />
  // const [category, setCategory] = useState(categories[0])
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return <Screen style={{backgroundColor:'yellow'}}>
    <Login />
    <AppTextInput 
      onChangeText={text=>setEmail(text)}
      autoCapitalize="none"
      autoCorrect={false}
      icon="email"
      keyboardType="email-address"
      placeholder="Email"
      textContentType="emailAddress"
    />
    <AppTextInput 
      onChangeText={text=>setPassword(text)}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Password"
      icon="lock"
      secureTextEntry={true}
      textContentType="emailAddress"
    />
    <LoginButton title="login" onPress={()=>console.log(email,password)} />
  </Screen>
  
  // <View style={{
  //   backgroundColor:'#f8f4f4',
  //   padding:20,
  //   paddingTop:100
  // }}>
  //     <Card title="Red wine for Sale" subTitle="$100" image={require('./app/assets/bg.jpg')} />
  //   </View>
}