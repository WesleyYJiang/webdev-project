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

class CampaignView extends Component {
    static navigationOptions = ({navigation}) => {
        let headerTitle = (<Item>
            <Icon name="ios-search" />
            <Input  transparent placeholder="Search" />
        </Item>);

        let headerRight = (<Button transparent><Text>Search</Text></Button>);
        return { headerTitle, headerRight};
    };

    // _onSave() {
    //     // console.log('You pressed Save');
    //     if (this.props.navigation.state.params.isSaving == true) {
    //         return;
    //     }
    //     this.props.navigation.setParams({ isSaving: true });
    //     //Do some tasks for about 3 seconds
    //     setInterval(() => {
    //         console.log('I finished some tasks in 3 seconds');
    //         this.props.navigation.setParams({ isSaving: false });
    //     }, 3000);
    // }
    // componentDidMount() {
    //     this.props.navigation.setParams({ onSave: this._onSave.bind(this), isSaving: false });
    // }
    // constructor(props) {
    //     super(props);
    //     this.campaignService = CampaignService.instance;
    //     this.campaignService.findAllCampaigns()
    //         .then(campaigns => this.setState({campaigns: campaigns}));
    //     this.state = {campaigns: []}
    // }
    //
    // render() {
    //     return (
    //         <View style={{padding: 15}}>
    //             {this.state.courses.map((course, index) => (
    //                 <ListItem
    //                     onPress={() => this.props.
    //                     navigation.navigate("ModuleList",
    //                         {courseId: course.id})}
    //                     title={course.title}
    //                     key={index}/>
    //             ))}
    //         </View>
    //     );
    // }

    constructor(props) {
        super(props);
        this.campaignService = CampaignService.instance;
        this.state = {
            campaigns: []
        }
    }

    componentDidMount(){
        this.loadCampaigns();
    }

    // componentWillReceiveProps(newProps) {
    //     this.loadCampaigns();
    // }

    loadCampaigns() {
        this.campaignService.findAllCampaigns().then(campaigns => {
                this.setState({campaigns: campaigns})
            });
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
                <Button success block onPress={() => this.props.navigation.navigate('CampaignCreator')}>
                    <Icon name="add"/>
                    <Text>Create campaign</Text>
                </Button>
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
                                <Image source={{uri: 'https://source.unsplash.com/random'}}
                                       style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up"/>
                                        <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles"/>
                                    <Text>4 Comments</Text>
                                </Button>
                                </Body>
                                <Right>
                                    <Button block primary
                                            onPress={() =>
                                                this.props.navigation.navigate('CampaignPage', {campaign: campaign})}>
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
