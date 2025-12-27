import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Card from '@/components/Card'
import React from 'react'
import Nav from '@/components/Nav'

const app = () => {
  return (
    <View style={styles.con}>
      <View style={{justifyContent:'center', flex:1, flexDirection:'row',padding:25}}>
        <Text style={{fontSize:30}}>CINE</Text><Text style={{fontSize:30, color:'red', fontWeight:900}}>FLIX</Text>
      </View>
      <Nav />
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#c0c0c0b4',
    width: '100%',
    height: '100%'
  }
});