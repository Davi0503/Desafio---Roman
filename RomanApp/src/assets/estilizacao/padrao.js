import { StyleSheet } from 'react-native';

/**  Estilos : 
 *  DefaultStyles       (Estilos que aparecerão em todas as paginas (ou a maioria delas))
 *  FormularioStyles    (Estilos usados em fomularios)
 *  FeedBackStyles      (Estilos usados no feedback)
 *  FlatListStyles      (Estilos usados em itens de lista de dados)
 */

export const DefaultStyles = StyleSheet.create({
    tituloPagina: {
        letterSpacing: 2,
        textAlign: 'center',
        fontSize: 38,
        width: '100%',
        color: 'white',
        marginBottom: 20
    },
    fundoPadrao: {
        backgroundColor: '#144970',
        height: '100%'
    }
});


export const FormularioStyles = StyleSheet.create({
        inputArredondado: {
            borderRadius: 100,
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: 'white'
        },
        inputPicker: {
            borderRadius: 100,
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: 'white',
            width: "70%",
            marginLeft: 15
        },
        labelInput: {
            fontWeight: '500',
            marginVertical: 20,
            fontSize: 18,
            color: 'white',
        },
        mainContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#rgba(0,0,0,0.5)'
        },
        corpo: {
            width: '60%'
        },
        botaoSubmit: {
            width: '75%',
            alignSelf: 'center',
            marginTop: 25,
        },
        textoBotaoSubmit: {
            textAlign: 'center',
            fontSize: 20,
            color: 'black'
        }
});

export const FeedBackStyles = StyleSheet.create({
    mensagemErro: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    },
    mensagemSucesso: {
        color: '#4CAF50',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    }
});

export const FlatListStyles = StyleSheet.create({
    Main: {
        width: '90%',
        alignSelf: 'center',
    },
    Corpo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 5,
        shadowOffset: {
            width: 14, height: 14
        },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 12
    },
    Item: {
        width: '80%'
    },
    ItemLink:{
        textDecorationLine:'underline'
    }
});