import * as React from 'react';
import { SafeAreaView, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

{/*Basics Imports */}
import Hiragana from './src/basics/Hiragana';
import Katakana from './src/basics/Katakana';
import Kanji from './src/basics/Kanji';
import Radicals from './src/basics/Radicals';

{/*Grammar Imports */}
import SentenceStructure from './src/grammar/SentenceStructure'
import BasicParticles from './src/grammar/BasicParticles';
import DirectionParticles from './src/grammar/DirectionParticles';
import Verbs from './src/grammar/Verbs';

{/*Vocabulary Imports */}
import GreetAndFare from './src/vocabulary/GreetAndFare';
import Family from './src/vocabulary/Family';
import Time from './src/vocabulary/Time';

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
        <SafeAreaView style = {{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-around'}}> 
            <StatusBar barStyle = 'light-content' backgroundColor = '#00675b' />
            <Button
                title = 'Hiragana - ひらがな'
                color = '#009688'
                onPress = {() => navigation.navigate('Hiragana')}
            />

            <Button
                title = 'Katakana - カタカナ'
                color = '#009688'
                onPress = {() => navigation.navigate('Katakana')}
            />        

            <Button
                title = 'Kanji - 漢字'
                color = '#009688'
                onPress = {() => navigation.navigate('Kanji')}
            />

            <Button
                title = 'Radicals - 部首'
                color = '#009688'
                onPress = {() => navigation.navigate('Radicals')}
            />
        </SafeAreaView>
    );
}

function GrammarScreen({navigation}) {
    return (
        <SafeAreaView style = {{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-around'}}> 
            <StatusBar barStyle = 'light-content' backgroundColor = '#00675b' />
            <Button
                title = 'Sentence Structure'
                color = '#009688'
                onPress = {() => navigation.navigate('Sentence Structure')}
            />

            <Button
                title = 'Basic Particles'
                color = '#009688'
                onPress = {() => navigation.navigate('Basic Particles')}
            />        

            <Button
                title = 'Direction Particles'
                color = '#009688'
                onPress = {() => navigation.navigate('Direction Particles')}
            />

            <Button
                title = 'Verbs'
                color = '#009688'
                onPress = {() => navigation.navigate('Verbs')}
            />
        </SafeAreaView>
    );
}

function VocabularyScreen({navigation}) {
    return (
        <SafeAreaView style = {{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-around'}}> 
        <StatusBar barStyle = 'light-content' backgroundColor = '#00675b' />
        <Button
            title = 'Greetings and Farewells'
            color = '#009688'
            onPress = {() => navigation.navigate('Greetings and Farewells')}
        />

        <Button
            title = 'Family'
            color = '#009688'
            onPress = {() => navigation.navigate('Family')}
        />        

        <Button
            title = 'Time'
            color = '#009688'
            onPress = {() => navigation.navigate('Time')}
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

            <Stack.Screen
                name = 'Katakana'
                component = {Katakana}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Kanji'
                component = {Kanji}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Radicals'
                component = {Radicals}
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

function GrammarStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'Grammar'
                component = {GrammarScreen}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Sentence Structure'
                component = {SentenceStructure}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Basic Particles'
                component = {BasicParticles}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Direction Particles'
                component = {DirectionParticles}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Verbs'
                component = {Verbs}
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

function VocabularyStack() {
    return (
        <Stack.Navigator>
             <Stack.Screen
                name = 'Vocabulary'
                component = {VocabularyScreen}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Greetings and Farewells'
                component = {GreetAndFare}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Family'
                component = {Family}
                options = {{
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerStyle: { backgroundColor: '#009688' },
                }}
            />

            <Stack.Screen
                name = 'Time'
                component = {Time}
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
                <Tab.Screen name = "Grammar" component = {GrammarStack} />
                <Tab.Screen name = "Vocabulary" component = {VocabularyStack} />
            
            </Tab.Navigator>
        </NavigationContainer>    
    );
}

export default App;