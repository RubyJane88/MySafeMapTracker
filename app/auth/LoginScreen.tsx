import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const LoginScreen = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}> My Safe Map Tracker</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 15,
        backgroundColor: 'purple',
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }

});


export default LoginScreen;
