import React, { Component } from 'react';
import {StyleSheet,  View, Text, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('../../images/logo.png')} />
            <Text style={styles.title} >Welcome to Pass Saver</Text>
        </View>

        <View style={styles.formInput}>
            <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1E88E5"
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 60,

    },
    title: {
        color: "#FAFAFA",
        marginTop: 10,
        textAlign: "center",
        opacity: 0.9
    }
});
