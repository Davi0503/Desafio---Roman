import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import api from '../services/api.js';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", senha: "" };
    }



    _logando = async () => {

        const respostaLogin = await api.post("/api/Usuarios/login", {
            email: this.state.email,
            senha: this.state.senha
        })
        
        const token = respostaLogin.data.token;
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate("MainNavigator");

    }


    render() {
        return (
            <View>
                <View>
                    <Text>Login</Text>
                </View>
                <View>
                    <TextInput
                        placeholder="email"
                        textContentType='emailAddress'
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        placeholder="senha"
                        textContentType='password'
                        onChangeText={senha => this.setState({ senha })}
                    />

                    <TouchableOpacity
                        onPress={this._logando}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login