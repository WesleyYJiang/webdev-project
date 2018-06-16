import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginView from './Components/LoginView'
import SearchView from "./Components/SearchView";
import BillList from "./Components/BillList";
import Bill from "./Components/Bill";

const App = createStackNavigator({
    LoginView,
    SearchView,
    BillList,
    Bill
});


export default App;
