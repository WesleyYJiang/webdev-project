import React, {Component} from 'react'
import {ScrollView, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

class CampaignList extends Component {
    static navigationOptions = {title: 'campaigns'}
    constructor(props) {
        super(props);
        this.state = {
            campaigns: []
        }

        fetch("http://localhost:8080/api/module/"+moduleId+"/lesson")
            .then(response => (response.json()))
            .then(lessons => this.setState({lessons}))
    }

    render() {
        return(
            <ScrollView style={{padding: 15}}>
                {this.state.campaigns.map(
                    (lesson, index) => (
                        <ListItem
                            onPress={() => this.props.navigation
                                .navigate("WidgetList", {lessonId: lesson.id})}
                            key={index}
                            title={lesson.title}/>))}
            </ScrollView>
        )
    }
}
export default CampaignList
