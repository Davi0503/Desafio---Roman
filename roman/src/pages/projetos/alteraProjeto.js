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

class Projeto extends Component{
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
                                <Text style={{...DefaultStyles.tituloPagina,marginTop:0}}>Alteração de Projeto</Text>
                            </View>
                            <View>
                                <Text style={FormularioStyles.labelInput}>Nome:</Text>
                                <TextInput
                                    placeholder="Nome do projeto"
                                    textContentType='name'
                                    style={FormularioStyles.inputArredondado}
                                    onChangeText={email => this.setState({ email })}
                                    placeholderTextColor='black'
                                />
                                <Text style={FormularioStyles.labelInput}>Tema:</Text>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={FormularioStyles.inputArredondado}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ language: itemValue })
                                    }>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>

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

export default Projeto 