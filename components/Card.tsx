import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = () => {
    return (
        <View style={styles.con}>
            <Text style={styles.text}>the king in the  north</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    con: {
        // flex: 1,
        backgroundColor: '#e88300ff',
        width: 150,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
})