import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function SentenceStructure() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
               <Text style = {styles.header}>English Sentence Structure</Text>
               <Text style = {styles.text}>
                   Before we begin with Japanese sentence structure, let's
                   refresh how English sentence structure works.
                   {'\n'}
                   {'\n'}
                   English sentences use a specific order to dictate their meaning.
                   Usually, English follows a subject-verb-object structure, where
                   the order of the words tell us who did what.
               </Text>

               <Text style = {styles.header}>Japanese Sentence Structure</Text>
               <Text style = {styles.text}>
                   Sentences in Japanese revolve around grammatical markers called
                   'particles'. Each particle is used to indicate the grammatical 
                   meaning of the word that appears before it.  
                   {'\n'}
                   {'\n'}
                   This can cause the order of words to vary, but regardless, the
                   verb will always appear last in the sentence. 
                   {'\n'}
                   {'\n'}
                   To summarize, the particles dictate the relation between the words
                   in a sentence, not the order that they're in.
               </Text>

               <Text style = {styles.header}>Particles</Text>
               <Text style = {styles.text}>
                   As stated above, particles are used to indicate the grammatical
                   meaning of words in a sentence. 
                   {'\n'}
                   {'\n'}
                   Particles are always written in Hiragana, making them easy to
                   identify when used alongside Kanji.
               </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SentenceStructure;