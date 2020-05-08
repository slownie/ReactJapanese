import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function Verbs() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>Verbs in Japanese</Text>
                <Text style = {styles.text}>
                    Japanese sentences end with the verb. (です is not strictly a 
                    verb, but it is used like one.) The endings of verbs show the 
                    tense of the sentence and whether it is positive or negative.
                    {'\n'}
                    {'\n'}
                    Tenses of Japanese verbs can be divided roughly into two 
                    categories, present and past. There is no future tense in 
                    Japanese. Instead, present forms of verbs are interpreted as
                    'it is', or 'how it will be'. 
                </Text>

                <Text style = {styles.header}>ます - The Verb Ending</Text>
                <Text style = {styles.text}>
                    You may have noticed a few sentences ending with ます rather 
                    than です. This is because ます is used to convert a sentence
                    to polite form. 
                    {'\n'}
                    {'\n'}
                    On its own, ます has no meaning, but it is essential for formal
                    writing and speech.
                    {'\n'}
                    {'\n'}
                    ラーメンを食べる。"I eat ramen." (Plain Form) {'\n'}
                    ラーメンをたべます。"I eat ramen." (Polite Form) 
                    {'\n'}
                    {'\n'}
                    Despite fundamentally meaning the same thing, it is important to 
                    know where and when to use both forms.
                </Text>

                <Text style = {styles.header}>Verb Conjugation</Text>
                <Text style = {styles.text}>
                    In Japanese, verbs can be divided into two categories: u-verbs
                    and ru-verbs.
                    {'\n'}
                    {'\n'}
                    All Japanese verbs are made up of a base and a suffix. For example,
                    the verb, 見る is composed of the base, 見 and the suffix, る.
                    {'\n'}
                    {'\n'}
                    In this state, this verb is unconjugated and referred to as 'Plain Form'.
                    The conjugated form of this verb is 見ます and is more polite.
                </Text>

                <Text style = {styles.header}>Ru-Verb Conjugation</Text>
                <Text style = {styles.text}>
                    Conjugating Ru-verbs is simple as you only need to replace the suffix
                    with ます.
                    {'\n'}
                    {'\n'}
                    見る becomes 見ます. {'\n'}
                    着る becomes 着ます. {'\n'}
                    食べる becomes 食べます. 
                    {'\n'}
                    {'\n'}
                    The two exceptions to this rule are 来る (To come) and する (To do).
                    These two verbs are conjugated as U-verbs.
                </Text>

                <Text style = {styles.header}>U-Verb Conjugation</Text>
                <Text style = {styles.text}>
                    Unlike the previous section, u-verbs are not limited to one suffix.
                    They can be any character that has the constant 'u' like く or む.
                    To conjugate them, we must convert them into their 'i' counterparts.
                    {'\n'}
                    {'\n'}
                    く becomes き. {'\n'}
                    す becomes し. {'\n'}
                    つ becomes ち.
                    {'\n'}
                    {'\n'}
                    書く becomes 書きます. {'\n'}
                    死ぬ becomes 死にます. {'\n'}
                    話す becomes 話します. 
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Verbs;