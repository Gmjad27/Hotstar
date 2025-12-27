import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'

const Banner = () => {
    return (

        <View style={styles.con}>
            <ImageBackground style={styles.img} source={{ uri: 'https://img1.hotstarext.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/2846/1739497002846-i' }} resizeMode='cover'>
                <View style={styles.info}>
                    <View style={styles.cat1}>
                        <Text style={styles.cat}>Drama</Text>
                        <Text style={styles.cat}>Fantasy</Text>
                        <Text style={styles.cat}>Action</Text>
                    </View>
                    <Text style={styles.name}>House of Dragon</Text>
                    <View style={styles.cat1}>
                        <Text style={styles.in}>TV</Text>
                        <Text style={styles.in}>A</Text>
                        <Text style={styles.in}>2023</Text>
                        <Text style={styles.in}>Season 2</Text>

                    </View>
                    <Text style={styles.desc}>172 years before the birth of Daenerys Targaryen. Featuring an ensemble cast, the show portrays the events leading up to the decline of House Targaryen</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Pressable style={styles.btn} onPress={() => {
                            alert('Playing the house of dragon.');
                        }}><Text style={{ color: 'white', fontSize: 15 }}>Play</Text></Pressable>
                        <Pressable style={styles.btn2} onPress={() => {
                            alert('Added to watch list')
                        }}><Text style={{ color: 'white', fontSize: 15 }}>+</Text></Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Banner


const styles = StyleSheet.create({
    con: {
        width: '100%',
        height: '30%',
        marginTop: 55,
        backgroundColor: '#44959e90'
    },
    img: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 20
    },
    info: {
        paddingLeft: 10,
        fontSize: 10,
        marginBottom: 10
    },
    cat1: {
        // marginLeft: 10,
        flexDirection: 'row',
        gap: 5
    },
    cat: {
        fontSize: 10,
        backgroundColor: '#5c4d4d5d',
        color: 'white',
        padding: 1,
        borderRadius: 20,
        width: 55,
        textAlign: 'center'
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'arial'
    },
    in: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center'
    },
    desc: {
        color: '#abababf0',
        width: 190,
        fontSize: 10,
        marginTop: 5

    },

    btn: {
        backgroundColor: '#4d4e59ff',
        width: 49,
        alignItems: 'center',
        borderRadius: 2,
        borderColor: 'white',
        borderWidth: 0.3,
        marginTop: 10
    },
    btn2: {
        backgroundColor: '#4d4e59ff',
        width: 18,
        alignItems: 'center',
        borderRadius: 2,
        borderColor: 'white',
        borderWidth: 0.3,
        marginTop: 10
    }
})
