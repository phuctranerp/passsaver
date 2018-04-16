import React, { Component } from 'react';
import {  View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';

export default class LoginForm extends Component {

    btn_login = () => {
        console.log("Login button clicked!");
    }

    render() {
        return (
        <View style={styles.container}>
            <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
            />

            <TextInput
            placeholder="Username"
            placeholderTextColor = "rgba(255,255,255, 0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            />


            <TextInput
            placeholder="Password"
            placeholderTextColor = "rgba(255,255,255, 0.5)"
            secureTextEntry
            returnKeyType="go"
            ref={(input) => this.passwordInput = input}
            style={styles.input}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.btn_login}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
        },
        input: {
            height: 40,
            backgroundColor: "rgba(255,255,255, 0.3)",
            marginBottom: 10,
            color: "#FFFF",
            paddingHorizontal: 10,
        },
        buttonContainer: {
            backgroundColor: "#1565C0",
            paddingVertical: 12,

        },
        buttonText: {
            textAlign: "center",
            color: "#FFFF",
            fontWeight: "500",
        }
    }
);
