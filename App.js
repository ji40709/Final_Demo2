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

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {

          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              _key: child.key
            });
          });

          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });

        });
      }

  constructor(props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();

    this.itemsRef.set({
        title:'4488',
        author:'sws'
    });
    this.itemsRef.update({ author: 'kee' });

    this.state = {
      dataSource: new ListView.DataSource({
                  rowHasChanged: (row1, row2) => row1 !== row2,
                })
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }



  render() {
    return (

       <TouchableOpacity onPress={()=>{}}>
        <View style = {styles.startsetting}>
         <Text style={styles.Textsetting}>開始點餐</Text>
        </View>
       </TouchableOpacity>


    );
  }
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    height:30,
    width:50
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  startsetting: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    marginLeft: 75,
    marginRight: 75,
    height:60,
    marginTop: 350,
    backgroundColor:'#FFED97',
  },
  Textsetting: {
    color: '#BEBEBE',
    fontSize: 30,
  },
  touchsetting: {
    alignItems: 'center',
    borderRadius: 80,
    marginLeft: 75,
    marginRight: 75,
    height:60,
    marginTop: 350,
  }

});

AppRegistry.registerComponent('Restaurant', () => Restaurant);