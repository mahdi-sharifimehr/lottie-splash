import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Splash from './Splash';
import Home from './Home'

const MainNavigator = createStackNavigator({
    Splash: { screen: Splash },
    Home: { screen: Home },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);