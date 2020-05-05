import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function BasicParticles() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}>What are Particles?</Text>
                <Text style = {styles.text}>
                    As stated in the previous section, particles dictate the
                    grammatical relation between words in Japanese. As such,
                    it is essential to understand the particles and their 
                    usages.
                </Text>

                <Text style = {styles.header}>は - Topic Marker</Text>
                <Text style = {styles.text}>
                    は pronounced as 'wa', is used to mark the word that 
                    comes before it as the topic of the sentence.
                    {'\n'}
                    {'\n'}
                    Another thing to note about は is that when the topic
                    is understood by both parties, it is generally omitted.
                </Text>

                <Text style = {styles.header}>が - Subject Marker</Text>
                <Text style = {styles.text}>
                    が is used in a similar way to は, except it is used to 
                    mark the subject of a sentence instead. 
                    {'\n'}
                    {'\n'}
                    The difference between the two is that は gives focus 
                    to the action of the topic introduced while が gives 
                    focus to the subject of the action.
                    {'\n'}
                    {'\n'}
                    It is also used when the speaker believes the subject 
                    to be unknown to the other party. Once the existence 
                    of the subject is understood by both parties, it can
                    then become the topic.
                </Text>

                <Text style = {styles.header}>を - Object Marker</Text>
                <Text style = {styles.text}>
                    を pronounced as 'o', is used to mark the object of the
                    sentence and will often come before verbs in a 
                    sentence.
                </Text>

                
            </ScrollView>
        </SafeAreaView>
    );
}

export default BasicParticles;