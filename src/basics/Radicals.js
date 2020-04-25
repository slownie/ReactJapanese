import * as React from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';

import styles from '../Styles';

function Radicals() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>What are Radicals?</Text>
                <Text style = {styles.text}>
                    Radicals are the components of a kanji character. Every kanji
                    will have at least one radical, and these radicals lend to the
                    meaning of the character. 
                    {"\n"} 
                    {"\n"} 
                    Recall from the previous example the kanji for electricity.
                </Text>

                <Text style = {styles.highlight}>電</Text>

                <Text style = {styles.text}>
                     This single kanji is made up of three other radicals: {"\n"}
                     雨 (rain), 田 (rice paddy), 乚 (umbrella). 
                </Text>

                <Text style = {styles.header}>The 7 Radical Positions</Text>
                <Text style = {styles.text}>
                    All radicals are categorized based on their position within
                    a kanji. There are seven positions in total and the radical
                    will always be in said position.
                    {"\n"}
                    {"\n"}
                    The positions are as follows: {"\n"}
                    へん 　　- Left Side {"\n"}
                    つくり 　- Right Side {"\n"}
                    かんむり - On the Top {"\n"}
                    あし 　　- On the Bottom{"\n"}
                    かまえ 　- Enclosing {"\n"}
                    たれ 　　- Hanging{"\n"}
                    にょう 　- Wrap Around 
                </Text>

                <Text style = {styles.header}>How many Radicals are there?</Text>
                <Text style = {styles.text}>
                    There are 214 radicals but not all of them are used in modern
                    Japanese. However, it is still important to know the meaning
                    of all the radicals and to be able to recognize them within
                    a kanji.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Radicals;