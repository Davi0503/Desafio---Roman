import React, { Component } from "react"
import { View, Text, FlatList,AsyncStorage } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import {DefaultStyles , FlatListStyles,FormularioStyles} from '../../assets/estilizacao/padrao.js';
import api from "../../services/api.js";
import { TokenValido } from "../../services/auth.js";

class Projetos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaprojetos: [
                {
                    idtemaNavigation:[]
                }
            ]
        }

    }

    _buscarProjetos = async () =>{
        //console.warn(AsyncStorage.getItem("userToken"));
        const token = await AsyncStorage.getItem("userToken");
        const Resultado = await api.get("/api/Projetos/listar/ativos",
        { 
            headers: { 
                Authorization: "Bearer " + token
            } 
        }
        )
        //console.warn(respostaLogin.data);
        this.setState({listaprojetos : Resultado.data})
    }

    componentDidMount(){
        TokenValido().then(
            valido => {
                if (!valido) {
                    this.props.navigation.navigate("AuthStack");
                }else{
                    this._buscarProjetos();
                }
            }
        )

    }

    render() {
        return (
            <View style={DefaultStyles.fundoPadrao}>
                <Text style={DefaultStyles.tituloPagina}>
                    Projetos
                </Text>
                <View>
                    <TouchableOpacity
                        style={{...FormularioStyles.inputArredondado,width:"14%",margin:15,padding:0}}
                        onPress={() => this.props.navigation.navigate("CadastroStack")}
                    >
                        <Text style={FormularioStyles.textoBotaoSubmit}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList //
                        contentContainerStyle={FlatListStyles.Main}
                        data={this.state.listaprojetos}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        )
    }

    renderizaItem = ({ item }) => (
        <View style={FlatListStyles.Corpo}>
            <View style={FlatListStyles.Item}>
                <Text>{item.nome}</Text>
            </View>
            <View>
                <Text>{item.idtemaNavigation.nome}</Text>
                <Text>{item.ativo?"ativo":"inativo"}</Text>
                <TouchableOpacity>
                    <Text style={FlatListStyles.ItemLink}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Projetos