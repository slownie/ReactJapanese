import * as React from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';

import styles from '../Styles';

{/*See its funny because Kanji is the opposite of easy */}

function Kanji() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>What is Kanji?</Text>
                <Text style = {styles.text}>
                    Kanji are Chinese characters that have been adapted to Japanese.
                    This means they use the same phonetic sounds that are used in
                    Hiragana and Katakana.
                    {"\n"}
                    {"\n"}
                    Kanji are ideograms, characters that have their own meaning.
                    They can be combined together to create a new character.
                    {"\n"}
                    {"\n"}
                    For example, 雨 (rain), 田 (rice paddy), 乚 (umbrella) 
                    create 電, which means electricity. These components of kanji 
                    are called 'Radicals' and will be discussed in the next section.
                </Text>

                <Text style = {styles.header}>How many Kanji are there?</Text>
                <Text style = {styles.text}>
                    Most estimate that there are between 50,000 and 85,000 kanji.
                    This is because there is no definitive count of all kanji in 
                    existence. Thankfully, you will not need to know every single
                    kanji character to be fluent in Japanese.
                    {"\n"}
                    {"\n"}
                    Only around 2,136 of these kanji are used in daily conversations
                    and are referred to as 'Jōyō Kanji'. 
                    {"\n"}
                    {"\n"}
                    These characters are categorized into elementary school grades
                    ranging from 1 to 6, while also having a secondary school category.
                </Text>

                <Text style = {styles.header}>Onyomi and Kunyomi</Text>
                <Text style = {styles.text}>
                    Due to how kanji was adapted into Japanese, most kanji have two
                    readings referred to as Onyomi and Kunyomi.
                    {"\n"}
                    {"\n"}
                    Onyomi is the Chinese pronunciation of the character. {"\n"}
                    Kunyomi is the Japanese pronunciation of the character.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Kanji;