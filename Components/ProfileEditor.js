import { StyleSheet, View, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import React, {Component} from 'react';
import {Button, Item, Input, Icon, Text, Form,  Container, Content, Textarea, Label} from 'native-base';
import UserService from "../services/user.service.client";
const LOG_IN = require('../Image/loginBG.jpg');

class ProfileEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            lastName: '',
            firstName: '',
            bio: '',
            profession: '',
            education: '',
            state: '',
            reputation: '',
            password: ''
        };
        this.userService = UserService.instance;
        // this.loadProfile = this.loadProfile.bind(this);

        this.userService.profile()
            .then(user => this.setState({
                    email: user.email,
                    lastName: user.lastName,
                    firstName: user.firstName,
                    password: user.password}),
                () => Alert.alert(
                    'Neet to Log in!',
                    'Please log in or register an account for more features',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
                    ],
                    { cancelable: false }
                ))

    }

    render() {
        return (
            <Container>
                <ScrollView style={styles.container}>
                    <Content scrollEnabled={true}>
                        <ImageBackground style={styles.loginBackground} source={LOG_IN}>
                            <View >
                                <Form>
                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>Email</Label>
                                    <Item disabled style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type='MaterialIcons'
                                              name='email'/>
                                        <Input disabled style={{color: "#fff"}}
                                               placeholder={this.state.email}
                                               placeholderTextColor="#fff"/>
                                    </Item>
                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>First Name</Label>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type="Zocial"
                                              name='persona'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder={this.state.firstName}
                                               placeholderTextColor="#fff"
                                               secureTextEntry={false}
                                               onChangeText={text => this.setState({firstName: text})}/>
                                    </Item>

                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>Last Name</Label>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type="Zocial"
                                              name='persona'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder={this.state.lastName}
                                               placeholderTextColor="#fff"
                                               secureTextEntry={false}
                                               onChangeText={text => this.setState({lastName: text})}/>
                                    </Item>

                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>Profession</Label>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type="MaterialIcons"
                                              name='work'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder={this.state.profession}
                                               placeholderTextColor="#fff"
                                               secureTextEntry={false}
                                               onChangeText={text => this.setState({profession: text})}/>
                                    </Item>

                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>Education</Label>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type="MaterialIcons"
                                              name='school'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder={this.state.education}
                                               placeholderTextColor="#fff"
                                               secureTextEntry={false}
                                               onChangeText={text => this.setState({education: text})}/>
                                    </Item>

                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>State</Label>
                                    <Item style={{marginBottom: 10}} rounded>
                                        <Icon style={{color: "#fff"}}
                                              type="Entypo"
                                              name='location'/>
                                        <Input style={{color: "#fff"}}
                                               placeholder={this.state.state}
                                               placeholderTextColor="#fff"
                                               secureTextEntry={false}
                                               onChangeText={text => this.setState({state: text})}/>
                                    </Item>

                                    <Label style={{color: "#fff", margin: 10, marginHorizontal: 10}}>Bio</Label>

                                    <Item style={{marginBottom: 10}} rounded>
                                        <Form>
                                            <Textarea rowSpan={3}
                                                      placeholder={this.state.bio}
                                                      onChangeText={text => this.setState({bio: text})}/>
                                        </Form>
                                    </Item>


                                    <Button rounded block style={{marginBottom: 10}}
                                            onPress={() => this.userService.updateUser(this.state)
                                                .then(() => {
                                                    alert(' Update Completed! ');
                                                    const email = this.state.email;
                                                    const pass = this.state.password;
                                                    this.userService.logout();
                                                    this.userService.login(
                                                        {
                                                            email: email,
                                                            password: pass
                                                        }).then(() => this.props.navigation.navigate('Profile'))
                                                },
                                                () => alert('something went wrong!'))
                                            }>
                                        <Text>Update</Text>
                                    </Button>
                                </Form>
                            </View>
                        </ImageBackground>
                    </Content>
                </ScrollView>
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
        flex: 0,
        width: null,
        height: null
    },
});
export default ProfileEditor;
