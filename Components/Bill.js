import React, {Component} from 'react'
import {ScrollView, Alert} from 'react-native'
import {Text, ListItem, List} from 'react-native-elements'

class Bill extends Component {
    static navigationOptions = {title: 'Bill'};
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            bills: []
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const id = navigation.getParam("id");
        fetch('https://openstates.org/api/v1/bills/?state=dc&q='+ id + '&apikey=1621204a-000f-4383-a9dd-f1189be42fc0')
            .then(response => (response.json()))
            .then(bills => {
                this.setState({bills: bills})
            });
    }

    render() {
        return(
            <ScrollView style={{padding: 15}}>
                {this.state.bills.map((course, index) => (
                    <List>
                        <Text h1>
                            Title: {course.title}
                        </Text>
                        <Text h3>
                            State: {course.state}
                        </Text>
                        <Text h3>
                            Session: {course.state}
                        </Text>
                    </List>

                ))}
            </ScrollView>
        )
    }
}
export default Bill
