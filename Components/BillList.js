import React, {Component} from 'react'
import {ScrollView, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

class BillList extends Component {
    static navigationOptions = {title: 'BillList'};
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            bills: []
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const search = navigation.getParam("search");
        fetch('https://openstates.org/api/v1/bills/?state=dc&q='+ search + '&apikey=1621204a-000f-4383-a9dd-f1189be42fc0')
            .then(response => (response.json()))
            .then(bills => {
                this.setState({bills: bills})
            });
    }

    render() {
        return(
            <ScrollView style={{padding: 15}}>
                {this.state.bills.map((bill, index) => (
                    <ListItem
                        onPress={() => this.props.
                        navigation.navigate("Bill", {id: bill['bill_id']})}
                        title={bill.title}
                        key={index}/>
                ))}
            </ScrollView>
        )
    }
}
export default BillList
