import { View, Text, StyleSheet, Alert, Pressable } from 'react-native'
import { House, Popcorn, Search, TvMinimal, User } from 'lucide-react-native';
import React from 'react'

const Nav = () => {
    return (

        <>
            <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', padding: 20, position: 'absolute' }}>
                <Text style={{ fontSize: 30, color: 'white' }}>CINE </Text><Text style={{ fontSize: 30, color: 'red', fontWeight: 900 }}>FLIX</Text>
            </View>

            <View style={styles.con}>
                <View style={styles.icons}>

                    <Pressable style={styles.btn} onPress={() => {
                        alert('hello i am girish');
                    }}>
                        <House color='white' size='30' />
                    </Pressable>

                    <Pressable style={styles.btn} onPress={() => {
                        alert('hello i am girish');
                    }}>
                        <TvMinimal color='white' size='30' />
                    </Pressable>

                    <Pressable style={styles.btn} onPress={() => {
                        alert('hello i am girish');
                    }}>
                        <Search color='white' size='30' />
                    </Pressable>

                    <Pressable style={styles.btn} onPress={() => {
                        alert('hello i am girish');
                    }}>
                        <Popcorn color='white' size='30' />
                    </Pressable>

                    <Pressable style={styles.btn} onPress={() => {
                        alert('hello i am girish');
                    }}>
                        <User color='white' size='30' />
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Nav



const styles = StyleSheet.create({
    con: {
        backgroundColor: '#000000a1',
        width: '100%',
        height: 70,
        paddingBottom: 10,
        marginTop: 4,
        position: 'absolute',
        bottom: 0
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    btn: {
        // backgroundColor:'#3b3a3aff',
        padding: 5,
        borderRadius: 5
    }

})