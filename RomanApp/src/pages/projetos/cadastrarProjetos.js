import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Picker
} from "react-native";
import api from '../../services/api.js';
import { DefaultStyles, FeedBackStyles, FormularioStyles } from '../../assets/estilizacao/padrao.js';
import {TokenValido} from '../../services/auth.js';


class Projetos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            idtema: "",
            ativo: "",
            temas: []
        };
    }

    _buscarTemas = async () =>{
        //console.warn(AsyncStorage.getItem("userToken"));
        const token = await AsyncStorage.getItem("userToken");
        const Resultado = await api.get("/api/Temas/listar/ativos",
        { 
            headers: { 
                Authorization: "Bearer " + token
            } 
        }
        )
        //console.warn(respostaLogin.data);
        this.setState({temas : Resultado.data})
    }

    componentDidMount(){
        TokenValido().then(
            valido => {
                if (!valido) {
                    this.props.navigation.navigate("AuthStack");
                }else{
                    this._buscarTemas();
                }
            }
        )
    }

    cadastrarProjetos =  async () => {
        await api.post('/projetos/cadastrar',{
            nome: this.state.nome,
            idtema: this.state.idtema,
            ativo: this.state.ativo
    })
    .then(data => {
        if(data.status === 200){
            console.warn(data);
        }
    })
    .catch(erro => {console.warn(erro)})
    }


    render() {
        return (

            <View style={DefaultStyles.fundoPadrao}>
                    <View style={FormularioStyles.mainContainer}>
                        <View style={FormularioStyles.corpo}>
                            <View>
                                <Text style={{...DefaultStyles.tituloPagina,marginTop:0}}>Cadastro de Projeto</Text>
                            </View>
                            <View>
                                <Text style={FormularioStyles.labelInput}>Nome:</Text>
                                <TextInput
                                    placeholder="Nome do projeto"
                                    textContentType='name'
                                    style={FormularioStyles.inputArredondado}
                                    onChangeText={nome => this.setState({ nome })}
                                    placeholderTextColor='black'
                                />
                                <Text style={FormularioStyles.labelInput}>Tema:</Text>
                                <Picker
                                    selectedValue={this.state.idtema}
                                    style={FormularioStyles.inputArredondado}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ idtema: itemValue })
                                    }>
                                    {
                                        this.state.temas.map(function(tema){
                                            return(
                                                <Picker.Item label={tema.nome} value={tema.idtema}></Picker.Item>
                                            )
                                        })
                                    }
                                </Picker>

                                <TouchableOpacity
                                    onPress={this.cadastrarProjetos}
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

export default Projetos