import { StyleSheet, View, ImageBackground, Dimensions, Image } from 'react-native'
import React, {Component} from 'react';
import {Button, Item, Input, Icon, Text, Form,  Container, Content} from 'native-base';
import UserService from "../services/user.service.client";
const LOG_IN = require('../Image/loginBG.jpg');

export default class Login extends Component {
    static navigationOptions = {
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.userService = UserService.instance;
    }

    login() {
        this.userService.login(this.state).then(
            () => this.props.navigation.navigate('CampaignView'),
            () => alert('Login Failed')
        )
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Content scrollEnabled={false}>
                        <ImageBackground style={styles.loginBackground} source={LOG_IN}>
                            <View style={styles.loginForeground}>
                                <Form>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type='MaterialIcons'
                                              name='email'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder='Please Enter Email'
                                               placeholderTextColor="#fff"
                                               onChangeText={text => this.setState({email: text})}/>
                                    </Item>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type="MaterialIcons"
                                              name='vpn-key'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder='Please Enter Password'
                                               placeholderTextColor="#fff"
                                               secureTextEntry={true}
                                               onChangeText={text => this.setState({password: text})}/>
                                    </Item>
                                    <Button rounded block style={{marginBottom: 10}}
                                            onPress={() => this.login()}>
                                        <Text>Login</Text>
                                    </Button>
                                </Form>
                            </View>
                        </ImageBackground>
                    </Content>
                </View>
            </Container>
        )
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
        flex: 1,
        width: null,
        height: null
    },
    loginForeground: {
        flex:1,
        marginTop: Dimensions.get('window').height/1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        bottom: 0
    }
});


