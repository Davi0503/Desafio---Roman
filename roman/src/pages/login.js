import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ScrollView
} from "react-native";
import api from '../services/api.js';



class Login extends Component {
    static navigationOptions = {
        header: null
    };

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

            <View style={styles.main}>
                {/* <View style={styles.container}> */}
                {/* </View> */}

                <ImageBackground source={require("../assets/img/160.jpg")} style={styles.backgroundImage}>
                    <View style={styles.mainContainer}>

                        <View>
                            <Text>Login</Text>
                        </View>
                        <View>
                            <Text>Email:</Text>
                            <TextInput
                                placeholder="email"
                                textContentType='emailAddress'
                                onChangeText={email => this.setState({ email })}
                            />
                            <Text>Senha:</Text>
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

                </ImageBackground>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        padding: 0,
        margin: 0,
        display:"flex"
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        
    },
    backgroundImage: {
        width: "100%", height: 650, resizeMode: 'cover'

    }

})

export default Login