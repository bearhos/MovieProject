import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import List from './screens/List';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {height: 50,backgroundColor:'#15141F',borderTopWidth: 0},
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({forcused, color}) => (
          <View style={styles.Container}>
            <Icon name="home" size={27} color={color} />
            
          </View>
        ),
        tabBarBadge: null,
        tabBarActiveTintColor: '#FF8F71',
        tabBarInactiveTintColor: 'gray',
      }}
    />
    <Tab.Screen
      name="List"
      component={List}
      options={{
        tabBarIcon: ({forcused, color}) => (
          <View style={styles.Container}>
            <Icon name="bookmarks" size={27} color={color} />
           
          </View>
        ),
        tabBarActiveTintColor: '#FF8F71',
        tabBarInactiveTintColor: 'gray',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({forcused, color}) => (
          <View style={styles.Container}>
            <Icon name="person" size={27} color={color} />
            
          </View>
        ),
        tabBarActiveTintColor: '#FF8F71',
        tabBarInactiveTintColor: 'gray',
      }}
    />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
      bot: 10,
    },
    textNavigate: {},
  });
export default Tabs