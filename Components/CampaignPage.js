
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
                owner: ''
            }
        };
        this.userService = UserService.instance;
        this.campaignService = CampaignService.instance;

    }

    componentDidMount(){
        const {navigation} = this.props;
        const campaign = navigation.getParam("campaign");
        this.setState({campaign: campaign});
    }

    // componentWillReceiveProps(newProps) {
    //     this.loadCampaign(newProps.campaign);
    // }

    // loadCampaign(campaign) {
    //     console.log(campaign);
    //     this.setState({campaign: campaign});
    // }



    render() {
        return (
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'Image URL'}} />
                                <Body>
                                <Text>{this.state.campaign.name}</Text>
                                <Text note>Lead by {this.state.campaign.owner}</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button rounded primary
                                        onPress={() => this.campaignService.userJoinsCampaign(this.state.campaign._id)}>
                                    <Text>Join</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={{uri: 'https://source.unsplash.com/random'}} style={{height: 200, width: 200, flex: 1}}/>
                            <Text>
                                {this.state.campaign.description}
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="group" />
                                    <Text>1,926</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default Profile;
