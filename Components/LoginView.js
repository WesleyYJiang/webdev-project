import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'
import React, {Component} from 'react';
import {Button, Icon} from 'native-base';
import { Text } from 'react-native-elements'

// const LOG_IN = require('./Image/loginBG.jpg');


export default class LoginView extends Component {
    static navigationOptions = {
        title: 'LoginView'
    };
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Content scrollEnabled={false}>
                        {/*<ImageBackground style={styles.loginBackground} source={LOG_IN}>*/}
                        <View style={styles.loginForeground}>
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
                        </View>
                        {/*</ImageBackground>*/}
                    </Content>
                </View>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    loginBackground: {
        flex: 1
    },
    loginForeground: {
        flex:1,
        marginTop: Dimensions.get('window').height/1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        bottom: 0
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
    loginIcons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20
    }
});
