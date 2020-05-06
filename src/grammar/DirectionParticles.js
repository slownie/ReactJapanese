import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from '../Styles';

function DirectionParticles() {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {styles.header}>に - Arrival Marker</Text>
                <Text style = {styles.text}>
                    に is a multi-use particle 
                </Text>

                <Text style = {styles.header}>へ - Direction Marker</Text>
                <Text style = {styles.text}>
                    へ pronounced as 'e', has a similar usage に but is different in
                    its own right. While に is used to express the arrival at a 
                    destination, へ puts more emphasis on the direction towards the
                    destination. 
                    {'\n'}
                    {'\n'}
                    Because of this, へ is poetic and is often used in 
                    titles for movies, comics, and songs.
                </Text>
                <Text style = {styles.text}><Text style = {{ fontWeight: 'bold'}}>Example{'\n'}</Text>
                    おさかにきます。{'\n'}
                    "I am going to Osaka." {'\n'} {'\n'}
                    おさかへいきます。{'\n'} 
                    "I am heading for Osaka."
                </Text>

                <Text style = {styles.header}>で - Location Marker</Text>
                <Text style = {styles.text}>
                    で has two usages. The first is to indicate the location of a 
                    particular action and the second is used to indicate the tools
                    or means of the action.
                </Text>
                <Text style = {styles.text}><Text style = {{ fontWeight: 'bold'}}>Example{'\n'}</Text>
                    としょかんでほんをよみます。{'\n'}
                    "I read books at the library." {'\n'} {'\n'}
                    バスでいきました。{'\n'} 
                    "I went by bus."
                </Text>

                <Text style = {styles.header}>から - Source Marker</Text>
                <Text style = {styles.text}>
                    で has two usages. The first is to indicate the location of a 
                    particular action and the second is used to indicate the tools
                    or means of the action.
                </Text>
                <Text style = {styles.text}><Text style = {{ fontWeight: 'bold'}}>Example{'\n'}</Text>
                    としょかんでほんをよみます。{'\n'}
                    "I read books at the library." {'\n'} {'\n'}
                    バスでいきました。{'\n'} 
                    "I went by bus."
                </Text>

                <Text style = {styles.header}>まで - Limit Marker</Text>
                <Text style = {styles.text}>
                    で has two usages. The first is to indicate the location of a 
                    particular action and the second is used to indicate the tools
                    or means of the action.
                </Text>
                <Text style = {styles.text}><Text style = {{ fontWeight: 'bold'}}>Example{'\n'}</Text>
                    としょかんでほんをよみます。{'\n'}
                    "I read books at the library." {'\n'} {'\n'}
                    バスでいきました。{'\n'} 
                    "I went by bus."
                </Text>

                
            </ScrollView>
        </SafeAreaView>
    );
}

export default DirectionParticles;