/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

// Importación de componentes
import Main from './screens/Main';
import Dashboard from './screens/Dashboard';

const AppStack = createStackNavigator({
    Dashboard: { screen: Dashboard }
});

export default createAppContainer(
    createSwitchNavigator(
        {
            MainScreen: Main,
            App: Dashboard
        },
        {
            initialRouteName: 'App'
        }
    )
);
