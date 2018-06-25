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
            name: 'Title',
            description: 'Description',
            owner: 'owner',
            picture: 'https://source.unsplash.com/random/800x600',
            _id: ''
        };
        this.campaignService = CampaignService.instance;
    }

    componentDidMount(){
        const {navigation} = this.props;
        const campaign = navigation.getParam("campaign");
        this.setState({campaign: campaign});
    }

    updateCampaign() {
        this.campaignService.updateCampaign(this.state)
            .then(() => alert('Update Completed!'))
    }


    render() {
        return(
            <ScrollView>
                <FormLabel>Campaign Name</FormLabel>
                <FormInput placeholder={this.state.campaign.name}
                           onChangeText={ text => this.updateForm({name: text}) }/>

                <FormLabel>Description</FormLabel>
                <FormInput placeholder={this.state.campaign.description}
                           onChangeText={ text => this.updateForm({description: text}) }/>

                <FormLabel>Cover Photo</FormLabel>
                <FormInput placeholder={this.state.campaign.photo}
                           onChangeText={ text => this.updateForm({photo: text}) }/>

                <Button Success rounded block style={{margin: 20}}
                        onPress={() => this.updateCampaign()}>
                    <Text h5 style={{color: 'white'}}>Update</Text>
                </Button>

            </ScrollView>
        )
    }
}
export default CampaignEditor;
