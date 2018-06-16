import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, Dimensions, View } from 'react-native'
import { Container, Header, Button, Item, Icon, Input, Text } from 'native-base'
import BillList from './BillList'


export default class SearchView extends React.Component {
    // static navigationOptions = {
    //     title: 'SearchView'
    // };
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            input: ''
        }
    }

    updateSearch(newState) {
        this.setState(newState)
    }

    // renderBillList() {
    //     return <BillList search={this.props.search}/>;
    // }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"
                               onChangeText={
                                   text => this.updateSearch({input: text})
                               }/>
                    </Item>
                    <Button transparent
                            onPress={() => this.props.navigation.navigate('BillList', {search: this.state.input})}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <ScrollView>
                    <Text>{this.state.input}</Text>
                    {/*<SearchBar*/}
                        {/*showLoading*/}
                        {/*lightTheme*/}
                        {/*placeholder='Search Bill'*/}
                        {/*platform='ios'*/}
                        {/*cancelButtonTitle='Cancel'*/}
                        {/*ref={search => this.search = search}/>*/}
                    {/*<Button transparent>*/}
                        {/*<Text>Search</Text>*/}
                    {/*</Button>*/}

                </ScrollView>
            </Container>

        );
    }
}
