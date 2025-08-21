import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';

function Splash(props) {
    const  navigateToLoginScreen = () => {
        props.navigation.navigate('Login')
    }
    
  return (
    <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'yellow'}  />
        <Image resizeMode='contain' source={require('../Resource/Images/emoji6.png')} style={{width:'70%',height:"50%",alignSelf:'center'}}/>
        <TouchableOpacity style={styles.button} onPress={() => navigateToLoginScreen()}>
            <Text style={styles.buttonTextStyle}> Login </Text>
        </TouchableOpacity>
     </SafeAreaView>
  );
}



export default Splash;

const styles =  StyleSheet.create({
    mainContainer : {
       flex:1, 
       justifyContent:'center',
       backgroundColor:'yellow',
       alignItems:'center'
    },
    button : {
        borderRadius:20,
        backgroundColor:'#87CEEB',
        marginTop:50,
        paddingVertical:10,
        width:'50%',
        alignSelf:'center'
    },
    buttonTextStyle : {
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    }
})