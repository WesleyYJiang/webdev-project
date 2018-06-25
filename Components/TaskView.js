import { Container, Content, Header } from 'native-base'
import React, {Component} from 'react';
import TabBar from './TabBar'

class TaskView extends Component {
    static navigationOptions = null;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container >
                <Content />
            </Container>
        );
    }
}

export default TaskView;
