import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function DirectionParticles() {
    return (
        <SafeAreaView style = {styles.page}>
            <ScrollView>
               <Text style = {styles.header}>に</Text>

               <Text style = {styles.header}>へ</Text>

               <Text style = {styles.header}>で</Text>

               <Text style = {styles.header}>から</Text>

               <Text style = {styles.header}>まで</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DirectionParticles;