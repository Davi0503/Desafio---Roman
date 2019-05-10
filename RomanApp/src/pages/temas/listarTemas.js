import React, { Component } from "react"
import { View, Text , FlatList, AsyncStorage} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import {DefaultStyles , FlatListStyles,FormularioStyles} from '../../assets/estilizacao/padrao.js';
import api from "../../services/api.js";
import { TokenValido } from "../../services/auth.js";

class Temas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listatemas: []
        }

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
        this.setState({listatemas : Resultado.data})
    }

    componentDidMount(){
        if(TokenValido()){
            this._buscarTemas()
        }else{
            this.props.navigation.navigate("AuthStack");
        }
    }


    render() {
        return (
            <View style={DefaultStyles.fundoPadrao}>
                <Text style={DefaultStyles.tituloPagina}>
                    Temas
                </Text>
                <View>
                    <TouchableOpacity
                        style={{...FormularioStyles.inputArredondado,width:"14%",margin:15,padding:0}}
                        onPress={()=>this.props.navigation.navigate("CadastrarTemas")}
                    >
                        <Text style={FormularioStyles.textoBotaoSubmit}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList //
                        contentContainerStyle={FlatListStyles.Main}
                        data={this.state.listatemas}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        )
    }

    renderizaItem = ({ item }) => (
        <View style={ {...FlatListStyles.Corpo,justifyContent:'space-between'}}>
                <Text>{item.nome}</Text>
                <Text>{item.ativo?"ativo":"inativo"}</Text>
                <TouchableOpacity>
                    <Text style={FlatListStyles.ItemLink}>Atualizar</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Temas