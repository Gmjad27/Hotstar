import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Card from '@/components/Card'
import React from 'react'

const app = () => {
  return (
    <Card />
    // <View style={styles.con}>
    //   <Image style={{ width: 200, height: 100 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tok-Wx1SXNZsFVNftwQKGeaFzhCTc3wLhw&s' }}></Image>
    //   <Text style={styles.text}>The king in a north</Text>
    //   <Text style={{ color: 'white', fontSize: 40 }}>Jonh snow</Text>
    //   <Pressable style={{ backgroundColor: 'green', padding: 10 }}><Text style={{ color: 'white' }}>Click me!</Text></Pressable>
    // </View>
  )
}

export default app

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    color: 'red',
    fontSize: 30
  }
});