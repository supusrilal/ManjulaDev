import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const screens = {
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Screen1'
}

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);