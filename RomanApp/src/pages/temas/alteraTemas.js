import React, {Component} from 'react'

import {StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Picker} from 'react-native'

import { DefaultStyles, FeedBackStyles, FormularioStyles } from '../../assets/estilizacao/padrao.js';

class Temas extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            senha: ""
        };
    }

    render(){
        return(
            <View style={DefaultStyles.fundoPadrao}>
                    <View style={FormularioStyles.mainContainer}>
                        <View style={FormularioStyles.corpo}>
                            <View>
                                <Text style={DefaultStyles.tituloPagina}>Alteração de Tema</Text>
                            </View>
                            <View>
                                <Text style={FormularioStyles.labelInput}>Nome:</Text>
                                <TextInput
                                    placeholder="Nome do tema"
                                    textContentType='name'
                                    style={FormularioStyles.inputArredondado}
                                    onChangeText={email => this.setState({ email })}
                                    placeholderTextColor='black'
                                />

                                <TouchableOpacity
                                    onPress={this._logando}
                                    style={{ ...FormularioStyles.inputArredondado, ...FormularioStyles.botaoSubmit }}
                                    activeOpacity={0.5}
                                >
                                    <Text style={FormularioStyles.textoBotaoSubmit}>Enviar</Text>
                                </TouchableOpacity>

                                <Text style={FeedBackStyles.mensagemErro}>Mensagem erro</Text>
                            </View>
                        </View>
                    </View>

            </View>
        )
    }

}

export default Temas 