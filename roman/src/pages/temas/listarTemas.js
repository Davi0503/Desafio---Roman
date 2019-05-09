import React, { Component } from "react"
import { View, Text , FlatList} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import {DefaultStyles , FlatListStyles,FormularioStyles} from '../../assets/estilizacao/padrao.js';

class Temas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listatemas: [
                {
                    id: '1',
                    nome: "Um projeto",
                    ativo: 'true'
                }
            ]
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
                        onPress={() => this.props.navigation.navigate("MainNavigator")}
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
                    <Text>Atualizar</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Temas