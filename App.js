import * as React from 'react';
import { SafeAreaView, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

{/*Basics Imports */}
import Hiragana from './src/basics/Hiragana';

import styles from './src/Styles'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

{/*Navigation Screens */}
function HomeScreen() {
    return (
        <SafeAreaView style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <StatusBar barStyle = 'light-content' backgroundColor = '#00675b' />
            <Text>Idiot</Text>
        </SafeAreaView>
    );
}

function BasicsScreen({navigation}) {
    return (
        <SafeAreaView style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
          <StatusBar barStyle = 'light-content' backgroundColor = '#00675b' />
          <Button
            title = 'Hiragana - ひらがな'
            color = '#009688'
            onPress = {() => navigation.navigate('Hiragana')}
          />
        </SafeAreaView>
    );
}

{/*Stack Navigation */}
function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = '日本語'
                component = {HomeScreen}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />
        </Stack.Navigator>
    );
}

function BasicsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'Basics'
                component = {BasicsScreen}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Hiragana'
                component = {Hiragana}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />
        </Stack.Navigator>
    );
}


{/*Main Function */}
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions = {{
                    activeTintColor: '#009688'
                }}
            >
                <Tab.Screen name = "Home" component = {HomeStack} />
                <Tab.Screen name = "Basics" component = {BasicsStack} />
                <Tab.Screen name = "Grammar" component = {HomeStack} />
                <Tab.Screen name = "Vocabulary" component = {HomeStack} />
            
            </Tab.Navigator>
        </NavigationContainer>    
    );
}

export default App;