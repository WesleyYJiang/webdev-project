
import { View, StyleSheet, Alert, Image} from 'react-native'
import React, {Component} from 'react';
import { Avatar} from 'react-native-elements';
import UserService  from '../services/user.service.client'
import CampaignService  from '../services/campaign.service.client'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Profile extends Component {
    static navigationOptions = null;
    constructor(props) {
        super(props);
        this.state = {
            campaign: {
                name: '',
                description: '',
                owner: '',
                picture: '',
                people: ''
            },
            leader: '',
            campaignId: '',
            userId: '',
            joined: false
        };
        this.userService = UserService.instance;
        this.campaignService = CampaignService.instance;
        this.setCampaign = this.setCampaign.bind(this);
    }

    componentDidMount(){
        const {navigation} = this.props;
        const campaignId = navigation.getParam("campaignId");
        this.setCampaign(campaignId);
        this.loadProfile();
        this.hasJoined();
    }

    componentWillReceiveProps(newProps) {
        this.setCampaign(newProps.campaignId);
        this.loadProfile();
        this.hasJoined();
    }

    setCampaign(campaignId) {
        this.setState({campaignId: campaignId});

        this.campaignService
            .findCampaignById(campaignId)
            .then((campaign) => {
                this.setState({campaign: campaign});
                this.loadLeader(campaign.owner);
            });
    }

    loadLeader(id) {
        let fullName = '';
        this.userService.findUserById(id)
            .then(owner => {
                fullName = owner.firstName + ' ' + owner.lastName;
                this.setState({leader: fullName})
            });
    }

    loadProfile() {
        this.userService.profile()
            .then(user => {
                this.setState({userId: user._id});
            })
    }

    hasJoined() {
        this.campaignService.hasUserJoined(this.state.campaignId)
            .then(() => this.setState({joined: true}),
                () => this.setState({joined: false}) )
    }


    render() {
        return (
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Body>
                                <Text>{this.state.campaign.name}</Text>
                                <Text note>Lead by {this.state.leader}</Text>
                                </Body>
                            </Left>

                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://source.unsplash.com/user/erondu'}}
                                   style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {this.state.campaign.description}
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon type= 'MaterialIcons' name="group" />
                                    <Text>{this.state.campaign.people}</Text>
                                </Button>
                            </Left>

                            { (!this.state.joined) &&
                            <Right>
                                <Button rounded primary
                                        onPress={() => this.campaignService.userJoinsCampaign(this.state.campaignId)}>
                                    <Text>Join</Text>
                                </Button>
                            </Right>}
                        </CardItem>

                    </Card>
                    { (this.state.userId === this.state.campaign.owner) &&
                        <Button block primary
                                onPress={() => this.props.navigation.navigate(
                                    'CampaignEditor',
                                    {campaignId: this.state.campaignId}
                                )}>

                            <Text>Edit Campaign</Text>
                        </Button>
                    }
                </Content>
            </Container>
        );
    }
}
export default Profile;
