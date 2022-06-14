import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Detail from './screens/Detail'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './screens/Home'
import moviesReducer from './API/redux/movieSlice'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './API/redux/store'

import Tabs from './Tabs'
import Profile from './screens/Profile'
const Stack = createNativeStackNavigator();
const ContainerApp = styled.View`
  flex: 1;
  background-color: red;
  
`
const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>

    <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
    </NavigationContainer>
    
    </Provider>
  )
}

export default App