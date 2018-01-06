import React from 'react';
import {
    StyleSheet,
    Platform,
    Image,
    Text,
    View,
    ListView,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    AppRegistry,
} from 'react-native';

import Home from './page/home';
import Pickertext from './page/pickertext';
import Menu from './page/menu';
import Listitem from './page/listitem';
import Itembtn from './page/itembtn';
import Checkout from './page/checkout';

import {Router,Stack,Scene} from 'react-native-router-flux';

import firebase from 'react-native-firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhs2knntClbJYgLmd8Y3uq_oOiWfR8WQI",
  authDomain: "fireb-c693f.firebaseapp.com",
  databaseURL: "https://fireb-c693f.firebaseio.com",
  storageBucket: "fireb-c693f.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  render() {
    return (
      <Router>
              <Stack key="root">
                <Scene key="home" component={Home} hideNavBar={true}/>
                <Scene key="pickertext" component={Pickertext} title="點餐"/>
                <Scene key="menu" component={Menu} title="選擇菜色"/>
                <Scene key="listitem" component={Listitem} title="123"/>
                <Scene key="itembtn" component={Itembtn} title="細項"/>
                <Scene key="checkout" component={Checkout} title="結帳"/>

              </Stack>
            </Router>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Restaurant', () => Restaurant);