import React, { Component } from "react"
import { View, Text } from "react-native"

class Main extends Component {
    render(){
        return(
            <View>
                <Text>
                    Projetos
                </Text>
                <View>
                    <Link to="/cadastroProjetos">+</Link>
                </View>
                <View>
                    <FlatList
                    // contentContainerStyle={}
                    data={this.state.listaprojetos}
                    keyExtractor={item => item.id}
                    renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        )
    }

    renderizaItem = ({item}) => (
        <View>
            <View>
                <View>
                    <Text>{item.nome}</Text>
                    <Text>{item.tema}</Text>
                    <Text>{item.ativo}</Text>
                    <Link to="/atualiza">Atualizar</Link>
                </View>
            </View>
        </View>
    )
}

export default Main