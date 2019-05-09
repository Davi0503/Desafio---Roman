import React, { Component } from "react"
import { View, Text, FlatList,StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import {DefaultStyles , FlatListStyles,FormularioStyles} from '../../assets/estilizacao/padrao.js';

class Projetos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaprojetos: [
                {
                    id: '1',
                    nome: "Um projeto",
                    tema: {
                        id: '1',
                        nome: 'Tema'
                    },
                    ativo: 'true'
                }
            ]
        }

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
                        onPress={() => this.props.navigation.navigate("MainNavigator")}
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
                <Text>{item.tema.nome}</Text>
                <Text>{item.ativo?"ativo":"inativo"}</Text>
                <TouchableOpacity>
                    <Text>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Projetos