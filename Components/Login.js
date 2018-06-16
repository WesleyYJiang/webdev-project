import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Item, Input, Icon, List, ListItem} from 'native-base';
import { Divider, Text } from 'react-native-elements'


class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text h4 style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>Log in using</Text>
                <View style={styles.loginIcons}>
                    <Icon type="Entypo"
                          name="facebook-with-circle"
                          onPress={() => alert('log in with fb to be implemented')}
                          style={{fontSize: 50, color: '#3b5998'}}
                    />

                    <Icon type="Entypo"
                          name="google--with-circle"
                          style={{fontSize: 50, color: '#dd4b39'}}
                          onPress={() => alert('log in with google to be implemented')}/>

                    <Icon type="Entypo"
                          name="twitter-with-circle"
                          style={{fontSize: 50, color: '#1dcaff'}}
                          onPress={() => alert('log in with twitter to be implemented')}/>

                    <Icon type="Entypo"
                          name="linkedin-with-circle"
                          onPress={() => alert('log in with linkedin to be implemented')}
                          style={{fontSize: 50, color: '#007bb5'}} />

                </View>
                <Button info rounded block style={{marginBottom: 10}}
                        onPress={() => this.props.navigation.navigate('SearchView') }>
                    <Text h5 style={{color: 'white'}}>Skip Login</Text>
                </Button>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    loginIcons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20
    }
});

export default Login;
