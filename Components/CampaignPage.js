
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
                _id: '',
                picture: ''
            },
            leader: ''
        };
        this.userService = UserService.instance;
        this.campaignService = CampaignService.instance;
    }

    componentDidMount(){
        const {navigation} = this.props;
        const campaign = navigation.getParam("campaign");
        this.setState({campaign: campaign});
        this.loadLeader(campaign.owner);
    }

    loadLeader(id) {
        let fullName = '';
        this.userService.findUserById(id)
            .then(owner => {
                fullName = owner.firstName + ' ' + owner.lastName;
                this.setState({leader: fullName})
            });
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
                        <CardItem>
                            <Body>
                            <Image source={{uri: this.state.campaign.picture}} style={{height: 200, width: 200, flex: 1}}/>
                            <Text>
                                {this.state.campaign.description}
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon type= 'MaterialIcons' name="group" />
                                    <Text>1,926</Text>
                                </Button>
                            </Left>

                            <Right>
                                <Button rounded primary
                                        onPress={() => this.campaignService.userJoinsCampaign(this.state.campaign._id)}>
                                    <Text>Join</Text>
                                </Button>
                            </Right>
                        </CardItem>

                    </Card>
                    <Button block primary
                            onPress={() =>
                                this.props.navigation.navigate('CampaignEditor', {campaign: this.state.campaign})}>
                        <Text>Edit Campaign</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default Profile;
