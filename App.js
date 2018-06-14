import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Divider, Text, } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>


            <View style={styles.logIns}>
                <IconEntypo.Button name='facebook-with-circle'
                                   color='#3b5998'
                                   //backgroundColor={'transparent'}
                                   onPress={() => alert('long in with fb')}
                                   size={50}
                />

                <IconEntypo.Button name='google--with-circle'
                                   color='#dd4b39'
                                   //backgroundColor={'transparent'}
                                   onPress={() =>alert('long in with google')}
                                   size={50}
                />

                <IconEntypo.Button name='twitter-with-circle'
                                   color='#1dcaff'
                                   //backgroundColor={'transparent'}
                                   onPress={() =>alert('long in with twitter')}
                                   size={50}

                />

                <IconEntypo.Button name='linkedin-with-circle'
                                   color='#007bb5'
                                   //backgroundColor={'transparent'}
                                   onPress={() =>alert('long in with linkedin')}
                                   size={50}
                />
            </View>
            {/*<Text h4 style={styles.loginText}> log in: </Text>*/}
        </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logIns: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
  },
    loginText: {
        flexBasis: '50%',
        alignItems: 'center',
        flexDirection: 'row',

    },
});