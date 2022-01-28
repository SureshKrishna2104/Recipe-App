import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, HomeContainer, StartupContainer } from '@/Containers'
import Icon from 'react-native-vector-icons/Ionicons'
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FIcon from 'react-native-vector-icons/FontAwesome5'
import { Brand, Info } from '@/Components'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color="black" size={25} />
          ),
          headerShown: false,
          tabBarLabel: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={ExampleContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <MIcons name="bookmark-minus" size={25} color="grey" />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={StartupContainer}
        options={{
          tabBarIcon: ({ color }) => (
            <FIcon name="shopping-bag" color="grey" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Info}
        options={{
          tabBarIcon: ({ color }) => (
            <FIcon name="user-alt" color="grey" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
