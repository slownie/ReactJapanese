import * as React from 'react';
import { SafeAreaView, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

{/*Main Function */}
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            
            >
                <Tab.Screen name = "Home" component = {HomeStack} />
                <Tab.Screen name = "Basics" component = {HomeStack} />
                <Tab.Screen name = "Grammar" component = {HomeStack} />
                <Tab.Screen name = "Vocabulary" component = {HomeStack} />
            
            </Tab.Navigator>
        </NavigationContainer>    
    );
}

export default App;