
import { View, StyleSheet} from 'react-native'
import React, {Component} from 'react';
import { Avatar} from 'react-native-elements';
import UserService  from '../services/user.service.client'
import { Thumbnail, Container, Header, Title, Content, Button, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";

class Profile extends Component {
    static navigationOptions = null;
    constructor(props) {
        super(props);
        this.state = {
            email: 'wesley.y.jiang@gmail.com',
            lastName: 'Wesley',
            firstName: 'Jiang'
        };
        this.userService = UserService.instance;
        // this.loadProfile = this.loadProfile.bind(this);

        this.userService.loadProfile()
            .then(user => this.setState({
                email: user.email,
                lastName: user.lastName,
                firstName: user.firstName
            }))

    }

    // componentDidMount(){
    //     this.userService.loadProfile()
    //         .then(user => this.loadProfile(user))
    // }
    //
    // loadProfile(profile) {
    //     this.setState({
    //         email: profile.email,
    //         lastName: profile.lastName,
    //         firstName: profile.firstName
    //     });
    // }
    //

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
                                <Button rounded info> <Text>Edit</Text> </Button>
                            </Right>
                        </CardItem>
                        <CardItem header>
                            <Text>Bio:</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text>
                                Passionate about campaigns and wants to change the world!</Text>
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
                </Content>
            </Container>
        );
    }
}
export default Profile;
