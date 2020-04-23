import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: scale(12),
        lineHeight: 18,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
    },

    header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: scale(14),
        lineHeight: 30,
        marginLeft: 5,
    },

    page: {
        flex: 1,

    },

    image: {
        resizeMode: 'center'
    },
});

export default styles;