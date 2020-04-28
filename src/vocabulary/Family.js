import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function Family() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>Your Family Members</Text>
                <Text style = {styles.text}>These words are used when talking about one's own family.</Text>

                <Text style = {styles.header}>家族 (かぞく)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Kazoku</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Family</Text>

                <Text style = {styles.header}>祖父 (そふ)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Sofu</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Grandfather</Text>

                <Text style = {styles.header}>祖母 (そぼ)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Sobo</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Grandmother</Text>

                <Text style = {styles.header}>両親 (りょうしん)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Ryōshin</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Parents</Text>

                <Text style = {styles.header}>父 (ちち)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Chichi</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Father</Text>
                
                <Text style = {styles.header}>母 (はは)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Haha</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Mother</Text>

                <Text style = {styles.header}>兄弟 (きょうだい)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Kyoudai</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Siblings/Brothers</Text>

                <Text style = {styles.header}>姉妹 (しまい)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Shimai</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Sisters</Text>

                <Text style = {styles.header}>兄 (あに)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Ani</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Older brother</Text>

                <Text style = {styles.header}>姉 (あね)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Ane</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Older sister</Text>

                <Text style = {styles.header}>弟 (おとうと)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Otouto</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Younger brother</Text>

                <Text style = {styles.header}>妹 (いもうと)</Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Imouto</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Younger sister</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Family;