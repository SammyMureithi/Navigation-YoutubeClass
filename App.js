import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from './Screens/DetailsScreen';
import HomeScreen from './Screens/HomeScreen';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStackScreen = ( { navigation } ) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={HomeScreen}/>
  </HomeStack.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={ HomeStackScreen} />
        <Drawer.Screen name='About' component={DetailsScreen}/>
      </Drawer.Navigator>
   </NavigationContainer>
  );
}

