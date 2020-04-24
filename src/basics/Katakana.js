import * as React from 'react';
import { ScrollView, SafeAreaView, Text, Image } from 'react-native';

import styles from '../Styles';

function Katakana() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>What is Katakana?</Text>
                <Text style = {styles.text}>
                    Katakana is one of three systems used in modern Japanese. It means
                    "fragmentary syllabic script" in Japanese. Katakana shares the same
                    pronunciation of characters with Hiragana, but the characters are
                    different in appearance and usage.
                </Text>

                <Text style = {styles.header}>Differences between Hiragana and Katakana</Text>
                <Text style = {styles.text}>
                    All 71 pronunciations are the same between Hiragana and Katakana, but both
                    have distinct appearances and usages. For example, あ and ア share the same
                    sound: 'a', but are visually different. This applies for nearly all Katakana
                    characters.
                </Text>

                <Text style = {styles.header}>Usage</Text>
                <Text style = {styles.text}>
                    Katakana is primarily used to write words that have no Japanese equivalent, usually
                    foreign words. For example, TV is written as テレビ since there is no Kanji equivalent.
                    This also applies to names like トム (Tom) and other countries like アメリカ (America).
                    {"\n"}
                    {"\n"}
                    It is also used to represent onomatopoeia in Japanese. For example, ワンワン (Wanwan)
                    is used to represent the sound of a dog barking. It is also used to indicate the Onyomi
                    of a Kanji, but that will be discussed in the next section.
                </Text>

                <Text style = {styles.header}>Katakana Chart</Text>
                <Text style = {styles.text}>
                    Below is a chart that contains all 71 Katakana characters and their pronunciations.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Katakana;