import * as React from 'react';
import { ScrollView, SafeAreaView, Text, Image } from 'react-native';

import styles from '../Styles';

function Hiragana() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>What is Hiragana?</Text>
                <Text style = {styles.text}>
                    Hiragana is one of three systems used in modern Japanese. It means
                    "ordinary syllabic script" in Japanese. All 71 Hiragana characters
                    represent a sound in the Japanese language but have no meaning on
                    their own.
                </Text>

                <Text style = {styles.header}>Origins of Hiragana</Text>
                <Text style = {styles.text}>
                    Initially, Japan didn't have a writing system before Chinese characters
                    were introduced in the first or second century AD, this resulted in the
                    creation of Kanji. However, the Japanese wanted a system that was entirely
                    their own and they created both Hiragana and Katakana.
                </Text>

                <Text style = {styles.header}>Usage</Text>
                <Text style = {styles.text}>
                    Hiragana can be used to represent every word in the Japanese language, however,
                    there are no spaces in Japanese to separate words. If you wrote everything in 
                    Hiragana, it would be impossible to tell which characters belonged to which word.
                    Because of this, Kanji is used alongside Hiragana.
                    {"\n"}
                    {"\n"}
                    Hiragana is used to write verb and adjective endings, particles, words that have
                    no Kanji, and some words that are commonly written in kana such as こんいちは, "Hello".
                </Text>

                <Text style = {styles.header}>Hiragana Chart</Text>
                <Text style = {styles.text}>
                    Below is a chart that contains all 71 Hiragana characters and their pronunciations.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Hiragana;