
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  console.log('gaa');
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName='User'
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          // drawerStyle: { backgroundColor: '#999' }
        }}>
        <Drawer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />

          }}
        />
        <Drawer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerLabel: 'User',
            drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />

          }} />
      </Drawer.Navigator> */}

      <BottomTab.Navigator initialRouteName='User'
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveBackgroundColor: '#f0e1ff',
          tabBarActiveTintColor: '#3c0a6b',
          // drawerStyle: { backgroundColor: '#999' }
        }}>
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarLabel: 'Welcome Screen',
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />

          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
