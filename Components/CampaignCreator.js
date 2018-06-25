import React, {Component} from 'react'
import {Alert, ScrollView, View} from 'react-native'
import {Text} from 'react-native-elements'
import {Button} from 'native-base'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import UserService from "../services/user.service.client";
import CampaignService from "../services/campaign.service.client";

class campaignCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Title',
            description: 'Description',
            category: '',
            owner: 'owner',
            picture: 'https://source.unsplash.com/random/800x600'
        };
        this.campaignService = CampaignService.instance;
        this.userService = UserService.instance;

    }

    componentDidMount(){
        this.loadProfile();
    }

    componentWillReceiveProps(newProps) {
        this.loadProfile();
    }

    loadProfile() {
        this.userService.profile()
            .then(user => this.setState({
                    owner: user._id}),
                () => Alert.alert(
                    'Need to Log in',
                    'Please log in or register an account for more features',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
                    ],
                    { cancelable: false }
                ))
    }

    updateForm(newState) {
        this.setState(newState);
    }

    createCampaign() {
        this.campaignService.createCampaign(this.state)
            .then(() => alert('nice'))
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

                <FormLabel>Cover Photo</FormLabel>
                <FormInput onChangeText={ text => this.updateForm({picture: text}) }/>

                <Button Success rounded block style={{margin: 20}}
                        onPress={() => this.createCampaign()}>
                    <Text h5 style={{color: 'white'}}>Create</Text>
                </Button>


            </ScrollView>
        )
    }
}
export default campaignCreator;
