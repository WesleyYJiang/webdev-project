import React, {Component} from 'react'
import {ScrollView, View, Picker} from 'react-native'
import {Text, CheckBox} from 'react-native-elements'
import {Button} from 'native-base'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import UserService  from '../services/user.service.client'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordVerify: '',
            role: 'regular'
        };
        this.userService = UserService.instance;
    }

    updateForm(newState) {
        this.setState(newState)
    }

    checkInfo() {
        if(this.state.password === this.state.passwordVerify) {
            this.userService.createUser(this.state)
                .then(() => this.props.navigation.navigate('Profile'),
                    () => alert('Username Taken!'));
        } else {
            alert('Passwords do not Match!')
        }
    }

    render() {
        return(
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={text => this.updateForm({email: text})}/>
                <FormValidationMessage>Email will be used for log in</FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry={true} onChangeText={text => this.updateForm({password: text})}/>

                <FormLabel>Verify Password</FormLabel>
                <FormInput secureTextEntry={true} onChangeText={text => this.updateForm({passwordVerify: text})}/>

                <FormLabel>First Name</FormLabel>
                <FormInput onChangeText={text => this.updateForm({firstName: text})}/>


                <FormLabel>Last Name</FormLabel>
                <FormInput onChangeText={text => this.updateForm({lastName: text})}/>

                <Picker
                    mode="dropdown"
                    selectedValue={this.state.role}
                    onValueChange={(itemValue) => this.setState({role: itemValue})}>
                    <Picker.Item label="Activist" value="Activist" />
                    <Picker.Item label="Politician" value="Politician" />
                </Picker>

                <Button Success rounded block style={{margin: 20}}
                        onPress={() => this.checkInfo()}>
                    <Text h5 style={{color: 'white'}}>Sign Up</Text>
                </Button>


            </View>
        )
    }
}

export default Registration;
