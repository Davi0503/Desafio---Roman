import React, { Component } from "react"
import { View, Text, FlatList, StyleSheet, Picker } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { DefaultStyles, FlatListStyles, FormularioStyles } from '../../assets/estilizacao/padrao.js';

class Professores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaprofessores: [
                {
                    id: '1',
                    email: "xavier@gmail.com",
                    equipe: 'Desenvolvimento'
                }
            ]
        }

    }


    render() {
        return (
            <View style={DefaultStyles.fundoPadrao}>
                <Text style={DefaultStyles.tituloPagina}>
                    Professores
                </Text>
                <View>
                    <Text style={FormularioStyles.labelInput}>Equipe:</Text>
                    <Picker
                        selectedValue={this.state.language}
                        style={FormularioStyles.inputPicker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Desenvolvimento" value="Desenvolvimento" />
                        <Picker.Item label="Multimidia" value="Multimidia" />
                    </Picker>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList //
                        contentContainerStyle={FlatListStyles.Main}
                        data={this.state.listaprofessores}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View >
        )
    }

    renderizaItem = ({ item }) => (
        <View style={FlatListStyles.Corpo}>
            <View style={FlatListStyles.Item}>
                <Text>{item.email}</Text>
                <Text>{item.equipe}</Text>
            </View>
            {/* <View>
            </View> */}
        </View>
    )
}

export default Professores