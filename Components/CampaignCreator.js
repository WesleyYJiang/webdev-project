import React, {Component} from 'react'
import {ScrollView, View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import UserService from "../services/user.service.client";
import CampaignService from "../services/campaign.service.client";

class campaignCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Title',
            description: 'Description'
        };
        this.campaignService = CampaignService.instance;

    }
    updateForm(newState) {
        this.setState(newState);
    }


    render() {
        return(
            <ScrollView>
                <Text h3> Start your Campaign.. </Text>

                <FormLabel>Campaign Name</FormLabel>
                <FormInput onChangeText={ text => this.updateForm({name: text}) }/>
                <FormValidationMessage> Title is required </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={ text => this.updateForm({description: text}) }/>
                <FormValidationMessage> What is your campaign about? </FormValidationMessage>

                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button	backgroundColor="#FF0000" color="white" title="Cancel"
                                   onPress={() => {
                                       this.campaignService.createCampaign(this.state).then(() => alert('nice'))
                                   }
                                   } />
                        <Button	backgroundColor="#1E90FF" color="white" title="Submit"/>
                    </View>
                </View>

                <View style={{padding: 15}}>
                    <Text h3>Preview</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text h4>{this.state.title}</Text>
                        <View style={{position: 'absolute', right: 0}}>
                            <Text h4>{this.state.points}</Text>
                        </View>
                    </View>
                    <Text style={{paddingVertical: 15}}>{this.state.description}</Text>
                    <FormLabel>Answer</FormLabel>
                    <FormInput/>
                </View>

            </ScrollView>
        )
    }
}
export default campaignCreator;
