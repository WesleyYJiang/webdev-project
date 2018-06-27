import React, {Component} from 'react'
import {ScrollView, View, Alert, Image} from 'react-native'
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Segment,
    Item,
    Input
} from 'native-base';
import CampaignService from "../services/campaign.service.client";
import UserService from "../services/user.service.client";

class CampaignView extends Component {
    static navigationOptions = ({navigation}) => {
        let headerTitle = (<Item>
            <Icon name="ios-search" />
            <Input  transparent placeholder="Search" />
        </Item>);

        let headerRight = (<Button transparent><Text>Search</Text></Button>);
        return { headerTitle, headerRight};
    };

    constructor(props) {
        super(props);
        this.campaignService = CampaignService.instance;
        this.userService = UserService.instance;
        this.state = {
            campaigns: [],
            regular: true
        }

    }

    componentDidMount(){
        this.loadCampaigns();
        this.loadProfile();
    }

    componentWillReceiveProps(newProps) {
        this.loadCampaigns();
        this.loadProfile();
    }

    loadCampaigns() {
        this.campaignService.findAllCampaigns().then(campaigns => {
                this.setState({campaigns: campaigns})
            });
    }

    loadProfile() {
        this.userService.profile()
            .then(user => {
                if (user.userType !== 'REGULAR') {
                    this.setState({regular: false})
                }},
                () => this.setState({regular: true}))
    }

    render() {
        return (
            <Container>
                <Segment>
                    <Button first>
                        <Text>Mine</Text>
                    </Button>
                    <Button last active>
                        <Text>All</Text>
                    </Button>
                </Segment>
                { (!this.state.regular) &&
                <Button success block onPress={() => this.props.navigation.navigate('CampaignCreator')}>
                    <Icon name="add"/>
                    <Text>Create campaign</Text>
                </Button>}
                <Content>
                    {this.state.campaigns.map((campaign, index) => (
                        <Card key={index}>
                            <CardItem>
                                <Left>
                                    {/*<Thumbnail source={{uri: 'Image URL'}} />*/}
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


                </Content>

            </Container>

        )
    }
}

export default CampaignView;
