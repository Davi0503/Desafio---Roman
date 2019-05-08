import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import Login from "./pages/login"
import Main from "./pages/main"
import Temas from "./pages/temas"

const AuthStack = createStackNavigator({ Login });

const MainNavigator = createBottomTabNavigator(
    {
        Main,
        Temas
    }
)
export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        },
        {
            initialRouteName: "AuthStack"
        }
    )
);