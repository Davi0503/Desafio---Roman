import React, { Component } from 'react';
import jwt from 'jwt-decode';

import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from "react-native";
import api from '../services/api.js';
import {DefaultStyles,FeedBackStyles, FormularioStyles} from '../assets/estilizacao/padrao.js';


class Login extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { email: "", senha: "" };
    }

    _logando = async () => {
        // var jwt = require("jwt-decode");
        
        const respostaLogin = await api.post("/api/Usuarios/login", {
            email: this.state.email,
            senha: this.state.senha
        })

        const token = respostaLogin.data.token;
        await AsyncStorage.setItem('userToken', token);

        //Alert.alert(token);
        var decode = jwt(token).Role;
        //console.warn(decode);
            if (decode.Role === "Administrador") {
                this.props.navigation.navigate("AdminNavigator");
            }

        this.props.navigation.navigate("MainNavigator");
    }


    render() {
        return (

            <View style={styles.main}>
                {/* <View style={styles.container}> */}
                {/* </View> */}

                <ImageBackground source={require("../assets/img/160.jpg")} style={styles.backgroundImage}>
                    <View style={FormularioStyles.mainContainer}>
                        <View style={FormularioStyles.corpo}>
                        <View>
                            <Text style={DefaultStyles.tituloPagina}>Login</Text>
                        </View>
                        <View>
                            <Text style={FormularioStyles.labelInput}>Email:</Text>
                            <TextInput
                                placeholder="email"
                                textContentType='emailAddress'
                                style={FormularioStyles.inputArredondado}
                                onChangeText={email => this.setState({ email })}
                                placeholderTextColor='black'
                            />
                            <Text style={FormularioStyles.labelInput}>Senha:</Text>
                            <TextInput
                                placeholder="senha"
                                textContentType='password'
                                style={FormularioStyles.inputArredondado}
                                onChangeText={senha => this.setState({ senha })}
                                placeholderTextColor='black'
                            />

                            <TouchableOpacity
                                onPress={this._logando}
                                style={{...FormularioStyles.inputArredondado,...FormularioStyles.botaoSubmit}}
                                activeOpacity={0.5}
                            >
                                <Text style={FormularioStyles.textoBotaoSubmit}>Login</Text>
                            </TouchableOpacity>

                            <Text style={FeedBackStyles.mensagemErro}>Mensagem erro</Text>
                        </View>
                    </View>
                    </View>

                </ImageBackground>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        width:'100%',
        alignSelf:'flex-start',
        padding: 0,
        margin: 0,
        display:"flex"
    },
    backgroundImage: {
        width: "100%", 
        height: '100%', 
    }
})

export default Login