import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import Login from "./pages/login"
import Temas from "./pages/temas/listarTemas"
import Projetos from "./pages/projetos/listarProjetos"
import Professores from "./pages/professores/listarProfessores"

import { AsyncStorage } from 'react-native'

import CadastrarTemas from "./pages/temas/cadastrarTemas"
import CadastrarProjetos from "./pages/projetos/cadastrarProjetos"

// import Temas from "./pages/temas/alteraTemas"
// import Projetos from "./pages/projetos/alteraProjeto"


// export const _VerificarNavigator = async () => {
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW5pc3RyYWRvciIsIlJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTU3NDA1NzkyLCJpc3MiOiJBcGlSb21hbiIsImF1ZCI6IkFwaVJvbWFuIn0.ajWDigdHcFnX71F4gjrbQcDqQtduPLxXLOdHGtVgTTk"
//     //await AsyncStorage.getItem("userToken")
//     if (token !== null) {
//         const decode = jwt_decode(token)
//         if (decode.Role == "Administrador") {}}}

const MainNavigator = createBottomTabNavigator(
    {
        Projetos: Projetos,
        Temas: Temas
    }, {
        swipeEnabled: true,
        tabBarOptions: {
            activeBackgroundColor: '#3380e7',
            activeTintColor: 'white',
            allowFontScaling: true,
            labelStyle: {
                fontSize: 20,
                marginBottom: 10
            },
            showIcon: false
        }
    }

)

const AdminNavigator = createBottomTabNavigator(
    {
        Projetos: Projetos,
        Temas: Temas,
        Professores: Professores
    }, {
        swipeEnabled: true,
        tabBarOptions: {
            activeBackgroundColor: '#3380e7',
            activeTintColor: 'white',
            allowFontScaling: true,
            labelStyle: {
                fontSize: 20,
                marginBottom: 10
            },
            showIcon: false
        }
    }
)
const AuthStack = createStackNavigator(
    { 
        Login 
    }
);

const CadastroStack = createStackNavigator(
    { 
        CadastrarProjetos,
        CadastrarTemas
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            MainNavigator,
            AdminNavigator,
            CadastroStack
        },
        {
            initialRouteName: "AuthStack"
            //initialRouteName: "MainNavigator" //para testes
        }
    )
);