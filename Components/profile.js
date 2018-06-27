
import { View, StyleSheet, Alert} from 'react-native'
import React, {Component} from 'react';
import { Avatar} from 'react-native-elements';
import UserService  from '../services/user.service.client'
import CampaignService  from '../services/campaign.service.client'
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
            reputation: '',
            campaigns: []

        };
        this.userService = UserService.instance;
        this.campaignService = CampaignService.instance;
        this.loadProfile = this.loadProfile.bind(this);
        // this.loadCampaigns = this.loadCampaigns.bind(this);
    }

    componentDidMount(){
        this.loadProfile();
        // this.loadCampaigns();
    }

    loadCampaigns() {
        this.campaignService.findCampaignsForUser()
            .then(
                (campaigns) => this.setState({campaigns: campaigns}),
                () => alert('not enrolled'));
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
                                <Thumbnail source={{
                                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'}} />
                                <Body>
                                <Text>{this.state.firstName} {this.state.lastName}</Text>
                                <Text note>Reputation: 96</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button rounded info onPress={() => this.props.navigation.navigate('ProfileEditor')}>
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
                        <CardItem header bordered>
                            <Text>Email: {this.state.email}</Text>
                        </CardItem>
                        <CardItem header bordered>
                            <Text>Profession: {this.state.profession}</Text>
                        </CardItem>
                        <CardItem header bordered>
                            <Text>Education: {this.state.education}</Text>
                        </CardItem>
                        <CardItem header bordered>
                            <Text>State: {this.state.state}</Text>
                        </CardItem>

                        <CardItem footer bordered>
                            <Text>My Campaigns</Text>
                        </CardItem>
                    </Card>

                    {this.state.campaigns.map((campaign, index) => (
                        <Card key={index}>
                            <CardItem>
                                <Left>
                                    <Body>
                                    <Text>{campaign.name}</Text>
                                    <Text note>{campaign.description}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{uri: 'https://source.unsplash.com/user/erondu'}}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active  type= 'MaterialIcons' name="group"/>
                                        <Text>{campaign.people}</Text>
                                    </Button>
                                </Left>
                                <Right>
                                    <Button rounded primary
                                            onPress={() =>
                                                this.props.navigation.navigate('CampaignPage', {campaignId: campaign._id})}>
                                        <Text>Enter</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    ))}

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
