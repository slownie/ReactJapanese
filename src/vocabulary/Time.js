import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function Time() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
                <Text style = {styles.header}></Text>
                <Text style = {styles.definition}><Text style = {styles.example}>Romaji:</Text> Konichiwa</Text>
                <Text style = {styles.text}><Text style = {styles.example}>English:</Text> Hello</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Time;