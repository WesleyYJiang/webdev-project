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
            role: 'REGULAR'
        };
        this.userService = UserService.instance;
    }

    updateForm(newState) {
        this.setState(newState)
    }

    checkInfo() {
        if(this.state.password === this.state.passwordVerify) {
            this.userService.createUser(
                        {
                            email: this.state.email,
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            password: this.state.password,
                            userType: this.state.role
                        }
                    ).then(() => this.props.navigation.navigate('Profile'));
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
                    <Picker.Item label="REGULAR" value="REGULAR" />
                    <Picker.Item label="POLITICIAN" value="POLITICIAN" />
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
