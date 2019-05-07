import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


class Login extends Component {
    render(){
        return(
            <View>
                <View>
                    <Text>Login</Text>
                </View>
                <View>
                    <TextInput 
                    placeholder="email"
                    textContentType='emailAddress'
                    />
                    <TextInput
                    placeholder="senha"
                    textContentType='password'
                    />

                    <TouchableOpacity
                    // onPress={}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login