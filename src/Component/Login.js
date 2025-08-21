import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function Login(props) {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <Text>Login Screen</Text>


        </SafeAreaView>
    );
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"yellow"
    }

})