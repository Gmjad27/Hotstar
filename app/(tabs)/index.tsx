import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Card from '@/components/Card'
import React from 'react'
import Nav from '@/components/Nav'
import Banner from '@/components/Banner'

const app = () => {
  return (
    <View style={styles.con}>
      <Nav />
      <Banner />
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#2d2d2db4',
    width: '100%',
    height: '100%'
  }
});