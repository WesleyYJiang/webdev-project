import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, Dimensions, View } from 'react-native'
import { Container, Header, Button, Item, Icon, Input, Text } from 'native-base'
import BillList from './BillList'


export default class SearchView extends React.Component {
    static navigationOptions = null;
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            input: '',
            state: '',
            chamber: '',
            q: '',
            subject: '',
            type: ''

        }
    }

    updateSearch(newState) {
        this.setState(newState)
    }


    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"
                               onChangeText={text => this.updateSearch({input: text})}/>
                    </Item>
                    <Button transparent
                            onPress={() => this.props.navigation.navigate('BillList', {search: this.state.input})}>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Container>

        );
    }
}
