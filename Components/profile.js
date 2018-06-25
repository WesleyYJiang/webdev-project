
import { View, StyleSheet, Alert} from 'react-native'
import React, {Component} from 'react';
import { Avatar} from 'react-native-elements';
import UserService  from '../services/user.service.client'
import { Thumbnail, Container, Header, Title, Content, Button, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";

class Profile extends Component {
    static navigationOptions = null;
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
            reputation: ''

        };
        this.userService = UserService.instance;
        this.loadProfile = this.loadProfile.bind(this);

    }

    componentDidMount(){
        this.loadProfile();
    }

    componentWillReceiveProps(newProps) {
        this.loadProfile();
    }

    loadProfile() {
        this.userService.profile()
            .then(user => this.setState({
                    email: user.email,
                    lastName: user.lastName,
                    firstName: user.firstName}),
                () => Alert.alert(
                    'Need to Log in',
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
                <Content>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'}} />
                                <Body>
                                <Text>{this.state.firstName} {this.state.lastName}</Text>
                                <Text note>Reputation: 96</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button rounded info onPress={() => this.props.navigation.navigate('EditProfile')}>
                                    <Text>Edit</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem header>
                            <Text>Bio:</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text>
                                {this.state.bio} </Text>
                            </Body>
                        </CardItem>
                        <CardItem header>
                            <Text>Email:</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text>
                                {this.state.email}
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>My Campaigns</Text>
                        </CardItem>
                    </Card>

                    <Button rounded block danger onPress={() =>
                        this.userService.logout()
                            .then(() => this.props.navigation.navigate('Login'))}>
                        <Text>Log out</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default Profile;
