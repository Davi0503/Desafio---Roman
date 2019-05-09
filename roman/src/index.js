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

// import Temas from "./pages/temas/cadastrarTemas"
// import Projetos from "./pages/projetos/cadastrarProjetos"

// import Temas from "./pages/temas/alteraTemas"
// import Projetos from "./pages/projetos/alteraProjeto"

const AuthStack = createStackNavigator({ Login });

const MainNavigator = createBottomTabNavigator(
    {
        Projetos:Projetos,
        Temas:Temas,
        Professores:Professores
    },{
        swipeEnabled:true,
        tabBarOptions:{
            activeBackgroundColor:'#3380e7',
            activeTintColor:'white',
            allowFontScaling:true,
            labelStyle:{
                fontSize:20,
                marginBottom:10
            },
            showIcon:false
            
        }
    }
)
export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        },
        {
            //initialRouteName: "AuthStack"
            initialRouteName: "MainNavigator" //para testes
        }
    )
);