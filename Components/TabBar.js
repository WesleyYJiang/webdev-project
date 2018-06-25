import React, {Component} from 'react'
import {Footer, FooterTab, Button, Icon, Text} from 'native-base'
import CampaignView from "./CampaignView";

class TabBar extends Component {
    static navigationOptions = { };
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Footer>
                <FooterTab>

                    <Button onPress={() => this.props.navigation.navigate('CampaignView') }>
                        <Icon type='FontAwesome' name="group"/>
                        {/*<Text>Campaign</Text>*/}
                    </Button>

                    <Button vertical onPress={() => this.props.navigation.navigate('SearchView') }>
                        <Icon type='FontAwesome'  name="newspaper-o"/>
                        {/*<Text>Bill</Text>*/}
                    </Button>

                    <Button vertical onPress={() => this.props.navigation.navigate('TaskView') }>
                        <Icon type='FontAwesome' name="institution"/>
                        {/*<Text>Action</Text>*/}
                    </Button>

                    <Button vertical  onPress={() => this.props.navigation.navigate('Profile') }>
                        <Icon type='FontAwesome' name="user"/>
                        {/*<Text>Profile</Text>*/}
                    </Button>

                </FooterTab>
            </Footer>
        )
    }
}
export default TabBar
