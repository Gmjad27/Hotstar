import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = () => {
    return (
        <View style={styles.con}>
            <Text style={styles.text}>Card</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    con: {
        // flex: 1,
        backgroundColor: '#e80000ff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 50
    }
})