import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LoginView from './Components/LoginView'
import SearchView from "./Components/SearchView";
import BillList from "./Components/BillList";
import Bill from "./Components/Bill";
import CampaignList from "./Components/CampaignList"
import CampaignCreator from "./Components/CampaignCreator"
import Registration from "./Components/Registration";
import Profile from "./Components/profile";
import TaskView from "./Components/TaskView";
import CampaignView from "./Components/CampaignView";
import Login from "./Components/Login";
import ProfileEditor from "./Components/ProfileEditor"
import { View} from 'react-native'


const CampaignStack = createStackNavigator(
    {
        CampaignView: CampaignView,
        TaskView: TaskView,
        CampaignCreator: CampaignCreator
    });

const BillStack = createStackNavigator(
    {
    SearchView: SearchView,
    BillList: BillList,
    Bill: Bill
    });

const TaskStack = createStackNavigator({
    TaskView: TaskView
});

const ProfileStack = createStackNavigator({
    Profile: Profile,
    EditProfile: {
        screen: ProfileEditor,
        navigationOptions: () => ({
            title: `Profile Editor`
        })

    }
});

const tabBar =  createBottomTabNavigator(
    {
        Campaign: CampaignStack,
        Bill: BillStack,
        Task: TaskStack,
        Profile: ProfileStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Campaign') {
                    iconName = 'group';
                } else if (routeName === 'Bill') {
                    iconName = `newspaper-o`;
                } else if (routeName === 'Task') {
                    iconName = `institution`;
                } else if (routeName === 'Profile') {
                    iconName = 'user';
                }
                return <FontAwesomeIcon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: BottomTabBar,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#3865f7',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

 const App = createStackNavigator(

     {
         Login: LoginView,
         Registration: {
             screen: Registration,
             navigationOptions: () => ({
                 title: `Sign Up`
             }),
         },
         LoginPage: Login,
         TabBar: {
             screen: tabBar,
             navigationOptions: () => ({
                 header: null,
             }),
         }

     }

     );


export default App;
