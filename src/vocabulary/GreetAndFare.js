import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function GreetAndFare() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>こんいちは</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Konichiwa</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Hello</Text>

                <Text style = {styles.header}>さようなら</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Sayōnara</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Goodbye</Text>

                <Text style = {styles.header}>おはようございます</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Ohayō Gozaimasu</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Good morning</Text>

                <Text style = {styles.header}>こんばんは</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Konbanwa</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Good evening</Text>

                <Text style = {styles.header}>おやすみなさい</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Oyasuminasai</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Good night</Text>

                <Text style = {styles.header}>ではまた / じゃまた</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Dewa mata / Ja mata</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> With that / Well then</Text>

                <Text style = {styles.header}>いってらっしゃい</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Itte rasshai</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> So long (Person leaving)</Text>

                <Text style = {styles.header}>いってまいります</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Itte mairimasu</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> So long (Response)</Text>

                <Text style = {styles.header}>ただいま</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Tadaima</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> I'm back</Text>
                
                <Text style = {styles.header}>おかえりなさい</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Okaeri nasai</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Welcome home</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default GreetAndFare;