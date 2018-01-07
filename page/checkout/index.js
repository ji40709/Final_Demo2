import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Picker,
  Item,
  TextInput,
  Button,
} from 'react-native';

import {Router,Stack,Scene,Actions} from 'react-native-router-flux';

import firebase from 'react-native-firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhs2knntClbJYgLmd8Y3uq_oOiWfR8WQI",
  authDomain: "fireb-c693f.firebaseapp.com",
  databaseURL: "https://fireb-c693f.firebaseio.com",
  storageBucket: "fireb-c693f.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    backgroundColor: '#eee',
  },
  content_title_text:{
        fontSize:20,
        color:'black',
        paddingLeft:3,
        paddingTop:40,
  },
  content_comment:{
    backgroundColor:'gray'
  },
  item:{
    paddingTop:4,
    backgroundColor:'#D3D3D3',
    flex:0.3,
  },
  picker:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    color:'#444444',
  },
  button:{
      borderWidth:1,
      borderRadius:40,
      borderColor:'green',
    }
});

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    data=['1','2','3','4'];
    this.state={
    selected:"1"
    }
  }
  renderItem(){
    items=[];
    for(let item of data){
        items.push(<Picker.Item key={item} label={item} value={item}/>)
    }
    return items;
  }

  render() {
    return (

    <View style={{flex:1}}>
            <View style={{backgroundColor:"white",flex:0.6}}>

             </View>
        <View style={{backgroundColor:"white",flex:0.2,paddingLeft:200}}>
            <Text style={styles.content_title_text}>總額：</Text>
         </View>
        <View style={{backgroundColor:"white",flex:0.15,paddingRight:40,paddingLeft:40,paddingTop:50}}>
            <Button
                onPress={ () =>{ Actions.home() } }
                title="確認送出"
                color='#FFCC22'
                style={styles.button}
             />

        </View>
        <View style={{backgroundColor:"white",flex:0.15,paddingRight:40,paddingLeft:40,paddingTop:10}}>
            <Button
                onPress={ () =>{ Actions.menu() } }
                title="返回選單"
                color='#FF7744'
                style={styles.button}
            />
        </View>
    </View>


    );
  }
}