import React, {Component} from 'react'
import {Alert, ScrollView, View} from 'react-native'
import {Text} from 'react-native-elements'
import {Button} from 'native-base'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import UserService from "../services/user.service.client";
import CampaignService from "../services/campaign.service.client";

class CampaignEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            picture: '',
            campaignId: ''
        };
        this.campaignService = CampaignService.instance;
        this.selectCampaign = this.selectCampaign.bind(this);
    }

    componentDidMount(){
        const {navigation} = this.props;
        const campaignId = navigation.getParam("campaignId");
        this.selectCampaign(campaignId);

    }
    //
    componentWillReceiveProps(newProps) {
        this.selectCampaign(newProps.campaignId);
    }
    //
    selectCampaign(campaignId) {
        this.campaignService.findCampaignById(campaignId).then((campaign) =>
            this.setState({
                name: campaign.name,
                description: campaign.description,
                picture: campaign.picture,
                campaignId: campaignId}))
    }

    update() {
        this.campaignService
            .updateCampaign(this.state.campaignId,
                {
                    name: this.state.name,
                    description: this.state.description,
                    picture: this.state.picture
                })
            .then(() => {
                alert('Update completed');
                this.props.navigation.navigate('CampaignPage', {campaignId: this.state.campaignId});
            },
                () => alert('update failed'))}


    updateForm(newState) {
        this.setState(newState)
    }

    render() {
        return(
            <ScrollView>
                <FormLabel>Campaign Name</FormLabel>
                <FormInput placeholder={this.state.name}
                           value={this.state.name}
                           onChangeText={ text => this.updateForm({name: text}) }/>

                <FormLabel>Description</FormLabel>
                <FormInput placeholder={this.state.description}
                           value={this.state.description}
                           onChangeText={ text => this.updateForm({description: text}) }/>

                <FormLabel>Cover Photo</FormLabel>
                <FormInput placeholder={this.state.picture}
                           value={this.state.picture}
                           onChangeText={ text => this.updateForm({picture: text}) }/>

                <Button primary rounded block style={{margin: 20}}
                        onPress={() => this.update()}>
                    <Text h5 style={{color: 'white'}}>Update</Text>
                </Button>

                <Button danger rounded block style={{margin: 20}}
                        onPress={() =>
                            this.campaignService.deleteCampaign(this.state.campaignId)
                                .then(this.props.navigation.navigate('CampaignView'))}>
                    <Text h5 style={{color: 'white'}}>Delete</Text>
                </Button>

            </ScrollView>
        )
    }
}
export default CampaignEditor;
