import React from 'react';
import {Image} from 'react-native';
import ReadScreen from './screens/ReadScreen'
import writeScree from './screens/WriteScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
return (<AppContainer></AppContainer>)
}
}
 
const TabNavigator = createBottomTabNavigator({
writeScree:{screen: writeScree,
    navigationOptions:{
      tabBarIcon:<Image
      source={require('./assets/write.png')}
      style={{width:40,height:40}}
      />,
      tabBarLabel:'Write Story'
    }
  },
  ReadScreen:{ screen: ReadScreen,
    navigationOptions:{
      tabBarIcon:<Image
      source={require('./assets/read.png')}
      style={{width:40,height:40}}
      />,
      tabBarLabel:'Read Story'
    }
    }
})

const AppContainer = createAppContainer(TabNavigator)